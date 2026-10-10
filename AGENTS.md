# Instruções do projeto

## Objetivo e tecnologias

Projeto frontend `cat-landing-page`, baseado no template React + TypeScript do Vite. Usa npm, ESLint e CSS. Mantenha a solução simples até surgir uma necessidade concreta de expansão.

## Organização

- `src/`: código da aplicação; `App.tsx` compõe a interface e `main.tsx` inicializa React.
- `src/components/`: componentes reutilizáveis, a criar quando forem necessários.
- `src/pages/`: páginas ou seções de nível de página, somente se a interface crescer o suficiente para justificá-las.
- `src/hooks/`: hooks personalizados, somente quando houver lógica reutilizável de hooks.
- `src/services/`: integrações externas, quando existirem.
- `src/types/`: tipos compartilhados, quando forem realmente compartilhados.
- `src/assets/`: recursos usados pela aplicação; `public/` contém arquivos servidos sem importação.
- `src/styles/`: estilos compartilhados, caso os estilos atuais precisem ser divididos.
- `docs/`: plano e registro de problemas técnicos relevantes.
- `.codex/skills/`: skills locais deste projeto, cada uma em sua pasta com `SKILL.md`.

Não crie diretórios vazios nem abstrações prematuras. Preserve a estrutura padrão do Vite quando ela atender à necessidade.

## Convenções de código

- Use componentes funcionais React em TypeScript e nomes claros. Componentes em `PascalCase`; hooks começam com `use` em `camelCase`; variáveis e funções em `camelCase`.
- Tipar props e dados nas fronteiras. Prefira `unknown` ou tipos específicos; não use `any` sem justificativa documentada.
- Mantenha componentes pequenos e com responsabilidade clara. Extraia lógica compartilhada apenas quando houver reutilização real.
- Siga as regras recomendadas de TypeScript e React Hooks configuradas no ESLint. Evite efeitos colaterais fora de hooks/eventos apropriados.
- Não adicione dependências, roteadores, estado global ou ferramentas sem necessidade identificada e aprovação do usuário.

## Executar e validar

- `npm run dev`: servidor de desenvolvimento.
- `npm run lint`: análise estática com ESLint.
- `npm run build`: verificação TypeScript e build de produção.
- `npm run preview`: servir localmente o build para inspeção.

Confirme os scripts no `package.json` antes de usá-los. Não declare uma validação concluída sem observar o resultado do comando.

## Alterações, dependências e segurança

- Antes de mudanças relevantes, explique quais arquivos serão alterados e por quê. Mantenha as alterações no escopo autorizado.
- Peça aprovação antes de instalar dependências, executar comandos destrutivos ou alterar arquivos fora do escopo previamente autorizado.
- Não modifique configurações globais do Windows, Node.js, npm ou Codex. Não desative TLS, não ignore erros de certificado e não contorne mecanismos de segurança.
- Não exponha nem registre segredos, tokens, credenciais ou conteúdo de `.env`. Não leia ou imprima esses arquivos sem necessidade autorizada.
- Consulte as skills locais do projeto quando forem pertinentes; não execute todas automaticamente em qualquer tarefa.
