import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import 'component/content.dart';
import '../../components/bottom_nav.dart';
import 'component/add_pet_topbar.dart';


class AddPetScreenStep2 extends StatelessWidget {
  const AddPetScreenStep2({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: const <Widget>[
          Expanded(
            flex: 1,
            child:AddPetTopBanner(),
          ),
          Expanded(
              flex: 9,
              child:AddPetScreenContent(),
          ),


        ],
      ),

    );

  }
}
