import 'package:flutter_local_notifications/flutter_local_notifications.dart';
class NotificationAPI{
  static final _notifications = FlutterLocalNotificationsPlugin();
  @override
  void initState() {
    var initializationSettingsAndroid = AndroidInitializationSettings('app_icon'); // <- default icon name is @mipmap/ic_launcher
    var initializationSettings = InitializationSettings(android: initializationSettingsAndroid);
    _notifications.initialize(initializationSettings);
  }

  static Future showNotificaton({
  int id =0,
    String? title,
    String? body,
    String? payload
}) async =>
      _notifications.show(id, title, body, await _notificationDetails(), payload: payload);
  static Future _notificationDetails() async {
    print('object');
    var initializationSettingsAndroid = AndroidInitializationSettings('@mipmap/ic_launcher'); // <- default icon name is @mipmap/ic_launcher
    var initializationSettings = InitializationSettings(android: initializationSettingsAndroid);
    _notifications.initialize(initializationSettings);
    return NotificationDetails(
      android: AndroidNotificationDetails(
        'channel id',
          'channel name',
          channelDescription: 'channelDescription',
          importance: Importance.max
      ),
    );
  }
  static Future scheduleNotificaton({
    int id =0,
    String? title,
    String? body,
    String? payload
  }) async =>
      _notifications.show(id, title, body, await _notificationDetails(), payload: payload);
  static Future _scheduleDetails() async {
    print('object');
    var initializationSettingsAndroid = AndroidInitializationSettings('@mipmap/ic_launcher'); // <- default icon name is @mipmap/ic_launcher
    var initializationSettings = InitializationSettings(android: initializationSettingsAndroid);
    _notifications.initialize(initializationSettings);
    return NotificationDetails(
      android: AndroidNotificationDetails(
          'channel id',
          'channel name',
          channelDescription: 'channelDescription',
          importance: Importance.max
      ),
    );
  }
  
}

