import 'package:flutter/material.dart';

import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
class AddPetFormStep2 extends StatefulWidget {
  const AddPetFormStep2({
    Key? key,
  }) : super(key: key);
  @override
  State<StatefulWidget> createState() => _AddPetFormState();
}
class _AddPetFormState extends State<AddPetFormStep2>{
  bool isRabiesSwitched = false;
  bool isParvoSwitched = false;
  bool isDistemperSwitched = false;



  @override
  Widget build(BuildContext context) {
    return Form(
      child: SingleChildScrollView(
        child:Column(
            children: [
              Padding(
              padding: EdgeInsets.symmetric(vertical: 20),
              child: Container(
                height: 180,
                width: 350,
                decoration: BoxDecoration(
                  color:  formHintColor,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.5),
                      spreadRadius:2,
                      blurRadius: 1,
                      offset: Offset(0, 2), // changes position of shadow
                    ),
                  ],
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Column(
                  children:const [
                    Spacer(),
                    Text(
                        "+",
                      style: TextStyle(
                        fontSize: 50
                      ),
                    ),
                    Spacer()
                  ]
              ),
            )
          ),
              const SizedBox(height: 30),
              const Text(
                "Update vaccination details",
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold
                ),
              ),
              Container(
                width: MediaQuery.of(context).size.width-40,
                  child: Row(
                  children: [
                    const Text(
                      "Is your dog vaccinated for Rabies?",
                      style: TextStyle(
                          fontSize: 15,
                      ),
                    ),
                    Spacer(),
                    Switch(
                      value: isRabiesSwitched,
                      onChanged: (value) {
                        setState(() {
                          isRabiesSwitched = value;
                          print(isRabiesSwitched);
                        });
                      },
                      activeTrackColor: Colors.lightGreenAccent,
                      activeColor: Colors.green,
                    ),
                  ],
                )
              ),
              Container(
                  width: MediaQuery.of(context).size.width-40,
                  child: Row(
                    children: [
                      const Text(
                        "Is your dog vaccinated for Parvo?",
                        style: TextStyle(
                          fontSize: 15,
                        ),
                      ),
                      Spacer(),
                      Switch(
                        value: isParvoSwitched,
                        onChanged: (value) {
                          setState(() {
                            isParvoSwitched = value;
                            print(isParvoSwitched);
                          });
                        },
                        activeTrackColor: Colors.lightGreenAccent,
                        activeColor: Colors.green,
                      ),
                    ],
                  )
              ),
              Container(
                  width: MediaQuery.of(context).size.width-40,
                  child: Row(
                    children: [
                      const Text(
                        "Is your dog vaccinated for Distemper?",
                        style: TextStyle(
                          fontSize: 15,
                        ),
                      ),
                      Spacer(),
                      Switch(
                        value: isDistemperSwitched,
                        onChanged: (value) {
                          setState(() {
                            isDistemperSwitched = value;
                            print(isDistemperSwitched);
                          });
                        },
                        activeTrackColor: Colors.lightGreenAccent,
                        activeColor: Colors.green,
                      ),
                    ],
                  )
              ),
              Padding(
                  padding: const EdgeInsets.only(top: 20,bottom: 20),
                  child:SizedBox(

                    height: 50,
                    child:ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        primary: kPrimaryColor,
                      ),
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) {
                              return DashboardScreen();
                            },
                          ),
                        );
                      },
                      child: Text(
                        "Complete profile".toUpperCase(),
                        style: TextStyle(color: Colors.black),
                      ),
                    ),
                  )
              ),
              Padding(
                  padding: const EdgeInsets.only(top: 5,bottom: 20),
                  child:SizedBox(
                    height: 30,
                    child:ElevatedButton(

                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) {
                              return DashboardScreen();
                            },
                          ),
                        );
                      },
                      child: Text(
                        "Skip".toUpperCase(),
                        style: TextStyle(color: Colors.black),
                      ),
                    ),
                  )
              )
          ]
      )
      )
    );
  }



}
