import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/timezone.dart' as tz;
import 'package:timezone/data/latest_all.dart' as tz;
import 'package:flutter_native_timezone/flutter_native_timezone.dart';
class NotificationAPI{
  static final _notifications = FlutterLocalNotificationsPlugin();
  @override
  void initState() {
    print("objecsadft");
    initTx();
    var initializationSettingsAndroid = AndroidInitializationSettings('app_icon'); // <- default icon name is @mipmap/ic_launcher
    var initializationSettings = InitializationSettings(android: initializationSettingsAndroid);
    _notifications.initialize(initializationSettings);

  }

  static Future initTx () async{
    print("object");
    tz.initializeTimeZones();
    final locationName = await FlutterNativeTimezone.getLocalTimezone();
    tz.setLocalLocation(tz.getLocation(locationName));
    return tz.local;
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
  static Future scheduleNotificationInit(int i,String? title, String? body,DateTime date) async{

    scheduleNotificaton(
      id: i,
      title: title,
      body: body,
      scheduleDate: date,
    );


  }
  static Future scheduleNotificationDailyInit(int i,String? title, String? body,DateTime date,int days) async{
    initTx();
    scheduleNotificaton(
      id: i,
      title: title,
      body: body,
      scheduleDate: date,
    );

  }
  static Future scheduleNotificatonDaily({
    int id =0,
    String? title,
    String? body,
    String? payload,
    required DateTime scheduleDate,
    int? days,
  }) async =>
      _notifications.zonedSchedule(
          id,
          title,
          body,
          tz.TZDateTime.from(scheduleDate,tz.local),
          await _scheduleDetails(),
          payload: payload,
          uiLocalNotificationDateInterpretation: UILocalNotificationDateInterpretation.absoluteTime,
          androidAllowWhileIdle: true,
      matchDateTimeComponents: DateTimeComponents.dayOfMonthAndTime);

  static Future scheduleNotificaton({
    int id =0,
    String? title,
    String? body,
    String? payload,
    required DateTime scheduleDate,
  }) async =>
      _notifications.zonedSchedule(
          id,
          title,
          body,
          tz.TZDateTime.from(scheduleDate,tz.local),
          await _scheduleDetails(),
          payload: payload,
          uiLocalNotificationDateInterpretation: UILocalNotificationDateInterpretation.absoluteTime,
          androidAllowWhileIdle: true);
  static Future _scheduleDetails() async {
    print('object');
    initTx();
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
  static Future sheduledNotifDetails() async{
    final List<PendingNotificationRequest> pendingNotificationRequests =
    await _notifications.pendingNotificationRequests();
    for(int i =0 ; i<pendingNotificationRequests.length;i++) {
      print("lalala");
      print(pendingNotificationRequests[i].payload);
    }
  }
  
}

