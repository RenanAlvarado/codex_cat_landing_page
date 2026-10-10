---
name: project-validation
description: Use after changing project code or configuration to inspect available npm scripts, run relevant checks, and record technical failures.
---

# Validação do projeto

## Fluxo

1. Leia `package.json` para confirmar quais scripts existem; não invente comandos.
2. Para alterações de código, execute `npm run lint` e `npm run build` quando esses scripts estiverem disponíveis e forem pertinentes.
3. Observe o código de saída e a saída integral relevante de cada comando antes de declarar o resultado.
4. Se houver falha, preserve a mensagem original relevante, investigue a causa sem presumir, e registre em `docs/ERROR_LOG.md` somente se for um problema técnico relevante.
5. Após correção, repita o comando que falhou e registre o resultado observado.
6. Atualize `docs/PLAN.md` apenas para refletir o estado real; não marque etapas sem validação como concluídas.

Não altere TLS, configurações globais, arquivos sensíveis ou dependências para fazer uma validação passar sem autorização apropriada.
