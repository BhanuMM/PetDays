import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import '../../ViewVaccination/View_Vaccinations_Screen.dart';
import '../../PetDiary/Pet_DIary_Screen.dart';
import '../../Reminders/Reminders_Screen.dart';


class PetDiaryContent extends StatelessWidget {
  const PetDiaryContent({
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
                      PetDashboardItemCard(label: 'Rougers Diary',ado: PetDiaryScreen(),img: "pett"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Vaccination Details',ado: ViewVaccinationsScreen(),img: "vaccine"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Upcoming Reminders',ado: RemindersScreen(),img: "reminder"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Add Medication Details',ado: DashboardScreen(),img: "medication"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Growth Chart',ado: DashboardScreen(),img: "growth"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: 'Edit profile',ado: DashboardScreen(),img: "settings"),
                      Spacer(),
                    ]
                ),

                // SizedBox(height: formPadding,),
                // Row(
                //     children: [
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Add Medication Details',ado: DashboardScreen()),
                //       Spacer(),
                //       PetDashboardItemCard(label: 'View Growth chart',ado: DashboardScreen()),
                //       Spacer(),
                //     ]
                // ),
                // SizedBox(height: formPadding,),
                // Row(
                //     children: [
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Add Vaccination Details',ado: DashboardScreen()),
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Edit Pet Profile',ado: DashboardScreen()),
                //       Spacer(),
                //     ]
                // ),
              ]

          ),
        )


    )
    ;
  }
}
