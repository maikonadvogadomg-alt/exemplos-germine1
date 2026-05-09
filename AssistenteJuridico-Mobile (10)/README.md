# Assistente Jurídico — App Mobile

App React Native (Expo) para processamento de peças jurídicas com IA.
Feito para Maikon Caldeira — OAB/MG 183712.

## Funcionalidades

### Consulta (tela principal)
- Corrigir Texto, Redação Jurídica, Verificar Lacunas
- Resumir, Revisar, Refinar, Linguagem Simples, Gerar Minuta, Analisar
- Ditado por voz (Whisper via Groq — gratuito)
- Importar arquivos de texto (suporte a arquivos grandes)
- Histórico de processamentos
- Trechos salvos (snippets)
- Exportar resultado

### Campo Livre
- Chat livre com a Jasmim (assistente jurídica IA)
- Detecção automática de blocos de código
- Importar arquivos para o contexto
- Exportar conversa completa
- Controle de tamanho da resposta (Conciso / Normal / Detalhado / Máximo)
- Leitura em voz das respostas

### PDPJ
- Token JWT salvo localmente no dispositivo
- Teste de conexão com o portal
- Instruções de como obter o token

### Tramitação
- Acesso rápido aos portais de consulta processual (TJMG, CNJ, STJ, STF, TRT)

### Configurações
- **Chave 1 e Chave 2**: cole qualquer chave — o provedor é detectado automaticamente
- Senha de acesso opcional (salva localmente)
- Banco Neon (opcional — para sincronizar entre dispositivos)
- Controle de voz (TTS) e velocidade

## Provedores suportados (auto-detectados pela chave)

| Prefixo | Provedor | Custo |
|---------|----------|-------|
| `gsk_...` | Groq (llama-3.3-70b) | **GRATUITO** |
| `AIza...` | Google Gemini 2.0 Flash | **GRATUITO** |
| `sk-or-...` | OpenRouter | Variado |
| `sk-ant...` | Anthropic Claude | Pago |
| `pplx-...` | Perplexity (busca web) | Pago |
| `xai-...` | xAI Grok | Pago |
| `sk-...` | OpenAI GPT-4o | Pago |

## Como instalar e gerar APK

### Requisitos
- Node.js 18+
- Conta no Expo (expo.dev)
- Conta no EAS (para gerar APK)

### Instalação
```bash
npm install
npx expo start
```

### Gerar APK (Android)
```bash
# Instalar EAS CLI
npm install -g eas-cli

# Login
eas login

# Gerar APK de preview (para instalar direto no celular)
npx eas build --platform android --profile preview

# Gerar AAB para Google Play
npx eas build --platform android --profile production
```

## Configuração do Banco Neon (opcional)

1. Acesse https://neon.tech e crie uma conta gratuita
2. Crie um projeto e copie a "Connection string"
3. Abra o arquivo `SQL_SETUP.sql` e execute no SQL Editor do Neon
4. Cole a Connection string nas Configurações do app

## Estrutura do projeto

```
app/
  (tabs)/
    index.tsx       ← Consulta principal
    campo-livre.tsx ← Chat livre
    pdpj.tsx        ← Token PDPJ
    tramitacao.tsx  ← Links de tramitação
    config.tsx      ← Configurações
  config-inicial.tsx ← Primeira abertura
  login.tsx          ← Tela de senha
src/
  services/
    ai.ts          ← Integração com IA (multi-provedor)
    storage.ts     ← AsyncStorage (salva tudo localmente)
    voice.ts       ← TTS (texto para voz)
  components/
    ResultCard.tsx  ← Card de resultado com ações
    CodeBlock.tsx   ← Bloco de código com destaque
    VoiceButton.tsx ← Botão de gravação
  constants/
    colors.ts      ← Paleta de cores
    prompts.ts     ← Prompts jurídicos
SQL_SETUP.sql      ← Script do banco Neon
```

## Observações

- **Zero dependência de servidor**: todas as chamadas de IA vão direto do celular para os provedores
- **Salvo localmente**: chaves, histórico e configurações ficam no AsyncStorage do dispositivo
- **Sem Replit**: funciona em qualquer ambiente (Expo Go, APK, Play Store)
