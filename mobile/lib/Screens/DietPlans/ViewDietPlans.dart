import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/components/background.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/topbar.dart';
import '../../components/bottom_nav.dart';
import '../../../constants.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
import 'components/DietPlanCard.dart';
import '../../models/pet.dart';
import 'package:http/http.dart' as http;
import '../../models/globals.dart';
import '../../models/forumPost.dart';
import '../AddForumPost/Add_Forum_Post_Screen.dart';
import '../MyPosts/My_Posts_Screen.dart';
import '../../models/pet.dart';


class DietPlanView extends StatefulWidget {
  Pet pet = new Pet('petName', 'DOB', 0, 'breedid', 'UserID', 'catID', 'profileImage');
  DietPlanView(this.pet,{Key? key}) : super(key: key);

  @override
  State<DietPlanView> createState() => _DietPlanViewState();
}

class _DietPlanViewState extends State<DietPlanView> {
  String search = '';
  final getPetRoute = '/mod/getdietplans';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List dietPlans = [];

  Future getForumPosts() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(url,getPetRoute),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      dietPlans = list ;
    });


    return "Sucess";
  }

  void initState() {
    super.initState();
    this.getForumPosts();
  }

  @override
  Widget build(BuildContext context) {
    return
      SingleChildScrollView(

            child: Column(
              children: [
                TopBanner(label: "Diet Plans"),


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
                          hintText: "Search diet plans"
                      ),
                      onChanged: (value) {
                        setState(() {
                          search = value;
                        });
                        print(search);
                      },
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
                            "All",
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
                            "Recommended",
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
                    itemCount: dietPlans.length,
                    itemBuilder: (BuildContext context, int index) {
                      print(dietPlans[index]);

                      return DietPlanCard(dietPlans[index]['planName'],dietPlans[index]['planDescr'],dietPlans[index]['Breed']['Petcatagory']['pcatName'],dietPlans[index]['Breed']['breedName'],dietPlans[index]['ageRangeFrom'],dietPlans[index]['ageRangeTo']);
                    }
                ),
              ],
            )
        );

  }
}
