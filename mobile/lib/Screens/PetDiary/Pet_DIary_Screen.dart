import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';
import '../../models/pet.dart';

class PetDiaryScreen extends StatelessWidget {
  late Pet pet;
  PetDiaryScreen(pet, {Key? key}) : super(key: key) {
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
                 petDashboardTopBanner(),
                 SizedBox(height: 20,),
                  PetDiaryContent(pet),
                ],
              ),


          bottomNavigationBar: BottomNav(1),
        )

    );

  }
}
