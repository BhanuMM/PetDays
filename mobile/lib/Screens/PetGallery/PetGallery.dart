import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/pet.dart';
import 'package:mobile/responsive.dart';
import '../../components/background.dart';
import '../../components/bottom_nav.dart';
import '../../../constants.dart';
import '../PetDiary/Pet_DIary_Screen.dart';
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
  final addPetImagesRoute = '/user/getpetimages';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
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

  Future addImage() async {}

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
    return Scaffold(
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
                  child: Text(
                    'Update profile pic',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 14.0,
                      fontWeight: FontWeight.bold,
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
                  onPressed: () {
                    pickImage();
                  },
                  child: Text(
                    "+",
                    style: TextStyle(fontSize: 30),
                  ),
                ),
              ),
            ],
          ),
          (isNewPhotoAdded == true
              ? Container(
                  child: Column(children: [
                  Image.file(image),
                  Row(
                    children: [
                      Spacer(),
                      Padding(
                        padding: EdgeInsets.fromLTRB(0, 10, 10, 0),
                        child: ElevatedButton(
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
                ]))
              : Container())
        ],
      )),
      bottomNavigationBar: BottomNav(1),
    );
  }
}
