# Requisitos de Software

## ÉPICO 1 — Coleta de Dados Legislativos

### US01 — Coleta automática de proposições

**Como** analista

**Quero** que o sistema colete proposições legislativas de fontes oficiais

**Para que** eu tenha dados atualizados automaticamente

**Critérios de aceitação:**

- Deve coletar dados da Câmara e Senado
- Deve evitar duplicação de dados
- Deve registrar data da coleta

### US02 — Integração com APIs legislativas

**Como** sistema

**Quero** integrar APIs oficiais

**Para que** os dados sejam confiáveis

**Critérios de aceitação:**

- Integração com API da Câmara dos Deputados
- Tratamento de falhas de conexão
- Logs de erro

### US03 — Atualização automática

**Como** analista

**Quero** que os dados sejam atualizados automaticamente

**Para que** eu não precise atualizar manualmente

**Critérios de aceitação:**

- Permitir configuração de intervalo
- Execução automática diária
- Registro de última atualização

### US04 — Armazenamento de proposições

**Como** sistema

**Quero** armazenar proposições em banco de dados

**Para que** elas possam ser consultadas

**Critérios de aceitação:**

- Persistência confiável
- Estrutura com campos obrigatórios
- Suporte a crescimento de dados

## ÉPICO 2 — Classificação de Proposições

### US05 — Classificação automática por subtema

**Como** analista

**Quero** que o sistema classifique proposições automaticamente

**Para que** eu possa analisar rapidamente grandes volumes

**Critérios de aceitação:**

- Uso de NLP
- Classificação em pelo menos um subtema
- Possibilidade de múltiplos subtemas

### US06 — Classificação manual

**Como** administrador

**Quero** corrigir classificações

**Para que** o sistema seja mais preciso

**Critérios de aceitação:**

- Apenas admins podem editar
- Alterações devem ser salvas
- Histórico deve ser registrado

### US07 — Múltiplos subtemas

**Como** analista

**Quero** associar múltiplos subtemas a uma proposição

**Para que** a classificação seja mais fiel

**Critérios de aceitação:**

- Permitir múltiplas seleções
- Exibição clara dos subtemas

# ÉPICO 3 — Busca e Filtros

### US08 — Busca por palavra-chave

**Como** usuário

**Quero** buscar proposições por palavra-chave

**Para que** eu encontre conteúdos relevantes

**Critérios:**

- Busca parcial
- Ordenação por data ou relevância (TF-IDF, score, etc.)

### US09 — Filtros avançados

**Como** usuário

**Quero** filtrar por parlamentar, partido, data e subtema

**Para que** eu refine minha busca

**Critérios**:

- Filtros combináveis
- Atualização dinâmica dos resultados

### US10 — Paginação

**Como** usuário

**Quero** ver resultados paginados

**Para que** a navegação seja organizada

**Critérios:**

- Limite de itens por página
- Navegação entre páginas

# ÉPICO 4 — Indicadores e Análises

### US11 — Visualização de indicadores

**Como** analista

**Quero** ver gráficos de proposições

**Para que** eu identifique padrões

**Critérios:**

- Gráfico por subtema
- Evolução temporal
- Parlamentares mais ativos

### US12 — Identificação de novos temas

**Como** analista

**Quero** identificar novos temas emergentes

**Para que** eu acompanhe tendências

**Critérios:**

- Detecção automática
- Destaque de novos termos

### US13 — Estatísticas automáticas

**Como** usuário

**Quero** ver estatísticas resumidas

**Para que** eu entenda rapidamente os dados

# ÉPICO 5 — Visualização de Dados

### US14 — Dashboard interativo

**Como** usuário

**Quero** acessar dashboards interativos

**Para que** eu explore os dados facilmente

**Critérios:**

- Interação com gráficos
- Atualização dinâmica

### US15 — Exportação de dados

**Como** usuário

**Quero** exportar dados

**Para que** eu use externamente

**Critérios:**

- Exportação em CSV, Excel e PDF
- Dados consistentes

# ÉPICO 6 — Detalhamento das Proposições

### US16 — Visualizar detalhes

**Como** usuário

**Quero** ver detalhes completos de uma proposição

**Para que** eu entenda seu conteúdo

**Critérios:**

- Título, autor, partido
- Data e situação
- Link oficial

# ÉPICO 7 — Alertas e Monitoramento

### US17 — Receber alertas

**Como** usuário

**Quero** receber alertas de novas proposições

**Para que** eu me mantenha atualizado

---

### US18 — Configurar alertas

**Como** usuário

**Quero** configurar alertas por subtema

**Para que** receba apenas o que importa

---

### US19 — Histórico de mudanças

**Como** administrador

**Quero** ver mudanças nas proposições

**Para que** eu acompanhe alterações

# ÉPICO 8 — Segurança e Acesso

### US20 — Controle de acesso

**Como** administrador

**Quero** gerenciar usuários

**Para que** controle permissões

---

### US21 — Segurança de dados

**Como** usuário

**Quero** que meus dados estejam seguros

**Para que** eu confie no sistema

---

# ÉPICO 9 — Usabilidade e Performance

### US22 — Interface responsiva

**Como** usuário

**Quero** acessar em qualquer dispositivo

**Para que** tenha boa experiência

### US23 — Performance

**Como** usuário

**Quero** respostas rápidas (até 3s)

**Para que** o sistema seja eficiente

# Épico 10 — Autenticação e Conta

### US23 — Login com conta Gov.br

**Como** cidadão brasileiro

**Quero** fazer login no aplicativo utilizando minha conta Gov.br

**Para que** eu possa acessar funcionalidades personalizadas com segurança.

### US24 — Redirecionamento seguro pós-login

**Como** usuário do aplicativo

**Quero** ser redirecionado de forma segura de volta ao app após o login com Gov.br

**Para qu**e minha sessão seja corretamente iniciada.

### US25 — Persistência de sessão após login

**Como** usuário autenticado

**Quero** permanecer logado no app mesmo após fechá-lo

**Para que** eu não precise realizar o login novamente com frequência.

### US26 — Identificação de perfil

**Como** administrador da plataforma

**Quero** que usuários tenham perfis distintos (ex: pesquisador, analista, gestor)

**Para** controlar níveis de acesso às funcionalidades

## Link para Requisitos no FIGMA:

[https://www.figma.com/board/Cv80eRJrI3DRN5TJEbaPTt/Squad-8-MDS?node-id=0-1&t=EwVNVa55V9XdCgGo-1](https://www.figma.com/board/Cv80eRJrI3DRN5TJEbaPTt/Squad-8-MDS?node-id=0-1&t=EwVNVa55V9XdCgGo-1)