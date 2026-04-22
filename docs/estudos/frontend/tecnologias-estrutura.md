# Estudo Front End

### tecnologias escolhidas (front-end)

- Html para estruturação das páginas
- Css para estilização e organização visual
- Javascript (puro) para lógica e manipulação do dom
- Fetch api para comunicação com o back-end

A escolha por javascript puro foi feita para evitar complexidade inicial com frameworks, permitindo maior entendimento do funcionamento básico da aplicação.

### Integração com o back-end

O back-end será desenvolvido utilizando python com flask, responsável por disponibilizar rotas que seguem o padrão de api rest.

Essas rotas irão retornar dados no formato json, que será consumido diretamente pelo front-end. a comunicação será feita por meio de requisições http, utilizando principalmente métodos como get e post.

Essa abordagem permite desacoplamento entre front-end e back-end, mesmo estando inicialmente no mesmo projeto.

### Funcionamento da comunicação

O fluxo básico da aplicação será:

- O usuário acessa a interface (html)
- O javascript executa uma requisição para o back-end (ex: /api/dados)
- O flask processa a requisição e retorna uma resposta em json
- O front-end interpreta os dados recebidos
- O interface é atualizada dinamicamente sem recarregar a página

Isso permite criar aplicações mais dinâmicas e interativas, mesmo sem o uso de frameworks modernos.

### Estrutura inicial (flask)

templates/

└── index.html

static/

├── style.css

└── script.js

### Considerações

A decisão por essa stack foi baseada na necessidade de iniciar o desenvolvimento de forma simples, compreendendo bem a comunicação entre as partes antes de adotar soluções mais complexas.

Essa abordagem também facilita manutenção, testes e futuras melhorias, permitindo que o projeto evolua de forma mais estruturada conforme novas demandas surgirem.

### Resumo do estudo

O estudo envolveu a análise de como ocorre a comunicação entre front-end e back-end, com foco no uso de apis rest e troca de dados em json.

Foram avaliadas diferentes tecnologias, considerando principalmente o nível de complexidade e adequação ao momento do projeto.

Com base nisso, foi definida uma abordagem utilizando html, css e javascript no front-end, integrados a um back-end em flask, garantindo uma base sólida para o desenvolvimento inicial.
