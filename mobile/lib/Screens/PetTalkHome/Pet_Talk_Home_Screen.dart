import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/components/background.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/topbar.dart';
import '../../components/bottom_nav.dart';
import '../../../constants.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
import 'components/ForumCard.dart';
import '../../models/pet.dart';
import 'package:http/http.dart' as http;
import '../../models/globals.dart';
import '../../models/forumPost.dart';
import '../AddForumPost/Add_Forum_Post_Screen.dart';
import '../MyPosts/My_Posts_Screen.dart';


class PetTalkHome extends StatefulWidget {

  PetTalkHome({Key? key}) : super(key: key);

  @override
  State<PetTalkHome> createState() => _PetTalkHomeState();
}

class _PetTalkHomeState extends State<PetTalkHome> {

  final getPetRoute = '/user/getpostswithuser';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List forumPosts = [];

  Future getForumPosts() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(url,getPetRoute),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      forumPosts = list ;
    });
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
                  TopBanner(label: "Pet Talk"),
                  Padding(
                    padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                    child: Container(
                      decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.topRight,
                            end: Alignment.bottomLeft,
                            colors: [
                              kPrimaryColor,
                              kPrimaryLightColor,
                            ],
                          ),
                          borderRadius: BorderRadius.circular(20)
                      ),

                      child: Row(
                        children: [
                          Image.asset(
                            "assets/images/mart6.png",
                            height: 150,
                          ),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,

                              children: [
                                SizedBox(height: 5,),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 5),
                                  child:
                                  Text("Are you having any trouble with your pet?",
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                        fontWeight: FontWeight.w600,
                                        fontSize: 16
                                    ),
                                  ),
                                ),
                                const Text("Ask the other pet lovers on pet days. They might have the answer!", textAlign: TextAlign.left,
                                  style: TextStyle(
                                      fontWeight: FontWeight.w400,
                                      fontSize: 12
                                  ),
                                ),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 8,horizontal: 20),
                                  child: Row(
                                      children: [
                                        // Expanded(
                                        //     flex: 1,
                                        //     child: SizedBox()
                                        // ),
                                        Spacer(),
                                        Container(
                                          width: 160,
                                            padding: EdgeInsets.all(5),
                                            decoration: BoxDecoration(
                                                color: Colors.deepPurple[300],
                                                borderRadius: BorderRadius.circular(10)
                                            ),
                                            child:  GestureDetector(
                                              onTap: (){
                                                Navigator.push(
                                                  context,
                                                  MaterialPageRoute(
                                                    builder: (context) {
                                                      return AddPostScreen();
                                                    },
                                                  ),
                                                );
                                              },
                                              child: const Text("Add a forum post", textAlign: TextAlign.center,
                                                style: TextStyle(
                                                    fontWeight: FontWeight.normal,
                                                    fontSize: 14,
                                                    color: Colors.white
                                                ),
                                              ),
                                            ),
                                          ),


                                      ]
                                  ),
                                )
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                  ),
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
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) {
                                return MyPostScreen();
                              },
                            ),
                          );
                        },
                        child: Text(
                          "My Posts",
                          style: TextStyle(fontSize: 10),
                        ),
                      ),
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
                            hintText: "Search your pets"
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

                            },
                            child: Text(
                              "Most recent",
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

                            },
                            child: Text(
                              "Featured",
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

                            },
                            child: Text(
                              "Top Commented",
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

                            },
                            child: Text(
                              "Dogs",
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

                            },
                            child: Text(
                              "Cats",
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
                        if(forumPosts[index]['postStatus'] == 'approved'){
                          return Container(
                              child: PetForumItemCard(forumPost:new ForumPost.fromPost(forumPosts[index]['postId'].toString(),forumPosts[index]['postTitle'], forumPosts[index]['postDescr'], forumPosts[index]['postStatus'], forumPosts[index]['postDate'], forumPosts[index]['postTime'], forumPosts[index]['userId'].toString(), forumPosts[index]['User']['username'], forumPosts[index]['pcatID'].toString()))
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
