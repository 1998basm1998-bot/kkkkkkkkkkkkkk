export const firebaseConfig = {
    apiKey: "AIzaSyAm5IlaB-U9yIJGQx215shIpGFrRI6xBbc",
    authDomain: "ghjkl-41d1e.firebaseapp.com",
    projectId: "ghjkl-41d1e",
    storageBucket: "ghjkl-41d1e.firebasestorage.app",
    messagingSenderId: "379737152144",
    appId: "1:379737152144:web:2112186683b02c705d1615"
  };

export const hashPass = str => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString();
};
