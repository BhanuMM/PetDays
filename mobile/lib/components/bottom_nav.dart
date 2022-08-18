import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../constants.dart';

class BottomNav extends StatefulWidget {
  const BottomNav({
    Key? key,
  }) : super(key: key);

  @override
  State<BottomNav> createState() => _BottomNav();
}
class _BottomNav extends State<BottomNav>{
  int _selectedIndex = 0;
  late PageController _pageController;

  void initState() {
    super.initState();
    _pageController = PageController(
      initialPage: _selectedIndex,
    );
  }
  @override
  Widget build(BuildContext context){
    return Scaffold(

      bottomNavigationBar: BottomNavigationBar(
        unselectedItemColor: Colors.black,

        selectedLabelStyle: TextStyle(
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
        currentIndex: _selectedIndex,
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
      ),
    );

  }


}