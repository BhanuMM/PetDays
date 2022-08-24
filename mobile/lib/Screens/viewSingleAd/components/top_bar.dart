import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../constants.dart';

class petMartTopBanner extends StatelessWidget {
  const petMartTopBanner({
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
                height: 80,
                decoration:  const BoxDecoration(

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
                            Text("Pet Mart",
                              style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold,color: Colors.black),
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