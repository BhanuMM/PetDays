class ForumPost{
  String?postId;
  String postTitle;
  String postDescr;
  String postStatus;
  String postDate;
  String postTime;
  String userId ;
  String username;
  String pcatID;

  ForumPost(this.postTitle,this.postDescr,this.postStatus,this.postDate,this.postTime,this.userId,this.username,this.pcatID);

  ForumPost.fromJson(Map<String, dynamic> json)
      : postId = json['postId'].toString(),
        postTitle = json['postTitle'],
        postDescr = json['postDescr'],
        postStatus = json['postStatus'],
        postDate = json['postDate'],
        postTime = json['postTime'],
        userId = json['userId'].toString(),
        username = json['username'],
        pcatID = json['pcatID'];


  Map toJson() => {
    'postTitle': postTitle,
    'postDescr': postDescr,
    'postStatus': postStatus,
    'userId': userId,
    'pcatID' : pcatID
  };
}
