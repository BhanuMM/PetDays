import 'package:flutter/material.dart';
import 'package:mobile/Screens/PetDashboard/Pet_Dashboard_Screen.dart';


import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';

class PetDashboardItemCard extends StatelessWidget {
  final String label;
  final String Date;
  final String img;
  PetDashboardItemCard({ required this.label, required this.img, required this.Date});
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return PetDashboard();
            },
          ),
        );
      },
      child:
      Padding(
          padding: EdgeInsets.symmetric(vertical: 5),
          child: Container(
            width: 350,
            height: 80,
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(25.0)),
              color: kPrimaryColor,
            ),
            child: Row(
              children: [
                Expanded(
                  flex: 4,
                  child: Column(
                    children:  [
                      Spacer(),
                      Text(Date+"th",
                        style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),
                        textAlign: TextAlign.center,
                      ),
                      Spacer(),

                    ],
                  ),
                ),
                Expanded(
                  flex: 8,
                  child: Column(
                    children:  [
                        Spacer(),
                        Text(label,
                          style: TextStyle(fontSize: 18,fontWeight: FontWeight.bold),
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