import firebase from "react-native-firebase";

const analytics = firebase.analytics();
const remoteConfig = firebase.config();

if (__DEV__) {
  remoteConfig.enableDeveloperMode();
}

export { analytics, remoteConfig };
