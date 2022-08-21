import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../constants.dart';
import '../dashboard_screen.dart';
class DashboardTopBanner extends StatelessWidget {
  const DashboardTopBanner({
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
                height: 110,
                decoration: const BoxDecoration(
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
                        padding: const EdgeInsets.only(top: 30),
                        child:Column(
                          children: const [
                            Text("Hello Thilina!",
                              style: TextStyle(fontSize: 20),
                              textAlign: TextAlign.center,
                            ),
                            Text("Welcome Back",
                              style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),
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
        ),
      ],
    );

  }
}