import 'package:flutter/material.dart';
import 'package:mobile/Screens/Login/login_screen.dart';
import 'package:mobile/constants.dart';


void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Auth',
      theme: ThemeData(
          primaryColor: kPrimaryColor,
          scaffoldBackgroundColor: Colors.grey[100],
          fontFamily:'Poppins'
          // elevatedButtonTheme: ElevatedButtonThemeData(
          //   style: ElevatedButton.styleFrom(
          //     elevation: 0,
          //     primary: kPrimaryColor,
          //     shape: const StadiumBorder(),
          //     maximumSize: const Size(double.infinity, 56),
          //     minimumSize: const Size(double.infinity, 56),
          //   ),
          // ),
          // inputDecorationTheme: const InputDecorationTheme(
          //   filled: true,
          //   fillColor: formBG,
          //   iconColor: Colors.black,
          //   prefixIconColor: Colors.black,
          //   contentPadding: EdgeInsets.symmetric(
          //       horizontal: defaultPadding, vertical: defaultPadding),
          //   border: OutlineInputBorder(
          //     borderRadius: BorderRadius.all(Radius.circular(15)),
          //     borderSide: BorderSide.none,
          //   ),
          // )
      ),
      home: const LoginScreen(),
    );
  }
}
