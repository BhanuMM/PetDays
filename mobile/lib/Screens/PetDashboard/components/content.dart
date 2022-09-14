import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import '../../ViewVaccination/View_Vaccinations_Screen.dart';
import '../../PetDiary/Pet_DIary_Screen.dart';
import '../../Reminders/Reminders_Screen.dart';
import 'package:carousel_slider/carousel_slider.dart';

class PetDiaryContent extends StatefulWidget{
  @override
  _PetDiaryContentState createState() => _PetDiaryContentState();


}
class _PetDiaryContentState extends State<PetDiaryContent> {



  @override
  Widget build(BuildContext context) {
    final List<String> imgList = [
      'pp1.jpg',
      'pp2.jpg',
      'pp3.jpg',
      'pp4.jpg',
    ];
    final List<Widget> imageSliders = imgList.map((item) => Container(
      child: Container(
        margin: EdgeInsets.all(5.0),
        child: ClipRRect(
            borderRadius: BorderRadius.all(Radius.circular(5.0)),
            child: Stack(
              children: <Widget>[
                Image.asset(
                  "assets/images/$item",

                ),
                // Image.network(item, fit: BoxFit.cover, width: 1000.0),
                Positioned(
                  bottom: 0.0,
                  left: 0.0,
                  right: 0.0,
                  child: Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [
                          Color.fromARGB(200, 0, 0, 0),
                          Color.fromARGB(0, 0, 0, 0)
                        ],
                        begin: Alignment.bottomCenter,
                        end: Alignment.topCenter,
                      ),
                    ),
                    padding: EdgeInsets.symmetric(
                        vertical: 10.0, horizontal: 20.0),
                    child: Text(
                      'Images of Snowy',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 20.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ],
            )),
      ),
    ))
        .toList();
    return SingleChildScrollView(
        child:Container(
          child:Column(
              children:[

                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: const [

                        SizedBox(height: 6,),
                        Text("Snowy's Diary",
                          style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold
                          ),)
                      ],
                    ),

                  ],
                ),
                SizedBox(height: 20,),
                Container(
                    child: CarouselSlider(
                      options: CarouselOptions(
                        aspectRatio: 2.0,
                        enlargeCenterPage: true,
                        enableInfiniteScroll: false,
                        initialPage: 2,
                        autoPlay: true,
                      ),
                      items: imageSliders,
                    )
                ),
                SizedBox(height: 20,),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: "Snowy's Diary",ado: PetDiaryScreen(),img: "pett"),
                      Spacer(),
                      PetDashboardItemCard(label: "Reminders",ado: RemindersScreen(),img: "reminder"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: "Growth chart",ado: PetDiaryScreen(),img: "petd"),
                      Spacer(),
                      PetDashboardItemCard(label: "Medications",ado: PetDiaryScreen(),img: "medication"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: "Vaccinations",ado: ViewVaccinationsScreen(),img: "vaccine"),
                      Spacer(),
                      PetDashboardItemCard(label: "Edit profile",ado: PetDiaryScreen(),img: "settings"),
                      Spacer(),
                    ]
                ),


                // SizedBox(height: formPadding,),
                // Row(
                //     children: [
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Add Medication Details',ado: DashboardScreen()),
                //       Spacer(),
                //       PetDashboardItemCard(label: 'View Growth chart',ado: DashboardScreen()),
                //       Spacer(),
                //     ]
                // ),
                // SizedBox(height: formPadding,),
                // Row(
                //     children: [
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Add Vaccination Details',ado: DashboardScreen()),
                //       Spacer(),
                //       PetDashboardItemCard(label: 'Edit Pet Profile',ado: DashboardScreen()),
                //       Spacer(),
                //     ]
                // ),
              ]

          ),
        )


    )
    ;
  }
}
