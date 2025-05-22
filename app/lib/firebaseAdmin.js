import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let app;
try {
  app = initializeApp({ credential: applicationDefault() });
} catch (err) {
}

export { getAuth };