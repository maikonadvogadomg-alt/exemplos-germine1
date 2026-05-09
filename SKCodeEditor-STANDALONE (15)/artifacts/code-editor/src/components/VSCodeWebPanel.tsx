import { useState, useCallback } from "react";
import { X, Monitor, UploadCloud, ExternalLink, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { VirtualFileSystem } from "@/lib/virtual-fs";
import {
  loadGitHubCredentials,
  createRepo,
  pushAllFiles,
  makeRepoPublic,
} from "@/lib/github-service";

interface Props {
  open: boolean;
  onClose: () => void;
  vfs: VirtualFileSystem;
  projectName: string;
}

type Step = "idle" | "pushing" | "done" | "error";

export default function VSCodeWebPanel({ open, onClose, vfs, projectName }: Props) {
  const creds = loadGitHubCredentials();
  const hasToken = !!creds.token;

  const [repoName, setRepoName] = useState(
    projectName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || "meu-projeto"
  );
  const [step, setStep] = useState<Step>("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [vsUrl, setVsUrl] = useState("");
  const [error, setError] = useState("");

  const addLog = (msg: string) => setLogs(l => [...l, msg]);

  const handlePushAndOpen = useCallback(async () => {
    const repo = repoName.trim() || "meu-projeto";
    setStep("pushing");
    setLogs(["🚀 Iniciando envio para o GitHub…"]);
    setError("");
    setVsUrl("");

    try {
      const owner = creds.username;
      addLog(`👤 Conta: ${owner}`);

      // 1. Criar repositório
      addLog(`📁 Criando repositório "${repo}"…`);
      try {
        await createRepo(creds, repo, `${projectName} — SK Code Editor`, false);
        addLog("✅ Repositório criado.");
      } catch (e: any) {
        if (e.message?.includes("422") || e.message?.includes("already exists") || e.message?.includes("name already exists")) {
          addLog("ℹ️ Repositório já existe — usando existente.");
        } else throw e;
      }

      await makeRepoPublic(creds, owner, repo);

      // 2. Enviar arquivos
      const files = vfs.toJSON();
      const count = Object.keys(files).length;
      addLog(`📤 Enviando ${count} arquivo(s)…`);
      await pushAllFiles(creds, owner, repo, files, `${projectName} — SK Code Editor`);
      addLog("✅ Projeto enviado!");

      const url = `https://vscode.dev/github/${owner}/${repo}`;
      addLog(`💻 Abrindo: ${url}`);
      setVsUrl(url);
      setStep("done");
      window.open(url, "_blank");
    } catch (e: any) {
      setError(e.message || String(e));
      setStep("error");
    }
  }, [creds, repoName, vfs, projectName]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9990] bg-black/70" onClick={onClose} />
      <div className="fixed inset-x-0 bottom-0 z-[9999] pb-safe" onClick={e => e.stopPropagation()}>
        <div className="bg-[#0d1117] border-t border-[#30363d] rounded-t-3xl shadow-2xl flex flex-col" style={{ maxHeight: "85vh" }}>
          {/* Drag handle */}
          <div className="flex items-center justify-center pt-3 pb-1 shrink-0">
            <div className="w-10 h-1 bg-[#30363d] rounded-full" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#21262d] shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#007acc22] flex items-center justify-center">
                <Monitor size={16} className="text-[#007acc]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">Abrir no VS Code Web</p>
                <p className="text-[11px] text-gray-500">{projectName}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-white/10 text-gray-500">
              <X size={17} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-4 space-y-4">

              {/* O que é */}
              <div className="px-3 py-3 bg-[#007acc11] border border-[#007acc33] rounded-xl space-y-1.5">
                <p className="text-[12px] font-bold text-[#007acc]">VS Code completo no navegador</p>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Seu projeto vai ser enviado para o GitHub e aberto no VS Code Web — com todos os arquivos, extensões, autocomplete e terminal. É o VS Code real, no navegador.
                </p>
              </div>

              {!hasToken ? (
                /* Sem token */
                <div className="space-y-3">
                  <div className="px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl">
                    <p className="text-[12px] font-bold text-yellow-300 mb-1">⚠️ GitHub não configurado</p>
                    <p className="text-[11px] text-gray-400">Conecte o GitHub em Menu → GitHub — Clonar / Enviar para abrir com o projeto completo.</p>
                  </div>
                  <a
                    href="https://vscode.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3.5 bg-[#007acc22] border border-[#007acc44] rounded-xl hover:bg-[#007acc33] transition-colors"
                  >
                    <ExternalLink size={16} className="text-[#007acc]" />
                    <span className="text-[14px] font-bold text-[#007acc]">Abrir vscode.dev (sem projeto)</span>
                  </a>
                </div>
              ) : step === "idle" ? (
                <div className="space-y-4">
                  {/* Nome do repo */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Nome do Repositório</label>
                    <input
                      value={repoName}
                      onChange={e => setRepoName(e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""))}
                      className="w-full px-3 py-2.5 bg-[#161b22] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-[#007acc]/50"
                    />
                    <p className="text-[10px] text-gray-600">github.com/{creds.username}/{repoName}</p>
                  </div>

                  {/* Passos */}
                  <div className="px-3 py-3 bg-[#161b22] border border-[#30363d] rounded-xl space-y-2">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">O que vai acontecer:</p>
                    {[
                      "Cria ou usa o repositório GitHub",
                      `Envia todos os ${Object.keys(vfs.toJSON()).length} arquivo(s) do projeto`,
                      "Abre o VS Code Web com tudo dentro",
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#007acc22] text-[#007acc] text-[9px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        <span className="text-[12px] text-gray-400">{t}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handlePushAndOpen}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#007acc] text-white rounded-xl font-bold text-[15px] hover:bg-[#0080c5] transition-colors"
                  >
                    <UploadCloud size={17} />
                    Enviar e Abrir no VS Code
                  </button>

                  <a
                    href="https://vscode.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-gray-600 hover:text-gray-400 transition-colors py-1"
                  >
                    Abrir vscode.dev sem enviar →
                  </a>
                </div>
              ) : step === "pushing" ? (
                <div className="space-y-3">
                  <div className="bg-black/60 border border-gray-700/40 rounded-xl p-3 max-h-52 overflow-y-auto font-mono">
                    {logs.map((l, i) => <p key={i} className="text-[11px] text-[#007acc] leading-relaxed">{l}</p>)}
                    <div className="flex items-center gap-2 mt-1">
                      <Loader2 size={11} className="animate-spin text-[#007acc]" />
                      <span className="text-[11px] text-[#007acc88]">Enviando…</span>
                    </div>
                  </div>
                </div>
              ) : step === "done" ? (
                <div className="space-y-3">
                  <div className="px-3 py-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className="text-[12px] font-bold text-green-400 mb-1">✅ Projeto enviado e aberto!</p>
                    <p className="text-[11px] text-gray-400">O VS Code Web foi aberto com seu projeto completo. Se não abriu, clique abaixo.</p>
                  </div>
                  <div className="bg-black/60 border border-gray-700/40 rounded-xl p-3 max-h-32 overflow-y-auto font-mono">
                    {logs.map((l, i) => <p key={i} className="text-[11px] text-green-400 leading-relaxed">{l}</p>)}
                  </div>
                  {vsUrl && (
                    <a
                      href={vsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-3 px-4 py-3 bg-[#007acc22] border border-[#007acc44] rounded-xl hover:bg-[#007acc33] transition-colors"
                    >
                      <Monitor size={16} className="text-[#007acc] shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-[#007acc]">Abrir VS Code Web</p>
                        <p className="text-[10px] text-gray-500 truncate">{vsUrl}</p>
                      </div>
                      <ExternalLink size={13} className="text-gray-600 shrink-0" />
                    </a>
                  )}
                  <button onClick={() => { setStep("idle"); setLogs([]); }} className="w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1">
                    <RefreshCw size={11} className="inline mr-1" />Usar outro repositório
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2">
                    <AlertCircle size={13} className="text-red-400 shrink-0 mt-0.5" />
                    <p className="text-[12px] text-red-400 leading-relaxed">{error}</p>
                  </div>
                  <a
                    href="https://vscode.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#007acc22] border border-[#007acc44] rounded-xl text-[13px] font-bold text-[#007acc] hover:bg-[#007acc33] transition-colors"
                  >
                    <ExternalLink size={14} />Abrir vscode.dev assim mesmo
                  </a>
                  <button onClick={() => setStep("idle")} className="w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1">
                    Tentar novamente
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
