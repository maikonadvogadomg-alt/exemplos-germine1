# Método 2 — Capacitor (APK com arquivos embutidos)

## VANTAGEM: O app funciona offline — os arquivos ficam dentro do APK.

## Pré-requisitos
- Node.js: https://nodejs.org
- Android Studio: https://developer.android.com/studio
  (Durante a instalação, marque "Android SDK" e "Android Virtual Device")

## Passo a passo

1. **Instale o Android Studio** e aguarde terminar (pode demorar 30 min)

2. **Abra o terminal nesta pasta:**
```
npm install
npx cap add android
npx cap sync
```

3. **Abra no Android Studio:**
```
npx cap open android
```

4. **No Android Studio, espere carregar** (barra de progresso no rodapé)

5. **Gere o APK:**
   - Menu: Build → Generate Signed Bundle / APK
   - Escolha: **APK**
   - Clique **Next**
   - Em "Key store path": clique **Create new...**
     - Preencha os campos (pode colocar qualquer coisa)
     - Clique **OK**
   - Clique **Next** → selecione **release** → clique **Finish**
   - O APK fica em: `android/app/release/app-release.apk`

## Erro de Gradle?

### Erro: "SDK location not found"
Abra o Android Studio → File → Project Structure → SDK Location
Copie o caminho e crie o arquivo `android/local.properties`:
```
sdk.dir=C:\\Users\\SeuNome\\AppData\\Local\\Android\\Sdk
```
(No Mac/Linux: sdk.dir=/Users/SeuNome/Library/Android/sdk)

### Erro de Java
Baixe Java 17: https://adoptium.net/
Instale e reinicie o computador.

### Qualquer outro erro de Gradle
```
cd android
./gradlew clean
cd ..
npx cap sync
```
Depois tente gerar o APK de novo.

## Se nada funcionar → Use o Método 1 (EAS Build)
O EAS resolve todos os problemas de Gradle automaticamente na nuvem.
