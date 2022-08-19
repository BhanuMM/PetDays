import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../constants.dart';

class DashboardContent extends StatelessWidget {
  const DashboardContent({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
        child:Column(
      children: [
        Padding
          (
          padding: EdgeInsets.symmetric(vertical: 5),
          child:Container(
          width: 350,
          height: 150,

          decoration:  BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(25.0)),
            color: formBGLight,

          ),
          child: Row(
            children: [
              Expanded(

                  child: Column(
                    children: [
                      Image.asset(
                          "assets/images/petd.png",
                        height: 150,
                        width: 200,
                      ),
                    ],
                  ),
              ),
              Expanded(

                child: Column(
                  children: const [
                    Padding(
                      padding: EdgeInsets.fromLTRB(25,25,60,25),
                      child:Text("My\nPets",
                      style: TextStyle(fontSize: 40,fontWeight: FontWeight.bold),
                      textAlign: TextAlign.center,
                      ),)
                  ],
                ),
              )


            ],
          ),
        ),),
        Padding(
        padding: EdgeInsets.symmetric(vertical: 5),
        child: Container(
          width: 350,
          height: 150,
          decoration: const BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(25.0)),
            color: formBGLight,
          ),
          child: Row(
            children: [
              Expanded(

                child: Column(
                  children: [
                    Image.asset(
                      "assets/images/petm.png",
                      height: 150,
                      width: 200,
                    ),
                  ],
                ),
              ),
              Expanded(

                child: Column(
                  children: const [
                    Padding(
                      padding: EdgeInsets.fromLTRB(25,25,60,25),
                      child:Text("Pet\nMart",
                        style: TextStyle(fontSize: 40,fontWeight: FontWeight.bold),
                        textAlign: TextAlign.center,
                      ),
                    ),

                  ],
                ),
              )


            ],
          ),
        )
        ),
        Padding(
            padding: EdgeInsets.symmetric(vertical: 5),
            child: Container(
              width: 350,
              height: 150,
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(25.0)),
                color: formBGLight,
              ),
              child: Row(
                children: [
                  Expanded(

                    child: Column(
                      children: [
                        Image.asset(
                          "assets/images/pett.png",
                          height: 150,
                          width: 200,
                        ),
                      ],
                    ),
                  ),
                  Expanded(

                    child: Column(
                      children: const [
                        Padding(
                          padding: EdgeInsets.fromLTRB(25,25,50,25),
                          child:Text("Pet\nTalk",
                            style: TextStyle(fontSize: 40,fontWeight: FontWeight.bold),
                            textAlign: TextAlign.center,
                          ),
                        ),

                      ],
                    ),
                  )


                ],
              ),
            )
        )
      ],
    ))
    ;
  }
  }
