class User {
  String email;
  String password;
  String userrole;
  String userName;
  User(this.email, this.password,this.userrole,this.userName);

  User.fromJson(Map<String, dynamic> json)
      : password = '',
        email = json['email'],
        userrole = json['role'],
        userName = '';

  Map toJson() => {
    'password': password,
    'email': email,
  };
}