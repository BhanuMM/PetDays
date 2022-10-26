import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../../../models/globals.dart' as globals;

class VaccineContent extends StatefulWidget {
  String petID= '';
  VaccineContent(String petID, {Key? key}) : super(key: key) {
    this.petID = petID;
  }

  @override
  State<VaccineContent> createState() => _VaccineContentState();
}

class _VaccineContentState extends State<VaccineContent> {

    final getPetVaccineRoute = '/user/getpetvaccines';
    final headers = {'Content-Type': 'application/json'};
    final encoding = Encoding.getByName('utf-8');
    List vaccineDtails = [];

    Future getPetBreeds() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,getPetVaccineRoute+'/'+widget.petID),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      vaccineDtails = list ;
    });
    print(vaccineDtails);

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  @override
  void initState() {
    super.initState();
    this.getPetBreeds();
  }
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(

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
                          return AddVaccinationScreen(widget.petID);
                        },
                      ),
                    );
                  },
                  child: Text("Add Vaccination"),
                ),
                Spacer()
              ],
            ),
            SizedBox(height: defaultPadding,),
            Row(

              children: [
                Spacer(),
                Text("click a vaccine to edit/Delete",style: TextStyle(color: Colors.grey),),
                Spacer(),
              ],
            ),
            SizedBox(height: defaultPadding,),
            DataTable(
                columns:  <DataColumn>[
                  DataColumn(label: Text("Vaccine Name"), tooltip: "To Display name"),
                  DataColumn(label: Text("Note"), tooltip: "To Display Email"),
                  DataColumn(label: Text("Next Date"), tooltip: "Update data"),
                ],
                rows: vaccineDtails.map((vac) => DataRow(
                    cells: [
                      DataCell(
                          Text(vac['Vaccine']['vacName'].toString())
                      ),
                      DataCell(
                          Text(vac['note'])
                      ),
                      DataCell(
                          Text(vac['nextVacDate'])
                      ),
                    ]
                )
                ).toList()
            )
            // Table(
            //   defaultColumnWidth: FixedColumnWidth(120.0),
            //   defaultVerticalAlignment: TableCellVerticalAlignment.middle,
            //   border: TableBorder.all(
            //       color: Colors.black,
            //       style: BorderStyle.solid,
            //       width: 1),
            //   children:[
            //     ListView.builder(
            //         scrollDirection: Axis.horizontal,
            //         padding: const EdgeInsets.all(8),
            //         itemCount: vaccineDtails.length,
            //         itemBuilder:(BuildContext context, int index) {
            //           return TableRow(children: [
            //             Column(children:[Text('Vaccination', textAlign: TextAlign.center,style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),
            //             Column(children:[Text('Vaccined Date',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),
            //             Column(children:[Text('Next Vaccination',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),
            //
            //           ])
            //         }
            //     )
            //
            //
            //   ],
            // ),


          ],
        ),

      ),
    );

  }
}
