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

class ViewSingleAd extends StatelessWidget {
  const ViewSingleAd({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

        child:Scaffold(
          body:SingleChildScrollView(

            child: ConstrainedBox(
              constraints: BoxConstraints(
                maxHeight: MediaQuery.of(context).size.height *2-500,
              ),
              child:Column(
                children: const [
                  petMartTopBanner(),
                  Padding(
                    child:PetMartSearch(),
                    padding: EdgeInsets.only(top: 20),
                  ),
                  PetMartHomeContent(),

                ],
              ),

            ),
          ),
          bottomNavigationBar: BottomNav(1),

        )
    );

  }
}
