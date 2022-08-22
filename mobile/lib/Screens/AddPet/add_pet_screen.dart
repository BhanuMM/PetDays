import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import 'component/add_pet_form.dart';
import '../../components/bottom_nav.dart';


class AddPetScreen extends StatelessWidget {
  const AddPetScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: const <Widget>[
          Expanded(
              flex: 4,
              child:AddPetForm(),
          ),


        ],
      ),

    );

  }
}
