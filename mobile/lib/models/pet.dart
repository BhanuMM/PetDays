class Pet{
  String? petName;
  String DOB;
  int? weight;
  String? breedid;
  String? UserID;
  String? catID;
  String? profileImage;

  Pet(this.petName,this.DOB,this.weight,this.breedid,this.UserID,this.catID,this.profileImage);

  Pet.fromJson(Map<String, dynamic> json)
      : petName = json['pcatID'].toString(),
        DOB = json['pcatName'],
        weight = json['descr'],
        breedid = json['pcatID'].toString(),
        UserID = json['pcatName'],
        profileImage = json['profileImage'],
        catID = json['pcatID'].toString();

  Map toJson() => {
    'petName': petName,
    'DOB': DOB.toString(),
    'weight': weight,
    'profileImage' : profileImage,
    'breedId' : breedid,
    'UserID': UserID,
    'catId' : catID
  };
}
