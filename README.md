Teste feito por Joao Ricardo Cavali.

Para essa aplicação, decidi criar o formulário de registro de times e de competições em separado.

Nos formulário de registro dos times, criei um state para armazenas os times criados e um state para armazenar esses times em uma lista. Os dados são capturados de um formulário ainda simples e adicionado no final da lista. 
Infelizmente nessa parte não consegui fiunalizar a tempo devido a um problema ainda desconhecido para mim aonde quando se cria um novo time, ele modifica a lista inteira em vez de só adicionar no final dela. Devido a isso a aplicação toda não se tornou tão prática ainda.

Os times criados aparecem embaixo do formulário de registro.

Quanto as competições, segui uma linha parecida aonde um formulário simples captura os dados e adiciona a competição em uma lista de competições. Também devido a falta de tempo, não consegui implementar a lista de times para vinculação ao campeonato direto na criação, como foi minha idéia. Imagino na verdade que devo utilizar Redux nessa parte, já que preciso que os dados do state de lista de times fique disponível para as competições e eles não são filhos um do outro.

Ainda não implementar uma lógica de jogo, aonde em uma nova página a tabela estaria visível a todos com as pontuações de cada partida podendo serem atualizadas ali mesmo, e criando-se o alerta em verde quando houvesse um vencedor imediato, como solicitado no teste.

Design, layout, CSS estão nos meus planos para essa aplicação também.