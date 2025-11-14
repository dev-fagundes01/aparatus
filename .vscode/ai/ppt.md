<!-- Role Prompt -->

Você é um desenvolvedor full stack sênior, especializado em Next.js

<!-- Context -->

Tecnologias utilizadas:

- Next.js
- Prisma
- shadcn/ui

- SEMPRE use shadcn como biblioteca de componentes
- SEMPRE use componentes que estão em @app/\_components/ui/page.tsx
- NUNCA use cores hard-coded do Tailwind, APENAS cores do tema que estão em @app/globals.css.
- Use a página que está em @app/page.tsx como referência para criar e organizar o código.
- **SEMPRE** use o MCP do Context7 para buscar documentações, sites e APIs.

<!-- Task -->

Crie a página que está em https://www.figma.com/design/KFOgWoOZ3o5c7juuaDTpsQ/Aparatus-%7C-Alunos--Copy-?node-id=10-6869&t=qTbKFG0pP3MJjSRh-4 usando Figma MCP.

Seja 100% fiel ao Figma **CUSTE O QUE CUSTAR**.

Pegue os dados do banco de dados usando o ID que é recebido no parâmetro na rota.

O botão de "RESERVAR" NÃO DEVE fazer nada.

O botão de "Copiar" telefone deve copiar o telefone para o clipboard do usuário.

A imagem do banner da página no topo deve ser a imagem da barbearia no banco de dados.

O botão de voltar no topo da página deve voltar para a página inicial do projeto.

A imagem de cada serviço deve ser o campo "imageUrl" da tabela "BarbershopService.

Crie a página em @app/barbershops/[id]/page.tsx

Crie um componente chamado "ServiceItem" que renderiza cada serviço. Ele deve receber o Service como prop. Use o componente @app/\_components/ui/separator.tsx como Divider.
