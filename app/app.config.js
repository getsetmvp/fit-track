/* eslint-disable no-undef */
import "dotenv/config";

export default {
  expo: {
    name: "FitTrack",
    slug: "fit-track",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      eas: {
        projectId: "043b71f5-e0d7-4a6a-b985-e8b79f69eb99",
      },
    },
    owner: "getsetmvp",
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.getsetmvp.fittrack",
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#3d82f6",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};
