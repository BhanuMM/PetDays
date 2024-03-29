import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
import 'components/search.dart';

class PetMartHome extends StatelessWidget {
  const PetMartHome({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

        child:Scaffold(
          body:SingleChildScrollView(
            child:Column(
            children: const [
              petMartTopBanner(),

              PetMartHomeContent(),

            ],
          ),

        ),
          bottomNavigationBar: BottomNav(1),

    )
    );

  }
}
