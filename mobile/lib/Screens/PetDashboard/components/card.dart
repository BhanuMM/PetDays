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
            width: 180,
            height: 100,
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(25.0)),
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: [
                  kPrimaryColor,
                  kPrimaryLightColor,
                ],
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                      Image.asset(
                        "assets/images/$img.png",
                        width: 80,
                      ),
                        Expanded(
                          child: Text(label,
                            style: TextStyle(fontSize: 14,fontWeight: FontWeight.bold),
                            textAlign: TextAlign.center,
                          ),
                        ),
              ],
            ),
          )
      ),
    );
  }

}