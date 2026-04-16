# Estudo Banco de Dados

# O que é um banco de dados e qual a sua importância? - falta responder a importância

Banco de dados = coleção organizada de informações/dados estruturados, geralmente armazenadas eletronicamente em um sistema de computador. 

Sistema de gerenciamento de banco de dados (DBMS)

Sistema de banco de dados = dados + DBMS

Os dados nos tipos mais comuns de bancos de dados em operação atualmente são modelados em linhas e colunas em uma série de tabelas para tornar o processamento e a consulta de dados eficientes. 

Os dados podem ser facilmente acessados, gerenciados, modificados, atualizados, controlados e organizados. 

A maioria dos bancos de dados usa a linguagem de consulta estruturada (SQL) para escrever e consultar dados.

# Entender a diferença entre bancos relacionais (SQL) e não relacionais (NoSQL)

## Bancos relacionais (SQL - **Structured Query Language**)

SQL é uma linguagem de programação usada por quase todos [os bancos de dados relacionais](https://www.oracle.com/br/database/what-is-database/#relational) para consultar, manipular e definir dados e fornecer controle de acesso. 

O SQL foi desenvolvido pela primeira vez na IBM nos anos 1970, com a Oracle como principal contribuinte, o que levou à implementação do padrão SQL ANSI; o SQL estimulou muitas extensões de empresas como IBM, Oracle e Microsoft. 

Embora o SQL ainda seja amplamente usado hoje em dia, novas linguagens de programação estão começando a aparecer.

### **Quais são os componentes de um sistema SQL?**

Os sistemas de gerenciamento de banco de dados relacional usam a Linguagem de consulta estruturada (SQL) para armazenar e gerenciar dados. 

O sistema armazena várias tabelas de banco de dados que se relacionam entre si. O MS SQL Server, o MySQL ou o MS Access são exemplos de sistemas de gerenciamento de banco de dados relacional. Veja a seguir os componentes desse sistema. 

#### Tabela:

Uma tabela SQL é o elemento básico de um banco de dados relacional e consiste em linhas e colunas. Engenheiros de banco de dados criam relacionamentos entre várias tabelas de banco de dados para otimizar o espaço de armazenamento de dados.

Por exemplo, o engenheiro de banco de dados cria uma tabela SQL para produtos em uma loja:

| **ID do produto** | **Nome do produto** | **ID da cor** |
| --- | --- | --- |
| 0001 | Colchão | Cor 1 |
| 0002 | Travesseiro | Cor 2 |

Em seguida, o engenheiro de banco de dados vincula a tabela de produtos à tabela de cores com o *ID da cor:*

| **ID da cor** | **Nome da cor** |
| --- | --- |
| Cor 1 | Azul |
| Cor 2 | Vermelha |

#### **Instruções SQL:**

Instruções SQL, ou consultas SQL, são instruções válidas que os sistemas de gerenciamento de banco de dados relacional compreendem. Os desenvolvedores de software criam instruções SQL usando diferentes elementos da linguagem SQL. Elementos da linguagem SQL são componentes como identificadores, variáveis e condições de pesquisa que formam uma instrução SQL correta.

Por exemplo, a instrução SQL a seguir usa um comando SQL INSERT para armazenar a *Marca de colchão A*, que custa de *USD 499*, em uma tabela denominada *Mattress_table*, com os nomes de colunas *brand_name* e *cost:*

INSERT INTO *Mattress_table (brand_name, cost)*

VALUES(‘A’,’499’);

#### **Procedimentos armazenados:**

Procedimentos armazenados são uma coleção de uma ou mais instruções SQL armazenadas no banco de dados relacional. Os desenvolvedores de software usam procedimentos armazenados para melhorar a eficiência e a performance. Por exemplo, eles podem criar um procedimento armazenado para atualizar tabelas de vendas em vez de escrever a mesma instrução SQL em aplicações diferentes.

### **Por que o SQL é importante?**

Diferentemente de linguagens de programação de uso geral, o SQL foi criado especificamente para bancos de dados relacionais — e os bancos de dados relacionais, por sua vez, são otimizados para o SQL. Essa concepção mútua torna o SQL uma ferramenta altamente eficiente para gerenciamento de dados.

A natureza declarativa do SQL o torna acessível até mesmo para usuários com pouca experiência em programação, sendo uma linguagem ideal para iniciantes. Seu uso amplo e integração com outras linguagens, como Python e Java, também fazem do SQL uma habilidade valiosa em ambientes de programação e dados em geral.

Analistas de dados, cientistas de dados e administradores de banco de dados utilizam SQL regularmente, pois ele se destaca em tarefas como processamento de dados, definição de dados, controle de acesso, [compartilhamento de dados](https://www.ibm.com/br-pt/think/topics/data-sharing), [integração de dados](https://www.ibm.com/br-pt/think/topics/data-integration) e [análise de big data](https://www.ibm.com/br-pt/think/topics/big-data-analytics).

Na [ciência de dados](https://www.ibm.com/br-pt/think/topics/data-science), o SQL é usado para criar bancos de dados que armazenam grandes conjuntos de dados necessários para análises. Sua capacidade de manipular e recuperar dados desses grandes conjuntos estruturados também é essencial no desenvolvimento de aplicações de [inteligência artificial](https://www.ibm.com/br-pt/think/topics/artificial-intelligence) (IA) e [aprendizado de máquina](https://www.ibm.com/br-pt/think/topics/machine-learning) (ML), que dependem de dados de alta qualidade para treinamento.

Ao aderir às propriedades ACID — atomicidade, consistência, isolamento e durabilidade — o SQL ajuda a garantir um [processamento de transações](https://www.ibm.com/br-pt/think/topics/transaction-management) confiável para casos críticos e manipulação de dados sensíveis. Também oferece suporte a uma [tomada de decisões baseada em dados](https://www.ibm.com/br-pt/think/topics/data-driven-decision-making) mais precisa, [análises avançadas](https://www.ibm.com/br-pt/think/topics/advanced-analytics) e maior capacidade de [business intelligence](https://www.ibm.com/br-pt/think/topics/business-intelligence).

### **Vantagens do SQL:**

- Fácil manipulação de dados:
    - Seus comandos simples (como GROUP BY, ORDER BY, GRANT e REVOKE) permitem que usuários de todos os níveis de habilidade trabalhem com bancos de dados.
- Processamento rápido de consultas
    - Índices e técnicas de otimização de consultas em SQL melhoram a velocidade de recuperação de dados, o que aumenta o desempenho dos bancos de dados.
- Segurança de dados robusta
    - Bancos de dados SQL incluem recursos de segurança como autenticação de usuários, controles de acesso e criptografia para proteger os dados.
- Recursos comuns e compatibilidade
    - O SQL segue os padrões ANSI e ISO, o que ajuda a garantir compatibilidade com diversos sistemas e plataformas, incluindo ambientes em nuvem e ferramentas de big data.
- Escalabilidade
    - O SQL pode gerenciar com eficácia tanto bancos de dados pequenos quanto grandes, adaptando-se às crescentes necessidades de dados sem perda significativa de desempenho.
- Suporte para software livre
    - Muitos bancos de dados SQL são de código aberto e contam com o suporte de uma comunidade grande e ativa, que contribui continuamente para melhorias e resolução de problemas.

## Bancos não relacionais (NoSQL - Not Only SQL)

[NoSQL](https://aws.amazon.com/pt/nosql/) se refere a bancos de dados não relacionais que não usam tabelas para armazenar dados. 

Os desenvolvedores armazenam informações em diferentes tipos de bancos de dados NoSQL, incluindo grafos, documentos e chaves/valores. 

Os bancos de dados NoSQL são populares para aplicações modernas, pois são horizontalmente escaláveis. 

Escalabilidade horizontal significa aumentar o poder de processamento, adicionando mais computadores que executam o software NoSQL.

### **Tipos de bancos de dados NoSQL:**

- **Armazenamento de chave-valor**
    
    Normalmente, essa é considerada a forma mais simples de bancos de dados NoSQL. Esse modelo de dados sem esquema é organizado em um dicionário de pares de chave-valor, onde cada item tem uma chave e um valor. 
    
    A chave poderia ser algo semelhante ao encontrado em um banco de dados SQL, como uma identificação de carrinho de compras, enquanto o valor é um conjunto de dados, como cada item individual do carrinho de compras desse usuário. 
    
    É comumente utilizado em cache e armazenamento de informações de sessões de usuários, como carrinhos de compras. No entanto, não é a solução ideal para extrair vários registros de uma vez. Redis e Memcached são exemplos de bancos de dados de valor-chave em código aberto.
    
- **Armazenamento de documentos**
    
    Conforme sugerido pelo nome, os bancos de dados de documentos armazenam dados como documentos. Eles podem ser úteis no gerenciamento de dados semi-estruturados, e os dados são tipicamente armazenados em formatos JSON, XML ou BSON. Isso mantém os dados reunidos quando utilizados em aplicações, reduzindo a quantidade de conversão necessária para utilizar os dados. 
    
    Os desenvolvedores também ganham mais flexibilidade, já que os esquemas de dados não precisam ser os mesmos entre os documentos (por exemplo, nome vs. primeiro_nome). No entanto, isso pode ser problemático em transações complexas, levando ao corrompimento de dados. 
    
    São casos de uso populares de bancos de dados de documentos os sistemas de gerenciamento de conteúdo e os perfis de usuário. Um exemplo de banco de dados baseado em documentos é o [MongoDB](https://www.ibm.com/br-pt/products/databases-for-mongodb), componente de banco de dados da [stack MEAN](https://www.ibm.com/br-pt/topics/mean-stack).
    
- **Armazenamento com colunas amplas**
    
    Esses bancos de dados armazenam informações em colunas, possibilitando que os usuários acessem somente as colunas específicas de que precisam sem alocar memória adicional para dados irrelevantes. Esse banco de dados tenta resolver as deficiências dos armazenamentos baseados em chave-valor e de documentos, mas como pode ser um sistema mais complexo de gerenciar, não é recomendado para equipes iniciantes e projetos mais novos. 
    
    Apache HBase e Apache Cassandra são exemplos de bancos de dados de colunas amplas em código aberto. O Apache HBase é desenvolvido sobre o Hadoop Distributed Files System que oferece uma maneira de armazenar conjuntos de dados esparsos, comumente utilizados em muitas aplicações de big data. O Apache Cassandra, por outro lado, foi projetado para gerenciar grandes quantidades de dados em vários servidores e clusters que abrangem diversos data centers. Tem sido utilizado em uma variedade de casos de uso, como sites de redes sociais e análise de dados em tempo real.
    
- **Armazenamento em grafos**
    
    Esse tipo de banco de dados normalmente abriga dados de um grafos de conhecimento. Os elementos de dados são armazenados como nós, arestas e propriedades. 
    
    Qualquer objeto, lugar ou pessoa pode ser um nó. Uma aresta define a relação entre os nós. Por exemplo, um nó pode ser um cliente, como a IBM, e uma agência como a Ogilvy. Uma vantagem seria categorizar o relacionamento como um relacionamento com o cliente entre a IBM e a Ogilvy.
    
    Bancos de dados em grafo são usados para armazenar e gerenciar uma rede de conexões entre elementos dentro do grafo. [Neo4J](https://neo4j.com/users/ibm/), um serviço de banco de dados baseado em grafo escrito em Java com edição comunitária de código aberto, onde os usuários podem adquirir licenças para extensões de backup on-line e alta disponibilidade, ou versões licenciadas empacotadas previamente com backup e extensões incluídas.
    
- **Armazenamento na memória**
    
    Com esse tipo de banco de dados, como o IBM solidDB, os dados residem na memória principal em vez do disco, tornando o acesso aos dados mais rápido do que com bancos de dados convencionais baseados em disco.
    

### Vantagens do NoSQL:

- **Relação custo-benefício:**
    
    É caro manter um RDBMS comercial de alta qualidade. Exige a compra de licenças, a contratação de administradores de bancos de dados treinados e hardware poderoso para escalar verticalmente. 
    
    Os bancos de dados NoSQL permitem o escalonamento horizontal rápido, alocando recursos de maneira otimizada para minimizar os custos.
    
- **Flexibilidade:**
    
    A capacidade de escalonamento horizontal e um modelo de dados flexível também permitem que bancos de dados NoSQL manipulem grandes volumes de dados em rápida mudança, tornando-os ótimos para o desenvolvimento ágil, iterações rápidas e atualizações frequentes de código.
    
- **Replicação:**
    
    A funcionalidade de replicação do NoSQL copia e armazena dados em vários servidores. Essa replicação proporciona confiabilidade de dados, garantindo o acesso durante o downtime e protegendo contra perda de dados se os servidores ficarem offline.
    
- **Velocidade:**
    
    O NoSQL possibilita o armazenamento e o processamento mais rápidos e ágeis para todos os usuários, de desenvolvedores a equipes de vendas e clientes. A velocidade também torna os bancos de dados NoSQL mais adequados de forma geral para aplicações da web modernas e complexos, sites de comércio eletrônico ou aplicações móveis.
    

Em suma, os bancos de dados NoSQL oferecem alto desempenho, disponibilidade e escalabilidade.

## SQL x NoSQL

|  | **Bancos de dados relacionais** | **Bancos de dados NoSQL** |
| --- | --- | --- |
| Workloads ideais | Os [bancos de dados relacionais](https://aws.amazon.com/rds/what-is-a-relational-database/) são projetados para aplicações de processamento de transações on-line (OLTP) transacionais e altamente consistentes. Eles também são bons para processamento analítico on-line (OLAP). | Os bancos de dados do NoSQL são projetados para vários padrões de acesso aos dados que incluem aplicações de baixa latência. Os bancos de dados de pesquisa NoSQL são projetados para análise de dados semiestruturados.
 |
| Modelo de dados | O modelo relacional normaliza dados em tabelas, compostas por linhas e colunas. Um esquema define estritamente tabelas, colunas, índices, relações entre tabelas e outros elementos do banco de dados. O banco de dados impõe a integridade referencial nos relacionamentos entre as tabelas. | Os bancos de dados NoSQL fornecem uma variedade de modelos de dados, como chave-valor, documento, gráfico e coluna, que são otimizados para performance e escala. |
| Propriedades ACID | Bancos de dados relacionais fornecem propriedades de atomicidade, consistência, isolamento e durabilidade (ACID):
• A atomicidade exige uma transação para executar completamente ou não é executada de forma alguma.
• A consistência exige que os dados estejam em conformidade com o esquema do banco de dados quando uma transação for confirmada.
• O isolamento exige que as transações simultâneas sejam executadas separadamente umas das outras.
• A resiliência exige a capacidade de se recuperar de uma falha do sistema ou falta de energia inesperada para o último estado conhecido. | A maioria dos bancos de dados NoSQL oferece compensações ao relaxar algumas das propriedades ACID dos bancos de dados relacionais em favor de um modelo de dados mais flexível que pode ser escalado horizontalmente. Isso torna os bancos de dados NoSQL uma excelente opção para casos de uso de baixa latência e alto throughput que precisam ser escalados horizontalmente além das limitações de uma única instância. |
| Performance | A performance normalmente depende do subsistema do disco. A otimização de consultas, índices e estrutura de tabela é necessária para alcançar máxima performance. | A performance geralmente é uma função do tamanho do cluster do hardware subjacente, da latência de rede e da aplicação que faz a chamada. |
| Escala | Os bancos de dados relacionais geralmente escalam verticalmente o tamanho ao aumentar os recursos de computação do hardware, ou escalam horizontalmente o tamanho ao adicionar réplicas para workloads somente leitura. | Os bancos de dados NoSQL geralmente são particionáveis. Isso ocorre porque os padrões de acesso podem ser escalados horizontalmente usando a arquitetura distribuída para aumentar o throughput que fornece desempenho consistente em uma escala quase ilimitada. |
| APIs | As solicitações para armazenar e recuperar dados são comunicadas usando consultas compatíveis com uma Structured Query Language (SQL – Linguagem de consultas estruturadas). Essas consultas são analisadas e executadas pelo banco de dados relacional. | APIs baseadas em objetos permitem que desenvolvedores de aplicações armazenem e restaurem facilmente estruturas de dados. As chaves de partição permitem que as aplicações procurem pares de chave-valor, conjuntos de colunas ou documentos semiestruturados que contenham objetos e atributos de aplicações serializadas. |

# Aprender conceitos básicos: tabelas, registros, chaves primárias e estrangeiras

## Tabelas

Uma **tabela** é como uma planilha.

Exemplo de tabela `Aluno`:

| id_aluno | nome | curso |
| --- | --- | --- |
| 1 | Ana | Engenharia |
| 2 | João | Computação |
| 3 | Maria | Medicina |

Cada tabela representa um tipo de informação e armazenar apenas um assunto principal.

## Registros

Na tabela:

| id_aluno | nome | curso |
| --- | --- | --- |
| 1 | Ana | Engenharia |

Esse registro representa:

➡ um aluno específico.

Então:

- tabela = conjunto de dados
- registro = uma linha individual

## Chave Primária (Primary Key)

A **chave primária** identifica cada registro de forma única.

Na tabela `Aluno`:

| id_aluno | nome | curso |
| --- | --- | --- |
| 1 | Ana | Engenharia |
| 2 | João | Computação |

`id_aluno` é a chave primária porque:

- nunca repete
- nunca é nulo
- identifica exatamente um aluno

## Chave Estrangeira (Foreign Key)

A **chave estrangeira** conecta uma tabela com outra.

Exemplo:

Tabela `Aluno`

| id_aluno | nome |
| --- | --- |
| 1 | Ana |
| 2 | João |

Tabela `Matricula`

| id_matricula | id_aluno | disciplina |
| --- | --- | --- |
| 10 | 1 | Banco de Dados |
| 11 | 2 | Redes |

Aqui:

`id_aluno` na tabela `Matricula` é uma **chave estrangeira**.

Ela aponta para:

`Aluno.id_aluno`

A chave estrangeira cria relacionamento:

Aluno 1 → Ana → Banco de Dados

Aluno 2 → João → Redes

# Estudar operações básicas (CRUD – Create, Read, Update, Delete)

Imagine uma tabela `Aluno`

| id_aluno | nome | curso |
| --- | --- | --- |
| 1 | Ana | Computação |
| 2 | João | Engenharia |

Vamos usar ela para entender.

## CREATE → Inserir dados

Serve para adicionar um novo registro.

Exemplo SQL:

```
INSERTINTO Aluno (id_aluno, nome, curso)
VALUES (3,'Maria','Medicina');
```

Depois da inserção:

| id_aluno | nome | curso |
| --- | --- | --- |
| 1 | Ana | Computação |
| 2 | João | Engenharia |
| 3 | Maria | Medicina |

## READ → Consultar dados

Serve para visualizar dados.

Exemplo:

```
SELECT*FROM Aluno;
```

Mostra todos os alunos.

Consultando apenas um

```
SELECT*FROM Aluno
WHERE id_aluno=2;
```

Resultado:

| id_aluno | nome | curso |
| --- | --- | --- |
| 2 | João | Engenharia |

## UPDATE → Alterar dados

Serve para modificar um registro existente.

Exemplo:

Mudar curso da Ana:

```
UPDATE Aluno
SET curso='Sistemas'
WHERE id_aluno=1;
```

Antes:

| 1 | Ana | Computação |

Depois:

| 1 | Ana | Sistemas |

## DELETE → Remover dados

Serve para apagar registros.

Exemplo:

```
DELETEFROM Aluno
WHERE id_aluno=2;
```

João será removido.

# Entender o que é normalização de dados

A **normalização de dados** é o processo de **organizar as tabelas de um banco de dados para evitar repetição desnecessária e reduzir erros**.

A ideia principal é guardar cada informação no lugar certo, apenas uma vez.

## Por que isso é necessário

Imagine esta tabela:

| id_pedido | cliente | telefone | produto |
| --- | --- | --- | --- |
| 1 | Ana | 9999 | Mouse |
| 2 | Ana | 9999 | Teclado |

Perceba que:

- nome do cliente repete
- telefone repete

Isso gera problemas:

- desperdício de espaço
- risco de inconsistência
- manutenção difícil

Exemplo:

se Ana trocar telefone, você precisa alterar em várias linhas.

## Com normalização

Separando em tabelas:

### Cliente

| id_cliente | nome | telefone |
| --- | --- | --- |
| 1 | Ana | 9999 |

### Pedido

| id_pedido | id_cliente | produto |
| --- | --- | --- |
| 1 | 1 | Mouse |
| 2 | 1 | Teclado |

Agora:

- os dados do cliente aparecem uma única vez
- os pedidos apenas referenciam o cliente

## Objetivo da normalização

A normalização busca:

- eliminar redundância
- evitar inconsistências
- melhorar manutenção
- facilitar atualização
- tornar o banco mais lógico

# Vídeos Recomendados

> Não se esqueça de ler o Rusumo também!
> 

Vídeos mais rápidos, gerais e descontraídos:

https://www.youtube.com/watch?v=9a3xgD4SMwQ

https://www.youtube.com/watch?v=VbNDTOGjt4o

Vídeo um pouco mais aprofundado:

https://www.youtube.com/watch?v=XfO3TRvESBo

# Resumo

> Não se esqueça de ver os vídeos recomendados!
> 

Um **banco de dados** é uma coleção organizada de informações armazenadas eletronicamente para facilitar o **armazenamento, consulta, atualização e controle dos dados**. Sua importância está em permitir que sistemas guardem grandes volumes de informações com segurança, rapidez e organização. O software responsável por gerenciar esses dados é o **SGBD (Sistema de Gerenciamento de Banco de Dados)**.

## SQL e NoSQL

Os bancos de dados podem ser divididos em dois principais tipos:

### **SQL (relacional)**

Organiza os dados em **tabelas com linhas e colunas**, relacionando informações entre si.

Características:

- estrutura fixa (esquema definido)
- uso da linguagem SQL
- alta consistência
- ideal para sistemas tradicionais e transações

Exemplos:

- MySQL
- PostgreSQL
- SQL Server

## **NoSQL (não relacional)**

Armazena dados em formatos mais flexíveis:

- documentos
- chave-valor
- grafos
- colunas

Características:

- maior flexibilidade
- escalabilidade horizontal
- melhor para grandes volumes de dados
- muito usado em aplicações modernas

Exemplos:

- MongoDB
- Redis
- Cassandra

## Conceitos básicos

**Tabela:** conjunto de dados sobre um assunto

Exemplo: tabela de alunos

**Registro:** uma linha da tabela

Exemplo: um aluno específico

**Chave primária:** identifica cada registro de forma única

Exemplo: `id_aluno`

**Chave estrangeira:** cria relação entre tabelas

Exemplo: `id_aluno` em matrícula ligado à tabela aluno

## CRUD — Operações básicas

CRUD representa as operações fundamentais:

- **Create** → inserir dados (`INSERT`)
- **Read** → consultar dados (`SELECT`)
- **Update** → alterar dados (`UPDATE`)
- **Delete** → remover dados (`DELETE`)

Essas operações permitem manipular as informações dentro do banco.

## Normalização de dados

A **normalização** organiza as tabelas para evitar repetição desnecessária de informações.

Objetivos:

- reduzir redundância
- evitar inconsistências
- facilitar manutenção
- melhorar organização

Exemplo:

em vez de repetir dados do cliente em vários pedidos, separa-se em:

- tabela `Cliente`
- tabela `Pedido`

Assim o banco fica mais eficiente e confiável.

## Importância geral

O estudo de banco de dados é importante porque permite:

- armazenar informações com segurança
- acessar dados rapidamente
- organizar grandes volumes de informação
- manter integridade dos dados
- dar suporte a sistemas modernos e aplicações reais
