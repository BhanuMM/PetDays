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
          body:


               Container(
                 height:MediaQuery.of(context).size.height,
                 child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children:  <Widget>[
                    VaccineTopBanner(),
                    VaccineContent(petID),
                  ],
              ),
               ),


          bottomNavigationBar: BottomNav(2),
        )

    );

  }
}
