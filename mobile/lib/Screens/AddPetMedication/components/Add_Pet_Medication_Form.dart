import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../AddPetStep2/component/add_pet_form.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../AddPetStep2/add_pet_screen.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';
import '../../../models/pet.dart';
import '../../../models/reminder.dart';
import '../../../components/notification_API.dart';
import '../../../models/petdiary.dart';
import '../../../models/globals.dart' as globals;
import '../../../models/petMedication.dart';
import '../../PetMedications/Pet_Medication_Screen.dart';

class AddMedicationForm extends StatefulWidget {
  String petID = '';
  AddMedicationForm(String petID, {
    Key? key,
  }) : super(key: key) {
    this.petID = petID;
  }
  @override
  State<StatefulWidget> createState() => _AddMedicationFormState(petID);
}
class _AddMedicationFormState extends State<AddMedicationForm>{
  late DateTime? _dateTime = DateTime.now();

  final addMedRoute = '/user/addpetmed';
  final addEntryRoute = '/user/adddiaryentry';
  final getMedicinesRoute = '/user/getmedicines';

  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List medicines = [];
  String initialMed = '';
  String _SelectedMed = '';
  String _SelectedMedID = '';
  DateTime? startDate = DateTime.now();

  var Catagories = [];
  PetMedication petMedication = new PetMedication('petID', 'medID', 'startDate', 'timesADay', 'days');
  String petID = '';
  _AddMedicationFormState(String petID) {
    this.petID = petID;
    print("petID");
    print(petID);
  }
  Future addDiaryEntry() async {

    PetDiary petDiary = new PetDiary(int.parse(petID), 'Medicine added', 'medicine added');
    var res = await http.post(Uri.http(globals.url, addEntryRoute),
        headers: headers,
        body: json.encode(
            petDiary
        ),
        encoding: encoding
    );
    print(json.decode(res.body));

  }

  Future addPetMedication() async {
    petMedication.medID = _SelectedMedID;
    petMedication.petID = petID;
    String nextDatestr = startDate.toString();
    final splitted = nextDatestr.split(' ');
    print(splitted[0]);
    petMedication.startDate = splitted[0];


    // 10.0.2.2
    var res = await http.post(Uri.http(globals.url, addMedRoute),
        headers: headers,
        body: json.encode(
            petMedication
        ),
        encoding: encoding
    );

    print(json.decode(res.body));




    if(json.decode(res.body)=="SUCCESS"){
      // NotificationAPI.scheduleNotificationInit("Reminder", "Remember to give your pet the medicine",DateTime.now().add(Duration(days: 0,seconds: 15)));



      for(int i = 0; i< int.parse(petMedication.days);i++){
        print(i.toString() + "we in");
        if(int.parse(petMedication.timesADay)== 1 ||  int.parse(petMedication.timesADay)== 2 || int.parse(petMedication.timesADay)== 3){
          print(i.toString() + "1st time");
          NotificationAPI.scheduleNotificationInit(i,"Reminder", "Remember to give your pet the medicine",DateTime.now().add(Duration(days: i,seconds: 15)));
          print(DateTime.now().add(Duration(days: i,seconds: 15)));
        }
        if(int.parse(petMedication.timesADay)== 2){
          print(i.toString() + "2nd time");
          NotificationAPI.scheduleNotificationInit(i+5,"Reminder", "Remember to give your pet the medicine",DateTime.now().add(Duration(days: i,hours: 12,seconds: 15)));
        }else if(int.parse(petMedication.timesADay)== 3){
          print(i.toString() + "3 time3");
          NotificationAPI.scheduleNotificationInit(i+10,"Reminder", "Remember to give your pet the medicine",DateTime.now().add(Duration(days: i,hours: 8,seconds: 15)));
          NotificationAPI.scheduleNotificationInit(i+15,"Reminder", "Remember to give your pet the medicine",DateTime.now().add(Duration(days: i,hours: 16,seconds: 15)));
        }
      }
      addDiaryEntry();
      showDialog<void>(
        context: this.context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Medicine added"),
            content: const Text('Medicine detail successfully added'),
            actions: <Widget>[
              TextButton(
                style: TextButton.styleFrom(
                  textStyle: Theme.of(context).textTheme.labelLarge,
                ),
                child: const Text('okay'),
                onPressed: () {
                  Navigator.push(
                      context, new MaterialPageRoute(builder: (context) => PetMedicationScreen(petID)));
                },
              ),
            ],
          );
        },
      );
    }

  }
  Future getMedicines() async {
    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,getMedicinesRoute),
    );

    final list = json.decode(res.body) as List<dynamic>;
    setState(() {
      medicines = list;
    });
    print(list);
    medicines.map((item){
      Catagories.add(item['medName'].toString());
    }).toList();
    print("meds");
    print(medicines);
    initialMed = Catagories[0];
    print(initialMed);
    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
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
  void initState() {
    super.initState();
    getMedicines();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
        child: SingleChildScrollView(
          child:Container(
            width: MediaQuery.of(context).size.width -80,
            child: Column(
              children: [
            Column(
            children: [
            const SizedBox(height: formPadding),
            Row(
              children:  const [
                Text(
                  "Select a Medication",
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
                value: initialMed,
                hint: const Text(
                  "Select a Medication",
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
                items: medicines.map((item) {
                  return DropdownMenuItem(
                    value: item['medName'].toString(),
                    child: Text(item['medName'].toString()),
                  );
                }).toList(),
                // After selecting the desired option,it will
                // change button value to selected value
                onChanged: (newValue) {
                  setState(() {
                    initialMed = newValue.toString();
                    _SelectedMed = newValue.toString();
                    print(_SelectedMed);
                    getSelectedMedID();
                  }
                  );
                },
              ),
            ),

            const SizedBox(height: formPadding),
                Padding(
                  padding: const EdgeInsets.only(top: 0),
                  child: Container(
                      child: Row(
                        children: const [
                          Text(
                            "Times a Day",
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                        ],
                      )
                  ),
                ),
                TextFormField(
                  onChanged: (value) {
                    petMedication.timesADay = value;
                  },
                  keyboardType: TextInputType.number,
                  textInputAction: TextInputAction.next,
                  cursorColor: formBG,
                  onSaved: (email) {},
                  decoration: const InputDecoration(
                    border: UnderlineInputBorder(),
                    labelText: 'Add how many times a day the medicine is given',
                    labelStyle: TextStyle(
                      color: formHintColor,
                    ),
                    fillColor: Colors.white,
                  ),
                ),
                const SizedBox(height: formPadding),
                Padding(
                  padding: const EdgeInsets.only(top: 0),
                  child: Container(
                      child: Row(
                        children: const [
                          Text(
                            "Days",
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                        ],
                      )
                  ),
                ),
                TextFormField(
                  onChanged: (value) {
                    petMedication.days = value;
                  },
                  keyboardType: TextInputType.number,
                  textInputAction: TextInputAction.next,
                  cursorColor: formBG,
                  onSaved: (email) {},
                  decoration: const InputDecoration(
                    border: UnderlineInputBorder(),
                    labelText: 'Number of days',
                    labelStyle: TextStyle(
                      color: formHintColor,
                    ),
                    fillColor: Colors.white,
                  ),
                ),
                const SizedBox(height: formPadding),

                Visibility(
                  visible: true,
                  child: Column(
                    children:  [
                      Row(
                        children: const [
                          Text(
                            "Start Date",
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
                              _dateTime == null? "Select Date" : _dateTime.toString().split(' ')[0],
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
                                    lastDate:  DateTime(2200)
                                ).then((date){
                                  setState(() {
                                    _dateTime = date;
                                    startDate = date;
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

                Padding(
                    padding: const EdgeInsets.only(top: 20,bottom: 20),
                    child:SizedBox(
                      width: 200,
                      height: 30,
                      child:ElevatedButton(
                        onPressed: () {
                          addPetMedication();
                        },
                        child: Text(
                          "Add Medication".toUpperCase(),
                          style: TextStyle(color: Colors.black),
                        ),
                      ),
                    )
                ),

              ],

          ),
          ]
          )
            ),
          ),

        );

  }

  void getSelectedMedID() {
    medicines.map((item) {
      if (item['medName'].toString() == _SelectedMed){
        _SelectedMedID = item['medID'].toString();
        print(_SelectedMedID);
      }
    }).toList();
  }



}
