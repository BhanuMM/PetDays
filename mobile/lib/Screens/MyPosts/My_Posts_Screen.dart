import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/components/background.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/topbar.dart';
import '../../components/bottom_nav.dart';
import '../../../constants.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
import 'components/My_Posts_card.dart';
import '../../models/pet.dart';
import 'package:http/http.dart' as http;
import '../../models/globals.dart';
import '../../models/forumPost.dart';
import '../AddForumPost/Add_Forum_Post_Screen.dart';


class MyPostScreen extends StatefulWidget {

  MyPostScreen({Key? key}) : super(key: key);

  @override
  State<MyPostScreen> createState() => _MyPostScreenState();
}

class _MyPostScreenState extends State<MyPostScreen> {

  final getPetRoute = '/user/getpostsbyuser/';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  String filter = 'All';
  List forumPosts = [];

  Future getForumPosts() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(url,getPetRoute+uid),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      forumPosts = list ;
    });
    print('forumposts');
    print(forumPosts);

    return "Sucess";
  }

  void initState() {
    super.initState();
    this.getForumPosts();
  }

  @override
  Widget build(BuildContext context) {
    return

      Background(
        child: Scaffold(
          body:SingleChildScrollView(

              child: Column(
                children: [
                  TopBanner(label: "My Posts"),
                  Padding(
                    padding: EdgeInsets.all(10),
                    child: Container(
                      decoration: BoxDecoration(
                          color: kPrimaryColor.withOpacity(0.4),
                          borderRadius: BorderRadius.circular(10)
                      ),
                      child: TextField(
                        decoration: InputDecoration(
                            prefixIcon: Icon(Icons.search),
                            border: InputBorder.none,
                            hintText: "Search your posts"
                        ),
                      ),
                    ),
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width-30,
                    child: SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: Row(
                        children: [
                          ElevatedButton(
                            style: ButtonStyle(
                              shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),

                                ),
                              ),
                              foregroundColor: MaterialStateProperty.all<Color>(Colors.black),
                              backgroundColor: MaterialStateProperty.all<Color>(kPrimaryColor),
                            ),
                            onPressed: () {
                              setState(() { filter = "All"; });
                            },
                            child: Text(
                              "All Posts",
                              style: TextStyle(fontSize: 10),
                            ),
                          ),
                          SizedBox(width: 5,),
                          ElevatedButton(
                            style: ButtonStyle(
                              shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),

                                ),
                              ),
                              foregroundColor: MaterialStateProperty.all<Color>(Colors.black),
                              backgroundColor: MaterialStateProperty.all<Color>(kPrimaryColor),
                            ),
                            onPressed: () {
                              setState(() { filter = "Pending"; });
                            },
                            child: Text(
                              "Pending",
                              style: TextStyle(fontSize: 10),
                            ),
                          ),
                          SizedBox(width: 5,),
                          ElevatedButton(
                            style: ButtonStyle(
                              shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),

                                ),
                              ),
                              foregroundColor: MaterialStateProperty.all<Color>(Colors.black),
                              backgroundColor: MaterialStateProperty.all<Color>(kPrimaryColor),
                            ),
                            onPressed: () {
                              setState(() { filter = "Approved"; });
                            },
                            child: Text(
                              "Approved",
                              style: TextStyle(fontSize: 10),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  ListView.builder(
                      scrollDirection: Axis.vertical,
                      shrinkWrap: true,
                      physics: const ClampingScrollPhysics(),
                      padding: const EdgeInsets.all(8),
                      itemCount: forumPosts.length,
                      itemBuilder: (BuildContext context, int index) {
                        print(forumPosts[index]);
                        if(forumPosts[index]['postStatus'] == 'approved' && filter=='Approved'){
                          return Container(
                              child: MyPostItemCard(forumPost:new ForumPost.fromPost(forumPosts[index]['postId'].toString(),forumPosts[index]['postTitle'], forumPosts[index]['postDescr'], forumPosts[index]['postStatus'], forumPosts[index]['postDate'], forumPosts[index]['postTime'], forumPosts[index]['userId'].toString(), uname, forumPosts[index]['pcatID'].toString()))
                          );
                        }else if(filter == 'All'){
                          return Container(
                              child: MyPostItemCard(forumPost:new ForumPost.fromPost(forumPosts[index]['postId'].toString(),forumPosts[index]['postTitle'], forumPosts[index]['postDescr'], forumPosts[index]['postStatus'], forumPosts[index]['postDate'], forumPosts[index]['postTime'], forumPosts[index]['userId'].toString(), uname, forumPosts[index]['pcatID'].toString()))
                          );
                        }else if(forumPosts[index]['postStatus'] == 'pending' && filter=='Pending'){
                          return Container(
                              child: MyPostItemCard(forumPost:new ForumPost.fromPost(forumPosts[index]['postId'].toString(),forumPosts[index]['postTitle'], forumPosts[index]['postDescr'], forumPosts[index]['postStatus'], forumPosts[index]['postDate'], forumPosts[index]['postTime'], forumPosts[index]['userId'].toString(), uname, forumPosts[index]['pcatID'].toString()))
                          );
                        }else return Container();
                      }
                  ),

                ],
              )


          ),
          bottomNavigationBar: BottomNav(2),

        ),
      );

  }
}
