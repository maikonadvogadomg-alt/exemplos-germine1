# Manual Completo — DevMobile: Gerar e Instalar o APK

> Última atualização: Abril 2026  
> App: **DevMobile - IDE no Celular** (`com.devmobile.ide`)

---

## PARTE 1 — Gerar o APK pelo Replit (mais fácil, sem instalar nada no PC)

> O `eas-cli` já está instalado neste projeto Replit. Basta abrir o Shell do Replit e seguir os passos abaixo.

### Passo 1 — Abrir o Shell do Replit

No Replit, clique na aba **Shell** (ou pressione Ctrl+Shift+S).

### Passo 2 — Entrar na pasta do app

```bash
cd artifacts/mobile
```

### Passo 3 — Fazer login no Expo (só na primeira vez)

```bash
eas login
```

- Digite seu e-mail da conta Expo: **oab183**
- Digite sua senha

Para confirmar que está logado:
```bash
eas whoami
```

### Passo 4 — Gerar o APK

```bash
eas build --platform android --profile preview
```

Quando perguntar:
- **"Generate a new Android Keystore?"** → digite **Y** e pressione Enter *(só na primeira vez)*
- **"Would you like to automatically increment..."** → digite **Y** se aparecer

### Passo 5 — Aguardar o build

Vai aparecer um link assim:
```
https://expo.dev/accounts/oab183/projects/devmobile-ide/builds/XXXX
```

- Tempo: **5 a 15 minutos**
- Pode fechar o terminal — o build continua nos servidores do Expo

### Passo 6 — Baixar o APK

Quando terminar:
1. Acesse [expo.dev](https://expo.dev) no navegador
2. Vá em **Projects → devmobile-ide → Builds**
3. Clique no build mais recente (status: ✅ Finished)
4. Clique em **Download** para baixar o `.apk`

---

## PARTE 2 — Instalar no celular Android

### Passo 7 — Liberar instalação de fontes desconhecidas

No celular:
1. Abra **Configurações**
2. Vá em **Aplicativos** → **Instalar apps desconhecidos**
3. Selecione o app que vai abrir o APK (ex: Chrome ou Gerenciador de arquivos)
4. Ative **Permitir desta fonte**

### Passo 8 — Passar o APK para o celular

**Opção A** — Pelo celular direto:
- Acesse [expo.dev](https://expo.dev) no navegador do celular e baixe o `.apk`

**Opção B** — Via WhatsApp / Google Drive:
- Mande o arquivo `.apk` para si mesmo e baixe no celular

**Opção C** — Via cabo USB:
- Conecte o celular no PC e copie o `.apk` para a pasta Downloads

### Passo 9 — Instalar

1. Abra o Gerenciador de Arquivos
2. Vá em **Downloads**
3. Toque no arquivo **devmobile-ide.apk**
4. Toque em **Instalar**
5. Toque em **Abrir**

---

## PARTE 3 — Atualizar o app depois de mudanças

### Atualização rápida (sem novo APK)

> Use para: mudanças de tela, texto, lógica, estilos.

```bash
cd artifacts/mobile
eas update --branch preview --message "descrição do que mudou"
```

O app instalado vai buscar a atualização na próxima abertura. Sem precisar reinstalar.

### Novo APK (quando necessário)

> Use quando mudar: ícone, splash screen, permissões, arquivos nativos.

```bash
cd artifacts/mobile
eas build --platform android --profile preview
```

Repita os Passos 5 a 9.

---

## Referência rápida de comandos (Shell do Replit)

```bash
cd artifacts/mobile              # entrar na pasta
eas whoami                       # ver conta logada
eas login                        # fazer login
eas build --platform android --profile preview   # gerar APK
eas build:list                   # ver histórico de builds
eas update --branch preview --message "texto"    # atualizar sem APK
```

---

## Informações do projeto

| Campo | Valor |
|---|---|
| Nome | DevMobile - IDE no Celular |
| Package ID | `com.devmobile.ide` |
| Conta Expo | `oab183` |
| Project ID | `5a362717-5618-472c-8ba6-3580aad41bfa` |
| Perfil APK | `preview` |
| Versão atual | 1.0.0 |

---

## Problemas comuns

**"Not logged in" ao rodar eas build**
```bash
eas login
```

**Build falhou**
- Rode de novo — às vezes é instabilidade dos servidores do Expo

**APK não instala no celular**
- Confirme que "Fontes desconhecidas" está liberado
- Tente baixar o APK direto pelo Chrome do celular em [expo.dev](https://expo.dev)

**"EADDRINUSE" ou erro de porta no Replit**
- Ignore, é do servidor de preview — não afeta o build do APK

**Plano gratuito Expo**
- 30 builds por mês gratuitos
- Se acabar, aguarda o mês virar
