import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';
import 'package:http/http.dart' as http;

import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';
import '../../../models/forumPost.dart';
import '../../../models/globals.dart' as globals;
import '../../PetTalkHome/Pet_Talk_Home_Screen.dart';
class MyPostItemCard extends StatefulWidget {
  final ForumPost forumPost;


  MyPostItemCard({ required this.forumPost});

  @override
  State<MyPostItemCard> createState() => _MyPostItemCardState();
}

class _MyPostItemCardState extends State<MyPostItemCard> {
  final getPetReminderRoute = '/user/getpetreminders';
  final deletePostRoute = '/user/deletepost';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  int stateCounter = 0;
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
                                width: MediaQuery.of(context).size.width-120,
                                child: Expanded(
                                  child: Text(widget.forumPost.postTitle,
                                    style: TextStyle(fontSize: 16,fontWeight: FontWeight.w600),
                                  ),
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
                              child: widget.forumPost.postStatus == 'approved' ? Text( 'Approved',
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
                            Text(widget.forumPost.postDate,
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
                                widget.forumPost.postDescr,
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
                            showDeleteConfirm(widget.forumPost.postId.toString());
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
  Future  deletePost(vac) async {
// 10.0.2.2

    final res = await http.delete(Uri.http(globals.url,deletePostRoute+'/'+vac.toString()),
    );
    Navigator.pop(context);
    Navigator.push(
        context, new MaterialPageRoute(builder: (context) => PetTalkHome()));

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
          content: const Text('Are you sure you want to delete the post?'),
          actions: <Widget>[
            TextButton(
              style: TextButton.styleFrom(
                textStyle: Theme.of(context).textTheme.labelLarge,
              ),
              child: const Text('okay'),
              onPressed: () {
                deletePost(vac);
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