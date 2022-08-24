import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import '../Login/login_screen.dart';

import '../../../constants.dart';


class ProfileSettings extends StatelessWidget {
  const ProfileSettings({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

        child:Scaffold(
          body:SingleChildScrollView(

            child: ConstrainedBox(
              constraints: BoxConstraints(
                maxHeight: MediaQuery.of(context).size.height *2-300,
              ),
              child: Column(
                children: [
                  SizedBox(height: defaultPadding,),
                  Row(
                  children: [
                    Spacer(),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) {
                              return LoginScreen();
                            },
                          ),
                        );
                      },
                      child: Text("Log Out"),
                    ),
                    Spacer()
                  ],
                ),
              ]
              )



              ),
            ) ,

          bottomNavigationBar: BottomNav(1),
        )

    );

  }
}
