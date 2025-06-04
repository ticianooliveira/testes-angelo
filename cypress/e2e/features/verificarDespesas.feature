#language: pt
Funcionalidade: Verificar Despesas

Cenário: Verificar se a página de Despesas está acessível
  Dado que eu acesso o site de transparência de João Pessoa
  Quando eu clico no botão de Despesas
  Então devo ser redirecionado para a página de Despesas
  E a página deve conter o texto "Despesas - Quadro Geral"
  Então devo clicar no botão "Pesquisar"
  E devo ver na tabela de despesas a função "ADMINISTRACAO"  