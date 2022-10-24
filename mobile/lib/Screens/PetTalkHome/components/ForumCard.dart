import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';


import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';

class PetForumItemCard extends StatelessWidget {
  final String label;
  final String price;
  final StatelessWidget ado;

  PetForumItemCard({ required this.label, required this.ado, required this.price});
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
                                child: Text(label,
                                  style: TextStyle(fontSize: 16,fontWeight: FontWeight.w600),
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
                                child: Text( price,
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
                              Text("30 Replies",
                              style: TextStyle(
                                fontSize: 12
                              ),
                              ),
                              Spacer(),
                              Text("27/10/2022",
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
                              child: Expanded(
                                  child: Text(
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                                    style: TextStyle(

                                    ),
                                    textAlign: TextAlign.justify,
                                  )
                              )
                          ),
                          Spacer(),
                        ],
                      ),
                    Row(
                      children: [
                        Spacer(),
                        Padding(
                          padding: EdgeInsets.only(right: 10),
                          child: ElevatedButton(
                            style: ButtonStyle(
                              shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(5.0),

                                ),
                              ),
                              foregroundColor: MaterialStateProperty.all<Color>(Colors.black),
                              backgroundColor: MaterialStateProperty.all<Color>(kPrimaryColor),
                            ),
                            onPressed: () {

                            },
                            child: Text(
                              "Add a comment",
                              style: TextStyle(fontSize: 10),
                            ),
                          ),
                        ),
                      ],
                    )

                  ],
                ),
              ],
            ),

        ),
      ),
    );
  }

}