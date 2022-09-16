import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import 'components/content.dart';
import '../../components/bottom_nav.dart';
import 'components/add_vaccination_topbar.dart';


class AddVaccinationScreen extends StatefulWidget {
   String petID = '';
   AddVaccinationScreen(String petID, {Key? key}) : super(key: key) {
     this.petID =petID;
   }

  @override
  State<AddVaccinationScreen> createState() => _AddVaccinationScreenState(petID);
}

class _AddVaccinationScreenState extends State<AddVaccinationScreen> {
  String petID = '';
  _AddVaccinationScreenState(String petID){
    this.petID =petID;
  }

  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children:  <Widget>[
          Expanded(
            flex: 1,
            child:AddVaccinationTopBanner(),
          ),
          Expanded(
            flex: 9,
            child:AddVaccinationScreenContent(petID),
          ),


        ],
      ),

    );

  }
}
