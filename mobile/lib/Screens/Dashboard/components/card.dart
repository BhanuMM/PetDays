import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart';

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
          padding: EdgeInsets.symmetric(vertical: 5,horizontal: 5),
          child: Container(
            width: 160,
            height: 220,
            decoration:  BoxDecoration(
              // boxShadow: [
              //   BoxShadow(
              //     color: Colors.grey.withOpacity(0.5),
              //     spreadRadius:1,
              //     blurRadius: 4,
              //     offset: Offset(0, 6), // changes position of shadow
              //   ),
              // ],
              borderRadius: BorderRadius.all(Radius.circular(18.0)),
              color: Colors.white,

            ),

            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(height: 5,),
                Container(
                height: 150,
                width: 150,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(18),
                  image: DecorationImage(
                    image: FileImage(
                      File(img),
                    // AssetImage("assets/images/$img"),
                ),
                fit: BoxFit.cover,
                ),
                ),
                ),
                SizedBox(height: 5,),
                Row(
                  children: [
                    Padding(
                      
                      padding: EdgeInsets.symmetric( horizontal: 10),
                      child: Text(label,
                      style: TextStyle(fontSize: 16,fontWeight: FontWeight.bold),
                       textAlign: TextAlign.center,
                  ),
                    ),
                    const Spacer(

                    )
                ]
                ),
                SizedBox(height: 2,),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 10),
                  child: Row(
                    children: [

                      Text(
                        "2 Years Old",
                      style: TextStyle(
                        fontSize: 12,
                        color: Colors.grey[800]
                      ),

                    ),
                      Spacer(),
                    ]
                  ),
                ),

                SizedBox(height: 5,),


              ],
            ),
          )
      ),
    );
  }

}