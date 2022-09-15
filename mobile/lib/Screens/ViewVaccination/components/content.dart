import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/responsive.dart';
import '../../../components/background.dart';
import '../../VaccinationDetails/add_Vaccination_Details_Screen.dart';

class VaccineContent extends StatelessWidget {
  String petID= '';
  VaccineContent(String petID, {Key? key}) : super(key: key) {
    this.petID = petID;
  }
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
                        return AddVaccinationScreen(petID);
                      },
                    ),
                  );
                },
                child: Text("Add Vaccination"),
              ),
              Spacer()
            ],
          ),
          SizedBox(height: defaultPadding,),
          Row(

            children: [
              Spacer(),
              Text("click a vaccine to edit/Delete",style: TextStyle(color: Colors.grey),),
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
                Column(children:[Text('Vaccination', textAlign: TextAlign.center,style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),
                Column(children:[Text('Vaccined Date',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),
                Column(children:[Text('Next Vaccination',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold))]),

              ]),
              TableRow( children: [
                Column(children:[Text('Parvo', textAlign: TextAlign.center,style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('2022/06/23',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('2022/10/23',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),

              ]),
              TableRow( children: [
                Column(children:[Text('Distemper vaccination', textAlign: TextAlign.center,style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('2022/08/23',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),
                Column(children:[Text('2022/12/23',textAlign: TextAlign.center, style: TextStyle(fontSize: 16.0,))]),

              ]),
            ],
          ),


        ],
      ),

    );

  }
}
