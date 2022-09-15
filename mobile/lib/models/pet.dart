class Pet{
  String? petName;
  String DOB;
  int? weight;
  String? breedid;
  String? UserID;
  String? catID;

  Pet(this.petName,this.DOB,this.weight,this.breedid,this.UserID,this.catID);

  Pet.fromJson(Map<String, dynamic> json)
      : petName = json['pcatID'].toString(),
        DOB = json['pcatName'],
        weight = json['descr'],
        breedid = json['pcatID'].toString(),
        UserID = json['pcatName'],
        catID = json['pcatID'].toString();

  Map toJson() => {
    'petName': petName,
    'DOB': DOB.toString(),
    'weight': weight,
    'profileImage' : '',
    'breedId' : breedid,
    'UserID': UserID,
    'catId' : catID
  };
}
