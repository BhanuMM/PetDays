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

class AddReminderForm extends StatefulWidget {
  String petID = '';
  AddReminderForm(String petID, {
    Key? key,
  }) : super(key: key) {
    this.petID = petID;
  }
  @override
  State<StatefulWidget> createState() => _AddReminderFormState(petID);
}
class _AddReminderFormState extends State<AddReminderForm>{
  late DateTime? _dateTime = null;
  late TimeOfDay? _time= null;
  final url = '10.0.2.2:3001';
  final addRemRoute = '/user/addreminder';
  final addEntryRoute = '/user/adddiaryentry';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List vaccines = [];
  String _SelectedVac = '';
  String _SelectedVacID = '';
  DateTime? nextDate = new DateTime(1);
  TimeOfDay? nextTime = new TimeOfDay(hour: 0, minute: 0);
  var Catagories = [];
  PetReminder petReminder = new PetReminder('', 'note', 'nextRemDate', 'nextRemTime');
  String petID = '';
  _AddReminderFormState(String petID) {
    this.petID = petID;
    print("petID");
    print(petID);
  }
  Future addDiaryEntry() async {

    PetDiary petDiary = new PetDiary(int.parse(petID), petReminder.note, "Vaccination added for "  + _SelectedVac );
    var res = await http.post(Uri.http(url, addEntryRoute),
        headers: headers,
        body: json.encode(
            petDiary
        ),
        encoding: encoding
    );
    print(json.decode(res.body));

  }

  Future addPetReminder() async {


    String nextDatestr = nextDate.toString();
    final splitted = nextDatestr.split(' ');
    print(splitted[0]);
    petReminder.nextRemDate = splitted[0];
    petReminder.petID = petID;
    petReminder.nextRemTime = nextTime.toString().split("(")[1].split(')')[0];
    print(petReminder.petID);
    print(petReminder.note);
    print(petReminder.nextRemDate);
    print(petReminder.nextRemTime);
    // 10.0.2.2
    var res = await http.post(Uri.http(url, addRemRoute),
        headers: headers,
        body: json.encode(
            petReminder
        ),
        encoding: encoding
    );

    print(json.decode(res.body));
    if(json.decode(res.body)=="SUCCESS"){
      NotificationAPI.scheduleNotificationInit("Reminder", petReminder.note + "for Date: " + petReminder.nextRemDate.toString(),DateTime.now().add(Duration(seconds: 15)));
      addDiaryEntry();
      showDialog<void>(
        context: this.context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Vaccine added"),
            content: const Text('Vaccine detail successfully added'),
            actions: <Widget>[
              TextButton(
                style: TextButton.styleFrom(
                  textStyle: Theme.of(context).textTheme.labelLarge,
                ),
                child: const Text('okay'),
                onPressed: () {
                  Navigator.push(
                      context, new MaterialPageRoute(builder: (context) => DashboardScreen()));
                },
              ),
            ],
          );
        },
      );
    }

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
                  onChanged: (value) {
                    petReminder.note = value;
                  },
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

                Visibility(
                  visible: true,
                  child: Column(
                    children:  [
                      Row(
                        children: const [
                          Text(
                            "Next reminder date",
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
                                    nextDate = date;
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
                Column(
                  children:  [
                    Row(
                      children: const [
                        Text(
                          "Next reminder time",
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
                            _time == null? "Select Time" : _time.toString().split("(")[1].split(')')[0],
                            style:  TextStyle(
                              color: _time == null? formHintColor : Colors.black,
                            ),
                          ),
                        ),
                        const Spacer(),
                        ElevatedButton(
                            onPressed: (){
                              showTimePicker(context: context, initialTime: TimeOfDay(hour: 7, minute: 15)).then((time){
                                setState(() {
                                  _time = time;
                                  nextTime = time;
                                });
                              });
                            },
                            child: Text("Select")
                        ),

                      ],
                    ),

                  ],
                ),
                Padding(
                    padding: const EdgeInsets.only(top: 20,bottom: 20),
                    child:SizedBox(
                      width: 200,
                      height: 30,
                      child:ElevatedButton(
                        onPressed: () {
                          addPetReminder();
                        },
                        child: Text(
                          "Add Reminder".toUpperCase(),
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

  void getSelectedVacID() {
    vaccines.map((item) {
      if (item['vacName'].toString() == _SelectedVac){
        _SelectedVacID = item['vacID'].toString();
        print(_SelectedVacID);
      }
    }).toList();
  }



}
