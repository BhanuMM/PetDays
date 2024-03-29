import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';


import '../../../constants.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';
import '../../../models/globals.dart';

class PetMartItemCard extends StatelessWidget {
  final String label;
  final String price;
  final StatelessWidget ado;
  final String img;
  PetMartItemCard({ required this.label, required this.ado, required this.img, required this.price});
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
            width: 130,
            height: 170,
            decoration:  BoxDecoration(
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.5),
                  spreadRadius:1,
                  blurRadius: 4,
                  offset: Offset(0, 6), // changes position of shadow
                ),
              ],
              borderRadius: BorderRadius.all(Radius.circular(25.0)),
              color: Colors.white,

            ),

            child: Column(
              children: [
                Container(
                  height: 90,
                  width: 200,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(18),
                    image: DecorationImage(
                      image: NetworkImage("http://$url/service/static/$img"),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),

                // ConstrainedBox(
                //   constraints: BoxConstraints(
                //     maxWidth: 200,
                //     maxHeight: 110,
                //   ),
                //   child: Image.network(
                //     "http://$url/service/static/$img",
                //     width: 200,
                //   ),
                // ),
                SizedBox(height: 5,),
                Row(
                    children: [
                      const Spacer(
                        flex: 1,
                      ),
                      Text(label,
                        style: TextStyle(fontSize: 14,fontWeight: FontWeight.normal),
                        textAlign: TextAlign.center,
                      ),
                      const Spacer(
                        flex: 6,
                      )
                    ]
                ),
                SizedBox(height: 5,),
                Row(
                    children: [
                      const Spacer(
                        flex: 1,
                      ),
                      Text("Rs."+ price,
                        style: TextStyle(fontSize: 14,fontWeight: FontWeight.bold,color: kPrimaryColor),
                        textAlign: TextAlign.center,
                      ),
                      const Spacer(
                        flex: 8,
                      )
                    ]
                ),

              ],
            ),
          )
      ),
    );
  }

}