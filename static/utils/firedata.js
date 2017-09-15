export default {
  event(category, action, params) {
    if (window.wpa && wpa.getHostVersionCode && wpa.getHostVersionCode() >= 73) {
      console.log(`Firedata event2app ${category} ${action}`);
      _fd.event2app(category, action, params);
    } else {
      console.log(`Firedata event2app ${category} ${action} ${JSON.stringify(params)}`);
      _fd.event(category, action, params);
    }
  }
};
