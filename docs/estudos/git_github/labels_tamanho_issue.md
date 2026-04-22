# Labels de Tamanho das Issues
## Objetivo

Definir um padrão de classificação das Issues do projeto utilizando labels de tamanho para facilitar:

- planejamento das sprints
- distribuição de tarefas
- identificação de complexidade
- previsibilidade de entrega
- divisão de tarefas grandes em subtarefas menores

## Padrão de Tamanhos

Cada Issue deverá receber uma label de tamanho:

| Label | Esforço | Tempo estimado | Complexidade |
| --- | --- | --- | --- |
| XS | Muito baixo | até 1 hora | simples |
| S | Baixo | 1 a 4 horas | pequena |
| M | Médio | 4 a 8 horas | moderada |
| L | Alto | 1 a 2 dias | complexa |
| XL | Muito alto | acima de 2 dias | muito complexa |

## Critérios para Classificação

### XS

Utilizar quando:

- ajuste simples
- correção visual pequena
- alteração pontual
- documentação curta

**Exemplo:** corrigir texto, alterar cor de botão, ajustar label.

### S

Utilizar quando:

- pequena implementação
- bug simples
- pequena melhoria

**Exemplo:** criar endpoint simples, ajustar validação.

### M

Utilizar quando:

- funcionalidade média
- integração simples
- alteração em múltiplos arquivos

**Exemplo:** criar formulário completo com validação.

### L

Utilizar quando:

- funcionalidade importante
- integração com banco/API
- impacto em várias partes do sistema

**Exemplo:** implementar autenticação.

### XL

Utilizar quando:

- tarefa muito grande
- alto risco técnico
- necessidade de divisão

**Exemplo:** módulo completo novo.

> Sempre que possível, uma Issue XL deve ser dividida em Issues menores, ou designada para mais de um integrante.
> 

## Cores

- XS: Verde claro
- S: Verde
- M: Amarelo
- L: Laranja
- XL: Vermelho

### Lógica visual

- verde = menor esforço
- amarelo = médio
- vermelho = maior esforço

Isso facilita a leitura rápida do backlog.

## Processo de Uso

Ao criar uma nova Issue:

1. Criar a Issue normalmente
2. Avaliar esforço estimado
3. Aplicar label de tamanho
4. Validar com a equipe se necessário
5. Se for XL, considerar quebrar em subtarefas ou designar mais integrantes

## Definição da Label

A definição da label será feita por:

- autor da Issue inicialmente
- revisada durante planning
- validada pela equipe na mesma cerimônia
