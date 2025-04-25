import admin from 'firebase-admin'
import { getMessaging } from 'firebase-admin/messaging'
import fs from 'fs'
import path from 'path'
import { GOOGLE_APPLICATION_CREDENTIALS } from '../../config/configs'

if (!GOOGLE_APPLICATION_CREDENTIALS) {
  throw new Error('GOOGLE_APPLICATION_CREDENTIALS is not defined')
}

const serviceAccountPath = path.resolve(GOOGLE_APPLICATION_CREDENTIALS)
const serviceAccountContent = fs.readFileSync(serviceAccountPath, 'utf8')
const serviceAccount = JSON.parse(serviceAccountContent)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const messaging = getMessaging()

export default messaging
