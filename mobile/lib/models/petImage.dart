class PetImage {
  String imagePath;
  String petID;

  PetImage(this.petID, this.imagePath);

  PetImage.fromJson(Map<String, dynamic> json)
      : petID = json['petName'].toString(),
        imagePath = json['imagePath'];

  Map toJson() => {
        'petID': petID,
        'ImagePath': imagePath,
      };
}
