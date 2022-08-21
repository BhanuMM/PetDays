import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../../constants.dart';
import 'card.dart';

class DashboardContent extends StatelessWidget {
  const DashboardContent({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
        child:Container(
          child: Row(
            children: [
              Spacer(),
              ItemCard(),
              Spacer(),
              ItemCard(),
              Spacer(),
            ],
          ),
        )


    )
    ;
  }
  }
