import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import '../../components/topbar.dart';
import 'components/Add_Pet_Medication_Form.dart';



class AddMedicationScreen extends StatefulWidget {
  String petID = '';
  AddMedicationScreen(String petID, {Key? key}) : super(key: key) {
    this.petID =petID;
  }

  @override
  State<AddMedicationScreen> createState() => _AddMedicationScreenState(petID);
}

class _AddMedicationScreenState extends State<AddMedicationScreen> {
  String petID = '';
  _AddMedicationScreenState(String petID){
    this.petID =petID;
  }

  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children:  <Widget>[
          TopBanner(label: 'Add Pet Medication'),
          AddMedicationForm(petID)
        ],
      ),

    );

  }
}
