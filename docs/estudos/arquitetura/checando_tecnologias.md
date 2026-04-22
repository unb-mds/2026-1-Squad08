# Checando compatibilidade entre Tecnologias escolhidas

- Tecnologia Front-End
    - HTML
    - CSS
    - JavaScript
    - Fetch API para comunicação com o Back-End
- Tecnologia Back-End
    - Back-End: Python + Flask
    - Banco de Dados: PostgreSQL (ainda falta a escolha)
    - IA: spaCy ou transformers (ainda falta estudo e a escolha)

## Tecnologias Front-End

- **HTML**
- **CSS**
- **JavaScript**
- **Fetch API** para comunicação com o Back-End

### Compatibilidade

O front-end utiliza tecnologias nativas do navegador, o que garante compatibilidade com qualquer back-end capaz de expor rotas HTTP e retornar dados em formato JSON.

A **Fetch API** permite comunicação direta com APIs REST, sendo compatível com frameworks Python modernos.

Compatível com:

- Flask
- PostgreSQL indiretamente via backend (O frontend **nunca acessa o banco diretamente**, apenas via backend)

# Compatibilidade entre Front-End e Back-End

A comunicação entre front-end e back-end será feita através de:

- requisições HTTP
- API REST
- respostas em JSON

Fluxo esperado:

```
Frontend (JavaScript)
↓
Fetch API
↓
Backend Python
↓
Resposta JSON
↓
Frontend atualiza interface
```

### Validação

Flask oferece suporte nativo para:

- criação de APIs
- Flask facilita o retorno de JSON, mas a serialização de objetos complexos deve ser tratada manualmente ou com bibliotecas auxiliares.
- tratamento de requisições HTTP

Portanto: **HTML/CSS/JS + Fetch é compatível com Flask**

# Compatibilidade com Banco de Dados

O banco previsto é:

- **PostgreSQL**

### Compatibilidade com Python

Python possui suporte estável para PostgreSQL por meio das bibliotecas:

- `psycopg`
- `SQLAlchemy`

### Compatibilidade por framework

### Flask

Compatível com:

- SQLAlchemy
- psycopg

Portanto: **Python + PostgreSQL é totalmente compatível**

# Compatibilidade com IA

As bibliotecas avaliadas são:

- **spaCy**
- **transformers**

Ambas possuem suporte para:

- Python 3.10+
- integração com Flask
- processamento de texto em português (transformers suporta português dependendo do modelo escolhido [ex: BERTimbau])

### Uso

A IA poderá ser utilizada para tarefas como classificação e análise, dependendo do modelo e treinamento adotados.

### Compatibilidade

A IA será executada no backend:

```
Backend Python
↓
Biblioteca NLP
↓
Processamento
↓
Banco PostgreSQL
```

Portanto: **IA compatível com backend em Python**

# Compatibilidade com API externa

O sistema utilizará API pública do governo para coleta de dados.

Exemplo:

- API legislativa da Câmara
- API legislativa do Senado

A integração será feita por:

- requisições HTTP
- consumo de JSON

Python oferece bibliotecas adequadas:

- `requests`
- `httpx`

Portanto: **Python possui integração direta com APIs governamentais**

# Versões recomendadas

## Linguagem

- Python **3.11+**

## Backend

- Flask **3.x**

## Banco

- PostgreSQL **15+**

## IA

- spaCy **3.x**
ou
- transformers **4.x**

## Frontend

- JavaScript ES6+

Essas versões possuem boa documentação e suporte atual.

# Possíveis conflitos ou limitações

## CORS entre Front-End e Back-End

SE o front-end e o back-end rodarem em portas ou domínios diferentes, o navegador pode bloquear as requisições por política de segurança.

Exemplo:

```
Frontend → localhost:3000
Backend → localhost:5000
```

Isso pode gerar erro:

```
Blocked by CORS policy
```

### Opções de solução

#### Opção A — habilitar CORS no Flask

Usar: Flask-CORS.

Vantagens:

- simples
- rápida
- funciona bem

Boa para protótipos e MVP.

#### Opção B — servir tudo pelo mesmo domínio

Backend entrega o frontend.

Exemplo:

```
meusite.com
```

Vantagens:

- elimina CORS
- arquitetura mais limpa

Boa para produção simples.

#### Opção C — usar reverse proxy

Com: Nginx.

Vantagens:

- profissional
- escalável
- seguro

Boa para produção real.

#### Melhor escolha prática

Provavelmente não iremos separar o Front-End e Back-End em domínios difentes, mas por efeito de planejamento, o ideal seria usarmos Flask-CORS.

## 2. Consumo de memória com IA

A biblioteca Transformers pode exigir:

- muita RAM
- mais processamento
- maior tempo de resposta

Em máquinas modestas isso pode causar:

- lentidão
- travamentos
- uso excessivo da CPU

### Limitação

Para ambientes simples: spaCy costuma ser mais leve

### Opções

#### Opção A — usar spaCy

spaCy

Vantagens: leve, rápido e simples.

Ideal: classificação básica e extração de entidades.

#### Opção B — modelos menores

Com: Transformers.

Exemplos: DistilBERT e MiniLM.

Vantagens: melhor precisão e menor custo.

#### Opção C — usar API externa

Exemplo: OpenAI API e Hugging Face Inference API.

Vantagens: sem peso local e escalável.

Desvantagem: custo financeiro.

#### Opção D — microserviço separado

IA em serviço próprio.

```
Flask → serviço IA → resposta
```

Vantagens: desacopla sistema e facilita manutenção.

#### Melhor escolha prática

Ainda precisamos estudar para tomar essa decisão, mas a princípio, spaCy ou API externas seriam boas escolhas.

## 3. Serialização de objetos do banco

O SQLAlchemy retorna objetos Python, que não podem ser enviados diretamente em JSON.

Exemplo do problema:

```
TypeError: Object is not JSON serializable
```

### Opções

#### Opção A — manual

Converter objeto em dict

Simples, porém repetitivo.

#### Opção B — usar Marshmallow

Marshmallow

Vantagens: elegante e padronizado.

#### Opção C — usar Pydantic

Pydantic

Vantagens: validação forte e moderno.

#### Opção D — trocar Flask por FastAPI

FastAPI

Vantagens: JSON automático, integração melhor com IA e 0validação nativa.

#### Melhor escolha prática

Flask: SQLAlchemy + Marshmallow

## 4. Latência de APIs externas

Ao consultar APIs públicas do governo:

- a API pode ficar lenta
- a API pode ficar indisponível
- mudanças no formato JSON podem quebrar o sistema

Dependência externa aumenta risco operacional.

### 4. Opções

#### Opção A — cache local

Com: Redis.

Vantagens: acelera sistema e reduz chamadas.

#### Opção B — salvar dados no banco

Guardar respostas no PostgreSQL.

Vantagens: histórico e resiliência.

#### Opção C — fila assíncrona

Com: Celery.

Vantagens: processamento em segundo plano.

#### Opção D — usar tarefas agendadas

Atualizar dados periodicamente

Exemplo:

```
todo dia às 02:00
```

#### Melhor escolha prática

Salvar dados no banco, com tarefas agendadas (B + D).

## 5. Escalabilidade do Flask

O Flask é ótimo para projetos pequenos, porém:

em cargas maiores pode exigir:

- cache
- filas
- workers
- balanceamento

Para crescimento grande, arquitetura pode precisar evoluir.

### 5. Opções

#### Opção A — manter Flask

Com:

- Gunicorn
- Nginx

Vantagens:

- suficiente para médio porte

#### Opção B — trocar para FastAPI

FastAPI

Vantagens:

- mais rápido
- melhor async
- ótimo para IA

#### Opção C — arquitetura de microserviços

Separar:

```
frontend
backend
IA
coleta
```

Boa para crescimento grande.

#### Melhor escolha prática

Não projetamos que o projeto creça ao ponto do Flask ficar obsoleto, mas no caso hipotético, seria inviável trocar a arquitetura e/ou tecnologia em uso, então seriausar o Flask com Gunicorn / Nginx.

## 6. Compatibilidade de versões

Bibliotecas podem ter conflitos entre versões.

Exemplo:

- Python novo demais
- SQLAlchemy novo
- modelo antigo do spaCy

Pode gerar:

```
ImportError
DeprecationWarning
```

### Soluções

#### requirements.txt

```
Flask==3.0.2
SQLAlchemy==2.0.25
```

#### virtualenv

Ambiente isolado

#### Docker

Docker

Vantagens:

- ambiente reproduzível
- evita conflitos

#### Melhor escolha

A melhor escolha é o Docker + requirements.txt

## 7. Segurança da API

Se a API for pública sem proteção:

Riscos:

- acesso indevido
- abuso de requisições
- vazamento de dados

### Pode exigir

- autenticação
- rate limiting
- validação de entrada

### Opções

#### autenticação JWT

JSON Web Token

#### rate limiting

Com: Flask-Limiter

#### validação de entrada

Com:

- Marshmallow
- Pydantic

#### HTTPS

Via: Nginx

#### Melhor escolha

Escolha não é baseada num estudo profundo, mas seria bom JWT + validação + rate limiting.

# Conclusão

A análise realizada demonstra que o conjunto de tecnologias proposto apresenta **compatibilidade técnica adequada para o desenvolvimento do sistema**, com boa integração entre as camadas de front-end, back-end, banco de dados, inteligência artificial e consumo de APIs externas.

No front-end, o uso de **HTML, CSS, JavaScript e Fetch API** oferece uma base simples, estável e amplamente suportada pelos navegadores modernos, permitindo comunicação eficiente com o back-end por meio de **requisições HTTP e respostas em JSON**. No back-end, a combinação de **Python com Flask** mostra-se compatível com a construção de APIs REST, além de possuir integração consolidada com o **PostgreSQL** através de bibliotecas como **psycopg** e **SQLAlchemy**.

Para a camada de processamento inteligente, tanto **spaCy** quanto **transformers** são opções viáveis dentro do ecossistema Python. Entretanto, a escolha final deverá considerar o equilíbrio entre **desempenho, consumo de recursos e complexidade das análises desejadas**, já que cada biblioteca atende necessidades distintas.

Também foram identificadas algumas limitações técnicas previsíveis, ao crescermos o Projeto, como:

- necessidade de configuração de **CORS**, se dividirmos o Front-End e Back-End em domínios diferentes;
- consumo elevado de recursos em modelos de IA mais robustos;
- serialização de objetos do banco para JSON;
- dependência de APIs externas;
- controle de versões;
- segurança da API.

Apesar disso, todos esses pontos possuem **soluções práticas já conhecidas**, como:

- uso de **Flask-CORS**;
- **Marshmallow** para serialização;
- **Docker** para padronização do ambiente;
- **JWT** para autenticação;
- **Nginx** para proxy e segurança;
- armazenamento local e agendamento para reduzir dependência de APIs externas.

Dessa forma, conclui-se que o stack tecnológico atualmente planejado é **tecnicamente viável**, possui **baixo risco de incompatibilidade** e oferece uma base consistente para o desenvolvimento inicial do projeto. As principais decisões que ainda precisam ser aprofundadas antes da implementação são:

- definição final do **PostgreSQL como banco de dados**
- escolha entre **spaCy ou transformers**
- validação do nível de processamento de IA necessário para o sistema

Com essas definições concluídas, o projeto poderá avançar para a fase de implementação com maior segurança técnica.

## Lista de tecnologias

Abaixo está a organização das tecnologias previstas no projeto, indicando **onde cada uma será utilizada**, **qual sua finalidade** e **qual a prioridade que temos que dar a ela no processo de desenvolvimento.**

| Tecnologia | Onde se encontra | Propósito | Prioridade |
| --- | --- | --- | --- |
| **HTML** | Front-End | Estrutura das páginas e interface | Alta |
| **CSS** | Front-End | Estilização visual da interface | Alta |
| **JavaScript** | Front-End | Interatividade da interface | Alta |
| **Fetch API** | Front-End | Comunicação com o Back-End via HTTP | Alta |
| **Python** | Back-End | Linguagem principal da lógica do sistema | Alta |
| **Flask** | Back-End | Criação da API REST | Alta |
| **PostgreSQL (provavelmente)** | Banco de Dados | Armazenamento estruturado dos dados | Alta |
| **SQLAlchemy** | Back-End | ORM para integração com banco | Alta |
| **psycopg (provavelmente)** | Back-End | Driver de conexão com PostgreSQL | Alta |
| **spaCy** *(ou)* **transformers** | Back-End / IA | Processamento de linguagem natural | Média |
| **requests / httpx** | Back-End | Consumo de APIs externas | Média |
| **Marshmallow** | Back-End | Serialização de objetos para JSON | Média |
| **Docker** | Infraestrutura | Padronização do ambiente | Média |
| **Flask-CORS** | Back-End | Permitir comunicação entre front e back, se tiver Front e Back tiverem domínios diferentes | Baixa |
| **JWT** | Segurança | Autenticação da API | Baixa |
| **Flask-Limiter** | Segurança | Controle de abuso de requisições | Baixa |
| **Nginx** | Infraestrutura | Proxy reverso e segurança | Baixa |

> **O que já basta para funcionar são as tecnologias de prioridade Alta, e junto as de Média, o projeto já fica bastante robusto. Com os de prioridade Baixa, já começa a fugir do nosso escopo, mas os listei para o caso de acabarmos antes do tempo previsto, e quisermos evoluir tudo.**
>
