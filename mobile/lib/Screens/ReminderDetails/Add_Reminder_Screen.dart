import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../components/topbar.dart';



class AddReminderScreen extends StatefulWidget {
  String petID = '';
  AddReminderScreen(String petID, {Key? key}) : super(key: key) {
    this.petID =petID;
  }

  @override
  State<AddReminderScreen> createState() => _AddReminderScreenState(petID);
}

class _AddReminderScreenState extends State<AddReminderScreen> {
  String petID = '';
  _AddReminderScreenState(String petID){
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
            child:TopBanner(label: 'Add Reminder',),
          ),
          Expanded(
            flex: 9,
            child:AddReminderScreenContent(petID),
          ),


        ],
      ),

    );

  }
}
