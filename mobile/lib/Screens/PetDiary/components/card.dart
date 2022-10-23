import 'package:flutter/material.dart';
import 'package:mobile/Screens/PetDashboard/Pet_Dashboard_Screen.dart';

import '../../../models/pet.dart';
import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';

class PetDiaryItemCard extends StatefulWidget {
  final String title;
  final String Date;
  final String desc;
  PetDiaryItemCard({ required this.title, required this.Date, required this.desc});

  @override
  State<PetDiaryItemCard> createState() => _PetDiaryItemCardState();
}

class _PetDiaryItemCardState extends State<PetDiaryItemCard> {
  List months =
  ['jan', 'feb', 'mar', 'apr', 'may','jun','jul','aug','sep','oct','nov','dec'];
  String fullDay = '';
  String month = '';
  String year = '';
  String day = '';
  void initState() {
    super.initState();
    fullDay = widget.Date.split('T')[0];
    year = fullDay.split('-')[0];
    month = months[int.parse(fullDay.split('-')[1])-1];
    day = fullDay.split('-')[2];
  }
  @override
  Widget build(BuildContext context) {
    return
          Row(
              children: [
                Spacer(),
                Container(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.centerRight,
                      end: Alignment.centerLeft,
                      colors: [
                        kPrimaryColor,
                        kPrimaryLightColor,
                      ],
                    ),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  width: 350,
                  height: 60,
                  child: Row(
                    children: [
                      Container(

                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(12),
                              bottomLeft: Radius.circular(12)
                          ),
                        ),
                        width: 50,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(day,
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            Text(month)
                          ],
                        ),
                      ),
                      Spacer(),
                      Column(
                        children: [
                          SizedBox(
                            height: 5,
                          ),
                          Text(widget.title,
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          Text(widget.desc,
                            style: TextStyle(
                                fontSize: 12
                            ),
                          )
                        ],
                      ),
                      Spacer(),
                    ],
                  ),
                ),
                Spacer(),
              ]
          );

  }
}