# Método 3 — GitHub Actions (compilação automática na nuvem)

## VANTAGEM: Não precisa instalar nada no seu computador. O GitHub compila para você.

## Passo a passo

1. **Crie uma conta grátis no GitHub:** https://github.com

2. **Crie um repositório novo:**
   - Clique em "+" → "New repository"
   - Nome: sk-code-editor (ou qualquer nome)
   - Deixe como "Public"
   - Clique "Create repository"

3. **Envie todos os arquivos desta pasta para o repositório:**
   - Opção fácil: arraste os arquivos para a página do repositório no GitHub
   - Opção avançada: use o Git

4. **Ative as Actions:**
   - Vá em Settings → Actions → General
   - Marque "Allow all actions and reusable workflows"
   - Clique Save

5. **Rode o build:**
   - Vá em Actions → "Build SK Code Editor APK"
   - Clique em "Run workflow" → "Run workflow"
   - Aguarde 10-15 minutos

6. **Baixe o APK:**
   - Clique no build que terminou (ícone verde ✅)
   - Role até "Artifacts"
   - Clique em "SK-Code-Editor-APK" para baixar

## Se der erro
Vá em Actions → clique no build com erro ❌ → clique em "build" → leia o erro em vermelho
Copie a mensagem de erro e pesquise no Google ou mostre para um programador.
