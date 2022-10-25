import 'dart:convert';
import '../../../models/globals.dart' as globals;
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../Login/login_screen.dart';
import '../../../models/user.dart';

class SignUpForm extends StatefulWidget {
  const SignUpForm({
    Key? key,
  }) : super(key: key);

  @override
  State<SignUpForm> createState() => _SignUpFormState();
}

class _SignUpFormState extends State<SignUpForm> {
  String pw = '';
  String pw2 = '';
  final _formKey = GlobalKey<FormState>();

  final registerRoute = '/auth/register';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  User user = User('','','','','','');

  Future register() async {
    // 10.0.2.2

    var res = await http.post(Uri.http(globals.url,'/auth/register'),
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

    print(res.body);

    Map<String, dynamic> userMap = jsonDecode(res.body);
    if(userMap?.containsKey("error") ?? false){
      String err = userMap['error'];
      showDialog<void>(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Error"),
            content: Text(err),
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
      showDialog<void>(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Verify your email"),
            content: Text("please check your email and verify your email to continue"),
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
      Navigator.push(
          context, new MaterialPageRoute(builder: (context) => LoginScreen()));
    }

  }
  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: TextEditingController(text: user.userName),
            onChanged: (value) {
              user.userName = value;
            },
            keyboardType: TextInputType.text,
            textInputAction: TextInputAction.next,
            cursorColor: kPrimaryColor,
            onSaved: (email) {},
            decoration: InputDecoration(
              hintText: "Username",
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(10.0)),
              prefixIcon: Padding(
                padding: const EdgeInsets.all(defaultPadding),
                child: Icon(Icons.person),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: defaultPadding),
            child: TextFormField(
              controller: TextEditingController(text: user.email),
              onChanged: (value) {
                user.email = value;
              },
              keyboardType: TextInputType.emailAddress,
              textInputAction: TextInputAction.next,
              cursorColor: kPrimaryColor,
              onSaved: (email) {},
              decoration: InputDecoration(
                hintText: "Email",
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10.0)),
                prefixIcon: Padding(
                  padding: const EdgeInsets.all(defaultPadding),
                  child: Icon(Icons.person),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: defaultPadding),

            child: TextFormField(
              controller: TextEditingController(text: user.password),
              onChanged: (value) {
                user.password = value;
                pw = value;
              },
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Enter password';
                } else if (RegExp(
                "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])/")
                    .hasMatch(value)) {
                  return null;
                } else {
                  return 'Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character';
                }
              },
              textInputAction: TextInputAction.done,
              obscureText: true,
              cursorColor: kPrimaryColor,
              decoration: InputDecoration(
                hintText: "Password",
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10.0)),
                prefixIcon: Padding(
                  padding: const EdgeInsets.all(defaultPadding),
                  child: Icon(Icons.lock),
                ),
              ),
            ),
          ),

          Padding(
            padding: const EdgeInsets.symmetric(vertical: defaultPadding),
            child: TextFormField(
              controller: TextEditingController(text: user.userName),
              onChanged: (value) {
                user.confirmpassword = value;
                pw2 = value;
              },
              textInputAction: TextInputAction.done,
              obscureText: true,
              cursorColor: kPrimaryColor,
              decoration: InputDecoration(
                hintText: "Re enter password",
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10.0)),
                prefixIcon: Padding(
                  padding: const EdgeInsets.all(defaultPadding),
                  child: Icon(Icons.lock),
                ),
              ),
            ),
          ),
          const SizedBox(height: defaultPadding / 2),
          ElevatedButton(
            onPressed: () {
              if(_formKey.currentState!.validate()){
                if(pw != pw2){
                  showDialog<void>(
                    context: context,
                    builder: (BuildContext context) {
                      return AlertDialog(
                        title: const Text("Password doesn't match"),
                        content: const Text('two passwords doesnt match'),
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
                  register();
                }
              } else {
                showDialog<void>(
                  context: context,
                  builder: (BuildContext context) {
                    return AlertDialog(
                      title: const Text("Password doesn't meet requirements"),
                      content: const Text('Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character'),
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
              }
            },
            child: Text("Sign Up".toUpperCase()),
          ),
          const SizedBox(height: defaultPadding),
          AlreadyHaveAnAccountCheck(
            login: false,
            press: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return LoginScreen();
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