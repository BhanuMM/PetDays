import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import 'card.dart';
import '../../../models/pet.dart';
import 'package:http/http.dart' as http;


class PetDiaryContent extends StatefulWidget {
  Pet pet = new Pet('petName', 'DOB', 0, 'breedid', 'UserID', 'catID', 'profileImage');
  PetDiaryContent(this.pet);
  @override
  State<PetDiaryContent> createState() => _PetDiaryContentState(pet);
}

class _PetDiaryContentState extends State<PetDiaryContent> {
  final url = '10.0.2.2:3001';
  final getPetRoute = '/user/getentries';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List entries = [];
  Future getEntries() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(url,getPetRoute+'/'+pet.petID.toString()),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      entries = list ;
    });
    print(entries);

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  void initState() {
    super.initState();
    this.getEntries();

  }
  Pet pet = new Pet('petName', 'DOB', 0, 'breedid', 'UserID', 'catID', 'profileImage');
  _PetDiaryContentState(this.pet);
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Expanded(
        child:
                          Column(
                            children: [
                              Row(
                                children: [
                                  Spacer(
                                    flex: 8,
                                  ),
                                  Container(
                                    padding: EdgeInsets.all(15),
                                    decoration: BoxDecoration(
                                        gradient: LinearGradient(
                                          begin: Alignment.topRight,
                                          end: Alignment.bottomLeft,
                                          colors: [
                                            kPrimaryColor,
                                            kPrimaryLightColor,
                                          ],
                                        ),
                                        borderRadius: BorderRadius.circular(10)
                                    ),
                                    child:  GestureDetector(
                                      onTap: (){

                                      },
                                      child: const Text("Add a reminder", textAlign: TextAlign.center,
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 14,
                                        ),
                                      ),
                                    ),
                                  ),
                                  Spacer(),
                                ],
                              ),
                              Container(
                              height: 500,
                              child: ListView.builder(
                                  scrollDirection: Axis.vertical,
                                  padding: const EdgeInsets.all(8),
                                  itemCount: entries.length,
                                  itemBuilder: (BuildContext context, int index) {
                                    print(entries[index]);
                                    return Column(
                                      children: [Container(
                                          child:PetDiaryItemCard(Date: entries[index]['createdAt'],desc: entries[index]['Descr'],title: entries[index]['entryTitle'])
                                      ),
                                        SizedBox(
                                          height: 10,
                                        )
                                      ],
                                    );
                                  }
                              ),
                            ),
                            ]
                          ),

      ),
    );
  }
}
