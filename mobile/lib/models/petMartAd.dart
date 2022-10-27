class PetMartAd{
  String? adId;
  String adTitle;
  String adDescr;
  String adImage;
  String adPrice;
  String adContact;
  String adEmail;
  String adAddress;
  String adProvince;
  String adDistrict;
  String adStatus;
  String paymentStatus;
  String adDate;
  String adTime;
  String userId;




  PetMartAd(this.adTitle,this.adDescr,this.adImage,this.adPrice,this.adContact,this.adEmail,this.adAddress,this.adProvince,this.adDistrict,this.adStatus,this.paymentStatus,this.adDate,this.adTime,this.userId);


  PetMartAd.fromJson(Map<String, dynamic> json)
      : adId = json['adId'].toString(),
        adTitle = json['adTitle'].toString(),
        adDescr = json['adDescr'],
        adImage = json['adImage'].toString(),
        adPrice =json['adPrice'].toString(),
        adContact = json['adContact'].toString(),
        adEmail = json['adEmail'].toString(),
        adAddress = json['adAddress'],
        adProvince = json['adProvince'].toString(),
        adDistrict =json['adDistrict'].toString(),
        adStatus =json['adStatus'].toString(),
        paymentStatus =json['paymentStatus'].toString(),
        adDate =json['adDate'].toString(),
        adTime =json['adTime'].toString(),
        userId =json['userId'].toString();



  Map toJson() => {
    'adTitle': adTitle,
    'adDescr': adDescr,
  };
}
