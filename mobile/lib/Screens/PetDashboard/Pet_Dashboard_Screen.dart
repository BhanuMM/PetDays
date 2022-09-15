import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';
import '../PetDiary/Pet_DIary_Screen.dart';

class PetDashboard extends StatelessWidget {
  const PetDashboard({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child:Scaffold(
        body:SingleChildScrollView(

          child: ConstrainedBox(
            constraints: BoxConstraints(
              maxHeight: MediaQuery.of(context).size.height ,
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children:  <Widget>[

                Expanded(
                  flex: 10,
                  child: PetDiaryContent(),
                ),

              ],
            ),
          ) ,
      ),
       bottomNavigationBar: BottomNav(0),
      )

    );

  }
}
