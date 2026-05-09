import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'br.com.maikoncaldeira.apkbuilder',
  appName: 'APK Builder',
  webDir: 'dist',
  server: { androidScheme: 'https' },
};
export default config;
