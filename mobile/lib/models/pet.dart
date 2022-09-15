class Pet{
  String? petName;
  String DOB;
  int? weight;
  String? breedid;
  String? UserID;
  String? catID;
  String? profileImage;
  String? petID;

  Pet(this.petName,this.DOB,this.weight,this.breedid,this.UserID,this.catID,this.profileImage);
  Pet.frompets(this.petName,this.DOB,this.weight,this.breedid,this.UserID,this.catID,this.profileImage,this.petID);

  Pet.fromJson(Map<String, dynamic> json)
      : petName = json['petName'].toString(),
        DOB = json['DOB'],
        weight = json['weight'],
        breedid = json['breedid'].toString(),
        UserID = json['UserID'],
        profileImage = json['profileImage'],
        catID = json['catID'].toString();

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
