# PLANO DO PROJETO: Projeto Profissional Full-Stack + Neon DB

> Gerado automaticamente pelo SK Code Editor em 09/05/2026, 13:08:13
> **1299 arquivo(s)** | **~326.262 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript

**Para rodar o projeto:**
```bash
# Abra index.html no Preview (botao Play)
```

---

## ESTRUTURA DE ARQUIVOS

```
Projeto Profissional Full-Stack + Neon DB/
├── .sk/
│   └── memoria.json
├── 1.sk-code-editor-v26-juridico-completo/
│   ├── artifacts/
│   │   ├── api-server/
│   │   │   ├── .replit-artifact/
│   │   │   │   └── artifact.toml
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   └── logger.ts
│   │   │   │   ├── routes/
│   │   │   │   │   ├── ai-chat.ts
│   │   │   │   │   ├── config.ts
│   │   │   │   │   ├── drive.ts
│   │   │   │   │   ├── exec.ts
│   │   │   │   │   ├── github.ts
│   │   │   │   │   ├── health.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── legal-ai.ts
│   │   │   │   │   ├── proxy.ts
│   │   │   │   │   ├── search.ts
│   │   │   │   │   ├── upload.ts
│   │   │   │   │   ├── voice.ts
│   │   │   │   │   └── workspace.ts
│   │   │   │   ├── app.ts
│   │   │   │   └── index.ts
│   │   │   ├── build.mjs
│   │   │   ├── package.json
│   │   │   ├── pty_helper.c
│   │   │   └── tsconfig.json
│   │   ├── code-editor/
│   │   │   ├── .replit-artifact/
│   │   │   │   └── artifact.toml
│   │   │   ├── public/
│   │   │   │   ├── favicon.svg
│   │   │   │   ├── manifest.json
│   │   │   │   └── sw.js
│   │   │   ├── src/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ui/
│   │   │   │   │   │   ├── accordion.tsx
│   │   │   │   │   │   ├── alert-dialog.tsx
│   │   │   │   │   │   ├── alert.tsx
│   │   │   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   │   │   ├── avatar.tsx
│   │   │   │   │   │   ├── badge.tsx
│   │   │   │   │   │   ├── breadcrumb.tsx
│   │   │   │   │   │   ├── button-group.tsx
│   │   │   │   │   │   ├── button.tsx
│   │   │   │   │   │   ├── calendar.tsx
│   │   │   │   │   │   ├── card.tsx
│   │   │   │   │   │   ├── carousel.tsx
│   │   │   │   │   │   ├── chart.tsx
│   │   │   │   │   │   ├── checkbox.tsx
│   │   │   │   │   │   ├── collapsible.tsx
│   │   │   │   │   │   ├── command.tsx
│   │   │   │   │   │   ├── context-menu.tsx
│   │   │   │   │   │   ├── dialog.tsx
│   │   │   │   │   │   ├── drawer.tsx
│   │   │   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   │   │   ├── empty.tsx
│   │   │   │   │   │   ├── field.tsx
│   │   │   │   │   │   ├── form.tsx
│   │   │   │   │   │   ├── hover-card.tsx
│   │   │   │   │   │   ├── input-group.tsx
│   │   │   │   │   │   ├── input-otp.tsx
│   │   │   │   │   │   ├── input.tsx
│   │   │   │   │   │   ├── item.tsx
│   │   │   │   │   │   ├── kbd.tsx
│   │   │   │   │   │   ├── label.tsx
│   │   │   │   │   │   ├── menubar.tsx
│   │   │   │   │   │   ├── navigation-menu.tsx
│   │   │   │   │   │   ├── pagination.tsx
│   │   │   │   │   │   ├── popover.tsx
│   │   │   │   │   │   ├── progress.tsx
│   │   │   │   │   │   ├── radio-group.tsx
│   │   │   │   │   │   ├── resizable.tsx
│   │   │   │   │   │   ├── scroll-area.tsx
│   │   │   │   │   │   ├── select.tsx
│   │   │   │   │   │   ├── separator.tsx
│   │   │   │   │   │   ├── sheet.tsx
│   │   │   │   │   │   ├── sidebar.tsx
│   │   │   │   │   │   ├── skeleton.tsx
│   │   │   │   │   │   ├── slider.tsx
│   │   │   │   │   │   ├── sonner.tsx
│   │   │   │   │   │   ├── spinner.tsx
│   │   │   │   │   │   ├── switch.tsx
│   │   │   │   │   │   ├── table.tsx
│   │   │   │   │   │   ├── tabs.tsx
│   │   │   │   │   │   ├── textarea.tsx
│   │   │   │   │   │   ├── toast.tsx
│   │   │   │   │   │   ├── toaster.tsx
│   │   │   │   │   │   ├── toggle-group.tsx
│   │   │   │   │   │   ├── toggle.tsx
│   │   │   │   │   │   └── tooltip.tsx
│   │   │   │   │   ├── AIChat.tsx
│   │   │   │   │   ├── AssistenteJuridico.tsx
│   │   │   │   │   ├── CampoLivre.tsx
│   │   │   │   │   ├── CodeEditor.tsx
│   │   │   │   │   ├── DriveBackupPanel.tsx
│   │   │   │   │   ├── EditorLayout.tsx
│   │   │   │   │   ├── FileTree.tsx
│   │   │   │   │   ├── GitHubPanel.tsx
│   │   │   │   │   ├── PackageSearch.tsx
│   │   │   │   │   ├── Preview.tsx
│   │   │   │   │   ├── QuickPrompt.tsx
│   │   │   │   │   ├── RealTerminal.tsx
│   │   │   │   │   ├── StreamTerminal.tsx
│   │   │   │   │   ├── TemplateSelector.tsx
│   │   │   │   │   ├── Terminal.tsx
│   │   │   │   │   ├── VoiceCard.tsx
│   │   │   │   │   └── VoiceMode.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── use-mobile.tsx
│   │   │   │   │   └── use-toast.ts
│   │   │   │   ├── lib/
│   │   │   │   │   ├── ai-service.ts
│   │   │   │   │   ├── github-service.ts
│   │   │   │   │   ├── projects.ts
│   │   │   │   │   ├── store.ts
│   │   │   │   │   ├── templates.ts
│   │   │   │   │   ├── tts-service.ts
│   │   │   │   │   ├── utils.ts
│   │   │   │   │   ├── virtual-fs.ts
│   │   │   │   │   └── zip-service.ts
│   │   │   │   ├── App.tsx
│   │   │   │   ├── index.css
│   │   │   │   └── main.tsx
│   │   │   ├── components.json
│   │   │   ├── index.html
│   │   │   ├── package.json
│   │   │   ├── SYSTEM_DOCS.md
│   │   │   ├── tsconfig.json
│   │   │   └── vite.config.ts
│   │   └── mockup-sandbox/
│   │       ├── .replit-artifact/
│   │       │   └── artifact.toml
│   │       ├── src/
│   │       │   ├── .generated/
│   │       │   │   └── mockup-components.ts
│   │       │   ├── components/
│   │       │   │   └── ui/
│   │       │   │       ├── accordion.tsx
│   │       │   │       ├── alert-dialog.tsx
│   │       │   │       ├── alert.tsx
│   │       │   │       ├── aspect-ratio.tsx
│   │       │   │       ├── avatar.tsx
│   │       │   │       ├── badge.tsx
│   │       │   │       ├── breadcrumb.tsx
│   │       │   │       ├── button-group.tsx
│   │       │   │       ├── button.tsx
│   │       │   │       ├── calendar.tsx
│   │       │   │       ├── card.tsx
│   │       │   │       ├── carousel.tsx
│   │       │   │       ├── chart.tsx
│   │       │   │       ├── checkbox.tsx
│   │       │   │       ├── collapsible.tsx
│   │       │   │       ├── command.tsx
│   │       │   │       ├── context-menu.tsx
│   │       │   │       ├── dialog.tsx
│   │       │   │       ├── drawer.tsx
│   │       │   │       ├── dropdown-menu.tsx
│   │       │   │       ├── empty.tsx
│   │       │   │       ├── field.tsx
│   │       │   │       ├── form.tsx
│   │       │   │       ├── hover-card.tsx
│   │       │   │       ├── input-group.tsx
│   │       │   │       ├── input-otp.tsx
│   │       │   │       ├── input.tsx
│   │       │   │       ├── item.tsx
│   │       │   │       ├── kbd.tsx
│   │       │   │       ├── label.tsx
│   │       │   │       ├── menubar.tsx
│   │       │   │       ├── navigation-menu.tsx
│   │       │   │       ├── pagination.tsx
│   │       │   │       ├── popover.tsx
│   │       │   │       ├── progress.tsx
│   │       │   │       ├── radio-group.tsx
│   │       │   │       ├── resizable.tsx
│   │       │   │       ├── scroll-area.tsx
│   │       │   │       ├── select.tsx
│   │       │   │       ├── separator.tsx
│   │       │   │       ├── sheet.tsx
│   │       │   │       ├── sidebar.tsx
│   │       │   │       ├── skeleton.tsx
│   │       │   │       ├── slider.tsx
│   │       │   │       ├── sonner.tsx
│   │       │   │       ├── spinner.tsx
│   │       │   │       ├── switch.tsx
│   │       │   │       ├── table.tsx
│   │       │   │       ├── tabs.tsx
│   │       │   │       ├── textarea.tsx
│   │       │   │       ├── toast.tsx
│   │       │   │       ├── toaster.tsx
│   │       │   │       ├── toggle-group.tsx
│   │       │   │       ├── toggle.tsx
│   │       │   │       └── tooltip.tsx
│   │       │   ├── hooks/
│   │       │   │   ├── use-mobile.tsx
│   │       │   │   └── use-toast.ts
│   │       │   ├── lib/
│   │       │   │   └── utils.ts
│   │       │   ├── App.tsx
│   │       │   ├── index.css
│   │       │   └── main.tsx
│   │       ├── components.json
│   │       ├── index.html
│   │       ├── mockupPreviewPlugin.ts
│   │       ├── package.json
│   │       ├── tsconfig.json
│   │       └── vite.config.ts
│   ├── lib/
│   │   ├── api-client-react/
│   │   │   ├── src/
│   │   │   │   ├── generated/
│   │   │   │   │   ├── api.schemas.ts
│   │   │   │   │   └── api.ts
│   │   │   │   ├── custom-fetch.ts
│   │   │   │   └── index.ts
│   │   │   ├── package.json
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.tsbuildinfo
│   │   ├── api-spec/
│   │   │   ├── openapi.yaml
│   │   │   ├── orval.config.ts
│   │   │   └── package.json
│   │   ├── api-zod/
│   │   │   ├── src/
│   │   │   │   ├── generated/
│   │   │   │   │   ├── types/
│   │   │   │   │   │   ├── healthStatus.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── api.ts
│   │   │   │   └── index.ts
│   │   │   ├── package.json
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.tsbuildinfo
│   │   └── db/
│   │       ├── src/
│   │       │   ├── schema/
│   │       │   │   └── index.ts
│   │       │   └── index.ts
│   │       ├── drizzle.config.ts
│   │       ├── package.json
│   │       ├── tsconfig.json
│   │       └── tsconfig.tsbuildinfo
│   ├── scripts/
│   │   ├── src/
│   │   │   └── hello.ts
│   │   ├── package.json
│   │   ├── post-merge.sh
│   │   └── tsconfig.json
│   ├── package.json
│   ├── pnpm-workspace.yaml
│   └── replit.md
├── apk-builder-android/
│   ├── .github/
│   │   └── workflows/
│   │       └── build-apk.yml
│   ├── android/
│   │   ├── app/
│   │   │   ├── src/
│   │   │   │   └── main/
│   │   │   │       ├── assets/
│   │   │   │       │   └── public/
│   │   │   │       │       ├── assets/
│   │   │   │       │       │   └── index-yJIu36Xs.css
│   │   │   │       │       ├── favicon.svg
│   │   │   │       │       ├── icon-192.svg
│   │   │   │       │       ├── icon-512.svg
│   │   │   │       │       ├── index.html
│   │   │   │       │       ├── manifest.json
│   │   │   │       │       └── sw.js
│   │   │   │       ├── java/
│   │   │   │       │   └── br/
│   │   │   │       │       └── com/
│   │   │   │       │           └── maikoncaldeira/
│   │   │   │       │               └── apkbuilder/
│   │   │   │       │                   └── MainActivity.java
│   │   │   │       ├── res/
│   │   │   │       │   └── values/
│   │   │   │       │       ├── strings.xml
│   │   │   │       │       └── styles.xml
│   │   │   │       └── AndroidManifest.xml
│   │   │   └── build.gradle
│   │   ├── build.gradle
│   │   ├── gradle.properties
│   │   └── settings.gradle
│   ├── capacitor.config.ts
│   ├── package.json
│   └── README.md
├── apk-builder-source/
│   ├── assets/
│   │   ├── index-BJuPNGJb.css
│   │   ├── Terminal-CLVdV-R2.js
│   │   └── Terminal-G5OQeJvU.css
│   ├── favicon.svg
│   ├── icon-192.svg
│   ├── icon-512.svg
│   ├── index.html
│   ├── manifest.json
│   └── sw.js
├── assistente-juridico-completo/
│   └── artifacts/
│       └── mobile/
│           ├── .replit-artifact/
│           │   └── artifact.toml
│           ├── app/
│           │   ├── (tabs)/
│           │   │   ├── _layout.tsx
│           │   │   ├── campo-livre.tsx
│           │   │   ├── comunicacoes.tsx
│           │   │   ├── config.tsx
│           │   │   ├── index.tsx
│           │   │   ├── pdpj.tsx
│           │   │   ├── playground.tsx
│           │   │   └── tramitacao.tsx
│           │   ├── _layout.tsx
│           │   ├── +not-found.tsx
│           │   ├── config-inicial.tsx
│           │   └── login.tsx
│           ├── components/
│           │   ├── CodeBlock.tsx
│           │   ├── ErrorBoundary.tsx
│           │   ├── ErrorFallback.tsx
│           │   ├── HtmlViewer.tsx
│           │   ├── KeyboardAwareScrollViewCompat.tsx
│           │   ├── ResultCard.tsx
│           │   ├── SideMenu.tsx
│           │   └── StatusModal.tsx
│           ├── constants/
│           │   ├── colors.ts
│           │   └── prompts.ts
│           ├── hooks/
│           │   └── useColors.ts
│           ├── scripts/
│           │   └── build.js
│           ├── server/
│           │   ├── templates/
│           │   │   └── landing-page.html
│           │   └── serve.js
│           ├── services/
│           │   ├── ai.ts
│           │   ├── fileImport.ts
│           │   ├── neon.ts
│           │   ├── storage.ts
│           │   └── voice.ts
│           ├── .gitignore
│           ├── .npmrc
│           ├── app.json
│           ├── babel.config.js
│           ├── eas.json
│           ├── expo-env.d.ts
│           ├── metro.config.js
│           ├── package.json
│           ├── SQL_SETUP.sql
│           └── tsconfig.json
├── AssistenteJuridico-Mobile (10)/
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── _layout.tsx
│   │   │   ├── campo-livre.tsx
│   │   │   ├── config.tsx
│   │   │   ├── index.tsx
│   │   │   ├── pdpj.tsx
│   │   │   └── tramitacao.tsx
│   │   ├── _layout.tsx
│   │   ├── config-inicial.tsx
│   │   └── login.tsx
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── ResultCard.tsx
│   │   │   └── VoiceButton.tsx
│   │   ├── constants/
│   │   │   ├── colors.ts
│   │   │   └── prompts.ts
│   │   └── services/
│   │       ├── ai.ts
│   │       ├── storage.ts
│   │       └── voice.ts
│   ├── .gitignore
│   ├── app.json
│   ├── babel.config.js
│   ├── eas.json
│   ├── package.json
│   ├── README.md
│   ├── SQL_SETUP.sql
│   └── tsconfig.json
├── AssistenteJuridico-PWA/
│   └── artifacts/
│       └── assistente-juridico/
│           ├── .replit-artifact/
│           │   └── artifact.toml
│           ├── api/
│           │   └── .ts
│           ├── client/
│           │   ├── public/
│           │   │   ├── auditoria.html
│           │   │   ├── codigo-formatacao.txt
│           │   │   ├── comparador.html
│           │   │   ├── manifest.json
│           │   │   └── sw.js
│           │   ├── replit_integrations/
│           │   │   └── audio/
│           │   │       ├── audio-playback-worklet.js
│           │   │       ├── audio-utils.ts
│           │   │       ├── index.ts
│           │   │       ├── useAudioPlayback.ts
│           │   │       ├── useVoiceRecorder.ts
│           │   │       └── useVoiceStream.ts
│           │   ├── src/
│           │   │   ├── components/
│           │   │   │   ├── ui/
│           │   │   │   │   ├── accordion.tsx
│           │   │   │   │   ├── alert-dialog.tsx
│           │   │   │   │   ├── alert.tsx
│           │   │   │   │   ├── aspect-ratio.tsx
│           │   │   │   │   ├── avatar.tsx
│           │   │   │   │   ├── badge.tsx
│           │   │   │   │   ├── breadcrumb.tsx
│           │   │   │   │   ├── button.tsx
│           │   │   │   │   ├── calendar.tsx
│           │   │   │   │   ├── card.tsx
│           │   │   │   │   ├── carousel.tsx
│           │   │   │   │   ├── chart.tsx
│           │   │   │   │   ├── checkbox.tsx
│           │   │   │   │   ├── collapsible.tsx
│           │   │   │   │   ├── command.tsx
│           │   │   │   │   ├── context-menu.tsx
│           │   │   │   │   ├── dialog.tsx
│           │   │   │   │   ├── drawer.tsx
│           │   │   │   │   ├── dropdown-menu.tsx
│           │   │   │   │   ├── form.tsx
│           │   │   │   │   ├── hover-card.tsx
│           │   │   │   │   ├── input-otp.tsx
│           │   │   │   │   ├── input.tsx
│           │   │   │   │   ├── label.tsx
│           │   │   │   │   ├── menubar.tsx
│           │   │   │   │   ├── navigation-menu.tsx
│           │   │   │   │   ├── pagination.tsx
│           │   │   │   │   ├── popover.tsx
│           │   │   │   │   ├── progress.tsx
│           │   │   │   │   ├── radio-group.tsx
│           │   │   │   │   ├── resizable.tsx
│           │   │   │   │   ├── scroll-area.tsx
│           │   │   │   │   ├── select.tsx
│           │   │   │   │   ├── separator.tsx
│           │   │   │   │   ├── sheet.tsx
│           │   │   │   │   ├── sidebar.tsx
│           │   │   │   │   ├── skeleton.tsx
│           │   │   │   │   ├── slider.tsx
│           │   │   │   │   ├── switch.tsx
│           │   │   │   │   ├── table.tsx
│           │   │   │   │   ├── tabs.tsx
│           │   │   │   │   ├── textarea.tsx
│           │   │   │   │   ├── toast.tsx
│           │   │   │   │   ├── toaster.tsx
│           │   │   │   │   ├── toggle-group.tsx
│           │   │   │   │   ├── toggle.tsx
│           │   │   │   │   └── tooltip.tsx
│           │   │   │   ├── pwa-install.tsx
│           │   │   │   ├── theme-provider.tsx
│           │   │   │   ├── theme-toggle.tsx
│           │   │   │   └── tiptap-editor.tsx
│           │   │   ├── hooks/
│           │   │   │   ├── use-mobile.tsx
│           │   │   │   └── use-toast.ts
│           │   │   ├── lib/
│           │   │   │   ├── queryClient.ts
│           │   │   │   └── utils.ts
│           │   │   ├── pages/
│           │   │   │   ├── auditoria-financeira.tsx
│           │   │   │   ├── code-assistant.tsx
│           │   │   │   ├── comparador-juridico.tsx
│           │   │   │   ├── comunicacoes-cnj.tsx
│           │   │   │   ├── configuracoes.tsx
│           │   │   │   ├── consulta-corporativo.tsx
│           │   │   │   ├── consulta-pdpj.tsx
│           │   │   │   ├── consulta-processual.tsx
│           │   │   │   ├── filtrador.tsx
│           │   │   │   ├── jurisprudencia.tsx
│           │   │   │   ├── legal-assistant.tsx
│           │   │   │   ├── legal-assistant.tsx.recovered
│           │   │   │   ├── login.tsx
│           │   │   │   ├── not-found.tsx
│           │   │   │   ├── painel-processos.tsx
│           │   │   │   ├── playground.tsx
│           │   │   │   ├── previdenciario.tsx
│           │   │   │   ├── robo-djen.tsx
│           │   │   │   ├── token-generator.tsx
│           │   │   │   └── tramitacao.tsx
│           │   │   ├── App.tsx
│           │   │   ├── index.css
│           │   │   └── main.tsx
│           │   ├── api.ts
│           │   ├── index.html
│           │   └── index.ts
│           ├── migrations/
│           │   ├── meta/
│           │   │   ├── _journal.json
│           │   │   └── 0000_snapshot.json
│           │   └── 0000_init.sql
│           ├── public/
│           │   ├── auditoria.html
│           │   ├── favicon.svg
│           │   ├── icon.svg
│           │   ├── manifest.webmanifest
│           │   └── sw.js
│           ├── script/
│           │   └── build.ts
│           ├── server/
│           │   ├── replit_integrations/
│           │   │   ├── audio/
│           │   │   │   ├── client.ts
│           │   │   │   ├── index.ts
│           │   │   │   └── routes.ts
│           │   │   ├── batch/
│           │   │   │   ├── index.ts
│           │   │   │   └── utils.ts
│           │   │   ├── chat/
│           │   │   │   ├── index.ts
│           │   │   │   ├── routes.ts
│           │   │   │   └── storage.ts
│           │   │   └── image/
│           │   │       ├── client.ts
│           │   │       ├── index.ts
│           │   │       └── routes.ts
│           │   ├── db.ts
│           │   ├── djen.ts
│           │   ├── index.ts
│           │   ├── local-config.ts
│           │   ├── routes.ts
│           │   ├── static.ts
│           │   ├── storage.ts
│           │   └── vite.ts
│           ├── shared/
│           │   ├── models/
│           │   │   └── chat.ts
│           │   ├── shared/
│           │   │   └── schema.ts
│           │   └── schema.ts
│           ├── src/
│           │   ├── components/
│           │   │   ├── ui/
│           │   │   │   ├── accordion.tsx
│           │   │   │   ├── alert-dialog.tsx
│           │   │   │   ├── alert.tsx
│           │   │   │   ├── aspect-ratio.tsx
│           │   │   │   ├── avatar.tsx
│           │   │   │   ├── badge.tsx
│           │   │   │   ├── breadcrumb.tsx
│           │   │   │   ├── button.tsx
│           │   │   │   ├── calendar.tsx
│           │   │   │   ├── card.tsx
│           │   │   │   ├── carousel.tsx
│           │   │   │   ├── chart.tsx
│           │   │   │   ├── checkbox.tsx
│           │   │   │   ├── collapsible.tsx
│           │   │   │   ├── command.tsx
│           │   │   │   ├── context-menu.tsx
│           │   │   │   ├── dialog.tsx
│           │   │   │   ├── drawer.tsx
│           │   │   │   ├── dropdown-menu.tsx
│           │   │   │   ├── form.tsx
│           │   │   │   ├── hover-card.tsx
│           │   │   │   ├── input-otp.tsx
│           │   │   │   ├── input.tsx
│           │   │   │   ├── label.tsx
│           │   │   │   ├── menubar.tsx
│           │   │   │   ├── navigation-menu.tsx
│           │   │   │   ├── pagination.tsx
│           │   │   │   ├── popover.tsx
│           │   │   │   ├── progress.tsx
│           │   │   │   ├── radio-group.tsx
│           │   │   │   ├── resizable.tsx
│           │   │   │   ├── scroll-area.tsx
│           │   │   │   ├── select.tsx
│           │   │   │   ├── separator.tsx
│           │   │   │   ├── sheet.tsx
│           │   │   │   ├── sidebar.tsx
│           │   │   │   ├── skeleton.tsx
│           │   │   │   ├── slider.tsx
│           │   │   │   ├── switch.tsx
│           │   │   │   ├── table.tsx
│           │   │   │   ├── tabs.tsx
│           │   │   │   ├── textarea.tsx
│           │   │   │   ├── toast.tsx
│           │   │   │   ├── toaster.tsx
│           │   │   │   ├── toggle-group.tsx
│           │   │   │   ├── toggle.tsx
│           │   │   │   └── tooltip.tsx
│           │   │   ├── pwa-install.tsx
│           │   │   ├── theme-provider.tsx
│           │   │   ├── theme-toggle.tsx
│           │   │   └── tiptap-editor.tsx
│           │   ├── hooks/
│           │   │   ├── use-mobile.tsx
│           │   │   └── use-toast.ts
│           │   ├── lib/
│           │   │   ├── offline-api.ts
│           │   │   ├── queryClient.ts
│           │   │   └── utils.ts
│           │   ├── pages/
│           │   │   ├── auditoria-financeira.tsx
│           │   │   ├── code-assistant.tsx
│           │   │   ├── comparador-juridico.tsx
│           │   │   ├── comunicacoes-cnj.tsx
│           │   │   ├── configuracoes.tsx
│           │   │   ├── consulta-corporativo.tsx
│           │   │   ├── consulta-pdpj.tsx
│           │   │   ├── consulta-processual.tsx
│           │   │   ├── filtrador.tsx
│           │   │   ├── jurisprudencia.tsx
│           │   │   ├── legal-assistant.tsx
│           │   │   ├── legal-assistant.tsx.recovered
│           │   │   ├── login.tsx
│           │   │   ├── not-found.tsx
│           │   │   ├── painel-processos.tsx
│           │   │   ├── playground.tsx
│           │   │   ├── previdenciario.tsx
│           │   │   ├── robo-djen.tsx
│           │   │   ├── token-generator.tsx
│           │   │   └── tramitacao.tsx
│           │   ├── App.tsx
│           │   ├── index.css
│           │   └── main.tsx
│           ├── .gitignore
│           ├── components.json
│           ├── drizzle.config.ts
│           ├── index.html
│           ├── MANUAL_APK_ANDROID.md
│           ├── MANUAL_APK_ORIENTADO.md
│           ├── package.json
│           ├── postcss.config.js
│           ├── README.md
│           ├── RELATORIO_CORRECOES.md
│           ├── SECURITY.md
│           ├── tailwind.config.ts
│           ├── tsconfig.json
│           └── vite.config.ts
├── AssistenteJuridicoIA-debug.apk_1777826916488/
│   └── AssistenteJuridicoIA-debug.apk/
│       ├── assets/
│       │   ├── public/
│       │   │   ├── assets/
│       │   │   │   ├── index-B-shzaQ9.css
│       │   │   │   ├── index-D8bM_P_3.js
│       │   │   │   ├── tiptap-DgKt6v5q.js
│       │   │   │   └── vendor-3vo9YLbA.js
│       │   │   ├── cordova_plugins.js
│       │   │   ├── cordova.js
│       │   │   ├── favicon.svg
│       │   │   ├── icon.svg
│       │   │   ├── index.html
│       │   │   ├── manifest.webmanifest
│       │   │   └── sw.js
│       │   ├── capacitor.config.json
│       │   ├── capacitor.plugins.json
│       │   └── native-bridge.js
│       ├── META-INF/
│       │   ├── services/
│       │   │   ├── kotlinx.coroutines.CoroutineExceptionHandler
│       │   │   └── kotlinx.coroutines.internal.MainDispatcherFactory
│       │   ├── androidx.activity_activity.version
│       │   ├── androidx.annotation_annotation-experimental.version
│       │   ├── androidx.appcompat_appcompat-resources.version
│       │   ├── androidx.appcompat_appcompat.version
│       │   ├── androidx.arch.core_core-runtime.version
│       │   ├── androidx.coordinatorlayout_coordinatorlayout.version
│       │   ├── androidx.core_core-ktx.version
│       │   ├── androidx.core_core-splashscreen.version
│       │   ├── androidx.core_core-viewtree.version
│       │   ├── androidx.core_core.version
│       │   ├── androidx.cursoradapter_cursoradapter.version
│       │   ├── androidx.customview_customview.version
│       │   ├── androidx.drawerlayout_drawerlayout.version
│       │   ├── androidx.emoji2_emoji2-views-helper.version
│       │   ├── androidx.emoji2_emoji2.version
│       │   ├── androidx.fragment_fragment.version
│       │   ├── androidx.interpolator_interpolator.version
│       │   ├── androidx.lifecycle_lifecycle-livedata-core.version
│       │   ├── androidx.lifecycle_lifecycle-livedata.version
│       │   ├── androidx.lifecycle_lifecycle-process.version
│       │   ├── androidx.lifecycle_lifecycle-runtime.version
│       │   ├── androidx.lifecycle_lifecycle-viewmodel-savedstate.version
│       │   ├── androidx.lifecycle_lifecycle-viewmodel.version
│       │   ├── androidx.loader_loader.version
│       │   ├── androidx.profileinstaller_profileinstaller.version
│       │   ├── androidx.savedstate_savedstate.version
│       │   ├── androidx.startup_startup-runtime.version
│       │   ├── androidx.tracing_tracing.version
│       │   ├── androidx.vectordrawable_vectordrawable-animated.version
│       │   ├── androidx.vectordrawable_vectordrawable.version
│       │   ├── androidx.versionedparcelable_versionedparcelable.version
│       │   ├── androidx.viewpager_viewpager.version
│       │   ├── androidx.webkit_webkit.version
│       │   ├── kotlinx_coroutines_android.version
│       │   └── kotlinx_coroutines_core.version
│       └── org/
│           └── apache/
│               └── cordova/
│                   └── allowlist/
│                       ├── index.html
│                       └── index2.html
├── DevMobile-CORRIGIDO (6)/
│   ├── .replit-artifact/
│   │   └── artifact.toml
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── _layout.tsx
│   │   │   ├── ai.tsx
│   │   │   ├── editor.tsx
│   │   │   ├── index.tsx
│   │   │   ├── plugins.tsx
│   │   │   ├── pwa.tsx
│   │   │   ├── settings.tsx
│   │   │   ├── tasks.tsx
│   │   │   └── terminal.tsx
│   │   ├── _layout.tsx
│   │   └── +not-found.tsx
│   ├── components/
│   │   ├── AIChat.tsx
│   │   ├── AIMemoryModal.tsx
│   │   ├── APKBuilderModal.tsx
│   │   ├── CampoLivreModal.tsx
│   │   ├── CheckpointsModal.tsx
│   │   ├── CodeEditor.tsx
│   │   ├── CombinarAppsModal.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── ErrorFallback.tsx
│   │   ├── FileSidebar.tsx
│   │   ├── FloatingAI.tsx
│   │   ├── GitHubModal.tsx
│   │   ├── HtmlPlayground.tsx
│   │   ├── KeyboardAwareScrollViewCompat.tsx
│   │   ├── LibrarySearch.tsx
│   │   ├── ManualModal.tsx
│   │   ├── MessageRenderer.tsx
│   │   ├── MonacoEditor.tsx
│   │   ├── PreviewPanel.tsx
│   │   ├── ProjectOverviewModal.tsx
│   │   ├── ProjectPlanModal.tsx
│   │   ├── SystemStatus.tsx
│   │   ├── Terminal.tsx
│   │   ├── VoiceAssistant.tsx
│   │   ├── VSCodeView.tsx
│   │   └── VSCodeWebModal.tsx
│   ├── constants/
│   │   └── colors.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── data/
│   │   └── featuredProjects.ts
│   ├── hooks/
│   │   ├── useApiBase.ts
│   │   └── useColors.ts
│   ├── plugins/
│   │   └── withTermuxIntent.js
│   ├── server/
│   │   ├── templates/
│   │   │   └── landing-page.html
│   │   └── serve.js
│   ├── services/
│   │   ├── apiBase.ts
│   │   ├── githubService.ts
│   │   ├── localSQLite.ts
│   │   ├── previewService.ts
│   │   ├── runtimeMode.ts
│   │   ├── storageService.ts
│   │   └── terminalService.ts
│   ├── utils/
│   │   ├── projectPlan.ts
│   │   └── zipUtils.ts
│   ├── .easignore
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── app.json
│   ├── babel.config.js
│   ├── eas.json
│   ├── expo-env.d.ts
│   ├── metro.config.js
│   ├── package.json
│   └── tsconfig.json
├── devmobile-fix/
│   └── devmobile-fix/
│       ├── .github/
│       │   └── workflows/
│       │       ├── build-apk-eas.yml
│       │       └── build-apk-local.yml
│       ├── .replit-artifact/
│       │   └── artifact.toml
│       ├── app/
│       │   ├── (tabs)/
│       │   │   ├── _layout.tsx
│       │   │   ├── ai.tsx
│       │   │   ├── editor.tsx
│       │   │   ├── index.tsx
│       │   │   ├── plugins.tsx
│       │   │   ├── pwa.tsx
│       │   │   ├── settings.tsx
│       │   │   ├── tasks.tsx
│       │   │   └── terminal.tsx
│       │   ├── _layout.tsx
│       │   └── +not-found.tsx
│       ├── components/
│       │   ├── AIChat.tsx
│       │   ├── AIMemoryModal.tsx
│       │   ├── APKBuilderModal.tsx
│       │   ├── CampoLivreModal.tsx
│       │   ├── CheckpointsModal.tsx
│       │   ├── CodeEditor.tsx
│       │   ├── CombinarAppsModal.tsx
│       │   ├── ErrorBoundary.tsx
│       │   ├── ErrorFallback.tsx
│       │   ├── FileSidebar.tsx
│       │   ├── FloatingAI.tsx
│       │   ├── GitHubModal.tsx
│       │   ├── HtmlPlayground.tsx
│       │   ├── KeyboardAwareScrollViewCompat.tsx
│       │   ├── LibrarySearch.tsx
│       │   ├── ManualModal.tsx
│       │   ├── MessageRenderer.tsx
│       │   ├── MonacoEditor.tsx
│       │   ├── PreviewPanel.tsx
│       │   ├── ProjectOverviewModal.tsx
│       │   ├── ProjectPlanModal.tsx
│       │   ├── SystemStatus.tsx
│       │   ├── Terminal.tsx
│       │   ├── VoiceAssistant.tsx
│       │   ├── VSCodeView.tsx
│       │   └── VSCodeWebModal.tsx
│       ├── constants/
│       │   └── colors.ts
│       ├── context/
│       │   └── AppContext.tsx
│       ├── data/
│       │   └── featuredProjects.ts
│       ├── hooks/
│       │   ├── useApiBase.ts
│       │   └── useColors.ts
│       ├── plugins/
│       │   └── withTermuxIntent.js
│       ├── server/
│       │   ├── templates/
│       │   │   └── landing-page.html
│       │   └── serve.js
│       ├── services/
│       │   ├── apiBase.ts
│       │   ├── githubService.ts
│       │   ├── localSQLite.ts
│       │   ├── previewService.ts
│       │   ├── runtimeMode.ts
│       │   ├── storageService.ts
│       │   └── terminalService.ts
│       ├── utils/
│       │   ├── projectPlan.ts
│       │   └── zipUtils.ts
│       ├── .easignore
│       ├── .env
│       ├── .env.example
│       ├── .gitignore
│       ├── .npmrc
│       ├── app.json
│       ├── babel.config.js
│       ├── COMO-BUILDAR-APK.md
│       ├── eas.json
│       ├── expo-env.d.ts
│       ├── GERAR-APK.md
│       ├── metro.config.js
│       ├── package.json
│       ├── PLANO.md
│       └── tsconfig.json
├── manuais 1/
│   ├── build-apk-local.yml.txt
│   ├── build-apk.yml (1).txt
│   ├── build-apk.yml (2).txt
│   ├── build-apk.yml.txt
│   ├── COMO-BUILDAR-APK.md
│   ├── GERAR-APK.md
│   ├── guia-completo-apk (2).md
│   ├── guia-completo-apk (4).md
│   ├── guia-completo-apk.md
│   ├── index.html
│   ├── LEIA-ME-PARA-PROGRAMADOR.md
│   ├── MANUAL_APK (2).md
│   ├── MANUAL_BUILD_APK (3).md
│   ├── manual-dev (2).md
│   ├── manual-dev (3).md
│   ├── manual-dev.md
│   ├── MANUAL-SK-CODE-EDITOR (2).md
│   ├── MANUAL-SK-CODE-EDITOR.md
│   └── PLANO.md
├── SK-Code-Editor-APK-pronto (5)/
│   ├── assets/
│   │   ├── index-D5g-sV5e.css
│   │   ├── vendor-fs-BeamS8bA.js
│   │   ├── vendor-highlight-Bu9o_ty_.js
│   │   ├── vendor-highlight-DOOs4slz.css
│   │   ├── vendor-lucide-NZRTcJIq.js
│   │   ├── vendor-markdown-CM6-e2rl.js
│   │   ├── vendor-misc-COW7C1HQ.js
│   │   ├── vendor-monaco-CS9w1txC.js
│   │   ├── vendor-react-D8m3Uig9.js
│   │   ├── vendor-react-dom-CdNyEL3a.js
│   │   ├── vendor-webcontainer-BPoiPq3D.js
│   │   ├── vendor-xterm-CT6HrMBF.js
│   │   └── vendor-xterm-DDGTF8rc.css
│   ├── favicon.svg
│   ├── manifest.json
│   └── sw.js
├── sk-code-editor-completo (13)/
│   ├── artifacts/
│   │   ├── api-server/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   └── logger.ts
│   │   │   │   ├── routes/
│   │   │   │   │   ├── ai-chat.ts
│   │   │   │   │   ├── ai-forward.ts
│   │   │   │   │   ├── config.ts
│   │   │   │   │   ├── db.ts
│   │   │   │   │   ├── drive.ts
│   │   │   │   │   ├── exec.ts
│   │   │   │   │   ├── github.ts
│   │   │   │   │   ├── health.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── legal-ai.ts
│   │   │   │   │   ├── pages.ts
│   │   │   │   │   ├── proxy.ts
│   │   │   │   │   ├── search.ts
│   │   │   │   │   ├── twa.ts
│   │   │   │   │   ├── upload.ts
│   │   │   │   │   ├── voice.ts
│   │   │   │   │   └── workspace.ts
│   │   │   │   ├── app.ts
│   │   │   │   └── index.ts
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   └── code-editor/
│   │       ├── public/
│   │       │   ├── favicon.svg
│   │       │   ├── guia-completo-apk.md
│   │       │   ├── manifest.json
│   │       │   ├── manual-dev.md
│   │       │   ├── MANUAL-SK-CODE-EDITOR.md
│   │       │   └── sw.js
│   │       ├── src/
│   │       │   ├── components/
│   │       │   │   ├── ui/
│   │       │   │   │   ├── accordion.tsx
│   │       │   │   │   ├── alert-dialog.tsx
│   │       │   │   │   ├── alert.tsx
│   │       │   │   │   ├── aspect-ratio.tsx
│   │       │   │   │   ├── avatar.tsx
│   │       │   │   │   ├── badge.tsx
│   │       │   │   │   ├── breadcrumb.tsx
│   │       │   │   │   ├── button-group.tsx
│   │       │   │   │   ├── button.tsx
│   │       │   │   │   ├── calendar.tsx
│   │       │   │   │   ├── card.tsx
│   │       │   │   │   ├── carousel.tsx
│   │       │   │   │   ├── chart.tsx
│   │       │   │   │   ├── checkbox.tsx
│   │       │   │   │   ├── collapsible.tsx
│   │       │   │   │   ├── command.tsx
│   │       │   │   │   ├── context-menu.tsx
│   │       │   │   │   ├── dialog.tsx
│   │       │   │   │   ├── drawer.tsx
│   │       │   │   │   ├── dropdown-menu.tsx
│   │       │   │   │   ├── empty.tsx
│   │       │   │   │   ├── field.tsx
│   │       │   │   │   ├── form.tsx
│   │       │   │   │   ├── hover-card.tsx
│   │       │   │   │   ├── input-group.tsx
│   │       │   │   │   ├── input-otp.tsx
│   │       │   │   │   ├── input.tsx
│   │       │   │   │   ├── item.tsx
│   │       │   │   │   ├── kbd.tsx
│   │       │   │   │   ├── label.tsx
│   │       │   │   │   ├── menubar.tsx
│   │       │   │   │   ├── navigation-menu.tsx
│   │       │   │   │   ├── pagination.tsx
│   │       │   │   │   ├── popover.tsx
│   │       │   │   │   ├── progress.tsx
│   │       │   │   │   ├── radio-group.tsx
│   │       │   │   │   ├── resizable.tsx
│   │       │   │   │   ├── scroll-area.tsx
│   │       │   │   │   ├── select.tsx
│   │       │   │   │   ├── separator.tsx
│   │       │   │   │   ├── sheet.tsx
│   │       │   │   │   ├── sidebar.tsx
│   │       │   │   │   ├── skeleton.tsx
│   │       │   │   │   ├── slider.tsx
│   │       │   │   │   ├── sonner.tsx
│   │       │   │   │   ├── spinner.tsx
│   │       │   │   │   ├── switch.tsx
│   │       │   │   │   ├── table.tsx
│   │       │   │   │   ├── tabs.tsx
│   │       │   │   │   ├── textarea.tsx
│   │       │   │   │   ├── toast.tsx
│   │       │   │   │   ├── toaster.tsx
│   │       │   │   │   ├── toggle-group.tsx
│   │       │   │   │   ├── toggle.tsx
│   │       │   │   │   └── tooltip.tsx
│   │       │   │   ├── AIChat.tsx
│   │       │   │   ├── AssistenteJuridico.tsx
│   │       │   │   ├── CampoLivre.tsx
│   │       │   │   ├── CodeEditor.tsx
│   │       │   │   ├── CombinarApps.tsx
│   │       │   │   ├── DriveBackupPanel.tsx
│   │       │   │   ├── EditorLayout.tsx
│   │       │   │   ├── FileTree.tsx
│   │       │   │   ├── GitHubPanel.tsx
│   │       │   │   ├── Manual.tsx
│   │       │   │   ├── PackageSearch.tsx
│   │       │   │   ├── Preview.tsx
│   │       │   │   ├── QuickPrompt.tsx
│   │       │   │   ├── RealTerminal.tsx
│   │       │   │   ├── StreamTerminal.tsx
│   │       │   │   ├── SystemStatusPanel.tsx
│   │       │   │   ├── TemplateSelector.tsx
│   │       │   │   ├── Terminal.tsx
│   │       │   │   ├── VoiceCard.tsx
│   │       │   │   ├── VoiceMode.tsx
│   │       │   │   └── WebContainerTerminal.tsx
│   │       │   ├── hooks/
│   │       │   │   ├── use-mobile.tsx
│   │       │   │   └── use-toast.ts
│   │       │   ├── lib/
│   │       │   │   ├── ai-service.ts
│   │       │   │   ├── github-service.ts
│   │       │   │   ├── projects.ts
│   │       │   │   ├── store.ts
│   │       │   │   ├── templates.ts
│   │       │   │   ├── tts-service.ts
│   │       │   │   ├── utils.ts
│   │       │   │   ├── virtual-fs.ts
│   │       │   │   └── zip-service.ts
│   │       │   ├── App.tsx
│   │       │   ├── index.css
│   │       │   └── main.tsx
│   │       ├── index.html
│   │       ├── package.json
│   │       ├── tsconfig.json
│   │       └── vite.config.ts
│   ├── package.json
│   └── pnpm-workspace.yaml
├── SK-Code-Editor-Completo (15)/
│   ├── metodo-1-EAS/
│   │   ├── app.json
│   │   ├── App.tsx
│   │   ├── eas.json
│   │   ├── INSTRUCOES.md
│   │   └── package.json
│   ├── metodo-2-Capacitor/
│   │   ├── capacitor.config.json
│   │   ├── INSTRUCOES.md
│   │   └── package.json
│   ├── metodo-3-GitHub-Actions/
│   │   ├── .github/
│   │   │   └── workflows/
│   │   │       └── build-apk.yml
│   │   ├── capacitor.config.json
│   │   ├── INSTRUCOES.md
│   │   └── package.json
│   ├── web-app/
│   │   ├── assets/
│   │   │   ├── index-D5g-sV5e.css
│   │   │   ├── vendor-fs-BeamS8bA.js
│   │   │   ├── vendor-highlight-Bu9o_ty_.js
│   │   │   ├── vendor-highlight-DOOs4slz.css
│   │   │   ├── vendor-lucide-NZRTcJIq.js
│   │   │   ├── vendor-markdown-CM6-e2rl.js
│   │   │   ├── vendor-misc-COW7C1HQ.js
│   │   │   ├── vendor-monaco-CS9w1txC.js
│   │   │   ├── vendor-react-D8m3Uig9.js
│   │   │   ├── vendor-react-dom-CdNyEL3a.js
│   │   │   ├── vendor-webcontainer-BPoiPq3D.js
│   │   │   ├── vendor-xterm-CT6HrMBF.js
│   │   │   └── vendor-xterm-DDGTF8rc.css
│   │   ├── favicon.svg
│   │   ├── guia-completo-apk.md
│   │   ├── index.html
│   │   ├── LEIA-ME-PARA-PROGRAMADOR.md
│   │   ├── manifest.json
│   │   ├── manual-dev.md
│   │   ├── MANUAL-SK-CODE-EDITOR.md
│   │   └── sw.js
│   └── MANUAL-COMPLETO.md
├── sk-code-editor-github (1)/
│   ├── .github/
│   │   └── workflows/
│   │       ├── build-apk.yml
│   │       └── deploy.yml
│   └── dist-pronto/
│       ├── assets/
│       │   └── index-tHCXXaAl.css
│       ├── favicon.svg
│       ├── index.html
│       ├── manifest.json
│       └── sw.js
├── sk-editor-source (1)/
│   ├── artifacts/
│   │   ├── api-server/
│   │   │   ├── .replit-artifact/
│   │   │   │   └── artifact.toml
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   └── logger.ts
│   │   │   │   ├── routes/
│   │   │   │   │   ├── ai-chat.ts
│   │   │   │   │   ├── ai-forward.ts
│   │   │   │   │   ├── config.ts
│   │   │   │   │   ├── db.ts
│   │   │   │   │   ├── drive.ts
│   │   │   │   │   ├── exec.ts
│   │   │   │   │   ├── github.ts
│   │   │   │   │   ├── health.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── legal-ai.ts
│   │   │   │   │   ├── proxy.ts
│   │   │   │   │   ├── search.ts
│   │   │   │   │   ├── twa.ts
│   │   │   │   │   ├── upload.ts
│   │   │   │   │   ├── voice.ts
│   │   │   │   │   └── workspace.ts
│   │   │   │   ├── app.ts
│   │   │   │   └── index.ts
│   │   │   ├── build.mjs
│   │   │   ├── package.json
│   │   │   ├── pty_helper.c
│   │   │   └── tsconfig.json
│   │   └── code-editor/
│   │       ├── .replit-artifact/
│   │       │   └── artifact.toml
│   │       ├── public/
│   │       │   ├── favicon.svg
│   │       │   ├── guia-completo-apk.md
│   │       │   ├── manifest.json
│   │       │   └── sw.js
│   │       ├── src/
│   │       │   ├── components/
│   │       │   │   ├── ui/
│   │       │   │   │   ├── accordion.tsx
│   │       │   │   │   ├── alert-dialog.tsx
│   │       │   │   │   ├── alert.tsx
│   │       │   │   │   ├── aspect-ratio.tsx
│   │       │   │   │   ├── avatar.tsx
│   │       │   │   │   ├── badge.tsx
│   │       │   │   │   ├── breadcrumb.tsx
│   │       │   │   │   ├── button-group.tsx
│   │       │   │   │   ├── button.tsx
│   │       │   │   │   ├── calendar.tsx
│   │       │   │   │   ├── card.tsx
│   │       │   │   │   ├── carousel.tsx
│   │       │   │   │   ├── chart.tsx
│   │       │   │   │   ├── checkbox.tsx
│   │       │   │   │   ├── collapsible.tsx
│   │       │   │   │   ├── command.tsx
│   │       │   │   │   ├── context-menu.tsx
│   │       │   │   │   ├── dialog.tsx
│   │       │   │   │   ├── drawer.tsx
│   │       │   │   │   ├── dropdown-menu.tsx
│   │       │   │   │   ├── empty.tsx
│   │       │   │   │   ├── field.tsx
│   │       │   │   │   ├── form.tsx
│   │       │   │   │   ├── hover-card.tsx
│   │       │   │   │   ├── input-group.tsx
│   │       │   │   │   ├── input-otp.tsx
│   │       │   │   │   ├── input.tsx
│   │       │   │   │   ├── item.tsx
│   │       │   │   │   ├── kbd.tsx
│   │       │   │   │   ├── label.tsx
│   │       │   │   │   ├── menubar.tsx
│   │       │   │   │   ├── navigation-menu.tsx
│   │       │   │   │   ├── pagination.tsx
│   │       │   │   │   ├── popover.tsx
│   │       │   │   │   ├── progress.tsx
│   │       │   │   │   ├── radio-group.tsx
│   │       │   │   │   ├── resizable.tsx
│   │       │   │   │   ├── scroll-area.tsx
│   │       │   │   │   ├── select.tsx
│   │       │   │   │   ├── separator.tsx
│   │       │   │   │   ├── sheet.tsx
│   │       │   │   │   ├── sidebar.tsx
│   │       │   │   │   ├── skeleton.tsx
│   │       │   │   │   ├── slider.tsx
│   │       │   │   │   ├── sonner.tsx
│   │       │   │   │   ├── spinner.tsx
│   │       │   │   │   ├── switch.tsx
│   │       │   │   │   ├── table.tsx
│   │       │   │   │   ├── tabs.tsx
│   │       │   │   │   ├── textarea.tsx
│   │       │   │   │   ├── toast.tsx
│   │       │   │   │   ├── toaster.tsx
│   │       │   │   │   ├── toggle-group.tsx
│   │       │   │   │   ├── toggle.tsx
│   │       │   │   │   └── tooltip.tsx
│   │       │   │   ├── AIChat.tsx
│   │       │   │   ├── AssistenteJuridico.tsx
│   │       │   │   ├── CampoLivre.tsx
│   │       │   │   ├── CodeEditor.tsx
│   │       │   │   ├── CombinarApps.tsx
│   │       │   │   ├── DriveBackupPanel.tsx
│   │       │   │   ├── EditorLayout.tsx
│   │       │   │   ├── FileTree.tsx
│   │       │   │   ├── GitHubPanel.tsx
│   │       │   │   ├── Manual.tsx
│   │       │   │   ├── PackageSearch.tsx
│   │       │   │   ├── Preview.tsx
│   │       │   │   ├── QuickPrompt.tsx
│   │       │   │   ├── RealTerminal.tsx
│   │       │   │   ├── StreamTerminal.tsx
│   │       │   │   ├── SystemStatusPanel.tsx
│   │       │   │   ├── TemplateSelector.tsx
│   │       │   │   ├── Terminal.tsx
│   │       │   │   ├── VoiceCard.tsx
│   │       │   │   ├── VoiceMode.tsx
│   │       │   │   └── WebContainerTerminal.tsx
│   │       │   ├── hooks/
│   │       │   │   ├── use-mobile.tsx
│   │       │   │   └── use-toast.ts
│   │       │   ├── lib/
│   │       │   │   ├── ai-service.ts
│   │       │   │   ├── github-service.ts
│   │       │   │   ├── projects.ts
│   │       │   │   ├── store.ts
│   │       │   │   ├── templates.ts
│   │       │   │   ├── tts-service.ts
│   │       │   │   ├── utils.ts
│   │       │   │   ├── virtual-fs.ts
│   │       │   │   └── zip-service.ts
│   │       │   ├── App.tsx
│   │       │   ├── index.css
│   │       │   └── main.tsx
│   │       ├── components.json
│   │       ├── index.html
│   │       ├── package.json
│   │       ├── SYSTEM_DOCS.md
│   │       ├── tsconfig.json
│   │       └── vite.config.ts
│   ├── lib/
│   │   ├── api-client-react/
│   │   │   ├── src/
│   │   │   │   ├── generated/
│   │   │   │   │   ├── api.schemas.ts
│   │   │   │   │   └── api.ts
│   │   │   │   ├── custom-fetch.ts
│   │   │   │   └── index.ts
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   ├── api-spec/
│   │   │   ├── openapi.yaml
│   │   │   ├── orval.config.ts
│   │   │   └── package.json
│   │   ├── api-zod/
│   │   │   ├── src/
│   │   │   │   ├── generated/
│   │   │   │   │   ├── types/
│   │   │   │   │   │   ├── healthStatus.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── api.ts
│   │   │   │   └── index.ts
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   └── db/
│   │       ├── src/
│   │       │   ├── schema/
│   │       │   │   └── index.ts
│   │       │   └── index.ts
│   │       ├── drizzle.config.ts
│   │       ├── package.json
│   │       └── tsconfig.json
│   ├── package.json
│   ├── pnpm-workspace.yaml
│   ├── replit.md
│   └── SK-EDITOR-README.md
├── SKCodeEditor-LIMPO (7) (2)/
│   ├── .replit-artifact/
│   │   └── artifact.toml
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── guia-completo-apk.md
│   │   ├── manifest.json
│   │   ├── manual-dev.md
│   │   ├── MANUAL-SK-CODE-EDITOR.md
│   │   └── sw.js
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button-group.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── context-menu.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── empty.tsx
│   │   │   │   ├── field.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input-group.tsx
│   │   │   │   ├── input-otp.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── item.tsx
│   │   │   │   ├── kbd.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── menubar.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   ├── spinner.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── AIChat.tsx
│   │   │   ├── AssistenteJuridico.tsx
│   │   │   ├── CampoLivre.tsx
│   │   │   ├── CodeEditor.tsx
│   │   │   ├── CombinarApps.tsx
│   │   │   ├── DriveBackupPanel.tsx
│   │   │   ├── EditorLayout.tsx
│   │   │   ├── FileTree.tsx
│   │   │   ├── GitHubPanel.tsx
│   │   │   ├── Manual.tsx
│   │   │   ├── PackageSearch.tsx
│   │   │   ├── Preview.tsx
│   │   │   ├── QuickPrompt.tsx
│   │   │   ├── RealTerminal.tsx
│   │   │   ├── StreamTerminal.tsx
│   │   │   ├── SystemStatusPanel.tsx
│   │   │   ├── TemplateSelector.tsx
│   │   │   ├── Terminal.tsx
│   │   │   ├── VoiceCard.tsx
│   │   │   ├── VoiceMode.tsx
│   │   │   └── WebContainerTerminal.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── ai-service.ts
│   │   │   ├── github-service.ts
│   │   │   ├── projects.ts
│   │   │   ├── store.ts
│   │   │   ├── templates.ts
│   │   │   ├── tts-service.ts
│   │   │   ├── utils.ts
│   │   │   ├── virtual-fs.ts
│   │   │   └── zip-service.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── components.json
│   ├── index.html
│   ├── package.json
│   ├── SYSTEM_DOCS.md
│   ├── tsconfig.json
│   └── vite.config.ts
├── SKCodeEditor-STANDALONE (15)/
│   └── artifacts/
│       └── code-editor/
│           ├── .github/
│           │   └── workflows/
│           │       ├── build-apk.yml
│           │       └── deploy.yml
│           ├── .replit-artifact/
│           │   └── artifact.toml
│           ├── public/
│           │   ├── favicon.svg
│           │   ├── guia-completo-apk.md
│           │   ├── manifest.json
│           │   ├── manual-dev.md
│           │   ├── MANUAL-SK-CODE-EDITOR.md
│           │   └── sw.js
│           ├── src/
│           │   ├── components/
│           │   │   ├── ui/
│           │   │   │   ├── accordion.tsx
│           │   │   │   ├── alert-dialog.tsx
│           │   │   │   ├── alert.tsx
│           │   │   │   ├── aspect-ratio.tsx
│           │   │   │   ├── avatar.tsx
│           │   │   │   ├── badge.tsx
│           │   │   │   ├── breadcrumb.tsx
│           │   │   │   ├── button-group.tsx
│           │   │   │   ├── button.tsx
│           │   │   │   ├── calendar.tsx
│           │   │   │   ├── card.tsx
│           │   │   │   ├── carousel.tsx
│           │   │   │   ├── chart.tsx
│           │   │   │   ├── checkbox.tsx
│           │   │   │   ├── collapsible.tsx
│           │   │   │   ├── command.tsx
│           │   │   │   ├── context-menu.tsx
│           │   │   │   ├── dialog.tsx
│           │   │   │   ├── drawer.tsx
│           │   │   │   ├── dropdown-menu.tsx
│           │   │   │   ├── empty.tsx
│           │   │   │   ├── field.tsx
│           │   │   │   ├── form.tsx
│           │   │   │   ├── hover-card.tsx
│           │   │   │   ├── input-group.tsx
│           │   │   │   ├── input-otp.tsx
│           │   │   │   ├── input.tsx
│           │   │   │   ├── item.tsx
│           │   │   │   ├── kbd.tsx
│           │   │   │   ├── label.tsx
│           │   │   │   ├── menubar.tsx
│           │   │   │   ├── navigation-menu.tsx
│           │   │   │   ├── pagination.tsx
│           │   │   │   ├── popover.tsx
│           │   │   │   ├── progress.tsx
│           │   │   │   ├── radio-group.tsx
│           │   │   │   ├── resizable.tsx
│           │   │   │   ├── scroll-area.tsx
│           │   │   │   ├── select.tsx
│           │   │   │   ├── separator.tsx
│           │   │   │   ├── sheet.tsx
│           │   │   │   ├── sidebar.tsx
│           │   │   │   ├── skeleton.tsx
│           │   │   │   ├── slider.tsx
│           │   │   │   ├── sonner.tsx
│           │   │   │   ├── spinner.tsx
│           │   │   │   ├── switch.tsx
│           │   │   │   ├── table.tsx
│           │   │   │   ├── tabs.tsx
│           │   │   │   ├── textarea.tsx
│           │   │   │   ├── toast.tsx
│           │   │   │   ├── toaster.tsx
│           │   │   │   ├── toggle-group.tsx
│           │   │   │   ├── toggle.tsx
│           │   │   │   └── tooltip.tsx
│           │   │   ├── AIChat.tsx
│           │   │   ├── APKBuilderPanel.tsx
│           │   │   ├── AssistenteJuridico.tsx
│           │   │   ├── CampoLivre.tsx
│           │   │   ├── CodeEditor.tsx
│           │   │   ├── CombinarApps.tsx
│           │   │   ├── DriveBackupPanel.tsx
│           │   │   ├── EditorLayout.tsx
│           │   │   ├── FileTree.tsx
│           │   │   ├── GitHubPanel.tsx
│           │   │   ├── Manual.tsx
│           │   │   ├── PackageSearch.tsx
│           │   │   ├── Preview.tsx
│           │   │   ├── QuickPrompt.tsx
│           │   │   ├── RealTerminal.tsx
│           │   │   ├── StreamTerminal.tsx
│           │   │   ├── SystemStatusPanel.tsx
│           │   │   ├── TemplateSelector.tsx
│           │   │   ├── Terminal.tsx
│           │   │   ├── VoiceCard.tsx
│           │   │   ├── VoiceMode.tsx
│           │   │   ├── VSCodeWebPanel.tsx
│           │   │   └── WebContainerTerminal.tsx
│           │   ├── hooks/
│           │   │   ├── use-mobile.tsx
│           │   │   └── use-toast.ts
│           │   ├── lib/
│           │   │   ├── ai-service.ts
│           │   │   ├── github-service.ts
│           │   │   ├── projects.ts
│           │   │   ├── store.ts
│           │   │   ├── templates.ts
│           │   │   ├── tts-service.ts
│           │   │   ├── utils.ts
│           │   │   ├── virtual-fs.ts
│           │   │   └── zip-service.ts
│           │   ├── App.tsx
│           │   ├── index.css
│           │   └── main.tsx
│           ├── components.json
│           ├── index.html
│           ├── INSTALAR.md
│           ├── package-standalone.json
│           ├── package.json
│           ├── SYSTEM_DOCS.md
│           ├── tsconfig.json
│           ├── vite.config.standalone.ts
│           └── vite.config.ts
├── stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/
│   ├── .gitignore
│   ├── files.js
│   ├── index.html
│   ├── javascript.svg
│   ├── loading.html
│   ├── main.js
│   ├── package.json
│   ├── README.md
│   ├── style.css
│   └── vite.config.js
└── workflows-corrigidos/
    └── workflows/
        ├── build-apk-CORRIGIDO-repos-existentes.yml
        ├── DevMobile-build-apk-eas.yml
        ├── DevMobile-build-apk-local.yml
        ├── LEIA-ME.txt
        ├── SKCodeEditor-build-apk.yml
        └── SKCodeEditor-deploy.yml
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript

---

## ROTAS DA API (endpoints detectados automaticamente)

```
USE    /api  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/app.ts)
POST   /ai/chat  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/ai-chat.ts)
GET    /config  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/config.ts)
GET    /drive/list  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/drive.ts)
POST   /drive/upload  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/drive.ts)
DELETE /drive/delete/:fileId  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/drive.ts)
POST   /exec/npm-install  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node-vfs  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/exec.ts)
POST   /db/query  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/exec.ts)
POST   /projects/:projectId/exec-stream  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/exec.ts)
GET    /github/user  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/github.ts)
GET    /github/repos  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/github.ts)
POST   /github/repos  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/github.ts)
POST   /github/push  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/github.ts)
DELETE /github/repos/:owner/:repo  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/github.ts)
GET    /healthz  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/health.ts)
USE    /voice  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/index.ts)
POST   /legal/process  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/legal-ai.ts)
POST   /legal/refine  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/legal-ai.ts)
GET    /search  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/search.ts)
GET    /npm-search  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/search.ts)
POST   /upload/extract-text  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/upload.ts)
POST   /transcribe  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/voice.ts)
POST   /speak  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/voice.ts)
GET    /workspace/info  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/write  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
GET    /workspace/read  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
GET    /workspace/list  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/delete  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/install  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/run  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/sync  (em 1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts)
GET    /api/items  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
GET    /api/items/:id  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
POST   /api/items  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
GET    /api/health  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
USE    /api/auth  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
USE    /api/usuarios  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
POST   /register  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
POST   /login  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
GET    /perfil  (em 1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts)
GET    /api/conversations  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/routes.ts)
GET    /api/conversations/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/routes.ts)
POST   /api/conversations  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/routes.ts)
DELETE /api/conversations/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/routes.ts)
POST   /api/conversations/:id/messages  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/routes.ts)
GET    /api/conversations  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/routes.ts)
GET    /api/conversations/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/routes.ts)
POST   /api/conversations  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/routes.ts)
DELETE /api/conversations/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/routes.ts)
POST   /api/conversations/:id/messages  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/routes.ts)
POST   /api/generate-image  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/image/routes.ts)
GET    /sw.js  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/auth/check  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/auth/login  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/auth/logout  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /parecer/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/tjmg/fatores  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/test-connection  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/pdpj/status  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/comunicacoes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/representados  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/habilitacao  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/pessoa  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/webhooks/tramitacao  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/demo-key-status  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/demo-key-config  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/demo-key-config  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/perplexity-key-status  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/demo-key-test  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/tts  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/voice-chat  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
USE    /api  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/share/parecer  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/snippets  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/snippets/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/snippets  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/snippets/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/snippets/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/custom-actions  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/custom-actions  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/custom-actions/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/custom-actions/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/ementas  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/ementas  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/ementas/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/ementas/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/jurisprudencia/buscar  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/ai-history  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/ai-history  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/ai-history/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/ai-history  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/ai-usage-summary  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/ai-usage-credit  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/prompt-templates  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/prompt-templates  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/prompt-templates/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/prompt-templates/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/doc-templates  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/doc-templates  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/doc-templates/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/doc-templates/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/doc-templates/upload-docx  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/export/word-with-template  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/import/url  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/upload/extract-text  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/upload/transcribe  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/ai/process  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/ai/refine  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/export/word  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/jwt/generate  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/jwt/status  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/processos  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/processos/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/processos  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/processos/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/processos/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/datajud/consulta  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/datajud/consulta-oab  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/corporativo/advogado/cpf/:cpf  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/corporativo/advogado/oab/:uf/:inscricao  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/corporativo/magistrados/:tribunal  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/pdpj/status  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/test-connection  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/comunicacoes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/representados  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/habilitacao  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/pdpj/pessoa  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/datajud/tribunais  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/cnj/comunicacoes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/cnj/comunicacoes/certidao/:hash  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/settings/ai-config  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PUT    /api/settings/ai-config  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/settings/database-reconnect  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/settings/database-status  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/settings/system-status  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PUT    /api/settings/app-password  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PUT    /api/settings/session-secret  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/settings/test-ai-key  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/settings/:key  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PUT    /api/settings/:key  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/tramitacao/clientes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/tramitacao/clientes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/tramitacao/clientes/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/tramitacao/clientes/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/tramitacao/notas  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/tramitacao/notas  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/tramitacao/notas/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/tramitacao/usuarios  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/tramitacao/test  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/tramitacao/publicacoes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/tramitacao/sync-publicacoes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PATCH  /api/tramitacao/publicacoes/:id/lida  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/code/run  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/previdenciario/extrair  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/pesquisa/oab  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/pesquisa/processo  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/djen/config  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
PUT    /api/djen/config  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/djen/clientes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/djen/clientes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
DELETE /api/djen/clientes/:id  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/djen/publicacoes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/djen/execucoes  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/djen/executar  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/djen/gerar-token  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/corporativo/advogado/cpf/:cpf  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/corporativo/advogado/oab/:uf/:numero  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
GET    /api/corporativo/magistrados/:tribunal  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/code-assistant  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
POST   /api/git-push  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts)
USE    /sw.js  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/static.ts)
USE    /manifest.json  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/static.ts)
USE    /{*path}  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/static.ts)
USE    /{*path}  (em AssistenteJuridico-PWA/artifacts/assistente-juridico/server/vite.ts)
POST   /api/chat  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
GET    /api/saude  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
POST   /api/chat  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
GET    /api/saude  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
POST   /api/chat  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
GET    /api/saude  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
POST   /api/chat  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
GET    /api/provedores  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
GET    /api/saude  (em DevMobile-CORRIGIDO (6)/data/featuredProjects.ts)
GET    /api/items  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /api/items/:id  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /api/items  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /api/health  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
USE    /api/auth  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
USE    /api/usuarios  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /register  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /login  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /perfil  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /api/provedores  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /api/chat  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /health  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /auth/login  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /auth/registro  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /clientes  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /clientes/:id  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /clientes  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
PUT    /clientes/:id  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /processos  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /processos/:id  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /processos  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /audiencias  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /audiencias  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /prazos/proximos  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /dashboard  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /api/registros  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /api/registros/:id  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
POST   /api/registros  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
PUT    /api/registros/:id  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
DELETE /api/registros/:id  (em SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts)
GET    /api/items  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/items/:id  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/items  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/health  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
USE    /api/auth  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
USE    /api/usuarios  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /register  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /login  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /perfil  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/provedores  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/chat  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /health  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /auth/login  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /auth/registro  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /clientes  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /clientes/:id  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /clientes  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
PUT    /clientes/:id  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /processos  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /processos/:id  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /processos  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /audiencias  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /audiencias  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /prazos/proximos  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /dashboard  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/registros  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/registros/:id  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/registros  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
PUT    /api/registros/:id  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
DELETE /api/registros/:id  (em SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/chat  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
GET    /api/saude  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
POST   /api/chat  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
GET    /api/saude  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
POST   /api/chat  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
GET    /api/saude  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
POST   /api/chat  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
GET    /api/provedores  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
GET    /api/saude  (em devmobile-fix/devmobile-fix/data/featuredProjects.ts)
USE    /api  (em sk-code-editor-completo (13)/artifacts/api-server/src/app.ts)
GET    /ai/chat  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/ai-chat.ts)
POST   /ai/chat  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/ai-chat.ts)
POST   /ai/forward  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/ai-forward.ts)
GET    /config  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/config.ts)
POST   /db/neon/create  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/db.ts)
GET    /db/neon/projects  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/db.ts)
POST   /db/neon/credentials  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/db.ts)
POST   /db/execute  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/db.ts)
POST   /db/test-connection  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/db.ts)
GET    /drive/list  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/drive.ts)
POST   /drive/upload  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/drive.ts)
DELETE /drive/delete/:fileId  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/drive.ts)
POST   /exec/npm-install  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node-vfs  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/exec.ts)
POST   /db/query  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/exec.ts)
POST   /projects/:projectId/exec-stdin  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/exec.ts)
POST   /projects/:projectId/exec-stream  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/exec.ts)
GET    /github/user  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/github.ts)
GET    /github/repos  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/github.ts)
POST   /github/repos  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/github.ts)
POST   /github/push  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/github.ts)
DELETE /github/repos/:owner/:repo  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/github.ts)
GET    /healthz  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/health.ts)
USE    /voice  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/index.ts)
POST   /legal/process  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/legal-ai.ts)
POST   /legal/refine  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/legal-ai.ts)
POST   /pages/deploy  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/pages.ts)
GET    /search  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/search.ts)
GET    /npm-search  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/search.ts)
GET    /pwa-check  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/twa.ts)
GET    /twa-files  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/twa.ts)
POST   /upload/extract-text  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/upload.ts)
POST   /transcribe  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/voice.ts)
POST   /speak  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/voice.ts)
GET    /workspace/info  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/write  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
GET    /workspace/read  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
GET    /workspace/list  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/delete  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/install  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/run  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/sync  (em sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts)
GET    /api/items  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/items/:id  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/items  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/health  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
USE    /api/auth  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
USE    /api/usuarios  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /register  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /login  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /perfil  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/provedores  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/chat  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /health  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /auth/login  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /auth/registro  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /clientes  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /clientes/:id  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /clientes  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
PUT    /clientes/:id  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /processos  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /processos/:id  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /processos  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /audiencias  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /audiencias  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /prazos/proximos  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /dashboard  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/registros  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/registros/:id  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/registros  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
PUT    /api/registros/:id  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
DELETE /api/registros/:id  (em sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts)
USE    /api  (em sk-editor-source (1)/artifacts/api-server/src/app.ts)
GET    /ai/chat  (em sk-editor-source (1)/artifacts/api-server/src/routes/ai-chat.ts)
POST   /ai/chat  (em sk-editor-source (1)/artifacts/api-server/src/routes/ai-chat.ts)
POST   /ai/forward  (em sk-editor-source (1)/artifacts/api-server/src/routes/ai-forward.ts)
GET    /config  (em sk-editor-source (1)/artifacts/api-server/src/routes/config.ts)
POST   /db/neon/create  (em sk-editor-source (1)/artifacts/api-server/src/routes/db.ts)
GET    /db/neon/projects  (em sk-editor-source (1)/artifacts/api-server/src/routes/db.ts)
POST   /db/neon/credentials  (em sk-editor-source (1)/artifacts/api-server/src/routes/db.ts)
POST   /db/execute  (em sk-editor-source (1)/artifacts/api-server/src/routes/db.ts)
POST   /db/test-connection  (em sk-editor-source (1)/artifacts/api-server/src/routes/db.ts)
GET    /drive/list  (em sk-editor-source (1)/artifacts/api-server/src/routes/drive.ts)
POST   /drive/upload  (em sk-editor-source (1)/artifacts/api-server/src/routes/drive.ts)
DELETE /drive/delete/:fileId  (em sk-editor-source (1)/artifacts/api-server/src/routes/drive.ts)
POST   /exec/npm-install  (em sk-editor-source (1)/artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node  (em sk-editor-source (1)/artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node-vfs  (em sk-editor-source (1)/artifacts/api-server/src/routes/exec.ts)
POST   /db/query  (em sk-editor-source (1)/artifacts/api-server/src/routes/exec.ts)
POST   /projects/:projectId/exec-stream  (em sk-editor-source (1)/artifacts/api-server/src/routes/exec.ts)
GET    /github/user  (em sk-editor-source (1)/artifacts/api-server/src/routes/github.ts)
GET    /github/repos  (em sk-editor-source (1)/artifacts/api-server/src/routes/github.ts)
POST   /github/repos  (em sk-editor-source (1)/artifacts/api-server/src/routes/github.ts)
POST   /github/push  (em sk-editor-source (1)/artifacts/api-server/src/routes/github.ts)
DELETE /github/repos/:owner/:repo  (em sk-editor-source (1)/artifacts/api-server/src/routes/github.ts)
GET    /healthz  (em sk-editor-source (1)/artifacts/api-server/src/routes/health.ts)
USE    /voice  (em sk-editor-source (1)/artifacts/api-server/src/routes/index.ts)
POST   /legal/process  (em sk-editor-source (1)/artifacts/api-server/src/routes/legal-ai.ts)
POST   /legal/refine  (em sk-editor-source (1)/artifacts/api-server/src/routes/legal-ai.ts)
GET    /search  (em sk-editor-source (1)/artifacts/api-server/src/routes/search.ts)
GET    /npm-search  (em sk-editor-source (1)/artifacts/api-server/src/routes/search.ts)
GET    /pwa-check  (em sk-editor-source (1)/artifacts/api-server/src/routes/twa.ts)
GET    /twa-files  (em sk-editor-source (1)/artifacts/api-server/src/routes/twa.ts)
POST   /upload/extract-text  (em sk-editor-source (1)/artifacts/api-server/src/routes/upload.ts)
POST   /transcribe  (em sk-editor-source (1)/artifacts/api-server/src/routes/voice.ts)
POST   /speak  (em sk-editor-source (1)/artifacts/api-server/src/routes/voice.ts)
GET    /workspace/info  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/write  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
GET    /workspace/read  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
GET    /workspace/list  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/delete  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/install  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/run  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
POST   /workspace/sync  (em sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts)
GET    /api/items  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/items/:id  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/items  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/health  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
USE    /api/auth  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
USE    /api/usuarios  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /register  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /login  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /perfil  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/provedores  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/chat  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /health  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /auth/login  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /auth/registro  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /clientes  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /clientes/:id  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /clientes  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
PUT    /clientes/:id  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /processos  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /processos/:id  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /processos  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /audiencias  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /audiencias  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /prazos/proximos  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /dashboard  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/registros  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
GET    /api/registros/:id  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
POST   /api/registros  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
PUT    /api/registros/:id  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
DELETE /api/registros/:id  (em sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts)
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
LOG_LEVEL=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_BASE_URL=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_API_KEY=seu_valor_aqui
PORT=seu_valor_aqui
ALLOWED_ORIGINS=seu_valor_aqui
JWT_SECRET=seu_valor_aqui
JWT_EXPIRES_IN=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
BASE_PATH=seu_valor_aqui
REPL_ID=seu_valor_aqui
SESSION_SECRET=seu_valor_aqui
APP_PASSWORD=seu_valor_aqui
PUBLIC_API_KEY=seu_valor_aqui
AI_INTEGRATIONS_GEMINI_API_KEY=seu_valor_aqui
AI_INTEGRATIONS_GEMINI_BASE_URL=seu_valor_aqui
PDPJ_PEM_PRIVATE_KEY=seu_valor_aqui
PUBLIC_API_MODEL=seu_valor_aqui
PUBLIC_API_URL=seu_valor_aqui
DATAJUD_API_KEY=seu_valor_aqui
PERPLEXITY_API_KEY=seu_valor_aqui
GROQ_API_KEY=seu_valor_aqui
GROQ_MODEL=seu_valor_aqui
ANTHROPIC_API_KEY=seu_valor_aqui
CLAUDE_MODEL=seu_valor_aqui
GEMINI_API_KEY=seu_valor_aqui
GEMINI_MODEL=seu_valor_aqui
OPENAI_API_KEY=seu_valor_aqui
EXPO_PUBLIC_DOMAIN=seu_valor_aqui
EXPO_PUBLIC_API_BASE_URL=seu_valor_aqui
EXPO_PUBLIC_REMOTE_API_URL=seu_valor_aqui
EXPO_PUBLIC_APP_MODE=seu_valor_aqui
EXPO_PUBLIC_API_STRATEGY=seu_valor_aqui
EXPO_PUBLIC_LOCAL_API_PORT=seu_valor_aqui
EXPO_PUBLIC_LOCAL_PREVIEW_PORT=seu_valor_aqui
EXPO_PUBLIC_ENABLE_TERMUX=seu_valor_aqui
EXPO_PUBLIC_ENABLE_REMOTE_AI=seu_valor_aqui
EXPO_PUBLIC_ENABLE_GITHUB=seu_valor_aqui
EXPO_PUBLIC_ENABLE_REMOTE_DB=seu_valor_aqui
EXPO_PUBLIC_ENABLE_REMOTE_TERMINAL=seu_valor_aqui
XAI_API_KEY=seu_valor_aqui
OPENROUTER_API_KEY=seu_valor_aqui
TELEGRAM_TOKEN=seu_valor_aqui
REPLIT_INTERNAL_APP_DOMAIN=seu_valor_aqui
REPLIT_DEV_DOMAIN=seu_valor_aqui
EXPO_PUBLIC_REPL_ID=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/app.ts` — Ponto de entrada do backend
- `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/index.ts` — Ponto de entrada do backend
- `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/index.ts` — Ponto de entrada do backend
- `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/index.html` — Arquivo principal
- `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/App.tsx` — Componente raiz do frontend
- `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/main.tsx` — Arquivo principal
- `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/index.html` — Arquivo principal
- `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/App.tsx` — Componente raiz do frontend
- `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/main.tsx` — Arquivo principal
- `1.sk-code-editor-v26-juridico-completo/lib/api-client-react/src/index.ts` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 `.sk/`
> Pasta '.sk' — agrupamento de arquivos relacionados.

**`memoria.json`** _(1 linha)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

---

### 📁 `1.sk-code-editor-v26-juridico-completo/`
> Pasta '1.sk-code-editor-v26-juridico-completo' — agrupamento de arquivos relacionados.

**`package.json`** _(33 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pnpm-workspace.yaml`** _(160 linhas)_
Arquivo YAML — parte do projeto.

**`replit.md`** _(60 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

---

### 📁 `apk-builder-android/`
> Pasta 'apk-builder-android' — agrupamento de arquivos relacionados.

**`README.md`** _(22 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`capacitor.config.ts`** _(9 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(18 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `apk-builder-source/`
> Pasta 'apk-builder-source' — agrupamento de arquivos relacionados.

**`favicon.svg`** _(4 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon-192.svg`** _(12 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon-512.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`index.html`** _(41 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manifest.json`** _(45 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(71 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-Mobile (10)/`
> Pasta 'AssistenteJuridico-Mobile (10)' — agrupamento de arquivos relacionados.

**`.gitignore`** _(13 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`README.md`** _(118 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`SQL_SETUP.sql`** _(66 linhas)_
Script SQL — contem comandos para criar tabelas, inserir ou consultar dados no banco.

**`app.json`** _(46 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`babel.config.js`** _(8 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`eas.json`** _(13 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(42 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(10 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `DevMobile-CORRIGIDO (6)/`
> Pasta 'DevMobile-CORRIGIDO (6)' — agrupamento de arquivos relacionados.

**`.easignore`** _(25 linhas)_
Arquivo EASIGNORE — parte do projeto.

**`.env`** _(2 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.env.example`** _(39 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.gitignore`** _(42 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`app.json`** _(62 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`babel.config.js`** _(7 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`eas.json`** _(47 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`expo-env.d.ts`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`metro.config.js`** _(28 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(72 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `manuais 1/`
> Pasta 'manuais 1' — agrupamento de arquivos relacionados.

**`COMO-BUILDAR-APK.md`** _(78 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`GERAR-APK.md`** _(62 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`LEIA-ME-PARA-PROGRAMADOR.md`** _(73 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`MANUAL-SK-CODE-EDITOR (2).md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`MANUAL_APK (2).md`** _(211 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`MANUAL_BUILD_APK (3).md`** _(169 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`PLANO.md`** _(187 linhas)_
Este documento! Gerado automaticamente pelo SK Code Editor com toda a estrutura do projeto.

**`build-apk-local.yml.txt`** _(126 linhas)_
Arquivo TXT — parte do projeto.

**`build-apk.yml (1).txt`** _(295 linhas)_
Arquivo TXT — parte do projeto.

**`build-apk.yml (2).txt`** _(64 linhas)_
Arquivo TXT — parte do projeto.

**`build-apk.yml.txt`** _(295 linhas)_
Arquivo TXT — parte do projeto.

**`guia-completo-apk (2).md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`guia-completo-apk (4).md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`index.html`** _(111 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manual-dev (2).md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`manual-dev (3).md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

---

### 📁 `SK-Code-Editor-APK-pronto (5)/`
> Pasta 'SK-Code-Editor-APK-pronto (5)' — agrupamento de arquivos relacionados.

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-code-editor-completo (13)/`
> Pasta 'sk-code-editor-completo (13)' — agrupamento de arquivos relacionados.

**`package.json`** _(33 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pnpm-workspace.yaml`** _(160 linhas)_
Arquivo YAML — parte do projeto.

---

### 📁 `SK-Code-Editor-Completo (15)/`
> Pasta 'SK-Code-Editor-Completo (15)' — agrupamento de arquivos relacionados.

**`MANUAL-COMPLETO.md`** _(348 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

---

### 📁 `sk-editor-source (1)/`
> Pasta 'sk-editor-source (1)' — agrupamento de arquivos relacionados.

**`SK-EDITOR-README.md`** _(57 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`package.json`** _(33 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pnpm-workspace.yaml`** _(160 linhas)_
Arquivo YAML — parte do projeto.

**`replit.md`** _(65 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/`
> Pasta 'SKCodeEditor-LIMPO (7) (2)' — agrupamento de arquivos relacionados.

**`SYSTEM_DOCS.md`** _(292 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(98 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(93 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(69 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/`
> Pasta 'stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)' — agrupamento de arquivos relacionados.

**`.gitignore`** _(25 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`README.md`** _(121 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`files.js`** _(36 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.html`** _(22 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`javascript.svg`** _(1 linha)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`loading.html`** _(10 linhas)_
Arquivo HTML — parte do projeto.

**`main.js`** _(71 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`package.json`** _(18 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`style.css`** _(78 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vite.config.js`** _(10 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/scripts/`
> Pasta 'scripts' — agrupamento de arquivos relacionados.

**`package.json`** _(15 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`post-merge.sh`** _(5 linhas)_
Arquivo SH — parte do projeto.

**`tsconfig.json`** _(10 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `apk-builder-android/android/`
> Pasta 'android' — agrupamento de arquivos relacionados.

**`build.gradle`** _(10 linhas)_
Arquivo GRADLE — parte do projeto.

**`gradle.properties`** _(4 linhas)_
Arquivo PROPERTIES — parte do projeto.

**`settings.gradle`** _(3 linhas)_
Arquivo GRADLE — parte do projeto.

---

### 📁 `apk-builder-source/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`Terminal-CLVdV-R2.js`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`Terminal-G5OQeJvU.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`index-BJuPNGJb.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

---

### 📁 `AssistenteJuridico-Mobile (10)/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(20 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`config-inicial.tsx`** _(202 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`login.tsx`** _(60 linhas)_
Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.

---

### 📁 `DevMobile-CORRIGIDO (6)/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(23 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `DevMobile-CORRIGIDO (6)/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`+not-found.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`_layout.tsx`** _(52 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

---

### 📁 `DevMobile-CORRIGIDO (6)/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(1005 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AIMemoryModal.tsx`** _(203 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`APKBuilderModal.tsx`** _(507 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CampoLivreModal.tsx`** _(989 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CheckpointsModal.tsx`** _(173 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CodeEditor.tsx`** _(383 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarAppsModal.tsx`** _(352 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ErrorBoundary.tsx`** _(55 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`ErrorFallback.tsx`** _(279 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`FileSidebar.tsx`** _(742 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`FloatingAI.tsx`** _(897 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubModal.tsx`** _(1183 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`HtmlPlayground.tsx`** _(706 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`KeyboardAwareScrollViewCompat.tsx`** _(30 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`LibrarySearch.tsx`** _(327 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`ManualModal.tsx`** _(776 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`MessageRenderer.tsx`** _(265 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`MonacoEditor.tsx`** _(163 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`PreviewPanel.tsx`** _(500 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`ProjectOverviewModal.tsx`** _(504 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ProjectPlanModal.tsx`** _(369 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`SystemStatus.tsx`** _(480 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1271 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VSCodeView.tsx`** _(685 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`VSCodeWebModal.tsx`** _(287 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`VoiceAssistant.tsx`** _(954 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `DevMobile-CORRIGIDO (6)/constants/`
> Pasta 'constants' — agrupamento de arquivos relacionados.

**`colors.ts`** _(98 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `DevMobile-CORRIGIDO (6)/context/`
> Gerenciamento de estado global — dados compartilhados entre telas.

**`AppContext.tsx`** _(1381 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

---

### 📁 `DevMobile-CORRIGIDO (6)/data/`
> Pasta 'data' — agrupamento de arquivos relacionados.

**`featuredProjects.ts`** _(802 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `DevMobile-CORRIGIDO (6)/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`useApiBase.ts`** _(100 linhas)_
HOOK de dados — busca informacoes da API e gerencia estado de carregamento e erro.

**`useColors.ts`** _(25 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'colors'.

---

### 📁 `DevMobile-CORRIGIDO (6)/plugins/`
> Pasta 'plugins' — agrupamento de arquivos relacionados.

**`withTermuxIntent.js`** _(26 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `DevMobile-CORRIGIDO (6)/server/`
> Pasta 'server' — agrupamento de arquivos relacionados.

**`serve.js`** _(136 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `DevMobile-CORRIGIDO (6)/services/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`apiBase.ts`** _(28 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`githubService.ts`** _(436 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`localSQLite.ts`** _(81 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`previewService.ts`** _(17 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`runtimeMode.ts`** _(56 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`storageService.ts`** _(16 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`terminalService.ts`** _(29 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `DevMobile-CORRIGIDO (6)/utils/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`projectPlan.ts`** _(208 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zipUtils.ts`** _(472 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `devmobile-fix/devmobile-fix/`
> Pasta 'devmobile-fix' — agrupamento de arquivos relacionados.

**`.easignore`** _(25 linhas)_
Arquivo EASIGNORE — parte do projeto.

**`.env`** _(2 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.env.example`** _(39 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.gitignore`** _(42 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`.npmrc`** _(3 linhas)_
Arquivo NPMRC — parte do projeto.

**`COMO-BUILDAR-APK.md`** _(78 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`GERAR-APK.md`** _(62 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`PLANO.md`** _(187 linhas)_
Este documento! Gerado automaticamente pelo SK Code Editor com toda a estrutura do projeto.

**`app.json`** _(62 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`babel.config.js`** _(7 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`eas.json`** _(47 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`expo-env.d.ts`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`metro.config.js`** _(28 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(78 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `SK-Code-Editor-APK-pronto (5)/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`index-D5g-sV5e.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-fs-BeamS8bA.js`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-Bu9o_ty_.js`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-DOOs4slz.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-lucide-NZRTcJIq.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-markdown-CM6-e2rl.js`** _(30 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-misc-COW7C1HQ.js`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-monaco-CS9w1txC.js`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-D8m3Uig9.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-dom-CdNyEL3a.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-webcontainer-BPoiPq3D.js`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-CT6HrMBF.js`** _(17 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-DDGTF8rc.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

---

### 📁 `SK-Code-Editor-Completo (15)/metodo-1-EAS/`
> Pasta 'metodo-1-EAS' — agrupamento de arquivos relacionados.

**`App.tsx`** _(29 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`INSTRUCOES.md`** _(38 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`app.json`** _(28 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`eas.json`** _(17 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(24 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `SK-Code-Editor-Completo (15)/metodo-2-Capacitor/`
> Pasta 'metodo-2-Capacitor' — agrupamento de arquivos relacionados.

**`INSTRUCOES.md`** _(63 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`capacitor.config.json`** _(15 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(15 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `SK-Code-Editor-Completo (15)/metodo-3-GitHub-Actions/`
> Pasta 'metodo-3-GitHub-Actions' — agrupamento de arquivos relacionados.

**`INSTRUCOES.md`** _(37 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`capacitor.config.json`** _(15 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(15 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `SK-Code-Editor-Completo (15)/web-app/`
> Pasta 'web-app' — agrupamento de arquivos relacionados.

**`LEIA-ME-PARA-PROGRAMADOR.md`** _(73 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`index.html`** _(111 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-code-editor-github (1)/dist-pronto/`
> Pasta 'dist-pronto' — agrupamento de arquivos relacionados.

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`index.html`** _(99 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(32 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(218 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `workflows-corrigidos/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`DevMobile-build-apk-eas.yml`** _(72 linhas)_
Arquivo YML — parte do projeto.

**`DevMobile-build-apk-local.yml`** _(126 linhas)_
Arquivo YML — parte do projeto.

**`LEIA-ME.txt`** _(25 linhas)_
Arquivo TXT — parte do projeto.

**`SKCodeEditor-build-apk.yml`** _(295 linhas)_
Arquivo YML — parte do projeto.

**`SKCodeEditor-deploy.yml`** _(38 linhas)_
Arquivo YML — parte do projeto.

**`build-apk-CORRIGIDO-repos-existentes.yml`** _(64 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/`
> Pasta 'api-server' — agrupamento de arquivos relacionados.

**`build.mjs`** _(159 linhas)_
Arquivo MJS — parte do projeto.

**`package.json`** _(45 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pty_helper.c`** _(138 linhas)_
Arquivo C — parte do projeto.

**`tsconfig.json`** _(18 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/`
> Pasta 'code-editor' — agrupamento de arquivos relacionados.

**`SYSTEM_DOCS.md`** _(292 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(36 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(92 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(65 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/`
> Pasta 'mockup-sandbox' — agrupamento de arquivos relacionados.

**`components.json`** _(22 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(32 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`mockupPreviewPlugin.ts`** _(181 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`package.json`** _(75 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(17 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(73 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-client-react/`
> Pasta 'api-client-react' — agrupamento de arquivos relacionados.

**`package.json`** _(16 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`tsconfig.tsbuildinfo`** _(1 linha)_
Arquivo TSBUILDINFO — parte do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-spec/`
> Pasta 'api-spec' — agrupamento de arquivos relacionados.

**`openapi.yaml`** _(37 linhas)_
Arquivo YAML — parte do projeto.

**`orval.config.ts`** _(73 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(12 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-zod/`
> Pasta 'api-zod' — agrupamento de arquivos relacionados.

**`package.json`** _(13 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(12 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`tsconfig.tsbuildinfo`** _(1 linha)_
Arquivo TSBUILDINFO — parte do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/db/`
> Pasta 'db' — agrupamento de arquivos relacionados.

**`drizzle.config.ts`** _(15 linhas)_
Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.

**`package.json`** _(26 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`tsconfig.tsbuildinfo`** _(1 linha)_
Arquivo TSBUILDINFO — parte do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/scripts/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`hello.ts`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `apk-builder-android/.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk.yml`** _(41 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `apk-builder-android/android/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`build.gradle`** _(31 linhas)_
Arquivo GRADLE — parte do projeto.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/`
> Pasta 'mobile' — agrupamento de arquivos relacionados.

**`.gitignore`** _(42 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`.npmrc`** _(3 linhas)_
Arquivo NPMRC — parte do projeto.

**`SQL_SETUP.sql`** _(66 linhas)_
Script SQL — contem comandos para criar tabelas, inserir ou consultar dados no banco.

**`app.json`** _(64 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`babel.config.js`** _(7 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`eas.json`** _(33 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`expo-env.d.ts`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`metro.config.js`** _(4 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(59 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `AssistenteJuridico-Mobile (10)/app/(tabs)/`
> Pasta '(tabs)' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(46 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`campo-livre.tsx`** _(271 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`config.tsx`** _(222 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`index.tsx`** _(375 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

**`pdpj.tsx`** _(164 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tramitacao.tsx`** _(59 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `AssistenteJuridico-Mobile (10)/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`CodeBlock.tsx`** _(88 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`ResultCard.tsx`** _(112 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceButton.tsx`** _(92 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

---

### 📁 `AssistenteJuridico-Mobile (10)/src/constants/`
> Pasta 'constants' — agrupamento de arquivos relacionados.

**`colors.ts`** _(30 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`prompts.ts`** _(101 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-Mobile (10)/src/services/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`ai.ts`** _(131 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`storage.ts`** _(159 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(52 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/`
> Pasta 'assistente-juridico' — agrupamento de arquivos relacionados.

**`.gitignore`** _(6 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`MANUAL_APK_ANDROID.md`** _(391 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`MANUAL_APK_ORIENTADO.md`** _(774 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`README.md`** _(3 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`RELATORIO_CORRECOES.md`** _(142 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`SECURITY.md`** _(22 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`drizzle.config.ts`** _(15 linhas)_
Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.

**`index.html`** _(28 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(98 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`postcss.config.js`** _(7 linhas)_
Configuracao do PostCSS, necessaria para o Tailwind processar os estilos.

**`tailwind.config.ts`** _(108 linhas)_
Configuracao do Tailwind CSS — a biblioteca de estilos visuais usada no projeto.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(45 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`capacitor.config.json`** _(10 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`capacitor.plugins.json`** _(2 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`native-bridge.js`** _(1040 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/`
> Pasta 'META-INF' — agrupamento de arquivos relacionados.

**`androidx.activity_activity.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.annotation_annotation-experimental.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.appcompat_appcompat-resources.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.appcompat_appcompat.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.arch.core_core-runtime.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.coordinatorlayout_coordinatorlayout.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.core_core-ktx.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.core_core-splashscreen.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.core_core-viewtree.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.core_core.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.cursoradapter_cursoradapter.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.customview_customview.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.drawerlayout_drawerlayout.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.emoji2_emoji2-views-helper.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.emoji2_emoji2.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.fragment_fragment.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.interpolator_interpolator.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.lifecycle_lifecycle-livedata-core.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.lifecycle_lifecycle-livedata.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.lifecycle_lifecycle-process.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.lifecycle_lifecycle-runtime.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.lifecycle_lifecycle-viewmodel-savedstate.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.lifecycle_lifecycle-viewmodel.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.loader_loader.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.profileinstaller_profileinstaller.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.savedstate_savedstate.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.startup_startup-runtime.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.tracing_tracing.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.vectordrawable_vectordrawable-animated.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.vectordrawable_vectordrawable.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.versionedparcelable_versionedparcelable.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.viewpager_viewpager.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`androidx.webkit_webkit.version`** _(2 linhas)_
Arquivo VERSION — parte do projeto.

**`kotlinx_coroutines_android.version`** _(1 linha)_
Arquivo VERSION — parte do projeto.

**`kotlinx_coroutines_core.version`** _(1 linha)_
Arquivo VERSION — parte do projeto.

---

### 📁 `DevMobile-CORRIGIDO (6)/app/(tabs)/`
> Pasta '(tabs)' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(161 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`ai.tsx`** _(81 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`editor.tsx`** _(1619 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`index.tsx`** _(3958 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

**`plugins.tsx`** _(1234 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`pwa.tsx`** _(625 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`settings.tsx`** _(1877 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`tasks.tsx`** _(522 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`terminal.tsx`** _(213 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `DevMobile-CORRIGIDO (6)/server/templates/`
> Pasta 'templates' — agrupamento de arquivos relacionados.

**`landing-page.html`** _(461 linhas)_
Arquivo HTML — parte do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(23 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`+not-found.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`_layout.tsx`** _(52 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

---

### 📁 `devmobile-fix/devmobile-fix/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(1043 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AIMemoryModal.tsx`** _(203 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`APKBuilderModal.tsx`** _(1058 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CampoLivreModal.tsx`** _(989 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CheckpointsModal.tsx`** _(173 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CodeEditor.tsx`** _(383 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarAppsModal.tsx`** _(352 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ErrorBoundary.tsx`** _(55 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`ErrorFallback.tsx`** _(279 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`FileSidebar.tsx`** _(742 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`FloatingAI.tsx`** _(897 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubModal.tsx`** _(1257 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`HtmlPlayground.tsx`** _(706 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`KeyboardAwareScrollViewCompat.tsx`** _(30 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`LibrarySearch.tsx`** _(327 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`ManualModal.tsx`** _(776 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`MessageRenderer.tsx`** _(265 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`MonacoEditor.tsx`** _(163 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`PreviewPanel.tsx`** _(500 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`ProjectOverviewModal.tsx`** _(504 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ProjectPlanModal.tsx`** _(369 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`SystemStatus.tsx`** _(480 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1271 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VSCodeView.tsx`** _(685 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`VSCodeWebModal.tsx`** _(363 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`VoiceAssistant.tsx`** _(991 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `devmobile-fix/devmobile-fix/constants/`
> Pasta 'constants' — agrupamento de arquivos relacionados.

**`colors.ts`** _(98 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/context/`
> Gerenciamento de estado global — dados compartilhados entre telas.

**`AppContext.tsx`** _(1382 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

---

### 📁 `devmobile-fix/devmobile-fix/data/`
> Pasta 'data' — agrupamento de arquivos relacionados.

**`featuredProjects.ts`** _(802 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`useApiBase.ts`** _(100 linhas)_
HOOK de dados — busca informacoes da API e gerencia estado de carregamento e erro.

**`useColors.ts`** _(25 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'colors'.

---

### 📁 `devmobile-fix/devmobile-fix/plugins/`
> Pasta 'plugins' — agrupamento de arquivos relacionados.

**`withTermuxIntent.js`** _(26 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/server/`
> Pasta 'server' — agrupamento de arquivos relacionados.

**`serve.js`** _(136 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/services/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`apiBase.ts`** _(28 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`githubService.ts`** _(530 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`localSQLite.ts`** _(81 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`previewService.ts`** _(17 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`runtimeMode.ts`** _(56 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`storageService.ts`** _(16 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`terminalService.ts`** _(29 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `devmobile-fix/devmobile-fix/utils/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`projectPlan.ts`** _(208 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zipUtils.ts`** _(473 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `sk-code-editor-completo (13)/artifacts/api-server/`
> Pasta 'api-server' — agrupamento de arquivos relacionados.

**`package.json`** _(46 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(18 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `sk-code-editor-completo (13)/artifacts/code-editor/`
> Pasta 'code-editor' — agrupamento de arquivos relacionados.

**`index.html`** _(98 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(93 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(69 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `SK-Code-Editor-Completo (15)/web-app/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`index-D5g-sV5e.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-fs-BeamS8bA.js`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-Bu9o_ty_.js`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-DOOs4slz.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-lucide-NZRTcJIq.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-markdown-CM6-e2rl.js`** _(30 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-misc-COW7C1HQ.js`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-monaco-CS9w1txC.js`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-D8m3Uig9.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-dom-CdNyEL3a.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-webcontainer-BPoiPq3D.js`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-CT6HrMBF.js`** _(17 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-DDGTF8rc.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

---

### 📁 `sk-code-editor-github (1)/.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk.yml`** _(220 linhas)_
Arquivo YML — parte do projeto.

**`deploy.yml`** _(38 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `sk-code-editor-github (1)/dist-pronto/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`index-tHCXXaAl.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

---

### 📁 `sk-editor-source (1)/artifacts/api-server/`
> Pasta 'api-server' — agrupamento de arquivos relacionados.

**`build.mjs`** _(159 linhas)_
Arquivo MJS — parte do projeto.

**`package.json`** _(46 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pty_helper.c`** _(138 linhas)_
Arquivo C — parte do projeto.

**`tsconfig.json`** _(18 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/`
> Pasta 'code-editor' — agrupamento de arquivos relacionados.

**`SYSTEM_DOCS.md`** _(292 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(98 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(93 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(69 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `sk-editor-source (1)/lib/api-client-react/`
> Pasta 'api-client-react' — agrupamento de arquivos relacionados.

**`package.json`** _(16 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `sk-editor-source (1)/lib/api-spec/`
> Pasta 'api-spec' — agrupamento de arquivos relacionados.

**`openapi.yaml`** _(37 linhas)_
Arquivo YAML — parte do projeto.

**`orval.config.ts`** _(73 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(12 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `sk-editor-source (1)/lib/api-zod/`
> Pasta 'api-zod' — agrupamento de arquivos relacionados.

**`package.json`** _(13 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(12 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `sk-editor-source (1)/lib/db/`
> Pasta 'db' — agrupamento de arquivos relacionados.

**`drizzle.config.ts`** _(15 linhas)_
Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.

**`package.json`** _(26 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2339 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(1286 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(763 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarApps.tsx`** _(359 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2810 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(969 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Manual.tsx`** _(1790 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(724 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(594 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SystemStatusPanel.tsx`** _(351 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(589 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1511 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`WebContainerTerminal.tsx`** _(333 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(237 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(206 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(4532 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(312 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(217 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/`
> Pasta 'code-editor' — agrupamento de arquivos relacionados.

**`INSTALAR.md`** _(105 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`SYSTEM_DOCS.md`** _(292 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(98 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package-standalone.json`** _(42 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(93 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.standalone.ts`** _(26 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`vite.config.ts`** _(69 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(33 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(222 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(32 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`manifest.json`** _(49 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(41 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(210 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(18 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(147 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(158 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-client-react/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`custom-fetch.ts`** _(372 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(5 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-zod/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(3 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/db/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(17 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(28 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`+not-found.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`_layout.tsx`** _(18 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`config-inicial.tsx`** _(192 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`login.tsx`** _(149 linhas)_
Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`CodeBlock.tsx`** _(87 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`ErrorBoundary.tsx`** _(55 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`ErrorFallback.tsx`** _(279 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`HtmlViewer.tsx`** _(114 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`KeyboardAwareScrollViewCompat.tsx`** _(18 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`ResultCard.tsx`** _(612 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`SideMenu.tsx`** _(303 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`StatusModal.tsx`** _(193 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/constants/`
> Pasta 'constants' — agrupamento de arquivos relacionados.

**`colors.ts`** _(30 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`prompts.ts`** _(101 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`useColors.ts`** _(6 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'colors'.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/scripts/`
> Pasta 'scripts' — agrupamento de arquivos relacionados.

**`build.js`** _(574 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/server/`
> Pasta 'server' — agrupamento de arquivos relacionados.

**`serve.js`** _(136 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/services/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`ai.ts`** _(248 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`fileImport.ts`** _(289 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`neon.ts`** _(139 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`storage.ts`** _(365 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(42 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(28 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/api/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`.ts`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/`
> Pasta 'client' — agrupamento de arquivos relacionados.

**`api.ts`** _(1 linha)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`index.html`** _(31 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`index.ts`** _(47 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/migrations/`
> Historico de alteracoes do banco de dados.

**`0000_init.sql`** _(141 linhas)_
Script SQL — contem comandos para criar tabelas, inserir ou consultar dados no banco.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`auditoria.html`** _(35 linhas)_
Arquivo HTML — parte do projeto.

**`favicon.svg`** _(4 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon.svg`** _(19 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`manifest.webmanifest`** _(27 linhas)_
Arquivo WEBMANIFEST — parte do projeto.

**`sw.js`** _(53 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/script/`
> Pasta 'script' — agrupamento de arquivos relacionados.

**`build.ts`** _(71 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/server/`
> Pasta 'server' — agrupamento de arquivos relacionados.

**`db.ts`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`djen.ts`** _(384 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(210 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`local-config.ts`** _(67 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`routes.ts`** _(6042 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

**`static.ts`** _(31 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`storage.ts`** _(460 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vite.ts`** _(56 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/shared/`
> Pasta 'shared' — agrupamento de arquivos relacionados.

**`schema.ts`** _(267 linhas)_
Arquivo de MODELO — define a estrutura dos dados (tabelas, campos, tipos).

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(149 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(351 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(9 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`cordova.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`cordova_plugins.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`favicon.svg`** _(4 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon.svg`** _(19 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`index.html`** _(38 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manifest.webmanifest`** _(27 linhas)_
Arquivo WEBMANIFEST — parte do projeto.

**`sw.js`** _(53 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/services/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`kotlinx.coroutines.CoroutineExceptionHandler`** _(2 linhas)_
Arquivo COROUTINEEXCEPTIONHANDLER — parte do projeto.

**`kotlinx.coroutines.internal.MainDispatcherFactory`** _(2 linhas)_
Arquivo MAINDISPATCHERFACTORY — parte do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk-eas.yml`** _(72 linhas)_
Arquivo YML — parte do projeto.

**`build-apk-local.yml`** _(126 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `devmobile-fix/devmobile-fix/app/(tabs)/`
> Pasta '(tabs)' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(161 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`ai.tsx`** _(81 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`editor.tsx`** _(1619 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`index.tsx`** _(3958 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

**`plugins.tsx`** _(1234 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`pwa.tsx`** _(625 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`settings.tsx`** _(1886 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`tasks.tsx`** _(522 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`terminal.tsx`** _(213 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `devmobile-fix/devmobile-fix/server/templates/`
> Pasta 'templates' — agrupamento de arquivos relacionados.

**`landing-page.html`** _(461 linhas)_
Arquivo HTML — parte do projeto.

---

### 📁 `sk-code-editor-completo (13)/artifacts/api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(288 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `sk-code-editor-completo (13)/artifacts/code-editor/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-code-editor-completo (13)/artifacts/code-editor/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(210 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `SK-Code-Editor-Completo (15)/metodo-3-GitHub-Actions/.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk.yml`** _(51 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `sk-editor-source (1)/artifacts/api-server/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(33 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `sk-editor-source (1)/artifacts/api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(288 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(32 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(176 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(210 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `sk-editor-source (1)/lib/api-client-react/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`custom-fetch.ts`** _(372 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(5 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `sk-editor-source (1)/lib/api-zod/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(3 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `sk-editor-source (1)/lib/db/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(17 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `SKCodeEditor-LIMPO (7) (2)/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(32 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(218 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`ai-chat.ts`** _(75 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`config.ts`** _(27 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`drive.ts`** _(108 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`exec.ts`** _(307 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`github.ts`** _(107 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(31 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`legal-ai.ts`** _(328 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`proxy.ts`** _(62 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`search.ts`** _(63 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`upload.ts`** _(77 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(88 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`workspace.ts`** _(318 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2226 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(1190 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(499 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2520 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(632 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(625 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(495 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(501 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1516 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(197 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(206 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(1629 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(294 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(163 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/.generated/`
> Pasta '.generated' — agrupamento de arquivos relacionados.

**`mockup-components.ts`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(190 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-client-react/src/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.schemas.ts`** _(11 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`api.ts`** _(102 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-zod/src/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.ts`** _(17 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/db/src/schema/`
> Pasta 'schema' — agrupamento de arquivos relacionados.

**`index.ts`** _(20 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `apk-builder-android/android/app/src/main/`
> Pasta 'main' — agrupamento de arquivos relacionados.

**`AndroidManifest.xml`** _(27 linhas)_
Arquivo XML — parte do projeto.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/app/(tabs)/`
> Pasta '(tabs)' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(52 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`campo-livre.tsx`** _(405 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comunicacoes.tsx`** _(893 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`config.tsx`** _(1178 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`index.tsx`** _(1531 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

**`pdpj.tsx`** _(181 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`playground.tsx`** _(795 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tramitacao.tsx`** _(462 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `assistente-juridico-completo/artifacts/mobile/server/templates/`
> Pasta 'templates' — agrupamento de arquivos relacionados.

**`landing-page.html`** _(461 linhas)_
Arquivo HTML — parte do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`auditoria.html`** _(259 linhas)_
Arquivo HTML — parte do projeto.

**`codigo-formatacao.txt`** _(123 linhas)_
Arquivo TXT — parte do projeto.

**`comparador.html`** _(494 linhas)_
Arquivo HTML — parte do projeto.

**`manifest.json`** _(53 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(58 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(190 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(351 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(25 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/migrations/meta/`
> Pasta 'meta' — agrupamento de arquivos relacionados.

**`0000_snapshot.json`** _(871 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`_journal.json`** _(13 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/shared/models/`
> Modelos de dados — representacao das tabelas do banco de dados.

**`chat.ts`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/shared/shared/`
> Pasta 'shared' — agrupamento de arquivos relacionados.

**`schema.ts`** _(77 linhas)_
Arquivo de MODELO — define a estrutura dos dados (tabelas, campos, tipos).

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`pwa-install.tsx`** _(86 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`theme-provider.tsx`** _(47 linhas)_
Componente PROVIDER — 'fornece' dados/funcoes para todos os componentes filhos via Context API do React.

**`theme-toggle.tsx`** _(19 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tiptap-editor.tsx`** _(542 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`offline-api.ts`** _(540 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`queryClient.ts`** _(68 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/`
> Telas completas do app — cada arquivo aqui e uma pagina navegavel.

**`auditoria-financeira.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`code-assistant.tsx`** _(1000 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comparador-juridico.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comunicacoes-cnj.tsx`** _(403 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`configuracoes.tsx`** _(352 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`consulta-corporativo.tsx`** _(479 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-pdpj.tsx`** _(671 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-processual.tsx`** _(656 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`filtrador.tsx`** _(732 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`jurisprudencia.tsx`** _(3837 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx`** _(5409 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx.recovered`** _(3763 linhas)_
Arquivo RECOVERED — parte do projeto.

**`login.tsx`** _(119 linhas)_
Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.

**`not-found.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`painel-processos.tsx`** _(758 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`playground.tsx`** _(1473 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`previdenciario.tsx`** _(770 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`robo-djen.tsx`** _(1053 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`token-generator.tsx`** _(450 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tramitacao.tsx`** _(828 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`index-B-shzaQ9.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`index-D8bM_P_3.js`** _(53 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tiptap-DgKt6v5q.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-3vo9YLbA.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-code-editor-completo (13)/artifacts/api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-code-editor-completo (13)/artifacts/api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`ai-chat.ts`** _(143 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ai-forward.ts`** _(156 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`config.ts`** _(27 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`db.ts`** _(362 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`drive.ts`** _(108 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`exec.ts`** _(381 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`github.ts`** _(107 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(39 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`legal-ai.ts`** _(328 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pages.ts`** _(195 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`proxy.ts`** _(62 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`search.ts`** _(63 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`twa.ts`** _(487 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`upload.ts`** _(77 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(88 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`workspace.ts`** _(318 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-code-editor-completo (13)/artifacts/code-editor/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2339 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(1286 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(740 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarApps.tsx`** _(359 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2805 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(891 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Manual.tsx`** _(1790 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(724 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(594 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SystemStatusPanel.tsx`** _(351 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(589 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1511 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`WebContainerTerminal.tsx`** _(333 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `sk-code-editor-completo (13)/artifacts/code-editor/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `sk-code-editor-completo (13)/artifacts/code-editor/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(197 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(206 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(4532 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(312 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(163 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `sk-editor-source (1)/artifacts/api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-editor-source (1)/artifacts/api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`ai-chat.ts`** _(137 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ai-forward.ts`** _(156 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`config.ts`** _(27 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`db.ts`** _(362 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`drive.ts`** _(108 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`exec.ts`** _(307 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`github.ts`** _(107 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(37 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`legal-ai.ts`** _(328 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`proxy.ts`** _(62 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`search.ts`** _(63 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`twa.ts`** _(487 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`upload.ts`** _(77 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(88 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`workspace.ts`** _(318 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2277 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(1286 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(740 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarApps.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2783 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(632 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Manual.tsx`** _(1655 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(724 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(539 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SystemStatusPanel.tsx`** _(351 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(501 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1511 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`WebContainerTerminal.tsx`** _(323 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(197 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(206 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(4532 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(312 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(163 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `sk-editor-source (1)/lib/api-client-react/src/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.schemas.ts`** _(11 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`api.ts`** _(102 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `sk-editor-source (1)/lib/api-zod/src/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.ts`** _(17 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `sk-editor-source (1)/lib/db/src/schema/`
> Pasta 'schema' — agrupamento de arquivos relacionados.

**`index.ts`** _(20 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk.yml`** _(220 linhas)_
Arquivo YML — parte do projeto.

**`deploy.yml`** _(38 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2339 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`APKBuilderPanel.tsx`** _(536 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`AssistenteJuridico.tsx`** _(1286 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(763 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarApps.tsx`** _(359 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2832 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(969 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Manual.tsx`** _(1790 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(724 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(594 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SystemStatusPanel.tsx`** _(351 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(589 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1511 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VSCodeWebPanel.tsx`** _(242 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`WebContainerTerminal.tsx`** _(333 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(237 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(206 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(4532 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(312 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(217 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(38 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(59 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(166 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(715 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `1.sk-code-editor-v26-juridico-completo/lib/api-zod/src/generated/types/`
> Definicoes de tipos TypeScript — contratos de dados.

**`healthStatus.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(10 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/replit_integrations/audio/`
> Pasta 'audio' — agrupamento de arquivos relacionados.

**`audio-playback-worklet.js`** _(113 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`audio-utils.ts`** _(37 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`index.ts`** _(46 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`useAudioPlayback.ts`** _(106 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'audioplayback'.

**`useVoiceRecorder.ts`** _(53 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'voicerecorder'.

**`useVoiceStream.ts`** _(92 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'voicestream'.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`pwa-install.tsx`** _(86 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`theme-provider.tsx`** _(47 linhas)_
Componente PROVIDER — 'fornece' dados/funcoes para todos os componentes filhos via Context API do React.

**`theme-toggle.tsx`** _(19 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tiptap-editor.tsx`** _(542 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`queryClient.ts`** _(68 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/`
> Telas completas do app — cada arquivo aqui e uma pagina navegavel.

**`auditoria-financeira.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`code-assistant.tsx`** _(1000 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comparador-juridico.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comunicacoes-cnj.tsx`** _(403 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`configuracoes.tsx`** _(484 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`consulta-corporativo.tsx`** _(479 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-pdpj.tsx`** _(671 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-processual.tsx`** _(656 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`filtrador.tsx`** _(732 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`jurisprudencia.tsx`** _(3837 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx`** _(5410 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx.recovered`** _(3763 linhas)_
Arquivo RECOVERED — parte do projeto.

**`login.tsx`** _(119 linhas)_
Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.

**`not-found.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`painel-processos.tsx`** _(758 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`playground.tsx`** _(1473 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`previdenciario.tsx`** _(770 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`robo-djen.tsx`** _(1053 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`token-generator.tsx`** _(450 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tramitacao.tsx`** _(828 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/`
> Pasta 'audio' — agrupamento de arquivos relacionados.

**`client.ts`** _(275 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`index.ts`** _(15 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`routes.ts`** _(137 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/batch/`
> Pasta 'batch' — agrupamento de arquivos relacionados.

**`index.ts`** _(8 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`utils.ts`** _(183 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/`
> Pasta 'chat' — agrupamento de arquivos relacionados.

**`index.ts`** _(4 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`routes.ts`** _(204 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

**`storage.ts`** _(44 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/image/`
> Pasta 'image' — agrupamento de arquivos relacionados.

**`client.ts`** _(60 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`index.ts`** _(4 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`routes.ts`** _(32 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(57 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(52 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(39 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button.tsx`** _(63 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(69 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(86 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(152 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(123 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(119 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(199 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`form.tsx`** _(179 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(30 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(24 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`label.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(257 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(161 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(118 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(31 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/org/apache/cordova/allowlist/`
> Pasta 'allowlist' — agrupamento de arquivos relacionados.

**`index.html`** _(46 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`index2.html`** _(40 linhas)_
Arquivo HTML — parte do projeto.

---

### 📁 `sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `sk-editor-source (1)/artifacts/code-editor/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `sk-editor-source (1)/lib/api-zod/src/generated/types/`
> Definicoes de tipos TypeScript — contratos de dados.

**`healthStatus.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(10 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `apk-builder-android/android/app/src/main/assets/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`favicon.svg`** _(4 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon-192.svg`** _(12 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon-512.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`index.html`** _(41 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manifest.json`** _(45 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(71 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `apk-builder-android/android/app/src/main/res/values/`
> Pasta 'values' — agrupamento de arquivos relacionados.

**`strings.xml`** _(6 linhas)_
Arquivo XML — parte do projeto.

**`styles.xml`** _(11 linhas)_
Arquivo XML — parte do projeto.

---

### 📁 `AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(57 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(52 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(39 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button.tsx`** _(63 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(69 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(86 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(152 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(123 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(119 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(199 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`form.tsx`** _(179 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(30 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(24 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`label.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(257 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(161 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(118 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(31 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `apk-builder-android/android/app/src/main/assets/public/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`index-yJIu36Xs.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

---

### 📁 `apk-builder-android/android/app/src/main/java/br/com/maikoncaldeira/apkbuilder/`
> Pasta 'apkbuilder' — agrupamento de arquivos relacionados.

**`MainActivity.java`** _(8 linhas)_
Arquivo JAVA — parte do projeto.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: Projeto Profissional Full-Stack + Neon DB
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 1299 | Linhas: ~326.262
Rotas API: 400 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: LOG_LEVEL, AI_INTEGRATIONS_OPENAI_BASE_URL, AI_INTEGRATIONS_OPENAI_API_KEY, PORT, ALLOWED_ORIGINS, JWT_SECRET, JWT_EXPIRES_IN, DATABASE_URL, BASE_PATH, REPL_ID, SESSION_SECRET, APP_PASSWORD, PUBLIC_API_KEY, AI_INTEGRATIONS_GEMINI_API_KEY, AI_INTEGRATIONS_GEMINI_BASE_URL, PDPJ_PEM_PRIVATE_KEY, PUBLIC_API_MODEL, PUBLIC_API_URL, DATAJUD_API_KEY, PERPLEXITY_API_KEY, GROQ_API_KEY, GROQ_MODEL, ANTHROPIC_API_KEY, CLAUDE_MODEL, GEMINI_API_KEY, GEMINI_MODEL, OPENAI_API_KEY, EXPO_PUBLIC_DOMAIN, EXPO_PUBLIC_API_BASE_URL, EXPO_PUBLIC_REMOTE_API_URL, EXPO_PUBLIC_APP_MODE, EXPO_PUBLIC_API_STRATEGY, EXPO_PUBLIC_LOCAL_API_PORT, EXPO_PUBLIC_LOCAL_PREVIEW_PORT, EXPO_PUBLIC_ENABLE_TERMUX, EXPO_PUBLIC_ENABLE_REMOTE_AI, EXPO_PUBLIC_ENABLE_GITHUB, EXPO_PUBLIC_ENABLE_REMOTE_DB, EXPO_PUBLIC_ENABLE_REMOTE_TERMINAL, XAI_API_KEY, OPENROUTER_API_KEY, TELEGRAM_TOKEN, REPLIT_INTERNAL_APP_DOMAIN, REPLIT_DEV_DOMAIN, EXPO_PUBLIC_REPL_ID

Estrutura principal:
  .sk/memoria.json
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/.replit-artifact/artifact.toml
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/build.mjs
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/package.json
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/pty_helper.c
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/app.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/index.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/lib/logger.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/ai-chat.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/config.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/drive.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/exec.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/github.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/health.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/index.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/legal-ai.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/proxy.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/search.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/upload.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/voice.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/src/routes/workspace.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/api-server/tsconfig.json
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/.replit-artifact/artifact.toml
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/SYSTEM_DOCS.md
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/components.json
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/index.html
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/package.json
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/public/favicon.svg
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/public/manifest.json
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/public/sw.js
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/App.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/AIChat.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/AssistenteJuridico.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/CampoLivre.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/CodeEditor.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/DriveBackupPanel.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/EditorLayout.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/FileTree.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/GitHubPanel.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/PackageSearch.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/Preview.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/QuickPrompt.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/RealTerminal.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/StreamTerminal.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/TemplateSelector.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/Terminal.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/VoiceCard.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/VoiceMode.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/accordion.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/alert-dialog.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/alert.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/aspect-ratio.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/avatar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/badge.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/breadcrumb.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/button-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/button.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/calendar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/card.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/carousel.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/chart.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/checkbox.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/collapsible.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/command.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/context-menu.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/dialog.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/drawer.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/dropdown-menu.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/empty.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/field.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/form.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/hover-card.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/input-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/input-otp.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/input.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/item.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/kbd.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/label.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/menubar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/navigation-menu.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/pagination.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/popover.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/progress.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/radio-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/resizable.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/scroll-area.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/select.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/separator.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/sheet.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/sidebar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/skeleton.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/slider.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/sonner.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/spinner.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/switch.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/table.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/tabs.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/textarea.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/toast.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/toaster.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/toggle-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/toggle.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/components/ui/tooltip.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/hooks/use-mobile.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/hooks/use-toast.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/index.css
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/ai-service.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/github-service.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/projects.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/store.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/templates.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/tts-service.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/utils.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/virtual-fs.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/lib/zip-service.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/src/main.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/tsconfig.json
  1.sk-code-editor-v26-juridico-completo/artifacts/code-editor/vite.config.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/.replit-artifact/artifact.toml
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/components.json
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/index.html
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/mockupPreviewPlugin.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/package.json
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/.generated/mockup-components.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/App.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/accordion.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/alert-dialog.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/alert.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/aspect-ratio.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/avatar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/badge.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/breadcrumb.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/button-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/button.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/calendar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/card.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/carousel.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/chart.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/checkbox.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/collapsible.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/command.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/context-menu.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/dialog.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/drawer.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/dropdown-menu.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/empty.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/field.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/form.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/hover-card.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/input-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/input-otp.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/input.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/item.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/kbd.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/label.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/menubar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/navigation-menu.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/pagination.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/popover.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/progress.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/radio-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/resizable.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/scroll-area.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/select.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/separator.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/sheet.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/sidebar.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/skeleton.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/slider.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/sonner.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/spinner.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/switch.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/table.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/tabs.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/textarea.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/toast.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/toaster.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/toggle-group.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/toggle.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/components/ui/tooltip.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/hooks/use-mobile.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/hooks/use-toast.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/index.css
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/lib/utils.ts
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/src/main.tsx
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/tsconfig.json
  1.sk-code-editor-v26-juridico-completo/artifacts/mockup-sandbox/vite.config.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-client-react/package.json
  1.sk-code-editor-v26-juridico-completo/lib/api-client-react/src/custom-fetch.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-client-react/src/generated/api.schemas.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-client-react/src/generated/api.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-client-react/src/index.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-client-react/tsconfig.json
  1.sk-code-editor-v26-juridico-completo/lib/api-client-react/tsconfig.tsbuildinfo
  1.sk-code-editor-v26-juridico-completo/lib/api-spec/openapi.yaml
  1.sk-code-editor-v26-juridico-completo/lib/api-spec/orval.config.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-spec/package.json
  1.sk-code-editor-v26-juridico-completo/lib/api-zod/package.json
  1.sk-code-editor-v26-juridico-completo/lib/api-zod/src/generated/api.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-zod/src/generated/types/healthStatus.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-zod/src/generated/types/index.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-zod/src/index.ts
  1.sk-code-editor-v26-juridico-completo/lib/api-zod/tsconfig.json
  1.sk-code-editor-v26-juridico-completo/lib/api-zod/tsconfig.tsbuildinfo
  1.sk-code-editor-v26-juridico-completo/lib/db/drizzle.config.ts
  1.sk-code-editor-v26-juridico-completo/lib/db/package.json
  1.sk-code-editor-v26-juridico-completo/lib/db/src/index.ts
  1.sk-code-editor-v26-juridico-completo/lib/db/src/schema/index.ts
  1.sk-code-editor-v26-juridico-completo/lib/db/tsconfig.json
  1.sk-code-editor-v26-juridico-completo/lib/db/tsconfig.tsbuildinfo
  1.sk-code-editor-v26-juridico-completo/package.json
  1.sk-code-editor-v26-juridico-completo/pnpm-workspace.yaml
  1.sk-code-editor-v26-juridico-completo/replit.md
  1.sk-code-editor-v26-juridico-completo/scripts/package.json
  1.sk-code-editor-v26-juridico-completo/scripts/post-merge.sh
  1.sk-code-editor-v26-juridico-completo/scripts/src/hello.ts
  1.sk-code-editor-v26-juridico-completo/scripts/tsconfig.json
  AssistenteJuridico-Mobile (10)/.gitignore
  AssistenteJuridico-Mobile (10)/README.md
  AssistenteJuridico-Mobile (10)/SQL_SETUP.sql
  AssistenteJuridico-Mobile (10)/app.json
  AssistenteJuridico-Mobile (10)/app/(tabs)/_layout.tsx
  AssistenteJuridico-Mobile (10)/app/(tabs)/campo-livre.tsx
  AssistenteJuridico-Mobile (10)/app/(tabs)/config.tsx
  AssistenteJuridico-Mobile (10)/app/(tabs)/index.tsx
  AssistenteJuridico-Mobile (10)/app/(tabs)/pdpj.tsx
  AssistenteJuridico-Mobile (10)/app/(tabs)/tramitacao.tsx
  AssistenteJuridico-Mobile (10)/app/_layout.tsx
  AssistenteJuridico-Mobile (10)/app/config-inicial.tsx
  AssistenteJuridico-Mobile (10)/app/login.tsx
  AssistenteJuridico-Mobile (10)/babel.config.js
  AssistenteJuridico-Mobile (10)/eas.json
  AssistenteJuridico-Mobile (10)/package.json
  AssistenteJuridico-Mobile (10)/src/components/CodeBlock.tsx
  AssistenteJuridico-Mobile (10)/src/components/ResultCard.tsx
  AssistenteJuridico-Mobile (10)/src/components/VoiceButton.tsx
  AssistenteJuridico-Mobile (10)/src/constants/colors.ts
  AssistenteJuridico-Mobile (10)/src/constants/prompts.ts
  AssistenteJuridico-Mobile (10)/src/services/ai.ts
  AssistenteJuridico-Mobile (10)/src/services/storage.ts
  AssistenteJuridico-Mobile (10)/src/services/voice.ts
  AssistenteJuridico-Mobile (10)/tsconfig.json
  AssistenteJuridico-PWA/artifacts/assistente-juridico/.gitignore
  AssistenteJuridico-PWA/artifacts/assistente-juridico/.replit-artifact/artifact.toml
  AssistenteJuridico-PWA/artifacts/assistente-juridico/MANUAL_APK_ANDROID.md
  AssistenteJuridico-PWA/artifacts/assistente-juridico/MANUAL_APK_ORIENTADO.md
  AssistenteJuridico-PWA/artifacts/assistente-juridico/README.md
  AssistenteJuridico-PWA/artifacts/assistente-juridico/RELATORIO_CORRECOES.md
  AssistenteJuridico-PWA/artifacts/assistente-juridico/SECURITY.md
  AssistenteJuridico-PWA/artifacts/assistente-juridico/api/.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/api.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/index.html
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/index.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/public/auditoria.html
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/public/codigo-formatacao.txt
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/public/comparador.html
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/public/manifest.json
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/public/sw.js
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/replit_integrations/audio/audio-playback-worklet.js
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/replit_integrations/audio/audio-utils.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/replit_integrations/audio/index.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/replit_integrations/audio/useAudioPlayback.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/replit_integrations/audio/useVoiceRecorder.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/replit_integrations/audio/useVoiceStream.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/App.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/pwa-install.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/theme-provider.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/theme-toggle.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/tiptap-editor.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/accordion.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/alert-dialog.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/alert.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/aspect-ratio.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/avatar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/badge.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/breadcrumb.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/button.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/calendar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/card.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/carousel.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/chart.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/checkbox.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/collapsible.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/command.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/context-menu.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/dialog.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/drawer.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/dropdown-menu.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/form.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/hover-card.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/input-otp.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/input.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/label.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/menubar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/navigation-menu.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/pagination.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/popover.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/progress.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/radio-group.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/resizable.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/scroll-area.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/select.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/separator.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/sheet.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/sidebar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/skeleton.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/slider.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/switch.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/table.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/tabs.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/textarea.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/toast.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/toaster.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/toggle-group.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/toggle.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/components/ui/tooltip.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/hooks/use-mobile.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/hooks/use-toast.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/index.css
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/lib/queryClient.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/lib/utils.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/main.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/auditoria-financeira.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/code-assistant.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/comparador-juridico.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/comunicacoes-cnj.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/configuracoes.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/consulta-corporativo.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/consulta-pdpj.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/consulta-processual.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/filtrador.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/jurisprudencia.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/legal-assistant.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/legal-assistant.tsx.recovered
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/login.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/not-found.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/painel-processos.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/playground.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/previdenciario.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/robo-djen.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/token-generator.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/client/src/pages/tramitacao.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/components.json
  AssistenteJuridico-PWA/artifacts/assistente-juridico/drizzle.config.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/index.html
  AssistenteJuridico-PWA/artifacts/assistente-juridico/migrations/0000_init.sql
  AssistenteJuridico-PWA/artifacts/assistente-juridico/migrations/meta/0000_snapshot.json
  AssistenteJuridico-PWA/artifacts/assistente-juridico/migrations/meta/_journal.json
  AssistenteJuridico-PWA/artifacts/assistente-juridico/package.json
  AssistenteJuridico-PWA/artifacts/assistente-juridico/postcss.config.js
  AssistenteJuridico-PWA/artifacts/assistente-juridico/public/auditoria.html
  AssistenteJuridico-PWA/artifacts/assistente-juridico/public/favicon.svg
  AssistenteJuridico-PWA/artifacts/assistente-juridico/public/icon.svg
  AssistenteJuridico-PWA/artifacts/assistente-juridico/public/manifest.webmanifest
  AssistenteJuridico-PWA/artifacts/assistente-juridico/public/sw.js
  AssistenteJuridico-PWA/artifacts/assistente-juridico/script/build.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/db.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/djen.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/index.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/local-config.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/client.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/index.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/audio/routes.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/batch/index.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/batch/utils.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/index.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/routes.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/chat/storage.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/image/client.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/image/index.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/replit_integrations/image/routes.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/routes.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/static.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/storage.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/server/vite.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/shared/models/chat.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/shared/schema.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/shared/shared/schema.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/App.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/pwa-install.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/theme-provider.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/theme-toggle.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/tiptap-editor.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/accordion.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/alert-dialog.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/alert.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/aspect-ratio.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/avatar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/badge.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/breadcrumb.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/button.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/calendar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/card.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/carousel.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/chart.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/checkbox.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/collapsible.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/command.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/context-menu.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/dialog.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/drawer.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/dropdown-menu.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/form.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/hover-card.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/input-otp.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/input.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/label.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/menubar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/navigation-menu.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/pagination.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/popover.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/progress.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/radio-group.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/resizable.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/scroll-area.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/select.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/separator.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/sheet.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/sidebar.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/skeleton.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/slider.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/switch.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/table.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/tabs.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/textarea.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/toast.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/toaster.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/toggle-group.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/toggle.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/components/ui/tooltip.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/hooks/use-mobile.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/hooks/use-toast.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/index.css
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/lib/offline-api.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/lib/queryClient.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/lib/utils.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/main.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/auditoria-financeira.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/code-assistant.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/comparador-juridico.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/comunicacoes-cnj.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/configuracoes.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/consulta-corporativo.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/consulta-pdpj.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/consulta-processual.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/filtrador.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/jurisprudencia.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/legal-assistant.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/legal-assistant.tsx.recovered
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/login.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/not-found.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/painel-processos.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/playground.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/previdenciario.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/robo-djen.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/token-generator.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/src/pages/tramitacao.tsx
  AssistenteJuridico-PWA/artifacts/assistente-juridico/tailwind.config.ts
  AssistenteJuridico-PWA/artifacts/assistente-juridico/tsconfig.json
  AssistenteJuridico-PWA/artifacts/assistente-juridico/vite.config.ts
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.activity_activity.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.annotation_annotation-experimental.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.appcompat_appcompat-resources.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.appcompat_appcompat.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.arch.core_core-runtime.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.coordinatorlayout_coordinatorlayout.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.core_core-ktx.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.core_core-splashscreen.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.core_core-viewtree.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.core_core.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.cursoradapter_cursoradapter.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.customview_customview.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.drawerlayout_drawerlayout.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.emoji2_emoji2-views-helper.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.emoji2_emoji2.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.fragment_fragment.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.interpolator_interpolator.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.lifecycle_lifecycle-livedata-core.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.lifecycle_lifecycle-livedata.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.lifecycle_lifecycle-process.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.lifecycle_lifecycle-runtime.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.lifecycle_lifecycle-viewmodel-savedstate.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.lifecycle_lifecycle-viewmodel.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.loader_loader.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.profileinstaller_profileinstaller.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.savedstate_savedstate.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.startup_startup-runtime.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.tracing_tracing.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.vectordrawable_vectordrawable-animated.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.vectordrawable_vectordrawable.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.versionedparcelable_versionedparcelable.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.viewpager_viewpager.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/androidx.webkit_webkit.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/kotlinx_coroutines_android.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/kotlinx_coroutines_core.version
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/services/kotlinx.coroutines.CoroutineExceptionHandler
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/META-INF/services/kotlinx.coroutines.internal.MainDispatcherFactory
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/capacitor.config.json
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/capacitor.plugins.json
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/native-bridge.js
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/assets/index-B-shzaQ9.css
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/assets/index-D8bM_P_3.js
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/assets/tiptap-DgKt6v5q.js
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/assets/vendor-3vo9YLbA.js
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/cordova.js
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/cordova_plugins.js
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/favicon.svg
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/icon.svg
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/index.html
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/manifest.webmanifest
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/assets/public/sw.js
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/org/apache/cordova/allowlist/index.html
  AssistenteJuridicoIA-debug.apk_1777826916488/AssistenteJuridicoIA-debug.apk/org/apache/cordova/allowlist/index2.html
  DevMobile-CORRIGIDO (6)/.easignore
  DevMobile-CORRIGIDO (6)/.env
  DevMobile-CORRIGIDO (6)/.env.example
  DevMobile-CORRIGIDO (6)/.gitignore
  DevMobile-CORRIGIDO (6)/.replit-artifact/artifact.toml
  DevMobile-CORRIGIDO (6)/app.json
  DevMobile-CORRIGIDO (6)/app/(tabs)/_layout.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/ai.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/editor.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/index.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/plugins.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/pwa.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/settings.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/tasks.tsx
  DevMobile-CORRIGIDO (6)/app/(tabs)/terminal.tsx
  DevMobile-CORRIGIDO (6)/app/+not-found.tsx
  DevMobile-CORRIGIDO (6)/app/_layout.tsx
  DevMobile-CORRIGIDO (6)/babel.config.js
  DevMobile-CORRIGIDO (6)/components/AIChat.tsx
  DevMobile-CORRIGIDO (6)/components/AIMemoryModal.tsx
  DevMobile-CORRIGIDO (6)/components/APKBuilderModal.tsx
  DevMobile-CORRIGIDO (6)/components/CampoLivreModal.tsx
  DevMobile-CORRIGIDO (6)/components/CheckpointsModal.tsx
  DevMobile-CORRIGIDO (6)/components/CodeEditor.tsx
  DevMobile-CORRIGIDO (6)/components/CombinarAppsModal.tsx
  DevMobile-CORRIGIDO (6)/components/ErrorBoundary.tsx
  DevMobile-CORRIGIDO (6)/components/ErrorFallback.tsx
  DevMobile-CORRIGIDO (6)/components/FileSidebar.tsx
  DevMobile-CORRIGIDO (6)/components/FloatingAI.tsx
  DevMobile-CORRIGIDO (6)/components/GitHubModal.tsx
  DevMobile-CORRIGIDO (6)/components/HtmlPlayground.tsx
  DevMobile-CORRIGIDO (6)/components/KeyboardAwareScrollViewCompat.tsx
  DevMobile-CORRIGIDO (6)/components/LibrarySearch.tsx
  DevMobile-CORRIGIDO (6)/components/ManualModal.tsx
  DevMobile-CORRIGIDO (6)/components/MessageRenderer.tsx
  DevMobile-CORRIGIDO (6)/components/MonacoEditor.tsx
  DevMobile-CORRIGIDO (6)/components/PreviewPanel.tsx
  DevMobile-CORRIGIDO (6)/components/ProjectOverviewModal.tsx
  DevMobile-CORRIGIDO (6)/components/ProjectPlanModal.tsx
  DevMobile-CORRIGIDO (6)/components/SystemStatus.tsx
  DevMobile-CORRIGIDO (6)/components/Terminal.tsx
  DevMobile-CORRIGIDO (6)/components/VSCodeView.tsx
  DevMobile-CORRIGIDO (6)/components/VSCodeWebModal.tsx
  DevMobile-CORRIGIDO (6)/components/VoiceAssistant.tsx
  DevMobile-CORRIGIDO (6)/constants/colors.ts
  DevMobile-CORRIGIDO (6)/context/AppContext.tsx
  DevMobile-CORRIGIDO (6)/data/featuredProjects.ts
  DevMobile-CORRIGIDO (6)/eas.json
  DevMobile-CORRIGIDO (6)/expo-env.d.ts
  DevMobile-CORRIGIDO (6)/hooks/useApiBase.ts
  DevMobile-CORRIGIDO (6)/hooks/useColors.ts
  DevMobile-CORRIGIDO (6)/metro.config.js
  DevMobile-CORRIGIDO (6)/package.json
  DevMobile-CORRIGIDO (6)/plugins/withTermuxIntent.js
  DevMobile-CORRIGIDO (6)/server/serve.js
  DevMobile-CORRIGIDO (6)/server/templates/landing-page.html
  DevMobile-CORRIGIDO (6)/services/apiBase.ts
  DevMobile-CORRIGIDO (6)/services/githubService.ts
  DevMobile-CORRIGIDO (6)/services/localSQLite.ts
  DevMobile-CORRIGIDO (6)/services/previewService.ts
  DevMobile-CORRIGIDO (6)/services/runtimeMode.ts
  DevMobile-CORRIGIDO (6)/services/storageService.ts
  DevMobile-CORRIGIDO (6)/services/terminalService.ts
  DevMobile-CORRIGIDO (6)/tsconfig.json
  DevMobile-CORRIGIDO (6)/utils/projectPlan.ts
  DevMobile-CORRIGIDO (6)/utils/zipUtils.ts
  SK-Code-Editor-APK-pronto (5)/assets/index-D5g-sV5e.css
  SK-Code-Editor-APK-pronto (5)/assets/vendor-fs-BeamS8bA.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-highlight-Bu9o_ty_.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-highlight-DOOs4slz.css
  SK-Code-Editor-APK-pronto (5)/assets/vendor-lucide-NZRTcJIq.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-markdown-CM6-e2rl.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-misc-COW7C1HQ.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-monaco-CS9w1txC.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-react-D8m3Uig9.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-react-dom-CdNyEL3a.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-webcontainer-BPoiPq3D.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-xterm-CT6HrMBF.js
  SK-Code-Editor-APK-pronto (5)/assets/vendor-xterm-DDGTF8rc.css
  SK-Code-Editor-APK-pronto (5)/favicon.svg
  SK-Code-Editor-APK-pronto (5)/manifest.json
  SK-Code-Editor-APK-pronto (5)/sw.js
  SK-Code-Editor-Completo (15)/MANUAL-COMPLETO.md
  SK-Code-Editor-Completo (15)/metodo-1-EAS/App.tsx
  SK-Code-Editor-Completo (15)/metodo-1-EAS/INSTRUCOES.md
  SK-Code-Editor-Completo (15)/metodo-1-EAS/app.json
  SK-Code-Editor-Completo (15)/metodo-1-EAS/eas.json
  SK-Code-Editor-Completo (15)/metodo-1-EAS/package.json
  SK-Code-Editor-Completo (15)/metodo-2-Capacitor/INSTRUCOES.md
  SK-Code-Editor-Completo (15)/metodo-2-Capacitor/capacitor.config.json
  SK-Code-Editor-Completo (15)/metodo-2-Capacitor/package.json
  SK-Code-Editor-Completo (15)/metodo-3-GitHub-Actions/.github/workflows/build-apk.yml
  SK-Code-Editor-Completo (15)/metodo-3-GitHub-Actions/INSTRUCOES.md
  SK-Code-Editor-Completo (15)/metodo-3-GitHub-Actions/capacitor.config.json
  SK-Code-Editor-Completo (15)/metodo-3-GitHub-Actions/package.json
  SK-Code-Editor-Completo (15)/web-app/LEIA-ME-PARA-PROGRAMADOR.md
  SK-Code-Editor-Completo (15)/web-app/MANUAL-SK-CODE-EDITOR.md
  SK-Code-Editor-Completo (15)/web-app/assets/index-D5g-sV5e.css
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-fs-BeamS8bA.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-highlight-Bu9o_ty_.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-highlight-DOOs4slz.css
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-lucide-NZRTcJIq.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-markdown-CM6-e2rl.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-misc-COW7C1HQ.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-monaco-CS9w1txC.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-react-D8m3Uig9.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-react-dom-CdNyEL3a.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-webcontainer-BPoiPq3D.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-xterm-CT6HrMBF.js
  SK-Code-Editor-Completo (15)/web-app/assets/vendor-xterm-DDGTF8rc.css
  SK-Code-Editor-Completo (15)/web-app/favicon.svg
  SK-Code-Editor-Completo (15)/web-app/guia-completo-apk.md
  SK-Code-Editor-Completo (15)/web-app/index.html
  SK-Code-Editor-Completo (15)/web-app/manifest.json
  SK-Code-Editor-Completo (15)/web-app/manual-dev.md
  SK-Code-Editor-Completo (15)/web-app/sw.js
  SKCodeEditor-LIMPO (7) (2)/.replit-artifact/artifact.toml
  SKCodeEditor-LIMPO (7) (2)/SYSTEM_DOCS.md
  SKCodeEditor-LIMPO (7) (2)/components.json
  SKCodeEditor-LIMPO (7) (2)/index.html
  SKCodeEditor-LIMPO (7) (2)/package.json
  SKCodeEditor-LIMPO (7) (2)/public/MANUAL-SK-CODE-EDITOR.md
  SKCodeEditor-LIMPO (7) (2)/public/favicon.svg
  SKCodeEditor-LIMPO (7) (2)/public/guia-completo-apk.md
  SKCodeEditor-LIMPO (7) (2)/public/manifest.json
  SKCodeEditor-LIMPO (7) (2)/public/manual-dev.md
  SKCodeEditor-LIMPO (7) (2)/public/sw.js
  SKCodeEditor-LIMPO (7) (2)/src/App.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/AIChat.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/AssistenteJuridico.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/CampoLivre.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/CodeEditor.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/CombinarApps.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/DriveBackupPanel.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/EditorLayout.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/FileTree.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/GitHubPanel.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/Manual.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/PackageSearch.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/Preview.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/QuickPrompt.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/RealTerminal.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/StreamTerminal.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/SystemStatusPanel.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/TemplateSelector.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/Terminal.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/VoiceCard.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/VoiceMode.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/WebContainerTerminal.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/accordion.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/alert-dialog.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/alert.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/aspect-ratio.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/avatar.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/badge.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/breadcrumb.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/button-group.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/button.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/calendar.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/card.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/carousel.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/chart.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/checkbox.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/collapsible.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/command.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/context-menu.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/dialog.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/drawer.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/dropdown-menu.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/empty.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/field.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/form.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/hover-card.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/input-group.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/input-otp.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/input.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/item.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/kbd.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/label.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/menubar.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/navigation-menu.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/pagination.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/popover.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/progress.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/radio-group.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/resizable.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/scroll-area.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/select.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/separator.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/sheet.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/sidebar.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/skeleton.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/slider.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/sonner.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/spinner.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/switch.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/table.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/tabs.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/textarea.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/toast.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/toaster.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/toggle-group.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/toggle.tsx
  SKCodeEditor-LIMPO (7) (2)/src/components/ui/tooltip.tsx
  SKCodeEditor-LIMPO (7) (2)/src/hooks/use-mobile.tsx
  SKCodeEditor-LIMPO (7) (2)/src/hooks/use-toast.ts
  SKCodeEditor-LIMPO (7) (2)/src/index.css
  SKCodeEditor-LIMPO (7) (2)/src/lib/ai-service.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/github-service.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/projects.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/store.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/templates.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/tts-service.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/utils.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/virtual-fs.ts
  SKCodeEditor-LIMPO (7) (2)/src/lib/zip-service.ts
  SKCodeEditor-LIMPO (7) (2)/src/main.tsx
  SKCodeEditor-LIMPO (7) (2)/tsconfig.json
  SKCodeEditor-LIMPO (7) (2)/vite.config.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/.github/workflows/build-apk.yml
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/.github/workflows/deploy.yml
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/.replit-artifact/artifact.toml
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/INSTALAR.md
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/SYSTEM_DOCS.md
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/components.json
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/index.html
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/package-standalone.json
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/package.json
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/public/MANUAL-SK-CODE-EDITOR.md
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/public/favicon.svg
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/public/guia-completo-apk.md
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/public/manifest.json
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/public/manual-dev.md
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/public/sw.js
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/App.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/AIChat.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/APKBuilderPanel.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/AssistenteJuridico.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/CampoLivre.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/CodeEditor.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/CombinarApps.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/DriveBackupPanel.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/EditorLayout.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/FileTree.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/GitHubPanel.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/Manual.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/PackageSearch.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/Preview.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/QuickPrompt.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/RealTerminal.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/StreamTerminal.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/SystemStatusPanel.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/TemplateSelector.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/Terminal.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/VSCodeWebPanel.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/VoiceCard.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/VoiceMode.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/WebContainerTerminal.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/accordion.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/alert-dialog.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/alert.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/aspect-ratio.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/avatar.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/badge.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/breadcrumb.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/button-group.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/button.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/calendar.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/card.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/carousel.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/chart.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/checkbox.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/collapsible.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/command.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/context-menu.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/dialog.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/drawer.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/dropdown-menu.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/empty.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/field.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/form.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/hover-card.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/input-group.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/input-otp.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/input.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/item.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/kbd.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/label.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/menubar.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/navigation-menu.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/pagination.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/popover.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/progress.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/radio-group.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/resizable.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/scroll-area.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/select.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/separator.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/sheet.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/sidebar.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/skeleton.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/slider.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/sonner.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/spinner.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/switch.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/table.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/tabs.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/textarea.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/toast.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/toaster.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/toggle-group.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/toggle.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/components/ui/tooltip.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/hooks/use-mobile.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/hooks/use-toast.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/index.css
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/ai-service.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/github-service.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/projects.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/store.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/templates.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/tts-service.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/utils.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/virtual-fs.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/lib/zip-service.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/src/main.tsx
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/tsconfig.json
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/vite.config.standalone.ts
  SKCodeEditor-STANDALONE (15)/artifacts/code-editor/vite.config.ts
  apk-builder-android/.github/workflows/build-apk.yml
  apk-builder-android/README.md
  apk-builder-android/android/app/build.gradle
  apk-builder-android/android/app/src/main/AndroidManifest.xml
  apk-builder-android/android/app/src/main/assets/public/assets/index-yJIu36Xs.css
  apk-builder-android/android/app/src/main/assets/public/favicon.svg
  apk-builder-android/android/app/src/main/assets/public/icon-192.svg
  apk-builder-android/android/app/src/main/assets/public/icon-512.svg
  apk-builder-android/android/app/src/main/assets/public/index.html
  apk-builder-android/android/app/src/main/assets/public/manifest.json
  apk-builder-android/android/app/src/main/assets/public/sw.js
  apk-builder-android/android/app/src/main/java/br/com/maikoncaldeira/apkbuilder/MainActivity.java
  apk-builder-android/android/app/src/main/res/values/strings.xml
  apk-builder-android/android/app/src/main/res/values/styles.xml
  apk-builder-android/android/build.gradle
  apk-builder-android/android/gradle.properties
  apk-builder-android/android/settings.gradle
  apk-builder-android/capacitor.config.ts
  apk-builder-android/package.json
  apk-builder-source/assets/Terminal-CLVdV-R2.js
  apk-builder-source/assets/Terminal-G5OQeJvU.css
  apk-builder-source/assets/index-BJuPNGJb.css
  apk-builder-source/favicon.svg
  apk-builder-source/icon-192.svg
  apk-builder-source/icon-512.svg
  apk-builder-source/index.html
  apk-builder-source/manifest.json
  apk-builder-source/sw.js
  assistente-juridico-completo/artifacts/mobile/.gitignore
  assistente-juridico-completo/artifacts/mobile/.npmrc
  assistente-juridico-completo/artifacts/mobile/.replit-artifact/artifact.toml
  assistente-juridico-completo/artifacts/mobile/SQL_SETUP.sql
  assistente-juridico-completo/artifacts/mobile/app.json
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/_layout.tsx
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/campo-livre.tsx
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/comunicacoes.tsx
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/config.tsx
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/index.tsx
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/pdpj.tsx
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/playground.tsx
  assistente-juridico-completo/artifacts/mobile/app/(tabs)/tramitacao.tsx
  assistente-juridico-completo/artifacts/mobile/app/+not-found.tsx
  assistente-juridico-completo/artifacts/mobile/app/_layout.tsx
  assistente-juridico-completo/artifacts/mobile/app/config-inicial.tsx
  assistente-juridico-completo/artifacts/mobile/app/login.tsx
  assistente-juridico-completo/artifacts/mobile/babel.config.js
  assistente-juridico-completo/artifacts/mobile/components/CodeBlock.tsx
  assistente-juridico-completo/artifacts/mobile/components/ErrorBoundary.tsx
  assistente-juridico-completo/artifacts/mobile/components/ErrorFallback.tsx
  assistente-juridico-completo/artifacts/mobile/components/HtmlViewer.tsx
  assistente-juridico-completo/artifacts/mobile/components/KeyboardAwareScrollViewCompat.tsx
  assistente-juridico-completo/artifacts/mobile/components/ResultCard.tsx
  assistente-juridico-completo/artifacts/mobile/components/SideMenu.tsx
  assistente-juridico-completo/artifacts/mobile/components/StatusModal.tsx
  assistente-juridico-completo/artifacts/mobile/constants/colors.ts
  assistente-juridico-completo/artifacts/mobile/constants/prompts.ts
  assistente-juridico-completo/artifacts/mobile/eas.json
  assistente-juridico-completo/artifacts/mobile/expo-env.d.ts
  assistente-juridico-completo/artifacts/mobile/hooks/useColors.ts
  assistente-juridico-completo/artifacts/mobile/metro.config.js
  assistente-juridico-completo/artifacts/mobile/package.json
  assistente-juridico-completo/artifacts/mobile/scripts/build.js
  assistente-juridico-completo/artifacts/mobile/server/serve.js
  assistente-juridico-completo/artifacts/mobile/server/templates/landing-page.html
  assistente-juridico-completo/artifacts/mobile/services/ai.ts
  assistente-juridico-completo/artifacts/mobile/services/fileImport.ts
  assistente-juridico-completo/artifacts/mobile/services/neon.ts
  assistente-juridico-completo/artifacts/mobile/services/storage.ts
  assistente-juridico-completo/artifacts/mobile/services/voice.ts
  assistente-juridico-completo/artifacts/mobile/tsconfig.json
  devmobile-fix/devmobile-fix/.easignore
  devmobile-fix/devmobile-fix/.env
  devmobile-fix/devmobile-fix/.env.example
  devmobile-fix/devmobile-fix/.github/workflows/build-apk-eas.yml
  devmobile-fix/devmobile-fix/.github/workflows/build-apk-local.yml
  devmobile-fix/devmobile-fix/.gitignore
  devmobile-fix/devmobile-fix/.npmrc
  devmobile-fix/devmobile-fix/.replit-artifact/artifact.toml
  devmobile-fix/devmobile-fix/COMO-BUILDAR-APK.md
  devmobile-fix/devmobile-fix/GERAR-APK.md
  devmobile-fix/devmobile-fix/PLANO.md
  devmobile-fix/devmobile-fix/app.json
  devmobile-fix/devmobile-fix/app/(tabs)/_layout.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/ai.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/editor.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/index.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/plugins.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/pwa.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/settings.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/tasks.tsx
  devmobile-fix/devmobile-fix/app/(tabs)/terminal.tsx
  devmobile-fix/devmobile-fix/app/+not-found.tsx
  devmobile-fix/devmobile-fix/app/_layout.tsx
  devmobile-fix/devmobile-fix/babel.config.js
  devmobile-fix/devmobile-fix/components/AIChat.tsx
  devmobile-fix/devmobile-fix/components/AIMemoryModal.tsx
  devmobile-fix/devmobile-fix/components/APKBuilderModal.tsx
  devmobile-fix/devmobile-fix/components/CampoLivreModal.tsx
  devmobile-fix/devmobile-fix/components/CheckpointsModal.tsx
  devmobile-fix/devmobile-fix/components/CodeEditor.tsx
  devmobile-fix/devmobile-fix/components/CombinarAppsModal.tsx
  devmobile-fix/devmobile-fix/components/ErrorBoundary.tsx
  devmobile-fix/devmobile-fix/components/ErrorFallback.tsx
  devmobile-fix/devmobile-fix/components/FileSidebar.tsx
  devmobile-fix/devmobile-fix/components/FloatingAI.tsx
  devmobile-fix/devmobile-fix/components/GitHubModal.tsx
  devmobile-fix/devmobile-fix/components/HtmlPlayground.tsx
  devmobile-fix/devmobile-fix/components/KeyboardAwareScrollViewCompat.tsx
  devmobile-fix/devmobile-fix/components/LibrarySearch.tsx
  devmobile-fix/devmobile-fix/components/ManualModal.tsx
  devmobile-fix/devmobile-fix/components/MessageRenderer.tsx
  devmobile-fix/devmobile-fix/components/MonacoEditor.tsx
  devmobile-fix/devmobile-fix/components/PreviewPanel.tsx
  devmobile-fix/devmobile-fix/components/ProjectOverviewModal.tsx
  devmobile-fix/devmobile-fix/components/ProjectPlanModal.tsx
  devmobile-fix/devmobile-fix/components/SystemStatus.tsx
  devmobile-fix/devmobile-fix/components/Terminal.tsx
  devmobile-fix/devmobile-fix/components/VSCodeView.tsx
  devmobile-fix/devmobile-fix/components/VSCodeWebModal.tsx
  devmobile-fix/devmobile-fix/components/VoiceAssistant.tsx
  devmobile-fix/devmobile-fix/constants/colors.ts
  devmobile-fix/devmobile-fix/context/AppContext.tsx
  devmobile-fix/devmobile-fix/data/featuredProjects.ts
  devmobile-fix/devmobile-fix/eas.json
  devmobile-fix/devmobile-fix/expo-env.d.ts
  devmobile-fix/devmobile-fix/hooks/useApiBase.ts
  devmobile-fix/devmobile-fix/hooks/useColors.ts
  devmobile-fix/devmobile-fix/metro.config.js
  devmobile-fix/devmobile-fix/package.json
  devmobile-fix/devmobile-fix/plugins/withTermuxIntent.js
  devmobile-fix/devmobile-fix/server/serve.js
  devmobile-fix/devmobile-fix/server/templates/landing-page.html
  devmobile-fix/devmobile-fix/services/apiBase.ts
  devmobile-fix/devmobile-fix/services/githubService.ts
  devmobile-fix/devmobile-fix/services/localSQLite.ts
  devmobile-fix/devmobile-fix/services/previewService.ts
  devmobile-fix/devmobile-fix/services/runtimeMode.ts
  devmobile-fix/devmobile-fix/services/storageService.ts
  devmobile-fix/devmobile-fix/services/terminalService.ts
  devmobile-fix/devmobile-fix/tsconfig.json
  devmobile-fix/devmobile-fix/utils/projectPlan.ts
  devmobile-fix/devmobile-fix/utils/zipUtils.ts
  manuais 1/COMO-BUILDAR-APK.md
  manuais 1/GERAR-APK.md
  manuais 1/LEIA-ME-PARA-PROGRAMADOR.md
  manuais 1/MANUAL-SK-CODE-EDITOR (2).md
  manuais 1/MANUAL-SK-CODE-EDITOR.md
  manuais 1/MANUAL_APK (2).md
  manuais 1/MANUAL_BUILD_APK (3).md
  manuais 1/PLANO.md
  manuais 1/build-apk-local.yml.txt
  manuais 1/build-apk.yml (1).txt
  manuais 1/build-apk.yml (2).txt
  manuais 1/build-apk.yml.txt
  manuais 1/guia-completo-apk (2).md
  manuais 1/guia-completo-apk (4).md
  manuais 1/guia-completo-apk.md
  manuais 1/index.html
  manuais 1/manual-dev (2).md
  manuais 1/manual-dev (3).md
  manuais 1/manual-dev.md
  sk-code-editor-completo (13)/artifacts/api-server/package.json
  sk-code-editor-completo (13)/artifacts/api-server/src/app.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/index.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/lib/logger.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/ai-chat.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/ai-forward.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/config.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/db.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/drive.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/exec.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/github.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/health.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/index.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/legal-ai.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/pages.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/proxy.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/search.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/twa.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/upload.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/voice.ts
  sk-code-editor-completo (13)/artifacts/api-server/src/routes/workspace.ts
  sk-code-editor-completo (13)/artifacts/api-server/tsconfig.json
  sk-code-editor-completo (13)/artifacts/code-editor/index.html
  sk-code-editor-completo (13)/artifacts/code-editor/package.json
  sk-code-editor-completo (13)/artifacts/code-editor/public/MANUAL-SK-CODE-EDITOR.md
  sk-code-editor-completo (13)/artifacts/code-editor/public/favicon.svg
  sk-code-editor-completo (13)/artifacts/code-editor/public/guia-completo-apk.md
  sk-code-editor-completo (13)/artifacts/code-editor/public/manifest.json
  sk-code-editor-completo (13)/artifacts/code-editor/public/manual-dev.md
  sk-code-editor-completo (13)/artifacts/code-editor/public/sw.js
  sk-code-editor-completo (13)/artifacts/code-editor/src/App.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/AIChat.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/AssistenteJuridico.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/CampoLivre.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/CodeEditor.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/CombinarApps.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/DriveBackupPanel.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/EditorLayout.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/FileTree.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/GitHubPanel.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/Manual.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/PackageSearch.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/Preview.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/QuickPrompt.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/RealTerminal.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/StreamTerminal.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/SystemStatusPanel.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/TemplateSelector.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/Terminal.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/VoiceCard.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/VoiceMode.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/WebContainerTerminal.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/accordion.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/alert-dialog.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/alert.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/aspect-ratio.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/avatar.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/badge.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/breadcrumb.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/button-group.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/button.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/calendar.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/card.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/carousel.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/chart.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/checkbox.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/collapsible.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/command.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/context-menu.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/dialog.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/drawer.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/dropdown-menu.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/empty.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/field.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/form.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/hover-card.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/input-group.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/input-otp.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/input.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/item.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/kbd.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/label.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/menubar.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/navigation-menu.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/pagination.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/popover.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/progress.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/radio-group.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/resizable.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/scroll-area.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/select.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/separator.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/sheet.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/sidebar.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/skeleton.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/slider.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/sonner.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/spinner.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/switch.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/table.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/tabs.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/textarea.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/toast.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/toaster.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/toggle-group.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/toggle.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/components/ui/tooltip.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/hooks/use-mobile.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/src/hooks/use-toast.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/index.css
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/ai-service.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/github-service.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/projects.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/store.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/templates.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/tts-service.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/utils.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/virtual-fs.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/lib/zip-service.ts
  sk-code-editor-completo (13)/artifacts/code-editor/src/main.tsx
  sk-code-editor-completo (13)/artifacts/code-editor/tsconfig.json
  sk-code-editor-completo (13)/artifacts/code-editor/vite.config.ts
  sk-code-editor-completo (13)/package.json
  sk-code-editor-completo (13)/pnpm-workspace.yaml
  sk-code-editor-github (1)/.github/workflows/build-apk.yml
  sk-code-editor-github (1)/.github/workflows/deploy.yml
  sk-code-editor-github (1)/dist-pronto/assets/index-tHCXXaAl.css
  sk-code-editor-github (1)/dist-pronto/favicon.svg
  sk-code-editor-github (1)/dist-pronto/index.html
  sk-code-editor-github (1)/dist-pronto/manifest.json
  sk-code-editor-github (1)/dist-pronto/sw.js
  sk-editor-source (1)/SK-EDITOR-README.md
  sk-editor-source (1)/artifacts/api-server/.replit-artifact/artifact.toml
  sk-editor-source (1)/artifacts/api-server/build.mjs
  sk-editor-source (1)/artifacts/api-server/package.json
  sk-editor-source (1)/artifacts/api-server/pty_helper.c
  sk-editor-source (1)/artifacts/api-server/src/app.ts
  sk-editor-source (1)/artifacts/api-server/src/index.ts
  sk-editor-source (1)/artifacts/api-server/src/lib/logger.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/ai-chat.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/ai-forward.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/config.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/db.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/drive.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/exec.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/github.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/health.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/index.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/legal-ai.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/proxy.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/search.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/twa.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/upload.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/voice.ts
  sk-editor-source (1)/artifacts/api-server/src/routes/workspace.ts
  sk-editor-source (1)/artifacts/api-server/tsconfig.json
  sk-editor-source (1)/artifacts/code-editor/.replit-artifact/artifact.toml
  sk-editor-source (1)/artifacts/code-editor/SYSTEM_DOCS.md
  sk-editor-source (1)/artifacts/code-editor/components.json
  sk-editor-source (1)/artifacts/code-editor/index.html
  sk-editor-source (1)/artifacts/code-editor/package.json
  sk-editor-source (1)/artifacts/code-editor/public/favicon.svg
  sk-editor-source (1)/artifacts/code-editor/public/guia-completo-apk.md
  sk-editor-source (1)/artifacts/code-editor/public/manifest.json
  sk-editor-source (1)/artifacts/code-editor/public/sw.js
  sk-editor-source (1)/artifacts/code-editor/src/App.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/AIChat.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/AssistenteJuridico.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/CampoLivre.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/CodeEditor.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/CombinarApps.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/DriveBackupPanel.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/EditorLayout.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/FileTree.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/GitHubPanel.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/Manual.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/PackageSearch.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/Preview.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/QuickPrompt.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/RealTerminal.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/StreamTerminal.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/SystemStatusPanel.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/TemplateSelector.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/Terminal.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/VoiceCard.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/VoiceMode.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/WebContainerTerminal.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/accordion.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/alert-dialog.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/alert.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/aspect-ratio.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/avatar.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/badge.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/breadcrumb.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/button-group.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/button.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/calendar.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/card.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/carousel.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/chart.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/checkbox.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/collapsible.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/command.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/context-menu.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/dialog.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/drawer.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/dropdown-menu.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/empty.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/field.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/form.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/hover-card.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/input-group.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/input-otp.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/input.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/item.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/kbd.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/label.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/menubar.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/navigation-menu.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/pagination.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/popover.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/progress.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/radio-group.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/resizable.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/scroll-area.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/select.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/separator.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/sheet.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/sidebar.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/skeleton.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/slider.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/sonner.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/spinner.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/switch.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/table.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/tabs.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/textarea.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/toast.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/toaster.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/toggle-group.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/toggle.tsx
  sk-editor-source (1)/artifacts/code-editor/src/components/ui/tooltip.tsx
  sk-editor-source (1)/artifacts/code-editor/src/hooks/use-mobile.tsx
  sk-editor-source (1)/artifacts/code-editor/src/hooks/use-toast.ts
  sk-editor-source (1)/artifacts/code-editor/src/index.css
  sk-editor-source (1)/artifacts/code-editor/src/lib/ai-service.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/github-service.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/projects.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/store.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/templates.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/tts-service.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/utils.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/virtual-fs.ts
  sk-editor-source (1)/artifacts/code-editor/src/lib/zip-service.ts
  sk-editor-source (1)/artifacts/code-editor/src/main.tsx
  sk-editor-source (1)/artifacts/code-editor/tsconfig.json
  sk-editor-source (1)/artifacts/code-editor/vite.config.ts
  sk-editor-source (1)/lib/api-client-react/package.json
  sk-editor-source (1)/lib/api-client-react/src/custom-fetch.ts
  sk-editor-source (1)/lib/api-client-react/src/generated/api.schemas.ts
  sk-editor-source (1)/lib/api-client-react/src/generated/api.ts
  sk-editor-source (1)/lib/api-client-react/src/index.ts
  sk-editor-source (1)/lib/api-client-react/tsconfig.json
  sk-editor-source (1)/lib/api-spec/openapi.yaml
  sk-editor-source (1)/lib/api-spec/orval.config.ts
  sk-editor-source (1)/lib/api-spec/package.json
  sk-editor-source (1)/lib/api-zod/package.json
  sk-editor-source (1)/lib/api-zod/src/generated/api.ts
  sk-editor-source (1)/lib/api-zod/src/generated/types/healthStatus.ts
  sk-editor-source (1)/lib/api-zod/src/generated/types/index.ts
  sk-editor-source (1)/lib/api-zod/src/index.ts
  sk-editor-source (1)/lib/api-zod/tsconfig.json
  sk-editor-source (1)/lib/db/drizzle.config.ts
  sk-editor-source (1)/lib/db/package.json
  sk-editor-source (1)/lib/db/src/index.ts
  sk-editor-source (1)/lib/db/src/schema/index.ts
  sk-editor-source (1)/lib/db/tsconfig.json
  sk-editor-source (1)/package.json
  sk-editor-source (1)/pnpm-workspace.yaml
  sk-editor-source (1)/replit.md
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/.gitignore
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/README.md
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/files.js
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/index.html
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/javascript.svg
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/loading.html
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/main.js
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/package.json
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/style.css
  stackblitz-webcontainer-api-starter-98uftjjc_1778301771269 (2)/vite.config.js
  workflows-corrigidos/workflows/DevMobile-build-apk-eas.yml
  workflows-corrigidos/workflows/DevMobile-build-apk-local.yml
  workflows-corrigidos/workflows/LEIA-ME.txt
  workflows-corrigidos/workflows/SKCodeEditor-build-apk.yml
  workflows-corrigidos/workflows/SKCodeEditor-deploy.yml
  workflows-corrigidos/workflows/build-apk-CORRIGIDO-repos-existentes.yml
```

---

*Plano gerado pelo SK Code Editor — 09/05/2026, 13:08:13*