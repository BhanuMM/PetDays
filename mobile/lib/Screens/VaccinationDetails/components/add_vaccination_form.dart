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
import '../../../models/globals.dart' as globals;
import '../../ViewVaccination/View_Vaccinations_Screen.dart';

class AddVaccinationtForm extends StatefulWidget {
  String petID = '';
  AddVaccinationtForm(String petID, {
    Key? key,
  }) : super(key: key) {
    this.petID = petID;
  }
  @override
  State<StatefulWidget> createState() => _AddVaccinationFormState(petID);
}
class _AddVaccinationFormState extends State<AddVaccinationtForm>{
  late DateTime? _dateTime = null;
  String initialCat = '';
  String NextVacDate = '';
  bool isManualDate = false;
  bool isRemindersOn = true;

  final getvaccinesRoute = '/mod/getvaccines';
  final addVacRoute = '/user/addvaccine';
  final addEntryRoute = '/user/adddiaryentry';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List vaccines = [];
  String _SelectedVac = '';
  String _SelectedVacID = '';
  String predNextVac = '';
  DateTime nextDate = new DateTime(1);
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
    var res = await http.post(Uri.http(globals.url, addEntryRoute),
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


    if(!isManualDate ){
      petVaccination.nextVacDate = predNextVac;
    }else {
      String nextDatestr = nextDate.toString();
      final splitted = nextDatestr.split(' ');
      print(splitted[0]);
      petVaccination.nextVacDate = splitted[0];
    }
    petVaccination.petID = petID;
    print(petVaccination.petID);
    print(petVaccination.note);
    print(petVaccination.nextVacDate);
    print(petVaccination.vacID);
    // 10.0.2.2
    var res = await http.post(Uri.http(globals.url, addVacRoute),
        headers: headers,
        body: json.encode(
            petVaccination
        ),
        encoding: encoding
    );

    print(json.decode(res.body));
    if(json.decode(res.body)=="SUCCESS"){
      NotificationAPI.scheduleNotificationInit(0,"Upcoming Vaccination", "vaccinacion for parvo is due today",nextDate);
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
                      context, new MaterialPageRoute(builder: (context) => ViewVaccinationsScreen(petID)));
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
    final res = await http.get(Uri.http(globals.url,getvaccinesRoute),
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
                          items: vaccines.map((item) {
                            return DropdownMenuItem(
                              value: item['vacName'].toString(),
                              child: Text(item['vacName'].toString()),
                            );
                          }).toList(),
                          // After selecting the desired option,it will
                          // change button value to selected value
                          onChanged: (newValue) {
                            NextVacDate = '';
                            setState(() {
                              initialCat = newValue.toString();
                              _SelectedVac = newValue.toString();
                              print(_SelectedVac);
                              getSelectedVacID();
                            }
                            );
                          },
                        ),
                      ),

                      Text("next vaccination date : " + predNextVac)
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
                                      firstDate: DateTime.now(),
                                      lastDate:  DateTime(2200)
                                  ).then((date){
                                    setState(() {
                                      _dateTime = date;
                                      nextDate = DateTime.parse(date.toString());
                                      print(nextDate);
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
                          addPetVaccine();
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

  void getSelectedVacID() {
    vaccines.map((item) {
      if (item['vacName'].toString() == _SelectedVac){
        _SelectedVacID = item['vacID'].toString();
        DateTime now = new DateTime.now();
        int duration = item['vacNextIter'];
        DateTime next = now.add( Duration(days: duration));
        predNextVac = next.toString().split(' ')[0];
        print(_SelectedVacID);
        print(predNextVac);
      }
    }).toList();
  }



}
