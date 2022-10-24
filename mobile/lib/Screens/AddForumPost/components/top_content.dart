import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';




class AddPostTopContent extends StatelessWidget {
  const AddPostTopContent({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return

       Padding(
         padding: EdgeInsets.symmetric(vertical: 10),
         child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children:  <Widget>[
            const Text(
              "Add Forum Posts",
              style: TextStyle(
                  fontSize: 35,
                  fontWeight: FontWeight.bold
              ),
            ),
            const Text(
              "Describe your problem as much as you can",
              style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w300
              ),
              textAlign: TextAlign.center,
            ),
          ],
      ),
       );



  }
}
