class PetCatagory {
  String? pcatID;
  String? pcatName;
  String? descr;

  PetCatagory(this.pcatID,this.pcatName,this.descr);

  PetCatagory.fromJson(Map<String, dynamic> json)
      : pcatID = json['pcatID'].toString(),
        pcatName = json['pcatName'],
        descr = json['descr'];


}