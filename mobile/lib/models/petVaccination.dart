class PetVaccination{
  String? petVacID;
  String? petID;
  String vacID;
  String note;
  String? nextVacDate;



  PetVaccination(this.petID,this.vacID,this.note,this.nextVacDate);
  PetVaccination.fromvacs(this.petID,this.vacID,this.note,this.nextVacDate);

  PetVaccination.fromJson(Map<String, dynamic> json)
      : petID = json['petID'].toString(),
        vacID = json['vacID'],
        note = json['note'],
        nextVacDate = json['nextVacDate'].toString(),
        petVacID =json['petVacID'].toString();



  Map toJson() => {
    'petID': petID,
    'vacID': vacID,
    'note': note,
    'nextVacDate' : nextVacDate
  };
}
