import 'package:flutter/material.dart';

import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../AddPetStep2/component/add_pet_form.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../AddPetStep2/add_pet_screen.dart';

class AddPetForm extends StatefulWidget {
  const AddPetForm({
    Key? key,
  }) : super(key: key);
  @override
  State<StatefulWidget> createState() => _AddPetFormState();
}
class _AddPetFormState extends State<AddPetForm>{
  late DateTime? _dateTime = null;
  String initialCat = 'Dog';
  String initialBreed = 'German shepherd';
  var Catagories = [
    'Dog',
    'Cat',
  ];
  var DogBreeds = [

    'German shepherd',
    'Labrador',
    'Dachshund',
    'Beagle',
  ];


  @override
  Widget build(BuildContext context) {
    return Form(
      child: SingleChildScrollView(
        child:Container(
        width: MediaQuery.of(context).size.width -80,
        child: Column(
        children: [
          Padding(
              padding: const EdgeInsets.only(top: 20),
            child: Container(
              child: Row(
                children: const [
                  Text(
                      "Pet Name",
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
              labelText: 'Enter your pet\'s name here',
              labelStyle: TextStyle(
                color: Color(0xFFD6D6D6),
              ),
              fillColor: Colors.white,
            ),
          ),
          const SizedBox(height: formPadding),
              Column(
                children:  [
                   Row(
                     children: const [
                       Text(
                         "DOB",
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
          const SizedBox(height: formPadding),
          Container(
            child: Column(
              children: [
                Row(
                  children: const [
                    Text(
                      "Select pet Catagory",
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
                    hint: Text(
                        "Select a pet Catagory",
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
                      setState(() {
                        initialCat = newValue!;
                      }
                      );
                    },
                  ),
                )
              ],
            ),
          ),
          const SizedBox(height: formPadding),
          Container(
            child: Column(
              children: [
                Row(
                  children: const [
                    Text(
                      "Select pet Breed",
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
                    value: initialBreed,
                    isExpanded: true,
                    hint: const Text(
                        "Select a pet breed",
                      style: TextStyle(
                          color: formHintColor
                      ),
                    ),

                    // Down Arrow Icon

                    icon: const Icon(
                      Icons.keyboard_arrow_down,
                    ),

                    // Array list of items
                    items: DogBreeds.map((String items) {
                      return DropdownMenuItem(
                        value: items,
                        child: Text(items),
                      );
                    }).toList(),
                    // After selecting the desired option,it will
                    // change button value to selected value
                    onChanged: (String? newValue) {
                      setState(() {
                        initialBreed = newValue!;
                      }
                      );
                    },
                  ),
                )
              ],
            ),
          ),
          const SizedBox(height: formPadding),
          Padding(
            padding: const EdgeInsets.only(top: 0),
            child: Container(
                child: Row(
                  children: const [
                    Text(
                      "Weight",
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
              labelText: 'Enter your pet\'s Weight here',
              labelStyle: TextStyle(
                color: formHintColor,
              ),
              fillColor: Colors.white,
            ),
          ),
        Padding(
          padding: const EdgeInsets.only(top: 20,bottom: 20),
          child:SizedBox(
            width: 100,
            height: 30,
            child:ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) {
                      return AddPetScreenStep2();
                    },
                  ),
                );
              },
              child: Text(
                "Next".toUpperCase(),
                style: TextStyle(color: Colors.black),
              ),
            ),
          )
        )
        ],

      ),
      ),

      )
    );
  }



}
