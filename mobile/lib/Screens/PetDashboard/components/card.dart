import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';


import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';

class PetDashboardItemCard extends StatelessWidget {
  final String label;
  final StatelessWidget ado;
  final String img;
  PetDashboardItemCard({ required this.label, required this.ado, required this.img});
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return ado;
            },
          ),
        );
      },
      child:
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
                        "assets/images/$img.png",
                        height: 150,
                        width: 200,
                      ),
                    ],
                  ),
                ),
                Expanded(

                  child: Column(
                    children:  [
                        Spacer(),
                        Text(label,
                          style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),
                          textAlign: TextAlign.center,
                      ),
                      Spacer(),

                    ],
                  ),
                )


              ],
            ),
          )
      ),
    );
  }

}