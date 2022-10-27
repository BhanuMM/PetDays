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

class _PetMartSearchState extends State<PetMartSearch> {
  String search = '';

  @override
  Widget build(BuildContext context) {
    return Form(
        child: Container(
      width: MediaQuery.of(context).size.width - 80,
      child: Row(
        children: [
          Expanded(
            child: Padding(
              padding: EdgeInsets.all(20),
              child: Container(
                decoration: BoxDecoration(
                    color: Colors.deepPurple[200],
                    borderRadius: BorderRadius.circular(10)),
                child: TextField(
                  decoration: InputDecoration(
                      prefixIcon: Icon(Icons.search),
                      border: InputBorder.none,
                      hintText: "Search your pets"),
                  onChanged: (value) {
                    setState(() {
                      search = value;
                    });
                    print(search);
                  },
                ),
              ),
            ),
          )
        ],
      ),
    ));
  }
}
