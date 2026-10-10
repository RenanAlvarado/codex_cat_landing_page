# Plano de desenvolvimento

## Objetivo

Preparar a base técnica de uma landing page de gatos com React, TypeScript e Vite, mantendo uma estrutura pequena que possa crescer sem abstrações prematuras.

## Escopo inicial

- Criar o projeto nomeado `cat-landing-page` com o template oficial React + TypeScript do Vite.
- Usar npm e ESLint para análise estática, incluindo regras recomendadas para TypeScript e React Hooks.
- Documentar convenções, plano, erros relevantes e skills específicas do projeto.
- Manter o conteúdo visual inicial do template até receber requisitos para a landing page propriamente dita.
- Não adicionar roteador, gerenciamento de estado ou dependências de interface sem necessidade aprovada.

## Tecnologias e justificativas

- React + TypeScript: base declarativa e tipada para a interface.
- Vite: scaffold e servidor de desenvolvimento fornecidos pelo template oficial solicitado.
- npm: gerenciador solicitado pelo usuário.
- ESLint, `typescript-eslint` e plugin oficial `eslint-plugin-react-hooks`: análise estática JavaScript/TypeScript e regras de Hooks. O template disponível trazia Oxlint; foi substituído por ESLint para atender ao requisito explícito.
- CSS: estilos do template, sem framework adicional.

## Estrutura planejada

- `src/`: aplicação e recursos iniciais fornecidos pelo template.
- `src/components/`, `src/pages/`, `src/hooks/`, `src/services/`, `src/types/`, `src/styles/`: criar apenas quando houver conteúdo que justifique cada diretório.
- `src/assets/` e `public/`: recursos importados pela aplicação e recursos públicos, respectivamente.
- `docs/`: plano e log técnico.
- `.codex/skills/react-typescript/` e `.codex/skills/project-validation/`: instruções reutilizáveis, aplicadas conforme a tarefa.

## Etapas e estado

| Etapa | Estado | Evidência |
| --- | --- | --- |
| Inspecionar destino e apresentar plano | Concluída | Destino inexistente e diretório de trabalho vazio; aprovação recebida. |
| Criar scaffold oficial React + TypeScript | Concluída | `npm create vite@latest cat-landing-page -- --template react-ts` concluiu com sucesso. |
| Instalar dependências e configurar ESLint | Concluída | `npm install` e instalação das dependências ESLint concluíram; `npm run lint` saiu com código 0. |
| Criar instruções, documentação e skills | Concluída | `AGENTS.md`, `docs/PLAN.md`, `docs/ERROR_LOG.md` e duas skills locais criados. |
| Conferir arquivos/scripts e executar validações | Concluída | Scripts conferidos em `package.json`; lint e build terminaram com código 0. Build gerou `dist/`. |

## Critérios de conclusão e validação

- Estrutura do scaffold e nome no `package.json` conferidos.
- Scripts disponíveis conferidos no `package.json`.
- `npm run lint` e `npm run build` terminam com sucesso; resultados registrados no relatório final.
- Documentação reflete o estado observado, sem marcar validações não executadas como concluídas.

## Decisões técnicas e mudanças de direção

- O template Vite disponível já não incluía ESLint: trazia Oxlint e script `lint: oxlint`. ESLint foi adicionado por ser requisito explícito; Oxlint e sua configuração de template foram removidos para não manter dois linters.
- O scaffold inclui exemplos visuais genéricos do Vite. Eles serão preservados nesta configuração inicial; uma landing page específica requer conteúdo/requisitos visuais.
- O primeiro `npm create vite` foi bloqueado por `EPERM` ao escrever no cache npm fora da área de trabalho. Repetido com permissão aprovada, terminou com sucesso. Detalhes em `ERROR_LOG.md`.
- A primeira execução restrita do build recebeu `spawn EPERM` ao Vite iniciar um processo auxiliar. O build repetido com permissão aprovada concluiu; a causa exata do primeiro bloqueio não foi confirmada. Detalhes em `ERROR_LOG.md`.
