import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';

class ViewVaccinationsScreen extends StatelessWidget {
  String petID = '';
  ViewVaccinationsScreen(String petID, {Key? key}) : super(key: key) {
    this.petID=petID.toString();
  }
  @override
  Widget build(BuildContext context) {
    return Background(

        child:Scaffold(
          body:SingleChildScrollView(

            child: ConstrainedBox(
              constraints: BoxConstraints(
                maxHeight: MediaQuery.of(context).size.height *2-300,
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children:  <Widget>[
                  VaccineTopBanner(),
                  Container(
                    height: 700,
                    child: VaccineContent(petID),
                  ),


                ],
              ),
            ) ,
          ),
          bottomNavigationBar: BottomNav(1),
        )

    );

  }
}
