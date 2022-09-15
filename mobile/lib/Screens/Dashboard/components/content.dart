import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'dart:convert';
import '../../../constants.dart';
import 'card.dart';
import '../../PetDashboard/Pet_Dashboard_Screen.dart';
import '../../AddPet/add_pet_screen.dart';
import '../../Mypets/my_pets_screen.dart';
import '../../PetMartHome/Pet_Mart_Home_Screen.dart';
import '../../../models/globals.dart' as globals;
import 'package:intl/intl.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart';
import 'package:http/http.dart' as http;
import '../../../models/pet.dart';
class DashboardContent extends StatefulWidget {
  const DashboardContent({
    Key? key,
  }) : super(key: key);

  @override
  State<DashboardContent> createState() => _DashboardContentState();
}

class _DashboardContentState extends State<DashboardContent> {
  final url = '10.0.2.2:3001';
  final getPetRoute = '/user/getpets';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List pets = [];
  Future getPetBreeds() async {

    // 10.0.2.2
    final res = await http.get(Uri.http(url,getPetRoute+'/'+globals.uid),
    );



    final list = json.decode(res.body) as List<dynamic>;
    print(list);
    setState(() {
      pets = list ;
    });
    print(pets);

    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }
  @override
  void initState() {
    super.initState();
    this.getPetBreeds();
  }
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Column(
          children: [
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 15,vertical: 15),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children:  [
                      Text("Hello,",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold
                      ),
                      ),
                      SizedBox(height: 6,),
                      Text(
                        globals.uname,
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold
                        ),)
                    ],
                  ),
                  Container(
                    padding: EdgeInsets.all(11),
                    decoration: BoxDecoration(
                      color: kPrimaryColor,
                      borderRadius: BorderRadius.circular(13)
                    ),
                    child: Icon(Icons.person)
                  )
                ],
              ),
            ),
            SizedBox(height: 2,),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
              child: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                  begin: Alignment.topRight,
                  end: Alignment.bottomLeft,
                  colors: [
                    kPrimaryColor,
                    kPrimaryLightColor,
                  ],
                  ),
                  borderRadius: BorderRadius.circular(20)
                ),
                height: 180,
                child: Row(
                  children: [
                    Image.asset(
                      "assets/images/mart2.png",
                      height: 200,
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,

                        children: [
                          SizedBox(height: 8,),
                          Padding(
                            padding: EdgeInsets.symmetric(vertical: 10),
                            child: GestureDetector(
                              onTap: (){
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) {
                                      return AddPetScreen();
                                    },
                                  ),
                                );
                              },
                              child: Text("Let's add your pets",
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                    fontWeight: FontWeight.w600,
                                    fontSize: 20
                                ),
                              ),
                            ),
                          ),
                          const Text("Get started by creating a profile for your pet", textAlign: TextAlign.left,
                          style: TextStyle(
                            fontWeight: FontWeight.w400,
                            fontSize: 16
                          ),
                          ),
                          SizedBox(height: 8,),
                          Row(
                            children: [
                              // Expanded(
                              //     flex: 1,
                              //     child: SizedBox()
                              // ),
                              Expanded(
                                flex: 15,
                                child: Container(
                                padding: EdgeInsets.all(15),
                                decoration: BoxDecoration(
                                  color: Colors.deepPurple[300],
                                  borderRadius: BorderRadius.circular(10)
                                ),
                                child: const Text("Get started", textAlign: TextAlign.center,
                                  style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 18,
                                      color: Colors.white
                                  ),
                                ),
                            ),
                              ),
                              const Expanded(
                                flex: 3,
                                  child: SizedBox()
                              ),
                            ]
                          )
                        ],
                      ),
                    )
                  ],
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(20),
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.deepPurple[200],
                  borderRadius: BorderRadius.circular(10)
                ),
                child: TextField(
                  decoration: InputDecoration(
                    prefixIcon: Icon(Icons.search),
                    border: InputBorder.none,
                    hintText: "Search your pets"
                  ),
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(20),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                      "My pets",
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold
                  ),
                  ),
                  GestureDetector(
                    onTap: (){
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return AddPetScreen();
                          },
                        ),
                      );
                    },
                    child: Text(
                      "Add a pet",
                      style: TextStyle(
                        fontSize: 14
                      ),
                    ),
                  )
                ],
              ),
            ),
            // Container(
            //   height: 220,
            //   child: ListView(
            //     scrollDirection: Axis.horizontal,
            //     children: [
            //       pets.map((item) {
            //         return PetDashboardItemCard(label: "Lassie", ado: PetDashboard(), img: "pp1.jpg")
            //       }).toList(),
            //
            //       PetDashboardItemCard(label: "Lassie", ado: PetDashboard(), img: "pp1.jpg"),
            //       PetDashboardItemCard(label: "Lassie", ado: PetDashboard(), img: "roug.jpg"),
            //       PetDashboardItemCard(label: "Lassie", ado: PetDashboard(), img: "roug.jpg")
            //     ],
            //   ),
            // ),
              Container(
                height: 240,
              child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.all(8),
                  itemCount: pets.length,
                  itemBuilder: (BuildContext context, int index) {
                    print(pets[index]);
                    return Container(
                        child: PetDashboardItemCard(label: pets[index]['petName'], ado: PetDashboard(new Pet.frompets(
                            pets[index]['petName'],
                            pets[index]['DOB'] ,
                            pets[index]['weight'],
                            pets[index]['breedid'].toString() ,
                            pets[index]['UserID'].toString() ,
                            pets[index]['catID'].toString(),
                            pets[index]['profileImage'],
                            pets[index]['petID'].toString(),
                        )
                        ),
                            img: pets[index]['profileImage'])
                    );
                  }
              )
              )
          ],
        )
    );


  }
}
