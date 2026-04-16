# Estudo Front End

### tecnologias escolhidas (front-end)

- html para estruturação das páginas
- css para estilização e organização visual
- javascript (puro) para lógica e manipulação do dom
- fetch api para comunicação com o back-end

a escolha por javascript puro foi feita para evitar complexidade inicial com frameworks, permitindo maior entendimento do funcionamento básico da aplicação.

### integração com o back-end

o back-end será desenvolvido utilizando python com flask, responsável por disponibilizar rotas que seguem o padrão de api rest.

essas rotas irão retornar dados no formato json, que será consumido diretamente pelo front-end. a comunicação será feita por meio de requisições http, utilizando principalmente métodos como get e post.

essa abordagem permite desacoplamento entre front-end e back-end, mesmo estando inicialmente no mesmo projeto.

### funcionamento da comunicação

o fluxo básico da aplicação será:

- o usuário acessa a interface (html)
- o javascript executa uma requisição para o back-end (ex: /api/dados)
- o flask processa a requisição e retorna uma resposta em json
- o front-end interpreta os dados recebidos
- a interface é atualizada dinamicamente sem recarregar a página

isso permite criar aplicações mais dinâmicas e interativas, mesmo sem o uso de frameworks modernos.

### estrutura inicial (flask)

templates/

└── index.html

static/

├── style.css

└── script.js

### considerações

a decisão por essa stack foi baseada na necessidade de iniciar o desenvolvimento de forma simples, compreendendo bem a comunicação entre as partes antes de adotar soluções mais complexas.

essa abordagem também facilita manutenção, testes e futuras melhorias, permitindo que o projeto evolua de forma mais estruturada conforme novas demandas surgirem.

### resumo do estudo

o estudo envolveu a análise de como ocorre a comunicação entre front-end e back-end, com foco no uso de apis rest e troca de dados em json.

foram avaliadas diferentes tecnologias, considerando principalmente o nível de complexidade e adequação ao momento do projeto.

com base nisso, foi definida uma abordagem utilizando html, css e javascript no front-end, integrados a um back-end em flask, garantindo uma base sólida para o desenvolvimento inicial.
