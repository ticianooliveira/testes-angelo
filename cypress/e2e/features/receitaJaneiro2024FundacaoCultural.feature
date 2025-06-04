#language: pt
Funcionalidade: Verificar se a página de receita da Fundação Cultural de João Pessoa está acessível
Cenário: Verificar se a página de receita da Fundação Cultural está acessível filtrando por janeiro de 2024
  Dado que eu acesso o site de transparência de João Pessoa
  Quando eu clico no botão de Receitas
  E devo clicar no dropdown "Entidade"
  E devo selecionar a opção "Fundação Cultural de João Pessoa"
  E devo clicar no dropdown "Ano"
  E devo selecionar a opção "2024"
  Então devo clicar no botão "Pesquisar"
  E devo ver na tabela de receitas a coluna "Valor Arrecadado"
