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
import '../../../models/petVaccination.dart';
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
  State<StatefulWidget> createState() => _AddVaccinationFormState(petID);
}
class _AddVaccinationFormState extends State<AddReminderForm>{
  late DateTime? _dateTime = null;
  late TimeOfDay? _time= null;
  String initialCat = '';
  String NextVacDate = ' ';
  bool isManualDate = false;
  bool isRemindersOn = true;
  final url = '10.0.2.2:3001';
  final getvaccinesRoute = '/mod/getvaccines';
  final addVacRoute = '/user/addvaccine';
  final addEntryRoute = '/user/adddiaryentry';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List vaccines = [];
  String _SelectedVac = '';
  String _SelectedVacID = '';
  DateTime? nextDate = new DateTime(1);
  var Catagories = [];
  PetVaccination petVaccination = new PetVaccination('', '', 'note', 'nextVacDate');
  String petID = '';
  _AddVaccinationFormState(String petID) {
    this.petID = petID;
    print("petID");
    print(petID);
  }
  Future addDiaryEntry() async {

    PetDiary petDiary = new PetDiary(int.parse(petID), petVaccination.note, "Vaccination added for "  + _SelectedVac );
    var res = await http.post(Uri.http(url, addEntryRoute),
        headers: headers,
        body: json.encode(
            petDiary
        ),
        encoding: encoding
    );
    print(json.decode(res.body));

  }

  Future addPetVaccine() async {


    petVaccination.vacID = _SelectedVacID;



    String nextDatestr = nextDate.toString();
    final splitted = nextDatestr.split(' ');
    print(splitted[0]);
    petVaccination.nextVacDate = splitted[0];
    petVaccination.petID = petID;
    print(petVaccination.petID);
    print(petVaccination.note);
    print(petVaccination.nextVacDate);
    print(petVaccination.vacID);
    // 10.0.2.2
    var res = await http.post(Uri.http(url, addVacRoute),
        headers: headers,
        body: json.encode(
            petVaccination
        ),
        encoding: encoding
    );

    print(json.decode(res.body));
    if(json.decode(res.body)=="SUCCESS"){
      NotificationAPI.scheduleNotificationInit("Upcoming Vaccination", "vaccinacion for parvo is due today",DateTime.now().add(Duration(seconds: 15)));
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
  Future getVaccines() async {
    // 10.0.2.2
    final res = await http.get(Uri.http(url,getvaccinesRoute),
    );

    final list = json.decode(res.body) as List<dynamic>;
    setState(() {
      vaccines = list;
    });
    print(list);
    vaccines.map((item){
      Catagories.add(item['vacName'].toString());
    }).toList();
    initialCat = Catagories[0];
    print(initialCat);
    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }

  @override
  void initState() {
    super.initState();
    this.getVaccines();
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
                    petVaccination.note = value;
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
                          addPetVaccine();
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
