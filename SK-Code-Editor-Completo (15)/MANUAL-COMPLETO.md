# SK Code Editor — Manual Completo

**Versão:** 2.0 Standalone  
**Data:** Maio 2025  
**Proprietário:** Saulo Kenji  
**App:** SK Code Editor com Jasmim IA

---

## ÍNDICE

1. [O que é este pacote](#1-o-que-é-este-pacote)
2. [Como usar o app agora mesmo (sem instalar nada)](#2-como-usar-o-app-agora-mesmo)
3. [Método 1 — EAS Build (Expo) — RECOMENDADO](#3-método-1--eas-build-expo)
4. [Método 2 — Capacitor (APK local)](#4-método-2--capacitor)
5. [Método 3 — GitHub Actions (automático)](#5-método-3--github-actions)
6. [Resolver erro de Gradle (o "erro de granel")](#6-resolver-erro-de-gradle)
7. [Como conectar ao Google Drive](#7-como-conectar-ao-google-drive)
8. [Como usar o GitHub dentro do app](#8-como-usar-o-github-dentro-do-app)
9. [Como abrir o projeto no Codespaces (VS Code na nuvem)](#9-como-abrir-no-codespaces)
10. [Como transformar em app de computador (Windows/Mac)](#10-versão-para-computador)
11. [Jasmim IA — Como configurar sem o Replit](#11-jasmim-ia-standalone)
12. [Funcionalidades do app](#12-funcionalidades)

---

## 1. O que é este pacote

Este pacote contém o **SK Code Editor** — um IDE completo que roda no celular e no computador. Inclui:

- **Jasmim** — IA assistente (Gemini, GPT, Claude, Groq)
- **Jurídico** — área de trabalho para processos jurídicos
- **Campo Livre** — espaço de trabalho personalizado
- **Terminal** — bash/shell direto no app
- **Drive** — backup automático no Google Drive
- **GitHub** — clonar, enviar, publicar projetos
- **APK Builder** — gerar APK de qualquer projeto web
- **Checkpoints** — salvar/restaurar versões do projeto
- **Combinar Apps** — unir vários projetos em um

---

## 2. Como usar o app agora mesmo

**Sem instalar nada — funciona em qualquer celular ou computador:**

1. Abra o Chrome no celular
2. Acesse: **https://maikonadvogadomg-alt.github.io/skeditor-apk/**
3. Clique nos **3 pontinhos** (⋮) no Chrome → **"Adicionar à tela inicial"**
4. Um ícone aparece na sua tela igual a um app instalado

**Para configurar a Jasmim (IA) na primeira vez:**
1. Abra o app → crie um projeto
2. Clique no botão da Jasmim (lado direito)
3. Clique em **"✨ gratuita"** no topo do chat
4. Cole sua chave Gemini (obtenha em https://aistudio.google.com/apikey)
5. Clique **Salvar** — funciona para sempre

---

## 3. Método 1 — EAS Build (Expo) — RECOMENDADO

**Este é o método que funcionou antes. Use este primeiro.**

### Pré-requisitos
- Conta no Expo: https://expo.dev (gratuita)
- Node.js instalado: https://nodejs.org
- Token do Expo (gere em: https://expo.dev/settings/access-tokens)

### Passos

```bash
# 1. Entre na pasta metodo-1-EAS
cd metodo-1-EAS

# 2. Instale as dependências
npm install

# 3. Faça login no Expo
npx expo login
# OU usando token:
export EXPO_TOKEN=seu_token_aqui

# 4. Configure seu usuário no eas.json (abra e troque "seuusuario" pelo seu usuario do Expo)

# 5. Gere o APK
npx eas build --platform android --profile preview

# 6. Aguarde 5-10 minutos
# O link para baixar o APK aparece no terminal e no site expo.dev
```

### O que este método faz
Cria um app Android que abre o SK Code Editor. O app fica em tela cheia, sem barra do navegador.

---

## 4. Método 2 — Capacitor

**Este método empacota os arquivos DENTRO do APK — funciona offline.**

### Pré-requisitos
- Node.js: https://nodejs.org
- Android Studio: https://developer.android.com/studio (gratuito, ~1GB)
- Java 17: incluído no Android Studio

### Passos

```bash
# 1. Entre na pasta metodo-2-Capacitor
cd metodo-2-Capacitor

# 2. Instale as dependências
npm install

# 3. Adicione a plataforma Android
npx cap add android

# 4. Sincronize os arquivos do app
npx cap sync

# 5. Abra no Android Studio
npx cap open android

# 6. No Android Studio:
#    - Espere carregar (pode demorar 5-10 min na primeira vez)
#    - Clique em Build → Generate Signed Bundle / APK
#    - Escolha APK → Next → crie uma keystore → Next → Build
#    - O APK fica em android/app/release/app-release.apk
```

### Se der erro de Gradle → veja Seção 6

---

## 5. Método 3 — GitHub Actions

**Este método compila automaticamente quando você envia o código para o GitHub.**

### Passos

```bash
# 1. Crie um repositório no GitHub (github.com → New repository)
# 2. Copie todos os arquivos desta pasta metodo-3-GitHub-Actions para o repositório
# 3. Vá em Settings → Actions → General → Allow all actions
# 4. Faça um commit e push
# 5. Vá em Actions → Build APK → Run workflow
# 6. Aguarde 10-15 minutos
# 7. Baixe o APK em Actions → o build mais recente → Artifacts
```

### Arquivo de workflow
O arquivo `.github/workflows/build-apk.yml` já está configurado.

---

## 6. Resolver erro de Gradle (o "erro de granel")

O erro de Gradle acontece quando:
- Java não está instalado corretamente
- Android SDK não encontrado
- Versão errada do Gradle

### Solução passo a passo

**Passo 1 — Limpar o cache do Gradle:**
```bash
cd metodo-2-Capacitor/android
./gradlew clean
```

**Passo 2 — Se aparecer "SDK location not found":**
1. Abra o Android Studio
2. Vá em File → Project Structure → SDK Location
3. Copie o caminho (ex: C:\Users\Saulo\AppData\Local\Android\Sdk)
4. Crie o arquivo `android/local.properties` com:
   ```
   sdk.dir=C:\\Users\\Saulo\\AppData\\Local\\Android\\Sdk
   ```

**Passo 3 — Se aparecer "Minimum supported Gradle version":**
```bash
cd metodo-2-Capacitor/android
./gradlew wrapper --gradle-version 8.5
```

**Passo 4 — Se aparecer erro de Java:**
1. Baixe o Java 17: https://adoptium.net/
2. Instale e reinicie o computador
3. Tente novamente

**Links úteis para resolver erros de Gradle:**
- Stack Overflow (busque o erro exato): https://stackoverflow.com/questions/tagged/gradle
- Docs do Capacitor: https://capacitorjs.com/docs/android
- Fórum do Expo: https://forums.expo.dev

**DICA:** Se não conseguir resolver o Gradle, use o **Método 1 (EAS Build)** — ele resolve tudo automaticamente na nuvem.

---

## 7. Como conectar ao Google Drive

1. Abra o SK Code Editor
2. Crie ou abra um projeto
3. No menu (☰) → **"☁️ Backup no Google Drive"**
4. Clique em **"Conectar ao Drive"**
5. Faça login com sua conta Google
6. Escolha a pasta de destino
7. Clique em **"Fazer Backup"**

O backup salva todos os arquivos do projeto em uma pasta no seu Drive.

---

## 8. Como usar o GitHub dentro do app

### Clonar um repositório
1. Menu (☰) → **"🔗 GitHub — Clonar / Enviar"**
2. Cole o link do repositório (ex: https://github.com/usuario/repo)
3. Clique **Clonar**

### Enviar projeto para o GitHub
1. Menu (☰) → **"🔗 GitHub — Clonar / Enviar"**
2. Cole seu token do GitHub (gere em: https://github.com/settings/tokens)
3. Clique **Enviar para GitHub**

### Publicar no GitHub Pages (site grátis)
1. Menu (☰) → **"🌐 Publicar no GitHub Pages"**
2. Siga as instruções na tela

---

## 9. Como abrir no Codespaces

O Codespaces é o VS Code rodando na nuvem — pode instalar qualquer biblioteca.

1. Acesse: https://github.com/codespaces
2. Clique em **"New codespace"**
3. Escolha um repositório (ou crie um)
4. O VS Code abre no navegador com terminal completo
5. No terminal do Codespaces, você pode instalar qualquer coisa:
   ```bash
   npm install
   pip install
   apt-get install
   ```

Para enviar seu projeto do SK Code Editor para o GitHub e abrir no Codespaces:
1. No app → Menu (☰) → GitHub → Enviar para GitHub
2. Acesse seu repositório no GitHub
3. Clique no botão verde **"Code"** → **"Codespaces"** → **"Create codespace"**

---

## 10. Versão para computador

Para transformar o SK Code Editor em um app de computador (Windows, Mac, Linux):

### Usando Electron (recomendado)

```bash
# 1. Instale o Node.js se não tiver
# 2. Crie uma pasta e abra o terminal nela
mkdir sk-desktop && cd sk-desktop

# 3. Inicie o projeto
npm init -y
npm install electron

# 4. Crie o arquivo main.js com este conteúdo:
```

**Arquivo main.js:**
```javascript
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({ width: 1200, height: 800 })
  win.loadURL('https://maikonadvogadomg-alt.github.io/skeditor-apk/')
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
```

**Arquivo package.json (adicione):**
```json
{
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

```bash
# 5. Rode o app
npm start

# 6. Para gerar o instalador (.exe no Windows):
npm install --save-dev electron-builder
npx electron-builder --win
```

---

## 11. Jasmim IA — Como configurar sem o Replit

A Jasmim funciona 100% sem o Replit usando sua chave Gemini gratuita.

**Como obter a chave Gemini (gratuita):**
1. Acesse: https://aistudio.google.com/apikey
2. Faça login com sua conta Google
3. Clique em **"Create API Key"**
4. Copie a chave (começa com **AIza...**)

**Como configurar no app:**
1. Abra o SK Code Editor
2. Abra a Jasmim (ícone de chat)
3. Clique em **"✨ gratuita"** ou **"📱 standalone"** no topo
4. Cole a chave no campo que aparece
5. Clique **Salvar**

A chave fica salva no app para sempre. Funciona no celular, no computador e no APK.

---

## 12. Funcionalidades

| Função | Como acessar |
|--------|-------------|
| Jasmim (IA) | Painel direito → ícone de chat |
| Terminal | Menu (☰) → Terminal |
| Drive Backup | Menu (☰) → ☁️ Backup no Google Drive |
| GitHub | Menu (☰) → 🔗 GitHub |
| GitHub Pages | Menu (☰) → 🌐 Publicar no GitHub Pages |
| Gerar APK | Menu (☰) → 📱 Gerar APK Android |
| VS Code Web | Menu (☰) → 💻 Abrir no VSCode Web |
| Checkpoint | Menu (☰) → 📸 Salvar Checkpoint |
| Combinar Apps | Botão 🔗 no rodapé |
| Jurídico | Botão amarelo no canto superior direito |
| Campo Livre | Botão verde no canto superior direito |

---

**Dúvidas?** Mostre este manual para qualquer programador — ele tem tudo que precisa para compilar o APK.
