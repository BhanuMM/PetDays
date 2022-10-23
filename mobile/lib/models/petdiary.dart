class PetDiary{
  String? entryTitle;
  String? Descr;
  int petID;


  PetDiary(this.petID,this.Descr,this.entryTitle);


  PetDiary.fromJson(Map<String, dynamic> json)
      : entryTitle = json['entryTitle'].toString(),
        Descr = json['Descr'].toString(),
        petID = json['petID'];

  Map toJson() => {
    'petID': petID,
    'entryTitle': entryTitle,
    'Descr': Descr,


  };
}
