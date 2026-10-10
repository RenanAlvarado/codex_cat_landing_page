---
name: react-typescript
description: Use when creating or changing React components, props, hooks, or TypeScript application code in this project.
---

# React e TypeScript

## Fluxo

1. Leia o componente e seus usos próximos antes de alterar a estrutura.
2. Mantenha componentes funcionais pequenos; defina tipos de props junto ao componente, salvo quando forem compartilhados.
3. Use tipos específicos para dados e callbacks. Evite `any`; valide dados externos antes de tratá-los como tipos confiáveis.
4. Chame hooks apenas no nível superior de componentes/hooks personalizados e mantenha dependências de efeitos completas.
5. Extraia componentes, hooks e tipos compartilhados somente diante de reutilização ou complexidade real.
6. Preserve acessibilidade básica em marcação interativa: nomes acessíveis, semântica adequada e estados discerníveis.
7. Execute a validação pertinente disponível no `package.json` e relate o resultado observado.

Não introduza bibliotecas, roteamento ou estado global sem necessidade identificada e aprovação.
