import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';
import 'add_pet_form.dart';



class AddPetScreenContent extends StatelessWidget {
  const AddPetScreenContent({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children:  <Widget>[
          Row(
            children: [
              const Spacer(),
              Image.asset(
                "assets/images/step2.png",
                width: 150,
                ),
              const Spacer(),
            ],
          ),
          const Text(
              "Profile Picture",
              style: TextStyle(
              fontSize: 35,
              fontWeight: FontWeight.bold
            ),
          ),
          const Text(
            "Add a profile picture for your pet’s profile",
            style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300
            ),
            textAlign: TextAlign.center,
          ),
          const Expanded(
            flex: 4,
            child:AddPetFormStep2(),
          ),


        ],
      ),

    );

  }
}
