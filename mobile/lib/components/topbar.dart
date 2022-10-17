import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../constants.dart';

class TopBanner extends StatelessWidget {
  String label ='';
  TopBanner({
    Key? key, required this.label
  }) : super(key: key);

  @override
  Widget build(BuildContext context){
    return Column(
      children: [
        Row(
            children: [
              Container(
                width: MediaQuery.of(context).size.width,
                height: 60,
                decoration:  BoxDecoration(
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.5),
                      spreadRadius:3,
                      blurRadius: 4,
                      offset: Offset(0, 2), // changes position of shadow
                    ),
                  ],

                  color: kPrimaryColor,
                ),
                child:
                Row(
                  children:  [
                    const Spacer(),
                    Padding(
                      padding: const EdgeInsets.only(top: 15),
                      child:Column(
                        children:  [
                          Text(label,
                            style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),
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