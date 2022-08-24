import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';
import 'add_vaccination_form.dart';




class AddVaccinationScreenContent extends StatelessWidget {
  const AddVaccinationScreenContent({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children:  const <Widget>[
          SizedBox(height: 50),
          Text(
              "Pet Vaccination",
              style: TextStyle(
              fontSize: 35,
              fontWeight: FontWeight.bold
            ),
          ),
          Text(
            "Fill in the following data about your pets vaccination details",
            style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300
            ),
            textAlign: TextAlign.center,
          ),
          Expanded(
            flex: 4,
            child:AddVaccinationtForm(),
          ),


        ],
      ),

    );

  }
}
