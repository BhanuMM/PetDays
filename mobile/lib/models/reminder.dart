class PetReminder{
  String? petRemID;
  String? petID;
  String note;
  String? nextRemDate;
  String? nextRemTime;



  PetReminder(this.petID,this.note,this.nextRemDate,this.nextRemTime);
  PetReminder.fromrems(this.petID,this.note,this.nextRemDate,this.petRemID,this.nextRemTime);

  PetReminder.fromJson(Map<String, dynamic> json)
      : petID = json['petID'].toString(),
        note = json['note'],
        nextRemDate = json['nextRemDate'].toString(),
        nextRemTime = json['nextRemTime'].toString(),
        petRemID =json['petRemID'].toString();



  Map toJson() => {
    'petID': petID,
    'note': note,
    'nextRemDate' : nextRemDate,
    'nextRemTime' : nextRemTime
  };
}
