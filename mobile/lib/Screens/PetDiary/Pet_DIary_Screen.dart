import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';

class PetDiaryScreen extends StatelessWidget {
  const PetDiaryScreen({Key? key}) : super(key: key);
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
                mainAxisAlignment: MainAxisAlignment.start,
                children: const <Widget>[
                  Expanded(
                      flex: 2,
                      child: petDashboardTopBanner()
                  ),
                  Expanded(
                    flex: 10,
                    child: PetDashboardContent(),
                  ),

                ],
              ),
            ) ,
          ),
          bottomNavigationBar: BottomNav(1),
        )

    );

  }
}
