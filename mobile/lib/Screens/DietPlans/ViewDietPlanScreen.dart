import 'package:flutter/material.dart';
import 'package:mobile/components/topbar.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import '../../../constants.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
import '../../models/pet.dart';
import './ViewDietPlans.dart';

class DietPlanViewScreen extends StatelessWidget {
  late Pet pet;
  DietPlanViewScreen(pet, {Key? key}) : super(key: key) {
    this.pet = pet;
  }

  @override
  Widget build(BuildContext context) {
    return Background(

        child:Scaffold(
          body:


          DietPlanView(pet),


          bottomNavigationBar: BottomNav(0),
        )

    );

  }
}
