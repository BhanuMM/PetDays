import 'package:flutter/material.dart';

import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../AddPetStep2/component/add_pet_form.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../AddPetStep2/add_pet_screen.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';

class AddVaccinationtForm extends StatefulWidget {
  const AddVaccinationtForm({
    Key? key,
  }) : super(key: key);
  @override
  State<StatefulWidget> createState() => _AddVaccinationFormState();
}
class _AddVaccinationFormState extends State<AddVaccinationtForm>{
  late DateTime? _dateTime = null;
  String initialCat = 'Distemper vaccine';
  String NextVacDate = ' ';
  bool isManualDate = false;
  bool isRemindersOn = true;
  var Catagories = [
    'Distemper vaccine',
    'Canine parvovirus vaccine',
  ];

  Color getColor(Set<MaterialState> states) {
    const Set<MaterialState> interactiveStates = <MaterialState>{
      MaterialState.pressed,
      MaterialState.hovered,
      MaterialState.focused,
    };
    if (states.any(interactiveStates.contains)) {
      return Colors.blue;
    }
    return Colors.red;
  }

  @override
  Widget build(BuildContext context) {
    return Form(
        child: SingleChildScrollView(
          child:Container(
            width: MediaQuery.of(context).size.width -80,
            child: Column(
              children: [
                const SizedBox(height: formPadding),

                Container(
                  child: Column(
                    children: [
                      const SizedBox(height: formPadding),
                      Row(
                        children:  const [
                          Text(
                            "Select a Vaccination",
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                        ],
                      ),
                      Container(
                        width: MediaQuery.of(context).size.width -80,
                        child: DropdownButton(

                          // // Initial Value
                          value: initialCat,
                          hint: const Text(
                            "Select a Vaccination",
                            style: TextStyle(
                                color: formHintColor
                            ),
                          ),


                          // Down Arrow Icon
                          isExpanded: true,
                          icon: const Icon(
                            Icons.keyboard_arrow_down,
                          ),

                          // Array list of items
                          items: Catagories.map((String items) {
                            return DropdownMenuItem(
                              value: items,
                              child: Text(items),
                            );
                          }).toList(),
                          // After selecting the desired option,it will
                          // change button value to selected value
                          onChanged: (String? newValue) {
                            NextVacDate = '2022/12/26';
                            setState(() {
                              initialCat = newValue!;
                            }
                            );
                          },
                        ),
                      ),

                      Text("next vaccination date :" + NextVacDate)
                    ],
                  ),
                ),
                const SizedBox(height: formPadding),
                const SizedBox(height: formPadding),
                Padding(
                  padding: const EdgeInsets.only(top: 0),
                  child: Container(
                      child: Row(
                        children: const [
                          Text(
                            "Note",
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                        ],
                      )
                  ),
                ),
                TextFormField(
                  keyboardType: TextInputType.emailAddress,
                  textInputAction: TextInputAction.next,
                  cursorColor: formBG,
                  onSaved: (email) {},
                  decoration: const InputDecoration(
                    border: UnderlineInputBorder(),
                    labelText: 'Add a custom note here',
                    labelStyle: TextStyle(
                      color: formHintColor,
                    ),
                    fillColor: Colors.white,
                  ),
                ),
                const SizedBox(height: formPadding),
                Row(
                  children: [
                  Text("Manually add next vaccination date"),
                  Spacer(),
                  Checkbox(
                  checkColor: Colors.white,
                  fillColor: MaterialStateProperty.resolveWith(getColor),
                  value: isManualDate,
                  onChanged: (bool? value) {
                    setState(() {
                      isManualDate = value!;
                    });
                    print(isManualDate);
                  },
                  )
                  ],
                ),

                Visibility(
                  visible: isManualDate,
                    child: Column(
                      children:  [
                        Row(
                          children: const [
                            Text(
                              "Next vaccination date",
                              style: TextStyle(
                                fontSize: 18,
                              ),
                            ),
                            Spacer()
                          ],
                        ),

                        Row(
                          children: [

                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: defaultPadding,horizontal: 10),
                              child: Text(
                                _dateTime == null? "Select Date" : _dateTime.toString(),
                                style:  TextStyle(
                                  color: _dateTime == null? formHintColor : Colors.black,
                                ),
                              ),
                            ),
                            const Spacer(),
                            ElevatedButton(
                                onPressed: (){
                                  showDatePicker(
                                      context: context,
                                      initialDate: DateTime.now(),
                                      firstDate: DateTime(2000),
                                      lastDate:  DateTime.now()
                                  ).then((date){
                                    setState(() {
                                      _dateTime = date;
                                    });
                                  });
                                },
                                child: Text("Select")
                            ),

                          ],
                        ),

                      ],
                    ),
                ),
                Row(
                  children: [
                    Text("Remind me on the next date"),
                    Spacer(),
                    Checkbox(
                      checkColor: Colors.white,
                      fillColor: MaterialStateProperty.resolveWith(getColor),
                      value: isRemindersOn,
                      onChanged: (bool? value) {
                        setState(() {
                          setState(() {
                            isRemindersOn = value!;
                          });
                        });

                      },
                    )
                  ],
                ),
                Padding(
                    padding: const EdgeInsets.only(top: 20,bottom: 20),
                    child:SizedBox(
                      width: 200,
                      height: 30,
                      child:ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) {
                                return PetDashboard();
                              },
                            ),
                          );
                        },
                        child: Text(
                          "ADD Vaccinaction".toUpperCase(),
                          style: TextStyle(color: Colors.black),
                        ),
                      ),
                    )
                ),
              ],

            ),
          ),

        )
    );
  }



}
