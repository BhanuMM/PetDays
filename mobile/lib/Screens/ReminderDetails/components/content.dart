import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';
import 'add_reminder_form.dart';




class AddReminderScreenContent extends StatelessWidget {
  String petID = '';
  AddReminderScreenContent(String petID, {Key? key}) : super(key: key) {
    this.petID = petID;
  }
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children:   <Widget>[
          SizedBox(height: 50),
          Text(
            "Add Reminder",
            style: TextStyle(
                fontSize: 35,
                fontWeight: FontWeight.bold
            ),
          ),
          Text(
            "Fill the following details to add the custom reminder",
            style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300
            ),
            textAlign: TextAlign.center,
          ),
          Expanded(
            flex: 4,
            child:AddReminderForm(petID),
          ),


        ],
      ),

    );

  }
}
