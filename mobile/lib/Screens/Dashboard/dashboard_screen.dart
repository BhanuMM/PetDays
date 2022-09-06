import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import 'components/top_bar.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

          child:Scaffold(
          body: DashboardContent(),

          bottomNavigationBar: BottomNav(1),
          )

    );

  }
  }
