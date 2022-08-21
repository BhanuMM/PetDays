import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../constants.dart';

class LoginScreenTopImage extends StatelessWidget {
  const LoginScreenTopImage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [

        Row(
          children: [
            Container(
              child: Image.asset(
                  "assets/images/welcome.png",
              width:MediaQuery.of(context).size.width ,),
            ),
          ],
        ),
      ],
    );
  }
}