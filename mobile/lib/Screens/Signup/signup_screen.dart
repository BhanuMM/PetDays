import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import 'components/sign_up_top_image.dart';
import 'components/signup_form.dart';
import 'components/socal_sign_up.dart';

class SignUpScreen extends StatelessWidget {
  const SignUpScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Background(
        child: SingleChildScrollView(
          child: ConstrainedBox(
              constraints: BoxConstraints(
                maxHeight: MediaQuery.of(context).size.height-60,
              ),
              child: IntrinsicHeight(
                  child: const MobileSignupScreen()
              )
          ),


        ),
      ),
    );
  }
}

class MobileSignupScreen extends StatelessWidget {
  const MobileSignupScreen({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return
      Container(
        height:MediaQuery.of(context).size.height,
          decoration: BoxDecoration(
            color: Colors.white,
            image: DecorationImage(
            image: AssetImage("assets/images/welcome2.png"),
            fit: BoxFit.fitWidth,
            alignment: Alignment.topCenter
          ),
          ),
          child:Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[

              Row(
                children: const [
                  Spacer(),
                  Expanded(
                    flex: 8,
                    child: SignUpForm(),
                  ),
                  Spacer(),
                ],
              ),

          ],
        )
      );
  }
}
