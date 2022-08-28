import 'package:flutter/material.dart';

import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../AddPetStep2/component/add_pet_form.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../AddPetStep2/add_pet_screen.dart';

class PetMartSearch extends StatefulWidget {
  const PetMartSearch({
    Key? key,
  }) : super(key: key);
  @override
  State<StatefulWidget> createState() => _PetMartSearchState();
}
class _PetMartSearchState extends State<PetMartSearch>{
  @override
  Widget build(BuildContext context) {
    return  Form(
        child:Container (
          width: MediaQuery.of(context).size.width -80,
          child: Row(
          children: [
            Expanded(
                child: TextFormField(
                  keyboardType: TextInputType.name,
                  textInputAction: TextInputAction.next,
                  decoration: const InputDecoration(

                    border: OutlineInputBorder(),

                    labelStyle: TextStyle(
                      color: Color(0xFFD6D6D6),
                    ),
                    hintText: "search in petmart",
                    // prefixIcon: Padding(
                    //   padding: const EdgeInsets.all(defaultPadding),
                    //   child: Icon(Icons.search),
                    // ),
                    fillColor: Colors.white,
                  ),
                )
            ),
            IconButton(
              icon: const Icon(Icons.search),
              tooltip: 'Increase volume by 10',
              onPressed: () {
                setState(() {

                });
              },
            ),

          ],
        ),
        )
      );
  }

  }