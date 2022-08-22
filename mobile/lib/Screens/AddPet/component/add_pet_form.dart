import 'package:flutter/material.dart';

import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
class AddPetForm extends StatefulWidget {
  const AddPetForm({
    Key? key,
  }) : super(key: key);
  @override
  State<StatefulWidget> createState() => _AddPetFormState();
}
class _AddPetFormState extends State<AddPetForm>{
  @override
  Widget build(BuildContext context) {
    return Form(
      child: Container(
        width: MediaQuery.of(context).size.width -80,
        child: Column(
        children: [
          TextFormField(
            keyboardType: TextInputType.emailAddress,
            textInputAction: TextInputAction.next,
            cursorColor: formBG,
            onSaved: (email) {},
            decoration: const InputDecoration(
              border: UnderlineInputBorder(),
              labelText: 'Enter your username',
              labelStyle: TextStyle(
                color: Color(0xFFD6D6D6),
              ),
              fillColor: Colors.white,
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: defaultPadding),
            child: TextFormField(
              textInputAction: TextInputAction.done,
              obscureText: true,
              cursorColor: formBG,
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Enter your username',
                labelStyle: TextStyle(
                  color: Color(0xFFD6D6D6),
                ),
                fillColor: Colors.white,
              ),
            ),
          ),

          Hero(
              tag: "login_btn",
              child:SizedBox(
                width: 100,
                height: 30,
                child:ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) {
                          return DashboardScreen();
                        },
                      ),
                    );
                  },
                  child: Text(
                    "Login".toUpperCase(),
                    style: TextStyle(color: Colors.black),
                  ),
                ),
              )
          ),
          const SizedBox(height: defaultPadding),
          AlreadyHaveAnAccountCheck(
            press: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return SignUpScreen();
                  },
                ),
              );
            },
          ),
        ],
      ),
      ),
    );
  }



}
