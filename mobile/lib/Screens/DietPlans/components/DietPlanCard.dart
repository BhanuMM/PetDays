import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';


import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';
import '../../../models/forumPost.dart';

class DietPlanCard extends StatelessWidget {
  String planDescr = '';
  String planName = '';
  String pcatName = '';
  String breedName = '';
  var ageTo =2;
  var agefrom = 1;


  DietPlanCard(this.planName,this.planDescr,this.pcatName,this.breedName,this.agefrom,this.ageTo);
  @override
  Widget build(BuildContext context) {

    return Container(
      width: MediaQuery.of(context).size.width-30,
      child: Padding(
        padding: EdgeInsets.only(top: 5),
        child: Card(
          child:
          ExpansionTile(
            title: Padding(
                padding: EdgeInsets.symmetric(vertical: 5),
                child: Container(

                  // decoration:  BoxDecoration(
                  //   boxShadow: [
                  //     BoxShadow(
                  //       color: Colors.grey.withOpacity(0.5),
                  //       spreadRadius:1,
                  //       blurRadius: 4,
                  //       offset: Offset(0, 6), // changes position of shadow
                  //     ),
                  //   ],
                  //   borderRadius: BorderRadius.all(Radius.circular(25.0)),
                  //   color: Colors.white,
                  //
                  // ),

                  child: Column(
                    children: [
                      Row(

                          children: [
                            Padding(
                              padding: EdgeInsets.fromLTRB(10, 0, 0, 0),
                              child: Container(
                                width: 250,
                                child: Flex(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    direction: Axis.vertical,
                                    children: [
                                      Text(planName,
                                        style: TextStyle(
                                            fontSize: 16,fontWeight: FontWeight.w600
                                        ),
                                        textAlign: TextAlign.left,
                                      ),
                                    ]
                                ),
                              ),
                            ),
                            Spacer(),
                          ]
                      ),
                      SizedBox(height: 2,),
                      Row(
                          children: [
                            Padding(
                              padding: EdgeInsets.fromLTRB(10, 0, 0, 0),
                              child: Text( pcatName,
                                style: TextStyle(fontSize: 12,
                                    fontWeight: FontWeight.normal,
                                    color: Colors.black26),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ]
                      ),
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 10),
                        child: Row(
                          children: [
                            Text( breedName,
                              style: TextStyle(
                                  fontSize: 12
                              ),
                            ),
                            Spacer(),
                            Text("Age range : " + agefrom.toString() + "-" + ageTo.toString(),
                              style: TextStyle(
                                  color: Colors.black26,
                                  fontSize: 12
                              ),
                            ),
                          ],
                        ),
                      )

                    ],
                  ),
                )
            ),
            children: [
              Column(
                children: [

                  Row(
                    children: [
                      Spacer(),
                      Container(
                          width: MediaQuery.of(context).size.width-80,
                          child: Flex(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              direction: Axis.vertical,
                              children: [
                                Text(
                                  planDescr,
                                  style: TextStyle(

                                  ),
                                  textAlign: TextAlign.justify,
                                )]
                          )
                      ),
                      Spacer(),
                    ],
                  ),


                ],
              ),
            ],
          ),

        ),
      ),
    );
  }

}