import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/models/pet.dart';
import 'package:mobile/models/petMartAd.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import '../../PetDiary/Pet_DIary_Screen.dart';
import '../../viewSingleAd/View_Single_Add_Screen.dart';
import '../../../models/globals.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../../../models/petMartAd.dart';



class PetMartHomeContent extends StatefulWidget {
  PetMartAd petMartAd = new PetMartAd('adTitle', 'adDescr', 'adImage', 'adPrice', 'adContact', 'adEmail', 'adAddress', 'adProvince', 'adDistrict', 'adStatus', 'paymentStatus', 'adDate', 'adTime', 'userId','none');
  PetMartHomeContent(this.petMartAd,{
    Key? key,
  }) : super(key: key);

  @override
  State<PetMartHomeContent> createState() => _PetMartHomeContentState();
}

class _PetMartHomeContentState extends State<PetMartHomeContent> {
  final getPetMartAdsRoute = '/service/getpetmartads';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List adDetails = [];
  Future getPetMartAds() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(url,getPetMartAdsRoute),
    );
    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      adDetails = list ;
    });
    print(adDetails);
    print('ela');

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  void initState() {
    super.initState();
    this.getPetMartAds();

  }
  @override
  Widget build(BuildContext context) {
    return Container(

          child:Column(
              children:[
                SizedBox(height: defaultPadding*2,),
                Row(
                  children: [
                    Container(
                        child: Image.network(
                            "http://$url/service/static/" + widget.petMartAd.adImage,
                        width: MediaQuery.of(context).size.width,
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Spacer(flex: 1,),
                    Text(widget.petMartAd.adTitle,
                      style: TextStyle(
                        fontSize: 25,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Spacer(flex: 10,)
                  ],
                ),
                Padding(
                    padding: EdgeInsets.only(left: 15),
                    child: Row(
                    children: [
                      Icon(
                        Icons.add_location,
                        size: 24.0,
                        semanticLabel: 'Text to announce in accessibility modes',
                      ),
                      Text(widget.petMartAd.adAddress,style: TextStyle(fontSize: 16),),

                    ],
                    )
                ),
                SizedBox(height: defaultPadding,),
                Padding(
                    padding: EdgeInsets.only(left: 18),
                    child: Row(
                      children: [
                        Text("RS." + widget.petMartAd.adPrice.toString(),style: TextStyle(fontSize: 24),),
                      ],
                    )
                ),
                SizedBox(height: defaultPadding,),
                Container(
                    child: Padding(
                    padding: EdgeInsets.only(left: 18),
                    child: Row(
                      children: [
                        Text(widget.petMartAd.adDescr,style: TextStyle(fontSize:14),),
                      ],
                    )
                )
                ),
                SizedBox(height: defaultPadding*2,),
                Row(
                  children: const [
                    Padding(
                      padding:EdgeInsets.only(left: 18),
                    child: Text("Contact Info",
                      style: TextStyle(
                        fontSize: 25,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    )
                  ],
                ),
                Padding(
                    padding: EdgeInsets.only(left: 15),
                    child: Row(
                      children: [
                        Icon(
                          Icons.add_call,
                          size: 24.0,
                          semanticLabel: 'Text to announce in accessibility modes',
                        ),
                        Text("0"+widget.petMartAd.adContact.toString(),style: TextStyle(fontSize: 16),),

                      ],
                    )
                ),
                Padding(
                    padding: EdgeInsets.only(left: 15),
                    child: Row(
                      children: [
                        Icon(
                          Icons.alternate_email,
                          size: 24.0,
                          semanticLabel: 'pet.groom@gmail.com',
                        ),
                        Text(widget.petMartAd.adEmail,style: TextStyle(fontSize: 16),),

                      ],
                    )
                ),
                SizedBox(height: defaultPadding*2,),
                Row(
                  children: [
                    Padding(
                      padding:EdgeInsets.only(left: 18),
                      child: Container(
                        width: MediaQuery.of(context).size.width-120,
                        child: Flex(
                          direction: Axis.vertical,
                          children: [
                            Text("Similar services in the Catagory",
                              style: TextStyle(
                                fontSize: 25,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ]
                        ),
                      ),
                    )
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
                        print(adDetails[index]['adType']);
                        if(adDetails[index]['adType'] == widget.petMartAd.adType ){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }else
                          return Container();
                      }
                  ),
                ),


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
