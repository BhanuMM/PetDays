import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import 'components/content.dart';
import '../../components/bottom_nav.dart';
import 'components/add_vaccination_topbar.dart';


class AddVaccinationScreen extends StatelessWidget {
  const AddVaccinationScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: const <Widget>[
          Expanded(
            flex: 1,
            child:AddVaccinationTopBanner(),
          ),
          Expanded(
            flex: 9,
            child:AddVaccinationScreenContent(),
          ),


        ],
      ),

    );

  }
}
