import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import 'components/content.dart';
import '../../../constants.dart';
import 'components/top_bar.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
import 'components/search.dart';
import '../../models/petMartAd.dart';

class ViewSingleAd extends StatelessWidget {
  PetMartAd petMartAd = new PetMartAd('adTitle', 'adDescr', 'adImage', 'adPrice', 'adContact', 'adEmail', 'adAddress', 'adProvince', 'adDistrict', 'adStatus', 'paymentStatus', 'adDate', 'adTime', 'userId','none');
  ViewSingleAd(this.petMartAd,{Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

        child:Scaffold(
          body:SingleChildScrollView(

            child: ConstrainedBox(
              constraints: BoxConstraints(
                maxHeight: MediaQuery.of(context).size.height *2-500,
              ),
              child:Column(
                children: [
                  petMartTopBanner(),
                  PetMartHomeContent(petMartAd),

                ],
              ),

            ),
          ),
          bottomNavigationBar: BottomNav(1),

        )
    );

  }
}
