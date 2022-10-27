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
  final getPetMartAdsRoute = '/service/getpetmartads';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List adDetails = [];
  String search = '';
  Future getPetMartAds() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,getPetMartAdsRoute),
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
                Form(
                    child: Container(
                      width: MediaQuery.of(context).size.width - 80,
                      child: Row(
                        children: [
                          Expanded(
                            child: Padding(
                              padding: EdgeInsets.all(20),
                              child: Container(
                                decoration: BoxDecoration(
                                    color: Colors.deepPurple[200],
                                    borderRadius: BorderRadius.circular(10)),
                                child: TextField(
                                  decoration: InputDecoration(
                                      prefixIcon: Icon(Icons.search),
                                      border: InputBorder.none,
                                      hintText: "Search Services"),
                                  onChanged: (value) {
                                    setState(() {
                                      search = value;
                                    });
                                    print(search);
                                  },
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    )),
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
                        print(adDetails[index]['adType']);
                        if(adDetails[index]['adType'] == 'Grooming' && search == ''){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }else if(adDetails[index]['adType'] == 'Grooming' && adDetails[index]['adTitle'].toString().toLowerCase().contains(search.toLowerCase())){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }
                        return Container();
                      }
                  ),
                ),
                SizedBox(height: 3,),
                Row(
                  children:const [
                    Spacer(flex: 16,),
                    Text("See more"),
                    Spacer(flex: 1,)
                  ],
                ),
                SizedBox(height: defaultPadding,),
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
                  child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      padding: const EdgeInsets.all(8),
                      itemCount: adDetails.length,
                      itemBuilder: (BuildContext context, int index) {
                        if(adDetails[index]['adType'] == 'Day Care' && search == ''){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }else if(adDetails[index]['adType'] == 'Day Care' && adDetails[index]['adTitle'].toString().toLowerCase().contains(search.toLowerCase())){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }
                          return Container();
                      }
                  ),
                ),
                SizedBox(height: 3,),
                Row(
                  children:const [
                    Spacer(flex: 16,),
                    Text("See more"),
                    Spacer(flex: 1,)
                  ],
                ),
                SizedBox(height: defaultPadding,),
                Row(
                  children: const [
                    Spacer(flex: 1,),
                    Text("Pet Walking Services",
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
                        if(adDetails[index]['adType'] == 'Walking' && search == ''){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }else if(adDetails[index]['adType'] == 'Walking' && adDetails[index]['adTitle'].toString().toLowerCase().contains(search.toLowerCase())){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }
                          return Container();
                      }
                  ),
                ),
                SizedBox(height: 3,),
                Row(
                  children:const [
                    Spacer(flex: 16,),
                    Text("See more"),
                    Spacer(flex: 1,)
                  ],
                ),
                SizedBox(height: defaultPadding,),
                Row(
                  children: const [
                    Spacer(flex: 1,),
                    Text("Other Services",
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
                        if(adDetails[index]['adType'] == 'Other' && search == ''){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }else if(adDetails[index]['adType'] == 'Other' && adDetails[index]['adTitle'].toString().toLowerCase().contains(search.toLowerCase())){
                          return Padding(
                              padding: EdgeInsets.symmetric(horizontal: 5),
                              child: PetMartItemCard(label: adDetails[index]['adTitle'],ado: ViewSingleAd(new PetMartAd(adDetails[index]['adTitle'], adDetails[index]['adDescr'], adDetails[index]['adImage'], adDetails[index]['adPrice'].toString(), adDetails[index]['adContact'].toString(), adDetails[index]['adEmail'], adDetails[index]['adAddress'], adDetails[index]['adProvince'], adDetails[index]['adDistrict'], adDetails[index]['adStatus'], adDetails[index]['paymentStatus'], adDetails[index]['adDate'], adDetails[index]['adTime'], adDetails[index]['userId'].toString(),adDetails[index]['adType'])),img: adDetails[index]['adImage'],price: adDetails[index]['adPrice'].toString())
                          );
                        }
                          return Container();
                      }
                  ),
                ),
                SizedBox(height: 3,),
                Row(
                  children:const [
                    Spacer(flex: 16,),
                    Text("See more"),
                    Spacer(flex: 1,)
                  ],
                ),
                SizedBox(height: defaultPadding,),
              ]
          ),



    )
    ;
  }
}
