import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import 'components/top_bar.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';

class MyPetsScreen extends StatelessWidget {
  const MyPetsScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: const <Widget>[
          Expanded(
              flex: 4,
              child: MyPetsTopBanner()
          ),
          Expanded(
              flex: 12,
              child: DashboardContent()
          ),
          Expanded(
              flex: 3,
              child:BottomNav()
          )

        ],
      ),

    );

  }
}
