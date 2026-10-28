// ★ Firebase 專案設定資訊
export const firebaseConfig = {
  apiKey: "AIzaSyB-Y3lTrrbH_MEWGLC9XweB2zSVTiOU3eo",
  authDomain: "redrain-draw.firebaseapp.com",
  projectId: "redrain-draw",
  storageBucket: "redrain-draw.firebasestorage.app",
  messagingSenderId: "266031798231",
  appId: "1:266031798231:web:e201add18e92cb83b01d92"
};

// 門市代碼設定：S01 ~ S18
export const STORES = Array.from({length: 18}, (_, i) => 'S' + String(i + 1).padStart(2, '0'));
