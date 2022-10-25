import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';

import '../../../constants.dart';
import 'package:http/http.dart' as http;
import '../../../models/globals.dart' as globals;
import '../../AddPetMedication/Add_Pet_Medication_Screen.dart';


class PetMedicationContent extends StatefulWidget {
  String petID = '';
  PetMedicationContent(this.petID,{Key? key}) : super(key: key){

  }

  @override
  State<PetMedicationContent> createState() => _PetMedicationContentState();
}

class _PetMedicationContentState extends State<PetMedicationContent> {
  final getPetMedsRoute = '/user/getpetmeds';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List medicineDetails = [];
  Future getPetReminders() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,getPetMedsRoute+'/'+ widget.petID),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      medicineDetails = list ;
    });
    print(medicineDetails);

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  @override
  Widget build(BuildContext context) {
    return


          SingleChildScrollView(

              child:Column(
                children: [

                  Column(
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
                                    return AddMedicationScreen(widget.petID);
                                  },
                                ),
                              );
                            },
                            child: Text("Add Medicines"),
                          ),
                          Spacer()
                        ],
                      ),
                      SizedBox(height: defaultPadding,),
                      Row(

                        children: [
                          Spacer(),
                          Text("click a medications to edit/Delete",style: TextStyle(color: Colors.grey),),
                          Spacer(),
                        ],
                      ),
                      SizedBox(height: defaultPadding,),
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,

                        child: Container(

                          child: DataTable(
                              columns:  <DataColumn>[
                                DataColumn(label: Text("Medication"), tooltip: "To Display name"),
                                DataColumn(label: Text("Start Date"), tooltip: "To Display Email"),
                                DataColumn(label: Text("Times a day"), tooltip: "To Display Email"),
                                DataColumn(label: Text("number of days"), tooltip: "Update data"),
                              ],
                              rows: medicineDetails.map((vac) => DataRow(
                                  cells: [
                                    DataCell(
                                        Text(vac['note'].toString())
                                    ),
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
                ],
              )
          );





  }
}
