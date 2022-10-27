import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import '../../viewSingleAd/View_Single_Add_Screen.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../../../models/globals.dart' as globals;
import '../../../models/petMartAd.dart';


class PetMartHomeContent extends StatefulWidget {
  const PetMartHomeContent({
    Key? key,
  }) : super(key: key);

  @override
  State<PetMartHomeContent> createState() => _PetMartHomeContentState();
}

class _PetMartHomeContentState extends State<PetMartHomeContent> {
  final getPetMartAds = '/user/getpetmartads';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List adDetails = [];
  Future getPetBreeds() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,getPetMartAds),
    );
    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      adDetails = list ;
    });
    print(adDetails);

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  @override
  Widget build(BuildContext context) {
    return Container(

          child:Column(
              children:[
                SizedBox(height: defaultPadding*2,),
                Row(
                  children: const [
                    Spacer(flex: 1,),
                    Text("Grooming Services",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Spacer(flex: 10,)
                  ],
                ),
                SizedBox(height: defaultPadding,),
                Container(
                  height: 180,
                  child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      padding: const EdgeInsets.all(8),
                      itemCount: adDetails.length,
                      itemBuilder: (BuildContext context, int index) {
                        return PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice']);
                      }
                  ),
                ),
                SizedBox(height: defaultPadding,),
                Row(
                  children:const [
                    Spacer(flex: 16,),
                    Text("See more"),
                    Spacer(flex: 1,)
                  ],
                ),
                SizedBox(height: defaultPadding*2,),
                Row(
                  children: const [
                    Spacer(flex: 1,),
                    Text("Day Care Services",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Spacer(flex: 10,)
                  ],
                ),
                SizedBox(height: defaultPadding,),
                Container(
                    height: 180,
                    child:ListView(
                        scrollDirection: Axis.horizontal,

                        children: [
                          SizedBox(width: defaultPadding,),
                          PetMartItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart1",price: "2000"),
                          SizedBox(width: defaultPadding,),
                          PetMartItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart2",price: "2000"),
                          SizedBox(width: defaultPadding,),
                          PetMartItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart3",price: "2000"),
                          SizedBox(width: defaultPadding,),
                          PetMartItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart6",price: "2000"),
                        ]
                    )
                ),
                SizedBox(height: defaultPadding,),
                Row(
                  children:const [
                    Spacer(flex: 16,),
                    Text("See more"),
                    Spacer(flex: 1,)
                  ],
                )
                // SizedBox(height: formPadding,),
                // Row(
                //     children: [
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Add Medication Details',ado: DashboardScreen()),
                //       Spacer(),
                //       PetDashboardItemCard(label: 'View Growth chart',ado: DashboardScreen()),
                //       Spacer(),
                //     ]
                // ),
                // SizedBox(height: formPadding,),
                // Row(
                //     children: [
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Add Vaccination Details',ado: DashboardScreen()),
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Edit Pet Profile',ado: DashboardScreen()),
                //       Spacer(),
                //     ]
                // ),
              ]

          ),



    )
    ;
  }
}
