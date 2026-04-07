# Estudo Git / GitHub

## Conceito geral

Git é um sistema de controle de versão que registra as alterações feitas no código ao longo do tempo. Isso significa que, em vez de trabalhar apenas com a versão mais recente de um projeto, é possível acompanhar toda a sua evolução, entender o que foi modificado, quando foi modificado e por quem. Esse tipo de controle é essencial no desenvolvimento de software, porque erros acontecem e mudanças são constantes.

O GitHub entra como uma extensão desse processo. Enquanto o Git funciona localmente, no computador do desenvolvedor, o GitHub permite armazenar esse repositório na internet. Isso facilita o compartilhamento, o trabalho em equipe e também funciona como uma forma de backup do projeto.

## Como o Git funciona na prática

O funcionamento do Git gira em torno do registro de mudanças. Durante o desenvolvimento, arquivos são alterados constantemente, mas nem toda alteração precisa ser salva imediatamente. O Git permite selecionar exatamente quais mudanças devem ser registradas.

Quando essas mudanças são salvas, cria-se um commit. O commit representa um ponto específico na evolução do projeto, como se fosse um marco. Ao longo do tempo, vários commits formam uma linha de histórico que mostra toda a construção do código.

Esse modelo é importante porque permite voltar no tempo se algo der errado, comparar versões diferentes e entender a lógica por trás das alterações feitas.

## Estrutura e histórico do projeto

Diferente de um simples “salvar arquivo”, o Git organiza o projeto como uma sequência de versões conectadas. Cada commit guarda o estado do projeto naquele momento, o que garante mais segurança durante o desenvolvimento.

Isso significa que o desenvolvedor pode testar ideias, fazer mudanças mais arriscadas e, se necessário, voltar para uma versão anterior sem grandes problemas. Esse controle reduz bastante o risco de perda de trabalho e facilita a manutenção do código.

## Organização com branches

Uma das ideias mais importantes do Git é a possibilidade de trabalhar com branches. Em vez de todo mundo alterar o mesmo código diretamente, é possível criar ramificações para desenvolver partes específicas do projeto.

A branch principal (geralmente chamada de main) representa a versão mais estável. A partir dela, novas branches podem ser criadas para implementar funcionalidades, corrigir erros ou testar mudanças. Isso permite que o desenvolvimento aconteça de forma mais organizada, sem comprometer o funcionamento do projeto principal.

Depois que o trabalho em uma branch é concluído, essas alterações podem ser integradas novamente ao projeto principal.

## Integração e conflitos

A integração entre diferentes partes do código acontece por meio do merge. Esse processo junta alterações feitas em diferentes branches.

Na maioria dos casos, o Git consegue fazer essa junção automaticamente. No entanto, quando duas alterações afetam o mesmo trecho do código, ocorre um conflito. Nesses casos, o desenvolvedor precisa analisar a situação e decidir qual versão deve permanecer.

Esse tipo de situação é comum em projetos com várias pessoas trabalhando ao mesmo tempo, e saber lidar com conflitos é parte importante do uso do Git.

## Papel do GitHub

O GitHub amplia o uso do Git ao permitir que o projeto seja acessado remotamente. Ele centraliza o código, o histórico de alterações e facilita a colaboração entre desenvolvedores.

Além disso, o GitHub organiza o fluxo de trabalho por meio de funcionalidades como Pull Requests, que permitem revisar alterações antes de integrá-las ao projeto principal. Isso cria um processo mais estruturado, onde o código pode ser analisado, discutido e melhorado antes de ser incorporado.

## Fluxo de trabalho no dia a dia

No uso prático, o desenvolvimento com Git e GitHub segue um padrão relativamente claro. Primeiro, cria-se uma branch para trabalhar em uma tarefa específica. Em seguida, o desenvolvedor realiza alterações no código e registra essas mudanças por meio de commits.

Depois disso, as alterações são enviadas para o repositório remoto. Antes de serem incorporadas ao projeto principal, passam por revisão, o que ajuda a garantir qualidade e evitar erros. Só então essas mudanças são integradas ao código principal.

Esse fluxo organiza o trabalho e permite que várias pessoas contribuam ao mesmo tempo sem gerar desordem.

## Síntese

No fundo, o Git não é apenas uma ferramenta de comandos, mas um sistema para controlar e organizar mudanças no desenvolvimento de software. Ele permite manter um histórico confiável, trabalhar com mais segurança e facilitar a colaboração entre desenvolvedores. O GitHub complementa esse processo ao oferecer um ambiente onde esse trabalho pode ser compartilhado, revisado e integrado de forma estruturada.

## Referência:

https://git-scm.com/book/pt-br/v2
