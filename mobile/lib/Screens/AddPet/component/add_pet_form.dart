import 'dart:io';

import 'package:flutter/material.dart';
import 'dart:convert';
import '../../../models/globals.dart' as globals;
import 'package:http/http.dart' as http;
import '../../../components/already_have_an_account_acheck.dart';
import '../../../constants.dart';
import '../../AddPetStep2/component/add_pet_form.dart';
import '../../Signup/signup_screen.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../AddPetStep2/add_pet_screen.dart';
import '../../../models/pet.dart';
import 'package:intl/intl.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart';



class AddPetForm extends StatefulWidget {
  const AddPetForm({
    Key? key,
  }) : super(key: key);
  @override
  State<StatefulWidget> createState() => _AddPetFormState();
}

class _AddPetFormState extends State<AddPetForm>{
  late DateTime? _dateTime = null;
  String initialCat = 'Dog';
  String initialBreed = 'German shepherd';
  var Catagories = [
    'Dog',
    'Cat',
  ];
  var DogBreeds = [

    'German shepherd',
    'Labrador',
    'Dachshund',
    'Beagle',
  ];


  final petCatRoute = '/admin/getpetcategories';
  final petBreedRoute = '/admin/getpetbreeds';
  final addPetRoute = '/user/addpet';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  late List<dynamic> petcatagories;
  String _SelectedCat = 'Dog';
  String _SelectedBreed = 'select';
  String _SelectedCatID = '';
  String _SelectedBreedID = '';
  DateTime? dob = new DateTime(1);
  List data = [];
  List breeds = [];
  Pet pet = Pet('','',0,'','','','');
  late File image;

  Future addPet() async {
    String imagepath = '';
    if(image != null){
      final File img = await saveImage(image.path);
      imagepath = img.path;
    }
    pet.UserID = globals.uid.toString();
    pet.catID = _SelectedCatID;
    pet.breedid = _SelectedBreedID;
    pet.profileImage = imagepath;

    final DateTime now = DateTime.now();
    final DateFormat formatter = DateFormat('yyyy-MM-dd');
    final String formatted = formatter.format(DateTime.parse(dob.toString()));
    pet.DOB = dob.toString();
    final splitted = pet.DOB.split(' ');
    print(splitted[0]);
    pet.DOB = splitted[0];
    print(pet.petName);
    print(pet.DOB);
    print(pet.weight);
    print(pet.breedid);
    print(pet.UserID);
    print(pet.catID);
    print(pet.profileImage);
    // 10.0.2.2
    var res = await http.post(Uri.http(globals.url, addPetRoute),
        headers: headers,
        body: json.encode(
            pet
        ),
        encoding: encoding
    );

    print(json.decode(res.body));
    if(json.decode(res.body)=="SUCCESS"){
      showDialog<void>(
        context: this.context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Pet successfully added"),
            content: const Text('The pet has been successfully added. you can enter pets profile through home'),
            actions: <Widget>[
              TextButton(
                style: TextButton.styleFrom(
                  textStyle: Theme.of(context).textTheme.labelLarge,
                ),
                child: const Text('okay'),
                onPressed: () {
                  Navigator.push(
                      context, new MaterialPageRoute(builder: (context) => DashboardScreen()));
                },
              ),
            ],
          );
        },
      );
    }

  }
  Future getPetCats() async {
    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,petCatRoute),
    );

    final list = json.decode(res.body) as List<dynamic>;
    setState(() {
      data = list;
      initialCat =data[0]['pcatName'];
    });
    print(list);


    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  Future getPetBreeds() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(globals.url,petBreedRoute+'/'+_SelectedCatID),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    List temp = list;
    _SelectedBreed = temp[0]['breedName'];
    setState(() {
      breeds = list ;
    });



    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  @override
  void initState() {
    super.initState();
    this.getPetCats();
  }

  void getSelectedCatID() {
    data.map((item) {
      if (item['pcatName'].toString() == _SelectedCat){
        _SelectedCatID = item['pcatID'].toString();
        print(_SelectedCatID);
      }
    }).toList();
  }
  void getSelectedBreedID() {
    breeds.map((item) {
      if (item['breedName'].toString() == _SelectedBreed){
        _SelectedBreedID = item['breedID'].toString();
        print(_SelectedBreedID);
      }
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      child: SingleChildScrollView(
        child:Container(
        width: MediaQuery.of(context).size.width -80,
        child: Column(
        children: [
          // FutureBuilder<dynamic>(
          //   future: getPetCats(),
          //   builder: (context, data) {
          //     var cats = data.data as List<PetCatagory>;
          //     return Text(data.hasData.toString());
          //   },
          // ),
          Padding(
              padding: const EdgeInsets.only(top: 20),
            child: Container(
              child: Row(
                children: const [
                  Text(
                      "Pet Name",
                    style: TextStyle(
                      fontSize: 18,
                    ),
                  ),
                ],
              )
            ),
          ),
          TextFormField(
            controller: TextEditingController(text: pet.petName),
            onChanged: (value) {
              pet.petName = value;
            },
            keyboardType: TextInputType.emailAddress,
            textInputAction: TextInputAction.next,
            cursorColor: formBG,
            onSaved: (email) {},
            decoration: const InputDecoration(
              border: UnderlineInputBorder(),
              labelText: 'Enter your pet\'s name here',
              labelStyle: TextStyle(
                color: Color(0xFFD6D6D6),
              ),
              fillColor: Colors.white,
            ),
          ),
          const SizedBox(height: formPadding),
              Column(
                children:  [
                   Row(
                     children: const [
                       Text(
                         "DOB",
                         style: TextStyle(
                           fontSize: 18,
                         ),
                       ),
                       Spacer()
                     ],
                   ),

                  Row(
                    children: [

                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: defaultPadding,horizontal: 10),
                        child: Text(
                            _dateTime == null? "Select Date" : _dateTime.toString().split(' ')[0],
                          style:  TextStyle(
                            color: _dateTime == null? formHintColor : Colors.black,
                          ),
                        ),
                      ),
                      const Spacer(),
                      ElevatedButton(
                          onPressed: (){
                            showDatePicker(
                                context: context,
                                initialDate: DateTime.now(),
                                firstDate: DateTime(2000),
                                lastDate:  DateTime.now()
                            ).then((date){
                              setState(() {
                                dob= date;
                                _dateTime = date;
                              });
                            });
                          },
                          child: Text("Select")
                      ),

                ],
              ),



            ],
          ),
          const SizedBox(height: formPadding),
          Container(
            child: Column(
              children: [
                Row(
                  children: const [
                    Text(
                      "Select pet Catagory",
                      style: TextStyle(
                        fontSize: 18,
                      ),
                    ),
                  ],
                ),
                Container(
                  width: MediaQuery.of(context).size.width -80,
                  child: DropdownButton(

                    // // Initial Value
                   value: _SelectedCat,
                    hint: Text(
                        "Select a pet Catagory",
                      style: TextStyle(
                        color: formHintColor
                      ),
                    ),

                    // Down Arrow Icon
                    isExpanded: true,
                    icon: const Icon(
                        Icons.keyboard_arrow_down,
                    ),

                    // Array list of items
                    items: data.map((item) {
                      return DropdownMenuItem(
                        value: item['pcatName'],
                        child: Text(item['pcatName'].toString()),
                      );
                    }).toList(),
                    // After selecting the desired option,it will
                    // change button value to selected value
                    onChanged: (newValue) {
                      setState(() {
                        _SelectedCat = newValue.toString();
                        getSelectedCatID();
                        getPetBreeds();
                      }
                      );
                    },
                  ),
                )
              ],
            ),
          ),
          const SizedBox(height: formPadding),
          Container(
            child: Column(
              children: [
                Row(
                  children: const [
                    Text(
                      "Select pet Breed",
                      style: TextStyle(
                        fontSize: 18,
                      ),
                    ),
                  ],
                ),
                Container(
                  width: MediaQuery.of(context).size.width -80,
                  child: DropdownButton(

                    // // Initial Value
                    value: _SelectedBreed,
                    isExpanded: true,
                    hint: const Text(
                        "Select a pet breed",
                      style: TextStyle(
                          color: formHintColor
                      ),
                    ),

                    // Down Arrow Icon

                    icon: const Icon(
                      Icons.keyboard_arrow_down,
                    ),

                    // Array list of items
                    items: breeds.map((item) {
                      return DropdownMenuItem(
                        value: item['breedName'],
                        child: Text(item['breedName'].toString()),
                      );
                    }).toList(),
                    // After selecting the desired option,it will
                    // change button value to selected value
                    onChanged: (newValue) {
                      setState(() {
                        _SelectedBreed = newValue.toString();
                        getSelectedBreedID();
                      }
                      );
                    },
                  ),
                )
              ],
            ),
          ),
          const SizedBox(height: formPadding),
          Padding(
            padding: const EdgeInsets.only(top: 0),
            child: Container(
                child: Row(
                  children: const [
                    Text(
                      "Weight",
                      style: TextStyle(
                        fontSize: 18,
                      ),
                    ),
                  ],
                )
            ),
          ),
          TextFormField(
            // controller: TextEditingController(),
            onChanged: (value) {
              pet.weight = int.tryParse(value);
            },
            enabled: true,
            keyboardType: TextInputType.number,
            textInputAction: TextInputAction.next,
            cursorColor: formBG,
            decoration: const InputDecoration(
              border: UnderlineInputBorder(),
              labelText: 'Enter your pet\'s Weight here',
              labelStyle: TextStyle(
                color: formHintColor,
              ),
              fillColor: Colors.white,
            ),
          ),
          Padding(
              padding: const EdgeInsets.only(top: 20,bottom: 20),
              child:SizedBox(
                width: 250,
                height: 60,
                child:ElevatedButton(
                  onPressed: () {
                    pickImage();
                  },
                  child: Text(
                    "Add Pet profile Picture".toUpperCase(),
                    style: TextStyle(color: Colors.black),
                  ),
                ),
              )
          ),
        Padding(
          padding: const EdgeInsets.only(top: 20,bottom: 20),
          child:SizedBox(
            width: 100,
            height: 30,
            child:ElevatedButton(
              onPressed: () {
                addPet();
              },
              child: Text(
                "Next".toUpperCase(),
                style: TextStyle(color: Colors.black),
              ),
            ),
          )
        )
        ],

      ),
      ),

      )
    );
  }

  Future pickImage() async{
    final image = await ImagePicker().pickImage(source: ImageSource.gallery);
    if(image == null) return;

    final tempImg = File(image.path);
    setState(() {
      this.image = tempImg;
    });
  }

  Future<File> saveImage(String path) async {
    final directory = await getApplicationDocumentsDirectory();
    final name= basename(path);
    final image = File('${directory.path}/$name');

    return File(path).copy(image.path);
    // return await image.saveTo(image);
  }





}
