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
}
