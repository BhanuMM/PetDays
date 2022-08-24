import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';


class PetDashboardContent extends StatelessWidget {
  const PetDashboardContent({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
        child:Container(
          child:Column(
              children:[
                Padding(
                    padding: EdgeInsets.symmetric(vertical: 5),
                    child: Container(
                      width: 350,
                      height: 150,
                      decoration: const BoxDecoration(
                        borderRadius: BorderRadius.all(Radius.circular(25.0)),
                        color: kPrimaryColor,
                      ),
                      child: Row(
                        children: [
                          Expanded(

                            child: Column(
                              children: [
                                Image.asset(
                                  "assets/images/pett.png",
                                  height: 150,
                                  width: 200,
                                ),
                              ],
                            ),
                          ),
                          Expanded(

                            child: Column(
                              children: const [
                                Padding(
                                  padding: EdgeInsets.fromLTRB(20,50,60,25),
                                  child:Text("Rougers\nDiary",
                                    style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),
                                    textAlign: TextAlign.center,
                                  ),
                                ),

                              ],
                            ),
                          )


                        ],
                      ),
                    )
                ),
                SizedBox(height: formPadding,),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Add Vaccination Details',ado: DashboardScreen(),img: "vaccine"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Reminders',ado: DashboardScreen(),img: "reminder"),
                      Spacer(),
                    ]
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


    )
    ;
  }
}
