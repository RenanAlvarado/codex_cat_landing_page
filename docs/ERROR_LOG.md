# Registro de erros técnicos

Registre aqui problemas relevantes com evidência e sem incluir segredos, tokens, credenciais ou conteúdo de arquivos `.env`. Não crie entradas para mensagens rotineiras.

## 2026-10-10 — Scaffold Vite bloqueado pelo cache npm

- **Etapa:** criação inicial do projeto.
- **Comando:** `npm create vite@latest cat-landing-page -- --template react-ts`.
- **Mensagem original relevante:** `npm error code EPERM`; `npm error syscall open`; `npm error path C:\Users\renat\AppData\Local\npm-cache\_cacache\tmp\***`; `npm error FetchError: Invalid response body while trying to fetch https://registry.npmjs.org/create-vite: EPERM: operation not permitted, open ...`; `The operation was rejected by your operating system.` O npm também informou que não conseguiu escrever o log em `C:\Users\renat\AppData\Local\npm-cache\_logs`.
- **Causa:** falha de permissão ao abrir/escrever arquivo temporário no cache local do npm. Não há evidência de falha de certificado TLS.
- **Diagnóstico:** o destino do projeto ainda não havia sido criado; o erro ocorreu no acesso ao cache durante a busca do pacote.
- **Solução aplicada:** repetição do mesmo comando com permissão aprovada para acesso ao cache local, sem mudar configuração TLS nem ignorar erros de certificado.
- **Resultado:** o Vite informou `Done` e exibiu os próximos passos `npm install` e `npm run dev`. Dependências foram instaladas posteriormente com sucesso.
- **Alternativas:** não foram tentadas.

## 2026-10-10 — Vite recebeu `spawn EPERM` no build restrito

- **Etapa:** validação de produção.
- **Comando:** `npm run build`.
- **Mensagem original relevante:** `failed to load config from ...\vite.config.ts`; `Error: Build failed with 1 error: [plugin externalize-deps] Error: spawn EPERM`. A pilha aponta para `optimizeSafeRealPathSync` e resolução de caminhos no Vite/Rolldown.
- **Causa:** não confirmada. O erro apareceu ao iniciar um processo auxiliar durante execução restrita; o sucesso na execução seguinte com permissão aprovada é compatível com bloqueio de execução pelo ambiente, mas não prova sozinho a causa.
- **Diagnóstico:** `tsc -b` foi executado antes do Vite; a repetição do build completo permitiu ao Vite carregar a configuração e finalizar.
- **Solução aplicada:** repetição de `npm run build` com permissão de execução aprovada. Nenhuma configuração TLS ou de segurança foi alterada.
- **Resultado do teste após correção:** código de saída 0; Vite 8.3.4 transformou 20 módulos, gerou os arquivos em `dist/` e terminou em 1,07 s.
- **Alternativas:** não foram tentadas.
