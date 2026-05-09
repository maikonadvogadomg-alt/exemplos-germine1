# DevMobile — Manual de Geração do APK (Android)

> Siga este guia passo a passo no seu computador (Windows, Mac ou Linux).
> Tempo estimado: 15 a 30 minutos na primeira vez.

---

## Pré-requisitos

Você vai precisar instalar três coisas no seu computador antes de começar:

| Ferramenta | Para que serve | Download |
|---|---|---|
| **Node.js** (versão 18 ou superior) | Rodar o Expo e EAS Build | https://nodejs.org |
| **Git** | Baixar o código do Replit | https://git-scm.com |
| **Conta no Expo** (gratuita) | O EAS Build usa os servidores do Expo para montar o APK | https://expo.dev/signup |

---

## PASSO 1 — Instalar o Node.js

1. Acesse **https://nodejs.org**
2. Clique em **"Download LTS"** (versão estável)
3. Execute o instalador e siga os passos (Next, Next, Install)
4. Após instalar, abra o **Prompt de Comando** (Windows) ou **Terminal** (Mac/Linux) e digite:
   ```
   node --version
   ```
   Deve aparecer algo como `v20.x.x`. Se aparecer, está instalado.

---

## PASSO 2 — Criar conta gratuita no Expo

1. Acesse **https://expo.dev/signup**
2. Preencha nome, e-mail e senha e clique em **"Create account"**
3. Guarde seu **e-mail** e **senha** — você vai precisar deles no Passo 5

---

## PASSO 3 — Baixar o código do DevMobile

1. Abra o **Prompt de Comando** ou **Terminal** no seu computador
2. Navegue para uma pasta onde quer salvar o projeto. Exemplo:
   ```
   cd Desktop
   ```
3. Clone o repositório do Replit (substitua pela URL do seu Replit):
   ```
   git clone https://github.com/SEU_USUARIO/SEU_REPO.git devmobile
   cd devmobile
   ```
   
   > **Alternativa sem Git:** No Replit, clique nos três pontos (•••) → "Download as ZIP".
   > Extraia o ZIP e abra o Prompt/Terminal dentro da pasta extraída.

4. Entre na pasta do app mobile:
   ```
   cd artifacts/mobile
   ```

---

## PASSO 4 — Instalar as dependências

Ainda no Prompt/Terminal (dentro da pasta `artifacts/mobile`), rode:

```
npm install -g pnpm
pnpm install
```

Aguarde terminar. Pode demorar alguns minutos dependendo da sua internet.

---

## PASSO 5 — Instalar e configurar o EAS CLI

1. Instale o EAS CLI globalmente:
   ```
   npm install -g eas-cli
   ```

2. Faça login com sua conta do Expo:
   ```
   eas login
   ```
   Digite seu **e-mail** e **senha** do Expo quando solicitado.

3. Verifique se está logado:
   ```
   eas whoami
   ```
   Deve aparecer seu e-mail.

---

## PASSO 6 — Registrar o projeto e obter o projectId (ESSENCIAL)

Este é o passo mais importante. Sem ele, o EAS dá erro. Rode:

```
eas init
```

Quando perguntado:
- **"Would you like to automatically create an EAS project..."** → pressione **Enter** (Sim)
- Qualquer outra pergunta → pressione **Enter** para aceitar o padrão

Após isso, o arquivo `app.json` será atualizado automaticamente com um `projectId` (uma sequência de letras e números). Você verá algo assim:
```json
"extra": {
  "eas": {
    "projectId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```
> **Se o projectId continuar vazio**, rode: `eas init --force`

---

### Erro comum: "Node.js version not supported"
Isso já está resolvido — o `eas.json` agora inclui `"node": "20.18.0"`.  
Se ainda aparecer o erro, verifique sua versão local com `node --version`. Precisa ser 18 ou superior.  
Para atualizar o Node: https://nodejs.org → baixe a versão LTS.

---

## PASSO 7 — Gerar o APK

Este é o comando principal. Rode:

```
eas build --platform android --profile preview
```

O que acontece:
1. O EAS vai fazer upload do código para os servidores do Expo
2. O APK é montado na nuvem (você não precisa ter Android Studio nem Java instalados)
3. O processo leva entre **5 e 20 minutos**
4. Ao final, você recebe um **link para baixar o APK**

> O terminal vai mostrar uma barra de progresso e o link de acompanhamento.
> Você também pode acompanhar em **https://expo.dev** → seus builds.

---

## PASSO 8 — Instalar o APK no celular

### Opção A — Pelo link do Expo (mais fácil)
1. No celular Android, abra o navegador
2. Acesse o link que o EAS gerou (formato: `https://expo.dev/artifacts/...`)
3. Toque em **"Download"**
4. Após baixar, toque no arquivo `.apk`
5. Se aparecer aviso de "fonte desconhecida", vá em **Configurações → Segurança → Instalar apps desconhecidos** e permita para o navegador
6. Toque em **"Instalar"**

### Opção B — Via cabo USB
1. Copie o arquivo `.apk` para o celular via cabo USB
2. No celular, abra o **Gerenciador de Arquivos**
3. Navegue até onde o arquivo está e toque nele para instalar

---

## Perguntas frequentes

**"Quanto custa?"**
O EAS Build tem um plano gratuito com 30 builds por mês para Android. Mais que suficiente para uso pessoal.

**"Preciso do Android Studio?"**
Não. O EAS Build usa a nuvem do Expo para compilar. Você não precisa instalar o Android Studio.

**"Deu erro durante o build, o que faço?"**
- Verifique se está dentro da pasta `artifacts/mobile`
- Verifique se fez `pnpm install` antes
- Acesse https://expo.dev e veja os logs completos do build

**"O APK é diferente da versão que vejo no Replit?"**
Sim! A versão no Replit é uma prévia web. O APK instalado no celular tem acesso a todas as funcionalidades nativas: seletor de arquivos, compartilhamento, notificações, etc.

**"Posso atualizar o app depois sem regerar o APK?"**
Com o **Expo Updates** (EAS Update), sim — pequenas atualizações de código chegam direto ao app instalado sem precisar reinstalar. Posso configurar isso se quiser.

---

## Resumo dos comandos (copie e cole)

```bash
# 1. Entrar na pasta do app
cd artifacts/mobile

# 2. Instalar dependências
pnpm install

# 3. Instalar EAS CLI e fazer login
npm install -g eas-cli
eas login

# 4. Registrar o projeto no Expo (ESSENCIAL — só na primeira vez)
eas init

# 5. Gerar APK
eas build --platform android --profile preview
```

---

*Manual gerado para DevMobile — IDE no Celular*
*Dúvidas? Abra o FloatingAI no app e pergunte!*
maikon.advogado.mg@gmail.com
Maikon183712*