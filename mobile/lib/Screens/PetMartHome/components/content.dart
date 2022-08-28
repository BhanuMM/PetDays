import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
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
                    child:ListView(
                        scrollDirection: Axis.horizontal,

                    children: [
                      SizedBox(width: defaultPadding,),
                      PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart4",price: "2000"),
                      SizedBox(width: defaultPadding,),
                      PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart5",price: "2000"),
                      SizedBox(width: defaultPadding,),
                      PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart2",price: "2000"),
                      SizedBox(width: defaultPadding,),
                      PetDashboardItemCard(label: 'Pet grooming',ado: ViewSingleAd(),img: "mart3",price: "2000"),
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
