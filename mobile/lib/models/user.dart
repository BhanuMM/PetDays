class User {
  String userID;
  String email;
  String password;
  String userrole;
  String userName;
  String confirmpassword;
  User(this.email, this.password,this.userrole,this.userName,this.confirmpassword,this.userID);

  User.fromJson(Map<String, dynamic> json)
      : password = '',
        email = json['email'],
        userrole = json['role'],
        userName = json['username'],
        userID = json['id'].toString(),
        confirmpassword = '';

  Map toJson() => {
    'password': password,
    'uemail': email,
    'email': email,
    'username' : userName,
    'confirmpassword': ''
  };
}