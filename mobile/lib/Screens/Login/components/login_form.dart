import 'dart:convert';
import '../../../models/globals.dart' as globals;
import 'package:flutter/material.dart';
import 'package:mobile/components/background.dart';

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
  final url = '10.0.2.2:3001';
  final loginroute = '/auth/login';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  bool incorrectCred = false;
  Future save() async {
    // 10.0.2.2
    var res = await http.post(Uri.http(url,loginroute),
        headers: headers,
        body: json.encode(
          user
        // {
        //   'email': user.email,
        //   'password': user.password
        // }
        ),
        encoding : encoding
    );

    print(Uri.parse('http://localhost:3001/auth/login'));
    print(json.decode(res.body));

    Map<String, dynamic> userMap = jsonDecode(res.body);
    if(userMap?.containsKey("error") ?? false){
      showDialog<void>(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Credentials doesn't match"),
            content: const Text('wrong username or password'),
            actions: <Widget>[
              TextButton(
                style: TextButton.styleFrom(
                  textStyle: Theme.of(context).textTheme.labelLarge,
                ),
                child: const Text('okay'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        },
      );
    }else{
      user = User.fromJson(userMap);
      globals.uemail = user.email;
      Navigator.push(
          context, new MaterialPageRoute(builder: (context) => DashboardScreen()));
    }

  }

  User user = User('','','','');
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Form(
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
                // Text((() {
                //   if(incorrectCred){
                //     return "Wrong username or password";}
                //   else {
                //     return "";
                //   }
                //   })(),
                //   style: TextStyle(
                //     color: Colors.red,
                //     fontSize: 16,
                //     fontWeight: FontWeight.bold
                //   ),
                // ),
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
      ),
    );
  }
}
