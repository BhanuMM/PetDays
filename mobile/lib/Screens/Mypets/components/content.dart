import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/Screens/AddPet/component/add_pet_form.dart';
import '../../AddPet/add_pet_screen.dart';
import '../../../constants.dart';
import 'card.dart';

class MyPetContent extends StatelessWidget {
  const MyPetContent({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
        child:Container(
          child:Column(
            children:[
              Padding (
                padding: const EdgeInsets.symmetric(vertical: 20),
                child:ElevatedButton(
                onPressed: () {
                  Navigator.push(
                  context,
                  MaterialPageRoute(
                  builder: (context) {
                  return AddPetScreen();
                  },
                  ),
                  );
                  },
                child: Text("Add Pet"),
              ),
              ),
              Row(
              children: [
                Spacer(),
                ItemCard(),
                Spacer(
                  flex: 7,
                ),

              ]
              ),
            ]

          ),
        )


    )
    ;
  }
  }
