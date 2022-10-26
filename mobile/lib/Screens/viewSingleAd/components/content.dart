import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import '../../PetDiary/Pet_DIary_Screen.dart';
import '../../viewSingleAd/View_Single_Add_Screen.dart';


class PetMartHomeContent extends StatelessWidget {
  const PetMartHomeContent({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(

          child:Column(
              children:[
                SizedBox(height: defaultPadding*2,),
                Row(
                  children: [
                    Spacer(),
                    Container(
                        child: Image.asset(
                        "assets/images/mart5.png",
                        height: 300
                      ),
                    ),
                    Spacer(),
                  ],
                ),
                Row(
                  children: const [
                    Spacer(flex: 1,),
                    Text("Grooming Services",
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
                      Text("Galle,Sri Lanka",style: TextStyle(fontSize: 16),),

                    ],
                    )
                ),
                SizedBox(height: defaultPadding,),
                Padding(
                    padding: EdgeInsets.only(left: 18),
                    child: Row(
                      children: [
                        Text("RS. 2000",style: TextStyle(fontSize: 24),),
                      ],
                    )
                ),
                SizedBox(height: defaultPadding,),
                Container(
                    child: Padding(
                    padding: EdgeInsets.only(left: 18),
                    child: Row(
                      children: [
                        Text("Get your Dog groomed by proffesionals at Galle.",style: TextStyle(fontSize:14),),
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
                        Text("+94 77 123 76 89",style: TextStyle(fontSize: 16),),

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
                        Text("pet.groom@gmail.com",style: TextStyle(fontSize: 16),),

                      ],
                    )
                ),
                Padding(
                    padding: EdgeInsets.only(left: 15),
                    child: Row(
                      children: [
                        Icon(
                          Icons.facebook,
                          size: 24.0,
                          semanticLabel: 'Text to announce in accessibility modes',
                        ),
                        Text("www.facebook.com/petgroomers",style: TextStyle(fontSize: 16),),

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
                    child:ListView(
                        scrollDirection: Axis.horizontal,

                        children: [
                          SizedBox(width: defaultPadding,),
                          PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart1",price: "2000"),
                          SizedBox(width: defaultPadding,),
                          PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart2",price: "2000"),
                          SizedBox(width: defaultPadding,),
                          PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart3",price: "2000"),
                          SizedBox(width: defaultPadding,),
                          PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart6",price: "2000"),
                        ]
                    )
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
