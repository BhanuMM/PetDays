import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/Screens/PetDashboard/Pet_Dashboard_Screen.dart';
import 'package:mobile/Screens/PetDiary/Pet_DIary_Screen.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/pet.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import '../../../constants.dart';
import '../../models/petImage.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart';

class PetGallery extends StatefulWidget {
  Pet pet = new Pet(
      'petName', 'DOB', 0, 'breedid', 'UserID', 'catID', 'profileImage');

  PetGallery(this.pet, {Key? key}) : super(key: key);

  @override
  State<PetGallery> createState() => _PetGalleryState();
}

class _PetGalleryState extends State<PetGallery> {
  final url = '10.0.2.2:3001';
  final getPetImagesRoute = '/user/getpetimages';
  final addPetImagesRoute = '/user/addpetimage';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  PetImage petImg = PetImage('petID', 'imagePath');
  List imagesDetails = [];
  late File image;
  bool isNewPhotoAdded = false;

  void initState() {
    super.initState();
    this.getPetImages();
  }

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

  Future addImage() async {
    String imagepath = '';
    if(isNewPhotoAdded != null){
      final File img = await saveImage(image.path);
      imagepath = img.path;
    }
    petImg.petID = widget.pet.petID.toString();
    petImg.imagePath = imagepath;

    print(petImg.imagePath);

    // 10.0.2.2
    var res = await http.post(Uri.http(url, addPetImagesRoute),
        headers: headers,
        body: json.encode(
            petImg
        ),
        encoding: encoding
    );

    print(json.decode(res.body));
    if(json.decode(res.body)=="SUCCESS"){
      showDialog<void>(
        context: this.context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Image successfully added"),
            content: const Text('The Image has been successfully added to your pets profile'),
            actions: <Widget>[
              TextButton(
                style: TextButton.styleFrom(
                  textStyle: Theme.of(context).textTheme.labelLarge,
                ),
                child: const Text('okay'),
                onPressed: () {
                  Navigator.pop(context);
                 setState(() {
                   isNewPhotoAdded = false;
                 });

                },
              ),
            ],
          );
        },
      );
    }
  }

  Future pickImage() async {
    final image = await ImagePicker().pickImage(source: ImageSource.gallery);
    if (image == null) return;

    final tempImg = File(image.path);
    isNewPhotoAdded = true;
    setState(() {
      this.image = tempImg;
    });
  }

  Future<File> saveImage(String path) async {
    final directory = await getApplicationDocumentsDirectory();
    final name = basename(path);
    final image = File('${directory.path}/$name');

    return File(path).copy(image.path);

    // return await image.saveTo(image);
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async{

        return true;
      },
      child: Scaffold(
        body: SingleChildScrollView(
            child: Column(
          children: [
            Container(
                child: Stack(
              children: <Widget>[
                Image.file(
                  File(widget.pet.profileImage),
                ),
                // Image.network(item, fit: BoxFit.cover, width: 1000.0),
                Positioned(
                  bottom: 0.0,
                  right: 0.0,
                  child: Container(
                    padding:
                        EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(100),
                        color: Colors.white.withOpacity(0.7),
                      ),
                      height: 40,
                      child: Padding(
                        padding: EdgeInsets.all(8),
                        child: Image.asset(
                            "assets/icons/camera.png"),
                      ),
                    ),
                  ),
                ),
              ],
            )),
            Row(
              children: [
                Spacer(),
                Padding(
                  padding: EdgeInsets.fromLTRB(0, 10, 10, 0),
                  child: ElevatedButton(
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(18.0),

                        ),
                      ),
                      foregroundColor: MaterialStateProperty.all<Color>(Colors.black),
                      backgroundColor: MaterialStateProperty.all<Color>(kPrimaryColor),
                    ),
                    onPressed: () {
                      pickImage();
                    },
                    child: Text(
                      "Add images",
                      style: TextStyle(fontSize: 14),
                    ),
                  ),
                ),
              ],
            ),
            if (isNewPhotoAdded == true) Padding(
              padding: EdgeInsets.symmetric(vertical: 10),
              child: Container(
                      child: Column(children: [
                        Padding(
                          padding: EdgeInsets.fromLTRB(10, 0, 0, 10),
                          child: Row(
                              children: [
                                Text("Preview :",
                                style: TextStyle(
                                  fontSize: 18
                                ),
                                ),
                                Spacer()
                              ]
                          ),
                        ),
                      Image.file(image),
                      Row(
                        children: [
                          Spacer(),
                          Padding(
                            padding: EdgeInsets.fromLTRB(0, 10, 10, 0),
                            child: ElevatedButton(
                              style: ButtonStyle(
                                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                      RoundedRectangleBorder(
                                          borderRadius: BorderRadius.circular(18.0),

                                      ),
                                  ),
                                foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
                                backgroundColor: MaterialStateProperty.all<Color>(Colors.blue),
                              ),
                              onPressed: () {
                                addImage();
                              },
                              child: Text(
                                "Add Image to gallery",
                                style: TextStyle(fontSize: 10),
                              ),
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.fromLTRB(0, 10, 10, 0),
                            child: ElevatedButton(
                              style: ButtonStyle(
                                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                  RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(18.0),
                                      side: BorderSide(color: Colors.red)
                                  ),
                                ),
                                foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
                                backgroundColor: MaterialStateProperty.all<Color>(Colors.red),
                              ),
                              onPressed: () {
                                setState(() {
                                  isNewPhotoAdded = false;
                                });
                                print(isNewPhotoAdded);
                              },
                              child: Text(
                                "Cancel",
                                style: TextStyle(fontSize: 10),
                              ),
                            ),
                          ),
                        ],
                      )
                    ]
                      )
              ),
            ) else Container(),
            Text(
              "Gallery of " + widget.pet.petName,
              style: TextStyle(
                fontSize: 30
              ),
            ),
            Container(
              height: 500,
              child: ListView.builder(
                  scrollDirection: Axis.vertical,
                  padding: const EdgeInsets.all(8),
                  itemCount: imagesDetails.length,
                  itemBuilder: (BuildContext context, int index) {
                    print(imagesDetails[index]);
                    return Column(
                      children: [
                        Container(
                          width:  MediaQuery.of(context).size.width,
                          child:Image.file(File(imagesDetails[index]['ImagePath']))
                      ),
                        SizedBox(
                          height: 10,
                        )
                      ],
                    );
                  }
              ),
            )
          ],
        )
        ),
        bottomNavigationBar: BottomNav(1),
      ),
    );
  }
}
