import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';

class PetDashboard extends StatelessWidget {
  const PetDashboard({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child:SingleChildScrollView(

        child:ConstrainedBox(
        constraints: BoxConstraints(
            maxHeight: MediaQuery.of(context).size.height + 400,
        ),
        child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: const <Widget>[
          Expanded(
              flex: 2,
              child: petDashboardTopBanner()
          ),
          Expanded(
            flex: 8,
            child: PetDashboardContent(),
          )
        ],
      ),
      )
      )

    );

  }
}
