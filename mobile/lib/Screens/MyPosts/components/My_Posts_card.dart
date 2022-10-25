import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';


import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';
import '../../../models/forumPost.dart';

class MyPostItemCard extends StatelessWidget {
  final ForumPost forumPost;


  MyPostItemCard({ required this.forumPost});
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
                              child: Text(forumPost.postTitle,
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
                              child: forumPost.postStatus == 'approved' ? Text( 'Approved',
                                style: TextStyle(fontSize: 12,
                                    fontWeight: FontWeight.normal,
                                    color: Colors.greenAccent),
                                textAlign: TextAlign.center,
                              ):Text( 'Pending',
                                style: TextStyle(fontSize: 12,
                                    fontWeight: FontWeight.normal,
                                    color: Colors.amber),
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
                            Text(forumPost.postDate,
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
                                forumPost.postDescr,
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
                            "view comments",
                            style: TextStyle(fontSize: 10),
                          ),
                        ),
                      ),
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
                          child: Icon(
                            Icons.delete,
                            color: Colors.black,
                            size: 24.0,
                            semanticLabel: 'Text to announce in accessibility modes',
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