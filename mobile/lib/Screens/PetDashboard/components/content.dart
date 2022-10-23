import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/models/pet.dart';
import '../../../constants.dart';
import 'card.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';
import '../../ViewVaccination/View_Vaccinations_Screen.dart';
import '../../PetDiary/Pet_DIary_Screen.dart';
import '../../Reminders/Reminders_Screen.dart';
import 'package:carousel_slider/carousel_slider.dart';
import '../../PetGallery/PetGallery.dart';
import 'package:http/http.dart' as http;
import '../../../models/petImage.dart';

class PetDashboardContent extends StatefulWidget{
  Pet pet = new Pet('petName', 'DOB', 0, 'breedid', 'UserID', 'catID', 'profileImage');
  PetDashboardContent(Pet pet) {
   this.pet =pet;
  }

  @override
  _PetDashboardContentState createState() => _PetDashboardContentState(pet);


}
class _PetDashboardContentState extends State<PetDashboardContent> {
  Pet pet = new Pet('petName', 'DOB', 0, 'breedid', 'UserID', 'catID', 'profileImage');
  _PetDashboardContentState(Pet pet) {
    this.pet =pet;
  }
  final url = '10.0.2.2:3001';
  final getPetImagesRoute = '/user/getpetimages';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  PetImage petImg = PetImage('petID', 'imagePath');
  List imagesDetails = [];

  Future getPetImages() async {
    // 10.0.2.2
    final res = await http.get(
      Uri.http(url, getPetImagesRoute + '/' + widget.pet.petID.toString()),
    );

    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      imagesDetails = list;
    });
    print(imagesDetails);

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();
  }
  @override
  void initState() {
    getPetImages();
    super.initState();
  }


  @override
  Widget build(BuildContext context) {

    final List<Widget> imageSliders = imagesDetails.map((item) => GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return PetGallery(pet);
            },
          ),
        );
      },
      child: Container(
        child: Container(
          margin: EdgeInsets.all(5.0),
          child: ClipRRect(
              borderRadius: BorderRadius.all(Radius.circular(5.0)),
              child: Stack(
                children: <Widget>[
                  Image.file(
                    File(item['ImagePath']),
                  ),
                  // Image.network(item, fit: BoxFit.cover, width: 1000.0),
                ],
              )
          ),
        ),
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
                      children:  [

                        SizedBox(height: 6,),
                        GestureDetector(

                          child: Text("Pet Gallery",
                            style: TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.bold
                            ),),
                        )
                      ],
                    ),

                  ],
                ),
                SizedBox(height: 10,),
                Container(
                    child: CarouselSlider(
                      options: CarouselOptions(
                        aspectRatio: 2.0,
                        enlargeCenterPage: true,
                        enableInfiniteScroll: true,
                        initialPage: 2,
                        autoPlay: false,
                      ),
                      items: imageSliders,
                    )
                ),
                SizedBox(height: 10,),
                Row(
                  children: [
                    Spacer(),
                    GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) {
                                return PetGallery(pet);
                              },
                            ),
                          );
                        },
                        child: Padding(
                            padding: EdgeInsets.fromLTRB(0, 0, 30, 0),
                            child: Text("view full gallery")
                        )
                    )
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children:  [

                        SizedBox(height: 6,),
                        Text("Pet Diary",
                          style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold
                          ),)
                      ],
                    ),

                  ],
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: "Pet Diary",ado: PetDiaryScreen(pet),img: "pett"),
                      Spacer(),
                      PetDashboardItemCard(label: "Reminders",ado: RemindersScreen(pet.petID.toString()),img: "reminder"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: "Diet Plans",ado: PetDiaryScreen(pet),img: "petd"),
                      Spacer(),
                      PetDashboardItemCard(label: "Medications",ado: PetDiaryScreen(pet),img: "medication"),
                      Spacer(),
                    ]
                ),
                Row(
                    children: [
                      Spacer(),
                      PetDashboardItemCard(label: "Vaccinations",ado: ViewVaccinationsScreen(pet.petID.toString()),img: "vaccine"),
                      Spacer(),
                      PetDashboardItemCard(label: "Edit profile",ado: PetDiaryScreen(pet),img: "settings"),
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
