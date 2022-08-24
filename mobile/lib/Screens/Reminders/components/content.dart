import 'package:flutter/material.dart';
import 'package:mobile/Screens/Dashboard/dashboard_screen.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';

class VaccineContent extends StatelessWidget {
  const VaccineContent({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Background(

      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children:  <Widget>[
          SizedBox(height: defaultPadding,),
          Row(
            children: [
              Spacer(),
              ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) {
                        return DashboardScreen();
                      },
                    ),
                  );
                },
                child: Text("Add Custom reminder"),
              ),
              Spacer()
            ],
          ),
          SizedBox(height: defaultPadding,),
          Row(

            children: [
              Spacer(),
              Text("click a reminder to edit/Delete",style: TextStyle(color: Colors.grey),),
              Spacer(),
            ],
          ),
          SizedBox(height: defaultPadding,),
          Table(
            defaultColumnWidth: FixedColumnWidth(120.0),
            defaultVerticalAlignment: TableCellVerticalAlignment.middle,
            border: TableBorder.all(
                color: Colors.black,
                style: BorderStyle.solid,
                width: 1),
            children:[
              TableRow(children: [
                Column(children:[Text('Reminder', textAlign: TextAlign.center,style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),
                Column(children:[Text('Reminder Date',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),
                Column(children:[Text('Reminder time',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),

              ]),
              TableRow( children: [
                Column(children:[Text('Medication', textAlign: TextAlign.center,style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('2022/8/23',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('8.00 PM',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),

              ]),
              TableRow( children: [
                Column(children:[Text('Next parvo vaccination', textAlign: TextAlign.center,style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('2022/10/23',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('8.00 AM',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),

              ]),

            ],
          ),


        ],
      ),

    );

  }
}
