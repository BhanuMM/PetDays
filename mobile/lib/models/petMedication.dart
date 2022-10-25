class PetMedication{
  String? petVacID;
  String petID;
  String medID;
  String startDate;
  String timesADay;
  String days;



  PetMedication(this.petID,this.medID,this.startDate,this.timesADay,this.days);
  PetMedication.fromvacs(this.petVacID,this.petID,this.medID,this.startDate,this.timesADay,this.days);

  PetMedication.fromJson(Map<String, dynamic> json)
      : petID = json['petID'].toString(),
        medID = json['medID'].toString(),
        startDate = json['startDate'],
        timesADay = json['timesADay'].toString(),
        days =json['days'].toString();



  Map toJson() => {
    'petID': petID,
    'medID': medID,
    'startDate': startDate,
    'timesADay' : timesADay,
    'days' : days,
  };
}
