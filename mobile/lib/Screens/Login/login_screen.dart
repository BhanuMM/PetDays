import 'package:flutter/material.dart';
import 'package:mobile/responsive.dart';

import '../../components/background.dart';
import 'components/login_form.dart';
import 'components/login_screen_top_image.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: SingleChildScrollView(
         physics: ClampingScrollPhysics(),
             child: ConstrainedBox(
                 constraints: BoxConstraints(
                   minWidth: MediaQuery.of(context).size.width,
                   minHeight: MediaQuery.of(context).size.height,
                 ),
                 child: IntrinsicHeight(
                     child: MobileLoginScreen()
                 )
             ),

        ),
      ),
    );
  }
}

class MobileLoginScreen extends StatelessWidget {
  const MobileLoginScreen({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(

      decoration: new BoxDecoration(color: Colors.white),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Expanded(child: const LoginScreenTopImage()),
          Expanded(
            child: Row(
              children: const [
                Spacer(),
                Expanded(
                  flex: 11,
                  child: LoginForm(),
                ),
                Spacer(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
