import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../constants.dart';
import '../../Mypets/my_pets_screen.dart';
import '../../PetMartHome/Pet_Mart_Home_Screen.dart';

class DashboardContent extends StatelessWidget {
  const DashboardContent({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Column(
          children: [
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 15,vertical: 15),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text("Hello,",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold
                      ),
                      ),
                      SizedBox(height: 8,),
                      Text("Thilina Peduruhewa",
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold
                        ),)
                    ],
                  ),
                  Container(
                    padding: EdgeInsets.all(11),
                    decoration: BoxDecoration(
                      color: kPrimaryColor,
                      borderRadius: BorderRadius.circular(13)
                    ),
                    child: Icon(Icons.person)
                  )
                ],
              ),
            ),
            SizedBox(height: 2,),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.grey,
                  borderRadius: BorderRadius.circular(20)
                ),
                height: 180,
                child: Row(
                  children: [
                    Image.asset(
                      "assets/images/mart2.png",
                      height: 200,
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,

                        children: [
                          SizedBox(height: 8,),
                          Padding(
                            padding: EdgeInsets.symmetric(vertical: 10),
                            child: Text("Let's add your pets",
                              textAlign: TextAlign.left,
                              style: TextStyle(
                                  fontWeight: FontWeight.w600,
                                  fontSize: 23
                              ),
                            ),
                          ),
                          Text("Get started by creating a profile for your pet", textAlign: TextAlign.left,
                          style: TextStyle(
                            fontWeight: FontWeight.w400,
                            fontSize: 18
                          ),
                          ),
                          SizedBox(height: 8,),
                          Row(
                            children: [
                              // Expanded(
                              //     flex: 1,
                              //     child: SizedBox()
                              // ),
                              Expanded(
                                flex: 15,
                                child: Container(
                                padding: EdgeInsets.all(15),
                                decoration: BoxDecoration(
                                  color: kPrimaryColor,
                                  borderRadius: BorderRadius.circular(10)
                                ),
                                child: Text("Get started", textAlign: TextAlign.center,
                                  style: TextStyle(
                                      fontWeight: FontWeight.w400,
                                      fontSize: 18
                                  ),
                                ),
                            ),
                              ),
                              Expanded(
                                flex: 3,
                                  child: SizedBox()
                              ),
                            ]
                          )
                        ],
                      ),
                    )
                  ],
                ),
              ),
            )
          ],
        )
    );


  }
  }
