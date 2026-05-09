# Método 1 — EAS Build (MAIS FÁCIL)

## Passo a passo

1. **Crie conta grátis em:** https://expo.dev

2. **Instale o Node.js:** https://nodejs.org (versão LTS)

3. **Abra o terminal nesta pasta e rode:**
```
npm install
npx expo login
```

4. **Edite o arquivo app.json:**
   - Troque `TROQUE_PELO_SEU_USUARIO_EXPO` pelo seu usuário do Expo

5. **Inicie o projeto no EAS:**
```
npx eas init
```
   Isso preenche o projectId automaticamente.

6. **Gere o APK:**
```
npx eas build --platform android --profile preview
```

7. **Aguarde 5-10 minutos** — o link para baixar o APK aparece no terminal.

## Deu erro de token?
Gere um token em: https://expo.dev/settings/access-tokens
Depois rode:
```
export EXPO_TOKEN=seu_token_aqui
npx eas build --platform android --profile preview
```
