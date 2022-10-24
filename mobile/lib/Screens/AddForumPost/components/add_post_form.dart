import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../../../constants.dart';
import '../../Dashboard/dashboard_screen.dart';
import '../../../models/reminder.dart';
import '../../../models/globals.dart';
import '../../../components/notification_API.dart';
import '../../../models/petdiary.dart';
import '../../../models/forumPost.dart';
import '../../PetTalkHome/Pet_Talk_Home_Screen.dart';

class AddPostForm extends StatefulWidget {

  AddPostForm( {Key? key}) : super(key: key);
  @override
  State<StatefulWidget> createState() => _AddPostFormState();
}
class _AddPostFormState extends State<AddPostForm>{


  final addRemRoute = '/user/addreminder';
  final addPostRoute = '/user/addpost';
  final headers = {'Content-Type': 'application/json'};
  final encoding = Encoding.getByName('utf-8');
  List data = [];
  final petCatRoute = '/admin/getpetcategories';
  var Catagories = [];
  String _SelectedCatID = '';
  String _SelectedCat = '';
  PetReminder petReminder = new PetReminder('', 'note', 'nextRemDate', 'nextRemTime');
  ForumPost forumPost = new ForumPost('postTitle', 'postDescr', 'pending', 'postDate', 'postTime', uid, 'username', 'pcatID');

  Future addDiaryEntry() async {

    forumPost.pcatID = _SelectedCatID;
    print(forumPost.postTitle);
    print(forumPost.postDescr);
    print(forumPost.pcatID);
    print(forumPost.userId);
    var res = await http.post(Uri.http(url, addPostRoute),
        headers: headers,
        body: json.encode(
            forumPost
        ),
        encoding: encoding
    );
    if(json.decode(res.body)=="SUCCESS"){
      showDialog<void>(
        context: this.context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Your post has been submitted"),
            content: const Text('The pet has been successfully added. you can enter pets profile through home'),
            actions: <Widget>[
              TextButton(
                style: TextButton.styleFrom(
                  textStyle: Theme.of(context).textTheme.labelLarge,
                ),
                child: const Text('okay'),
                onPressed: () {
                  Navigator.push(
                      context, new MaterialPageRoute(builder: (context) => PetTalkHome()));
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
    final res = await http.get(Uri.http(url,petCatRoute),
    );

    final list = json.decode(res.body) as List<dynamic>;
    setState(() {
      data = list;
    });
    print(list);
    _SelectedCat = data[0]['pcatName'];
    return "Sucess";
    //map json and initialize using DataModel
    // return list;
    // return list.map((e) => PetCatagory.fromJson(e)).toList();

  }

  void getSelectedCatID() {
    data.map((item) {
      if (item['pcatName'].toString() == _SelectedCat){
        _SelectedCatID = item['pcatID'].toString();
        print(_SelectedCatID);
      }
    }).toList();
  }

  @override
  void initState() {
    super.initState();
    getPetCats();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
        child: SingleChildScrollView(
          child:Container(
            width: MediaQuery.of(context).size.width -80,
            child: Column(
              children: [
                const SizedBox(height: formPadding),
                Padding(
                  padding: const EdgeInsets.only(top: 0),
                  child: Container(
                      child: Row(
                        children: const [
                          Text(
                            "Title",
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                        ],
                      )
                  ),
                ),
                TextFormField(
                  onChanged: (value) {
                    forumPost.postTitle = value;
                  },
                  keyboardType: TextInputType.emailAddress,
                  textInputAction: TextInputAction.next,
                  cursorColor: formBG,
                  onSaved: (email) {},
                  decoration: const InputDecoration(
                    border: UnderlineInputBorder(),
                    labelText: 'Enter the title here',
                    labelStyle: TextStyle(
                      color: formHintColor,
                    ),
                    fillColor: Colors.white,
                  ),
                ),
                const SizedBox(height: formPadding),
                Padding(
                  padding: const EdgeInsets.only(top: 0),
                  child: Container(
                      child: Row(
                        children: const [
                          Text(
                            "Description",
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                        ],
                      )
                  ),
                ),
                TextFormField(
                  onChanged: (value) {
                    forumPost.postDescr = value;
                  },
                  keyboardType: TextInputType.emailAddress,
                  textInputAction: TextInputAction.next,
                  cursorColor: formBG,
                  onSaved: (email) {},
                  decoration: const InputDecoration(
                    border: UnderlineInputBorder(),
                    labelText: 'Describe your problem here',
                    labelStyle: TextStyle(
                      color: formHintColor,
                    ),
                    fillColor: Colors.white,
                  ),
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
                            }
                            );
                          },
                        ),
                      ),
                      Padding(
                          padding: const EdgeInsets.only(top: 20,bottom: 20),
                          child:SizedBox(
                            width: 200,
                            height: 30,
                            child:ElevatedButton(
                              onPressed: () {
                                addDiaryEntry();
                              },
                              child: Text(
                                "Submit post".toUpperCase(),
                                style: TextStyle(color: Colors.black),
                              ),
                            ),
                          )
                      ),
                    ],
                  ),
                ),
              ],

            ),
          ),

        )
    );
  }





}
