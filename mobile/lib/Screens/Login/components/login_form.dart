import 'package:flutter/material.dart';

import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
import 'package:http/http.dart' as http;
import '../../../models/user.dart';
class LoginForm extends StatefulWidget {
  const LoginForm({
    Key? key,
  }) : super(key: key);

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  Future save() async {
    var res = await http.post(Uri.parse("http://10.0.2.2:3001/signin"),
        headers: <String, String>{
          'Context-Type': 'application/json;charSet=UTF-8'
        },
        body: <String, String>{
          'email': user.email,
          'password': user.password
        });
    print(res.body);
    Navigator.push(
        context, new MaterialPageRoute(builder: (context) => DashboardScreen()));
  }

  User user = User('','');
  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,

      child: Column(
        children: [
          TextFormField(
            controller: TextEditingController(text: user.email),
            onChanged: (value) {
              user.email = value;
            },
            keyboardType: TextInputType.emailAddress,
            textInputAction: TextInputAction.next,
            cursorColor: formBG,
            onSaved: (email) {},
            decoration: InputDecoration(
              hintText: "Your email",
              contentPadding: const EdgeInsets.symmetric(vertical: 1.0, horizontal: 3.0),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(10.0)),
              prefixIcon: Padding(
                padding: const EdgeInsets.all(defaultPadding),
                child: Icon(Icons.person),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: defaultPadding),
            child: TextFormField(
              controller: TextEditingController(text: user.password),
              onChanged: (value) {
                user.password = value;
              },
              textInputAction: TextInputAction.done,
              obscureText: true,
              cursorColor: formBG,
              decoration: InputDecoration(
                hintText: "Password  ",
                contentPadding: const EdgeInsets.symmetric(vertical: 1.0, horizontal: 3.0),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10.0)),
                prefixIcon: Padding(
                  padding: const EdgeInsets.all(defaultPadding),
                  child: Icon(Icons.lock),
                ),
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
                  save();
                  // Navigator.push(
                  //   context,
                  //   MaterialPageRoute(
                  //     builder: (context) {
                  //       return DashboardScreen();
                  //     },
                  //   ),
                  // );
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
    );
  }
}
