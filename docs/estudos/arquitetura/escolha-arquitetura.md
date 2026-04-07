# **Definir arquitetura do sistema**

# **Monitoramento Legislativo: Proteção de Crianças na Internet**

Neste documento, irei analisar superficialmente nosso projeto (já que ainda não decidimos muitas coisas) para já ter uma noção de qual tipo de Arquitetura seria bom para usarmos.

Terei meu conhecimento com base no estudo que documentei no seguinte link: 

> [https://www.notion.so/Estudo-Arquitetura-de-Software-1-32d40c012af180298e76e6ef7712b3ed?source=copy_link](https://www.notion.so/Estudo-Arquitetura-de-Software-32d40c012af180298e76e6ef7712b3ed?pvs=21)
> 

Como os Requisitos do projeto ainda não foram definidos, irei citar objetivos que imagino que serão mirados:

### Objetivos do sistema

- Coletar dados de APIs legislativas
- Classificar proposições por tema (NLP)
- Gerar indicadores e análises
- Exibir dashboards interativos

# Avaliando Arquiteturas Estudadas

## Arquitetura Monolítica

Todo o sistema em uma única aplicação:

- API
- Lógica de negócio
- NLP
- Banco de dados

### Vantagens

- Simples de implementar
- Mais rápido para começar
- Fácil deploy
- Ideal para equipe pequena
- Menor custo de infraestrutura

### Desvantagens

- Escalabilidade limitada
- Pode ficar difícil de manter se crescer muito
- Forte acoplamento se mal estruturado

## **Arquitetura de Microsserviços**

Separação em serviços:

- Serviço de coleta de dados
- Serviço de classificação (NLP)
- Serviço de análise
- Serviço de visualização

### Vantagens

- Alta escalabilidade
- Independência entre serviços
- Flexibilidade tecnológica

### Desvantagens

- Alta complexidade
- Overhead de comunicação
- Mais difícil de implementar
- Exige infraestrutura avançada

## **Arquitetura MVC**

Separação em:

- Model → dados e regras
- View → interface
- Controller → controle de requisições

### Vantagens

- Organização clara
- Separação de responsabilidades
- Facilita manutenção
- Muito compatível com aplicações web

### Desvantagens

- Pode gerar excesso de responsabilidades no Controller
- Não resolve arquitetura global sozinho

## Arquitetura em Camadas

Divisão por níveis:

- Interface (Frontend)
- Aplicação (Controllers / Use Cases)
- Negócio (Services / NLP)
- Dados (Repositories / Banco)

### Vantagens

- Alta organização
- Facilita manutenção
- Boa separação de responsabilidades
- Muito usada em sistemas reais

### Desvantagens

- Pode gerar dependência rígida entre camadas
- Pode impactar performance se mal usada

# Decisões de Arquitetura

O sistema será desenvolvido como um **monolito**, organizado em **arquitetura em camadas**, utilizando o padrão **MVC** para separação de responsabilidades na interface e controle.

A seguir está disposto a escolha de cada parte, e como, a princípio, funcionará.

## Monolito

O projeto será um Monolito, pois a complexidade aumentaria exponencialmente ao fazer em Microsserviços, levando em conta o escopo da disciplina e do projeto. 

Tudo será feito um único sistema.

## Em Camadas

O sistema será dividido em camadas, como na Arquitetura em Camadas:

1. Interface (Front-End) - Dashboards, Filtros e Visualização
2. Camada de Aplicação - Controller (Recebe requisições e controla o fluxo)
3. Camada de Negócios - Service (Regras de negócio, NLP e Classificação)
4. Camada de Dados - Repository (Banco de Dados e API externa)
5. Infraestrutura - Banco, APIs e Configurações

> Cada camada só conversa com a de baixo (FLUXO DE DEPENDÊNCIA)
> 

Interface → Controller → Service → Repository → Banco

## MVC

E iremos mapear tudo no sistema em MVC - MODEL VIEW CONTROLLER.

MODEL - Service, Repository (Dados e Regras de negócio)

VIEW - Front-End (Interface do Usuário)

CONTROLLER - Recebe requisições e decide o fluxo

#### Fluxo MVC

- Usuário interage com a View (Frontend)
- Requisição vai para o Controller
- Controller chama Service
- Service processa (NLP, regras)
- Repository acessa dados
- Resultado volta para o Controller
- Controller responde para a View

## Estrutura

### Backend

- **Controller**
    - Recebe requisições
- **Service**
    - Regras de negócio
    - NLP
- **Repository**
    - Acesso a dados
- **Infraestrutura**
    - Banco de dados
    - APIs externas

### Frontend

- Dashboards
- Filtros
- Visualização de dados