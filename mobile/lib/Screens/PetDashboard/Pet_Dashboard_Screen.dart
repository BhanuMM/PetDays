import 'package:flutter/material.dart';
import 'package:mobile/components/topbar.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
import '../../models/pet.dart';

class PetDashboard extends StatelessWidget {
  late Pet pet;
   PetDashboard(pet, {Key? key}) : super(key: key) {
    this.pet = pet;
  }

  @override
  Widget build(BuildContext context) {
    return Background(

      child:Scaffold(
        body:


             Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children:  <Widget>[
                TopBanner(label: pet.petName+ "'s Dashboard"),
                Expanded(
                  child: PetDashboardContent(pet),
                ),

              ],
            ),


       bottomNavigationBar: BottomNav(0),
      )

    );

  }
}
