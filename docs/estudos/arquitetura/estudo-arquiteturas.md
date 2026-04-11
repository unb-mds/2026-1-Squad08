# Estudo Arquitetura de Software

# Estudar o conceito de Arquitetura de Software

> *“Arquitetura de software é a estrutura fundamental ou o esqueleto de um sistema de software, que define seus componentes, suas relações e seus princípios de projeto e evolução.”*
> 

Arquitetura de software funciona como um *“tudo em todo o lugar ao mesmo tempo”* organizado a fim de evitar o caos. E por isso é essencial destrinchar o modelo de negócio para representá-lo em software.

Além disso, a arquitetura não trata apenas da estrutura do sistema, mas também das **decisões técnicas mais importantes** que impactam diretamente atributos de qualidade, como desempenho, segurança, escalabilidade e manutenibilidade. Essas decisões costumam ser difíceis de mudar depois que o sistema já está em produção, o que torna a arquitetura uma etapa crítica do desenvolvimento.

Um padrão arquitetural é uma solução já estabelecida para desenvolvimento de softwares, sendo um modelo reutilizável para problemas já conhecidos. Esses padrões já foram estudados, testados em projetos reais e passaram por melhorias, ou seja, são soluções difundidas e aceitas no mercado. Confira algumas vantagens no uso de padrões arquiteturais:

- Maior flexibilidade e escalabilidade de software
- Facilidade de manutenção e evolução
- Segurança
- Melhor desempenho das aplicações
- Redução de custos e riscos

Por fim, a arquitetura de software também está diretamente ligada à **evolução do sistema ao longo do tempo**, permitindo que novas funcionalidades sejam adicionadas com menor impacto no que já existe. Uma boa arquitetura não é apenas a que resolve o problema atual, mas a que permite que o sistema continue saudável e sustentável no futuro.

---

# Entender a diferença entre arquitetura e design de software

## Arquitetura de Software

É sobre **como o sistema é organizado como um todo**.

Imagine um sistema de delivery (tipo iFood):

**Decisão arquitetural:**

- Ter serviços separados:
    - Usuário
    - Pedido
    - Pagamento

Você está decidindo a **estrutura do sistema.**

Além disso, arquitetura envolve decisões de alto impacto, como:

- Escolha entre padrões de arquitetura
- Tipo de comunicação (**REST, mensageria, eventos**)
- Uso de banco de dados (**relacional ou NoSQL**)
- Estratégias de **escalabilidade e disponibilidade**

Essas decisões são difíceis de mudar depois, por isso são chamadas de **decisões arquiteturalmente significativas**.

## Design de Software

É sobre **como cada parte interna é construída**.

Imagine um sistema de delivery (tipo iFood):

Decisão de Design:

- Criar uma classe `Pedido`
- Criar método `calcularTotal()`
- Usar padrão **Strategy** para cálculo de frete

Aqui você está lidando com a **implementação detalhada**.

O design também envolve:

- Estrutura de classes e objetos
- Escolha de **padrões de projeto (Design Patterns)**
- Organização de métodos e responsabilidades
- Legibilidade e manutenibilidade do código

## Analogia

- Arquitetura = planta da casa 🏠
    - Define: quantos andares, divisão dos cômodos
- Design = decoração e organização interna 🛋️
    - Define: onde fica o sofá, mesa, etc.

Uma casa mal projetada (arquitetura ruim) não se resolve só com boa decoração (design).

## Na prática

Exemplo de um jogo:

Arquitetura de Software:

- Vai ser **jogo mobile ou web?**
- Vai ter **servidor online ou offline?**
- Vai separar em:
    - sistema de login
    - sistema de partidas
    - sistema de ranking

Design de Software:

- Como funciona a classe `Player`
- Como calcular o dano
- Como organizar o código do ataque
- Quais métodos usar

## Diferença e Relação

### Diferença principal

- **Arquitetura** → visão macro (alto nível)
- **Design** → visão micro (baixo nível)

### Relação entre os dois

Arquitetura e design **não são coisas separadas**, mas sim **níveis diferentes da mesma decisão**.

- A arquitetura **define limites e regras**
- O design **preenche esses limites com implementação**

Ou seja:

> A arquitetura guia o design, e o design concretiza a arquitetura.
> 

## Erros comuns

Um erro muito comum é confundir:

- “Escolher microsserviços” → **Arquitetura**
- “Usar padrão Factory” → **Design**

Outro erro é tentar resolver problemas arquiteturais com design, por exemplo:

- Problema de escalabilidade → não se resolve só com código melhor
- Problema de organização → não se resolve só com classes bem feitas

# Pesquisar padrões arquiteturais comuns

Nessa semana vou estudar a arquitetura **monolítica**, **baseada em microsserviços**, **MVC** e **em camadas**, para não me sobrecarregar. No futuro vou estudar a arquitetura com **pipes e filters**, a **orientada a serviços**, a **client-server** e a **hexagonal**.

## **Arquitetura monolítica**

Um **sistema monolítico** é uma aplicação onde **tudo fica junto em um único bloco**:

- interface (tela)
- regras de negócio
- banco de dados

Tudo roda **no mesmo sistema** e geralmente em **um único processo**.

### Como funciona

- Todas as partes são **dependentes entre si**
- Se você muda uma coisa, pode afetar o sistema inteiro
- Normalmente é gerado **um único pacote para rodar**

### Exemplo simples

Sistema de pedidos de uma lanchonete:

- Tela (menu, pedidos, pagamento)
- Lógica (calcular preço, validar pedido)
- Banco de dados

Tudo isso está **dentro da mesma aplicação**

### Tipos de monolito

Segundo Sam Newman, existem 3 tipos:

- **Monolito simples** → tudo junto em um único processo
- **Monolito modular** → dividido em módulos (ex: pedidos, pagamento), mas ainda é um sistema único
- **Monolito distribuído** → partes separadas, mas muito dependentes (pode virar bagunça)

### Vantagens

- Mais **simples de desenvolver**
- **Rápido para começar** (ótimo para projetos pequenos)
- Fácil de fazer deploy (um único sistema)

### Desvantagens

- Difícil de escalar
- Mudanças podem quebrar outras partes
- Um erro pode derrubar tudo (ponto único de falha)

### Conclusão

- Simples no início
- Complica quando cresce

## **Arquitetura baseada em microsserviços**

Microsserviços são uma arquitetura onde o sistema é dividido em **vários serviços pequenos e independentes**, cada um responsável por uma funcionalidade.

### Como funciona

- Cada serviço é **independente**
- Cada um pode ter seu **próprio banco de dados**
- Os serviços se comunicam por **APIs ou mensageria**
- É possível usar **linguagens e tecnologias diferentes**

### Exemplo simples

Sistema de uma lanchonete:

- **Menu** → mostra produtos
- **Pedidos** → gerencia pedidos
- **Pagamento** → processa pagamentos
- **Análise de dados** → avalia vendas

Cada um desses é um **microsserviço separado**

### O que muda em relação ao monolito

- Antes: tudo em um único sistema
- Agora: vários serviços menores trabalhando juntos

Exemplo:

- Pagamento pode usar **Java**
- Análise de dados pode usar **Python**

### Vantagens

- Mais **flexível**
- Mais fácil de **escalar** (só o que precisa)
- Times podem trabalhar **independentemente**
- Facilita adicionar **novas funcionalidades**

### Desvantagens

- Mais **complexo de implementar**
- Maior custo de **infraestrutura**
- Comunicação entre serviços pode gerar problemas
- Mais difícil de **manter e monitorar**

### Conclusão

- Ótimo para sistemas grandes e em crescimento
- Permite escalar e evoluir melhor
- Mas só vale a pena se a **complexidade for justificada**

## **Arquitetura Model-View-Controller (MVC)**

O **MVC** é um padrão de arquitetura muito comum no desenvolvimento web, usado para **organizar melhor o código** e separar responsabilidades.

### Como funciona

O sistema é dividido em **três partes principais**:

- **Model (Modelo)**
    - Contém as **regras de negócio**
    - Manipula e acessa os **dados** (banco, APIs, etc.)
- **View (Visão)**
    - Responsável pela **interface com o usuário**
    - Mostra os dados na tela
- **Controller (Controlador)**
    - Faz a **ligação entre Model e View**
    - Recebe ações do usuário (cliques, requisições)
    - Decide o que fazer e qual resposta retornar

### Exemplo simples

Sistema de lanchonete:

- **Model** → calcula preço, valida pedido
- **View** → tela com menu e pedidos
- **Controller** → recebe o pedido e chama o model

### Fluxo básico

1. Usuário interage com a **View**
2. A View envia a ação para o **Controller**
3. O Controller chama o **Model**
4. O Model processa os dados
5. O resultado volta para a **View**
6. A View mostra para o usuário

### Ideia Principal

O MVC separa duas coisas importantes:

- **Interface (View) ≠ Lógica (Model)**
- **Controle (Controller) ≠ Apresentação (View)**

Isso deixa o sistema mais organizado e fácil de manter

### Vantagens

- Código mais **organizado**
- Facilita **manutenção**
- Permite **reuso de código**
- Mais fácil trabalhar em equipe

### Desvantagens

- Pode ser **mais complexo no início**
- Exige boa organização para não virar bagunça

### Conclusão

- MVC ajuda a **separar responsabilidades**
- Muito usado em sistemas web
- É um dos primeiros padrões importantes para aprender

## **Arquitetura em camadas (Layers)**

A **arquitetura em camadas** organiza o sistema em **níveis**, onde cada camada tem uma função específica e depende da camada abaixo.

### Como funciona

- O sistema é dividido em **camadas**
- Cada camada usa os serviços da camada inferior
- A comunicação geralmente segue um fluxo **de cima para baixo**

### Exemplo de camadas

Um sistema típico pode ter:

- **Interface (UI)**
    - Tela que o usuário vê (front-end)
- **Camada de aplicação**
    - Controle de fluxo, autenticação, regras básicas
- **Lógica de negócio**
    - Regras principais do sistema
- **Infraestrutura**
    - Banco de dados, sistema operacional, etc.

### Exemplo simples

Sistema de inscrição:

- **Front-end** → formulário
- **Servidor (API)** → processa os dados
- **Banco de dados** → armazena informações

O front-end **não acessa direto o banco**, tudo passa pela API

### Ideia Principal

- Cada camada tem uma **responsabilidade clara**
- Uma camada **depende da outra (de baixo)**
- Organização por **níveis**

### Diferença para MVC

- **MVC** → separa por tipo de responsabilidade (Model, View, Controller)
- **Camadas** → separa por **níveis do sistema**

São conceitos diferentes, mas podem ser usados juntos

### Vantagens

- Organização clara do sistema
- Facilita divisão entre equipes
- Permite reaproveitar partes do sistema
- Boa para sistemas grandes e estruturados

### Desvantagens

- Pode adicionar **complexidade**
- Pode gerar **dependência rígida entre camadas**
- Às vezes pode impactar performance

### Quando usar

- Quando há **times diferentes trabalhando**
- Quando o sistema precisa de **segurança por níveis**
- Quando você quer **evoluir um sistema existente**

### Conclusão

- Divide o sistema em **camadas hierárquicas**
- Cada camada depende da de baixo
- Muito usado em aplicações web (front-end + API + banco)

# Estudar princípios importantes

Nessa semana, vou estudar apenas os princípios mais básicos da Arquitetura de Software, para nas seguintes conseguir aprofundar nos demais conceitos.

## Baixo acoplamento (Low Coupling)

É quando as partes do sistema têm **pouca dependência entre si**.

#### Como funciona

- Um módulo **não depende fortemente** de outro
- Mudanças em uma parte **não quebram o resto**

#### Exemplo simples

❌ Alto acoplamento:

- Classe de Pedido chama diretamente o banco de dados

✅ Baixo acoplamento:

- Pedido chama uma **interface** (ex: `RepositorioPedido`)
- O banco é só uma implementação

#### Ideia Principal

- Quanto menos dependência, melhor
- Facilita mudanças e manutenção

#### Vantagens

- Código mais **flexível**
- Mais fácil de **testar**
- Menos impacto ao modificar algo

#### Resumo

Evite depender diretamente — use abstrações

## **Alta coesão (High Cohesion)**

É quando uma classe ou módulo tem **uma responsabilidade bem definida**.

### Como funciona

- Cada parte do sistema faz **uma coisa só**
- Tudo dentro dela está **relacionado**

### Exemplo Simples

❌ Baixa coesão:

- Classe faz login, cálculo e envio de email

✅ Alta coesão:

- `AuthService` → login
- `Calculadora` → cálculos
- `EmailService` → envio de email

### Ideia Principal

Código organizado por **função clara**

### Vantagens

- Código mais **legível**
- Mais fácil de **manter**
- Facilita reaproveitamento

### Conclusão

**Uma classe = uma responsabilidade**

## **Separação de responsabilidades (Separation of Concerns)**

É dividir o sistema em partes, onde cada uma cuida de **um aspecto específico**.

### Como funciona

- Cada parte resolve **um tipo de problema**
- Evita misturar coisas diferentes

### Exemplo simples

Sem separação:

- Código mistura: tela + regra de negócio + banco

Com separação:

- **View** → interface
- **Service** → regras
- **Repository** → banco

### Ideia Principal

Separar o sistema por **interesses (concerns)**

### Vantagens

- Organização clara
- Facilita evolução do sistema
- Reduz complexidade

### Conclusão

Não misture responsabilidades diferentes

## Conclusão

- **Separação de responsabilidades** → divide o sistema em áres de funcionamento
- **Alta coesão** → cada classe parte faz bem seu papel
- **Baixo acoplamento** → as partes não ficam dependentes demais

# Analisar exemplos reais de arquiteturas utilizadas em sistemas conhecidos

## Netflix

### Arquitetura

- **Microsserviços**
- Altamente **distribuída**
- Rodando na nuvem (AWS)

### Como funciona

- Cada funcionalidade é um serviço:
    - catálogo
    - recomendações
    - streaming
    - autenticação
- Serviços se comunicam via **APIs**

### Decisões importantes

- Precisava escalar para **milhões de usuários**
- Sistema precisa estar disponível **24/7**

### Princípios aplicados

- Baixo acoplamento → serviços independentes
- Alta coesão → cada serviço faz uma coisa
- Separação de responsabilidades → cada domínio isolado

### Trade-off

- Muito **complexo**
- Alto custo de infraestrutura

## Amazon

### Arquitetura

- Microsserviços (pioneira nisso)
- Também usa **arquitetura em camadas internamente**

### Como funciona

Serviços separados:

- carrinho
- pagamento
- estoque
- recomendações

### Decisão famosa

Regra interna:

> “Times devem se comunicar apenas por APIs”
> 

### Princípios

- Baixo acoplamento (times independentes)
- Separação de responsabilidades clara
- Escalabilidade extrema

### Trade-off

- Complexidade organizacional e técnica

## Instagram

### Arquitetura

- Começou como **monolito (Django)**
- Depois evoluiu com partes distribuídas

### Como funciona

- Backend centralizado
- Otimizações pesadas para escalar

### Decisão importante

- Começar simples → depois escalar

**Não começaram com microsserviços**

### Princípios

- Alta coesão (código bem organizado)
- KISS ("Keep It Simple, Stupid”: simplicidade no início, princípio que ainda vou estudar)
- Evolução gradual da arquitetura

### Trade-off

- Escalar monolito exige engenharia avançada

## Whatsapp

### Arquitetura

- Sistema **distribuído**
- Baseado em **Erlang**
- Focado em **mensageria**

### Como funciona

- Servidores lidam com milhões de conexões simultâneas
- Comunicação em tempo real

### Decisão importante

- Escolher tecnologia que suporta **concorrência massiva**

### Princípios

- Alta coesão (foco em mensagens)
- Baixo acoplamento entre servidores
- Simplicidade (menos features, mais eficiência)

### Trade-off

- Menos flexível para features complexas

## Conclusão

Não existe “melhor arquitetura” universal.

Tudo depende de:

- Escala do sistema
- Complexidade
- Equipe
- Objetivo do negócio

Após análise:

- Sistemas pequenos → **monolito + simplicidade**
- Sistemas grandes → **microsserviços / distribuído**

# Relacionar os aprendizados com o projeto da disciplina

## Monitoramento Legislativo: Proteção de Crianças na Internet

Plataforma para **monitorar, classificar e analisar proposições legislativas sobre proteção de crianças e adolescentes no ambiente digital**.

Foco em temas como: **cyberbullying, exploração sexual online, proteção de dados de menores, regulação de plataformas digitais e exposição a conteúdo nocivo**.

## Primeira análise

### Arquitetura ideal

**Monolito em camadas + MVC**

- Complexidade média
- Projeto acadêmico
- Mais simples de desenvolver e manter
- Permite evolução futura

### Estrutura ideal

- **View (Frontend)**
    - Dashboards, gráficos, filtros
- **Controller (API)**
    - Recebe requisições (busca, filtros, relatórios)
- **Service (Lógica de negócio)**
    - Classificação por tema
    - Análise de dados
    - Processamento com NLP
- **Repository (Dados)**
    - Acesso ao banco
    - Integração com APIs legislativas
- **Infraestrutura**
    - Banco de dados
    - APIs externas

# Resumo

## **O que é Arquitetura de Software**

- É a **estrutura do sistema** (componentes + relações)
- Define decisões críticas como:
    - desempenho
    - escalabilidade
    - segurança
    - manutenção

São decisões **difíceis de mudar depois**

## **Arquitetura vs Design**

- **Arquitetura** → visão **macro**
    - organização do sistema
    - escolha de tecnologias e padrões
- **Design** → visão **micro**
    - classes, métodos, implementação

**Arquitetura guia o design**

## **Principais padrões arquiteturais**

### Monolito

- Tudo em um único sistema
- Simples no início
- Difícil de escalar

### Microsserviços

- Sistema dividido em serviços independentes
- Alta escalabilidade e flexibilidade
- Alta complexidade

### MVC

- Divide em:
    - Model (dados)
    - View (interface)
    - Controller (controle)

Foca na **organização do código**

### Camadas

- Divide o sistema por níveis:
    - UI → aplicação → negócio → dados

Foca na **estrutura do sistema**

## **Princípios fundamentais**

### Separação de responsabilidades

- Dividir o sistema em partes com funções diferentes

### Alta coesão

- Cada parte faz **uma coisa bem definida**

### Baixo acoplamento

- Partes do sistema **não dependem muito entre si**

### Relação entre eles

- Separação → divide o sistema
- Coesão → organiza cada parte
- Acoplamento → reduz dependência

### **Sistemas reais**

- **Netflix / Amazon** → microsserviços (escala grande)
- **Instagram** → começou monolito, depois evoluiu
- **WhatsApp** → sistema distribuído focado em performance

Não existe arquitetura única ideal

### **Regra geral**

- Sistemas pequenos → **monolito + simplicidade**
- Sistemas grandes → **microsserviços**

## **Aplicação no projeto**

Projeto: monitoramento legislativo

### Arquitetura ideal:

**Monolito em camadas + MVC**

### Estrutura:

- Frontend (visualização)
- Backend (API + lógica)
- Banco de dados
- Integração com APIs

### Serviços principais:

- Coleta de dados
- Classificação (NLP)
- Análise
- Visualização

## **Conclusão geral**

- Arquitetura define o **futuro do sistema**
- Bons princípios evitam problemas de crescimento
- A melhor solução depende do **contexto**