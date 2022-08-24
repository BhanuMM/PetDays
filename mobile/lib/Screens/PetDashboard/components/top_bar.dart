import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../constants.dart';

class petDashboardTopBanner extends StatelessWidget {
  const petDashboardTopBanner({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context){
    return Column(
      children: [
        Row(
          children: [
            Container(
                width: MediaQuery.of(context).size.width,
                height: 200,
                decoration:  const BoxDecoration(
                  image: DecorationImage(
                    image:  AssetImage("assets/images/roug.jpg"),
                    fit: BoxFit.cover,
                    ),
                  borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(25.0),
                      bottomRight: Radius.circular(25.0)),
                  color: kPrimaryColor,
                ),
                child:
                  Row(
                    children:  [
                      const Spacer(),
                      Padding(
                        padding: const EdgeInsets.only(top: 150),
                        child:Column(
                          children: const [
                            Text("Rouger",
                              style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold,color: Colors.white),
                              textAlign: TextAlign.center,
                            ),

                          ],
                        ),
                      ),
                      const Spacer(),
                    ],
                  ),

                ),


          ]
        )
      ],
    );

  }
}