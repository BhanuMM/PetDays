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
    return SingleChildScrollView(
        child:Container(
          child:Column(
              children:[
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Added vaccination details',Date: "25",img: "pett"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Updated weight',Date: "24",img: "pett"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Added vaccination details',Date: "18",img: "pett"),
                      Spacer(),
                    ]
                ),
              ]

          ),
        )


    )
    ;
  }
}
