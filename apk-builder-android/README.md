# APK Builder — Projeto Android (Capacitor)

## Como compilar o APK

### Opção 1: GitHub Actions (automático)
1. Suba este projeto para um repositório GitHub
2. O workflow `.github/workflows/build-apk.yml` compila o APK automaticamente
3. Vá em Actions → Build Android APK → Artifacts para baixar o APK

### Opção 2: Android Studio (manual)
1. Extraia este ZIP
2. Instale dependências: `npm install`
3. Abra o Android Studio → File → Open → pasta `android/`
4. Aguarde Gradle sync (~5 min)
5. Build → Build APK(s)
6. APK gerado: `android/app/build/outputs/apk/debug/app-debug.apk`

## Configuração
- **Package:** `br.com.maikoncaldeira.apkbuilder`
- **Versão:** 1.0.0
- **Min SDK:** Android 5.1+ (API 22)
