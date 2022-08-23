import 'package:flutter/material.dart';


import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';

class ItemCard extends StatelessWidget {

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
      child: Container(
        width: 150,
        height: 200,
        decoration:    BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(25.0)),
          color: formBGLight,
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.5),
              spreadRadius: 5,
              blurRadius: 7,
              offset: Offset(0, 3), // changes position of shadow
            ),
          ],
        ),

        child:Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
        ClipRRect(
          borderRadius: BorderRadius.circular(25.0),
          child:Image.asset(
            "assets/images/roug.jpg",
            width: 150,
          ),
        ),
          Row(
            children: const [
              Padding(
                padding: const EdgeInsets.only(left: 10),
                  child:Text("Rouger",
              style: TextStyle(fontSize: 24,fontWeight: FontWeight.bold),
              textAlign: TextAlign.center,
            )
          ),
              Spacer(),
              Padding(padding:const EdgeInsets.only(right: 10),
              child:Text("...",
                style: TextStyle(fontSize: 24,fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
          ),

            ],
          )
        ],
      ),
      ),
    );
  }
}