import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';

class Background extends StatelessWidget {
  final Widget child;
  const Background({
    Key? key,
    required this.child,
    this.topImage = "assets/images/main_top.png",
    this.bottomImage = "assets/images/login_bottom.png",
  }) : super(key: key);

  final String topImage, bottomImage;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,

      body: Container(
        width: double.infinity,
        height: MediaQuery.of(context).size.height,

        child: Stack(
          alignment: Alignment.center,
          children: <Widget>[

            SafeArea(child: child),
          ],
        ),
      ),
    );
  }
}
