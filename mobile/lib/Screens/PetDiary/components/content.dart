import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';


class PetDashboardContent extends StatelessWidget {
  const PetDashboardContent({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: SingleChildScrollView(
              child: Expanded(
                child: ConstrainedBox(
                  constraints: BoxConstraints(
                    minHeight: 30
                  ),
                    child: Column(
                        children:[
                          Row(
                              children: [
                                Spacer(),
                                Container(
                                  decoration: BoxDecoration(
                                    color: kPrimaryColor,
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  width: 350,
                                  height: 60,
                                  child: Row(
                                    children: [
                                      Container(

                                        decoration: BoxDecoration(
                                          color: Colors.white,
                                          borderRadius: BorderRadius.only(
                                            topLeft: Radius.circular(12),
                                            bottomLeft: Radius.circular(12)
                                          ),
                                        ),
                                        width: 50,
                                        child: Column(
                                          mainAxisAlignment: MainAxisAlignment.center,
                                          children: [
                                            Text('23',
                                            style: TextStyle(
                                              fontWeight: FontWeight.bold,
                                            ),
                                            ),
                                            Text('april')
                                          ],
                                        ),
                                      ),
                                      Spacer(),
                                      Column(
                                        children: [
                                          SizedBox(
                                            height: 5,
                                          ),
                                          Text("vaccine details updated",
                                            style: TextStyle(
                                              fontWeight: FontWeight.bold,
                                            ),
                                          ),
                                          Text('sadfawerqgdahweq',
                                            style: TextStyle(
                                              fontSize: 12
                                            ),
                                          )
                                        ],
                                      ),
                                      Spacer(),
                                    ],
                                  ),
                                ),
                                Spacer(),
                              ]
                          ),
                        ]
                    ),

                ),
              ),

      ),
    )
    ;
  }
}
