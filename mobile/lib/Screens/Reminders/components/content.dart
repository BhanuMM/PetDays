import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/Screens/PetDashboard/Pet_Dashboard_Screen.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import '../../../models/pet.dart';
import '../../ReminderDetails/Add_Reminder_Screen.dart';
import 'package:http/http.dart' as http;
import '../../../models/globals.dart' as globals;

class ReminderContent extends StatefulWidget {
  String petId = '';
   ReminderContent(this.petId,{Key? key}) : super(key: key);

  @override
  State<ReminderContent> createState() => _ReminderContentState();
}

class _ReminderContentState extends State<ReminderContent> {

  final getPetReminderRoute = '/user/getpetreminders';
  final deletePetReminderRoute = '/user/deletepetRem';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List reminderDetails = [];

  void initState() {
    super.initState();
    this.getPetReminders();
  }
  Future getPetReminders() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,getPetReminderRoute+'/'+widget.petId),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      reminderDetails = list ;
    });
    print(reminderDetails);

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }

  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children:  <Widget>[
          SizedBox(height: defaultPadding,),
          Row(
            children: [
              Spacer(),
              ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) {
                        return AddReminderScreen(widget.petId);
                      },
                    ),
                  );
                },
                child: Text("Add Custom reminder"),
              ),
              Spacer()
            ],
          ),
          SizedBox(height: defaultPadding,),
          Row(

            children: [
              Spacer(),
              Text("click a reminder to edit/Delete",style: TextStyle(color: Colors.grey),),
              Spacer(),
            ],
          ),
          SizedBox(height: defaultPadding,),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,

            child: Container(

              child: DataTable(
                  columns:  <DataColumn>[
                    DataColumn(label: Text("Reminder"), tooltip: "To Display name"),
                    DataColumn(label: Text("Next Date"), tooltip: "To Display Email"),
                    DataColumn(label: Text("Next Time"), tooltip: "Update data"),
                    DataColumn(label: Text("options"), tooltip: "Update data"),
                  ],
                  rows: reminderDetails.map((vac) => DataRow(
                      cells: [
                        DataCell(
                            Text(vac['note'].toString())
                        ),
                        DataCell(
                            Text(vac['nextRemDate'])
                        ),
                        DataCell(
                            Text(vac['nextRemTime'])
                        ),
                        DataCell(
                            Row(
                              children: [
                                Icon(
                                  Icons.edit,
                                  color: Colors.black,
                                  size: 24.0,
                                  semanticLabel: 'Text to announce in accessibility modes',
                                ),
                                GestureDetector(
                                  child: Icon(
                                    Icons.delete,
                                    color: Colors.black,
                                    size: 24.0,
                                    semanticLabel: 'Text to announce in accessibility modes',
                                  ),
                                  onTap: (){showDeleteConfirm(vac['petRemID']);},
                                ),
                              ],
                            )
                        ),
                      ]
                  )
                  ).toList()
              ),
            ),
          )


        ],
      ),

    );

  }

  Future  deleteReminder(vac) async {
// 10.0.2.2

    final res = await http.delete(Uri.http(globals.url,deletePetReminderRoute+'/'+vac.toString()),
    );
    Navigator.pop(context);
    setState(() {
      getPetReminders();
    });

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  void showDeleteConfirm(vac){
    showDialog<void>(
      context: this.context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text("Confirm Deletion"),
          content: const Text('Are you sure you want to delete the reminder?'),
          actions: <Widget>[
            TextButton(
              style: TextButton.styleFrom(
                textStyle: Theme.of(context).textTheme.labelLarge,
              ),
              child: const Text('okay'),
              onPressed: () {
                deleteReminder(vac);
              },
            ),
            TextButton(
              style: TextButton.styleFrom(
                textStyle: Theme.of(context).textTheme.labelLarge,
              ),
              child: const Text('cancel'),
              onPressed: () {
                Navigator.pop(context);
              }
            ),
          ],
        );
      },
    );
  }

}
