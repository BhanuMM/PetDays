import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../Screens/Dashboard/dashboard_screen.dart';
import '../Screens/PetMartHome/Pet_Mart_Home_Screen.dart';
import '../Screens/Mypets/my_pets_screen.dart';
import '../Screens/EditProfile/Edit_profile_screen.dart';

import '../constants.dart';

class BottomNav extends StatefulWidget {
  int indes = 0;
   BottomNav(int i) {
    indes = i;
  }

  @override
  State<BottomNav> createState() => _BottomNav(indes);
}

class _BottomNav extends State<BottomNav>{
  late int indexNumber =0;
  int _selectedIndex=0;
  _BottomNav(int pageindex){
    _selectedIndex = pageindex;
  }

  late PageController _pageController;
  var pages = [
    DashboardScreen(),
    MyPetsScreen(),
    PetMartHome(),
    DashboardScreen(),
    ProfileSettings(),
  ];
  void initState() {
    super.initState();
    _pageController = PageController(
      initialPage: _selectedIndex,
    );
  }
  @override
  Widget build(BuildContext context){
    return BottomNavigationBar(
        unselectedItemColor: Colors.black,

        selectedLabelStyle: const TextStyle(
            color: Colors.black
        ),
        selectedItemColor: Colors.black,
        items:  <BottomNavigationBarItem>[

          BottomNavigationBarItem(
            icon: new Image.asset('assets/images/home.png',width: 35,height: 35,),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: new Image.asset('assets/images/petd.png',width: 50,height: 50,),
            label: 'My Pets',
          ),
          BottomNavigationBarItem(
            icon: new Image.asset('assets/images/petm.png',width: 50,height: 50,),
            label: 'Pet Mart',

          ),
          BottomNavigationBarItem(
            icon: new Image.asset('assets/images/pett.png',width: 50,height: 50,),
            label: 'Pet Talk',

          ),
          BottomNavigationBarItem(
            icon: new Image.asset('assets/images/settings.png',width: 35,height: 35,),
            label: 'Settings',

          ),
        ],

        onTap: (index) {
          setState(() {
            _selectedIndex = index;
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) {
                  return pages[index];
                },
              ),
            );
          });
        },

    );


  }


}