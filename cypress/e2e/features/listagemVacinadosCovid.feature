#language: pt
Funcionalidade: Verificar se está retornando a listagem de pessoas que foram vacinadas contra a Covid-19
Cenário: Verificar se a página de listagem de vacinados está acessível
  Dado que eu acesso o site de transparência de João Pessoa
  Quando eu clico no botão de VACINAÇÃO COVID-19
  E devo clicar em "Lista de Vacinados" 
  Então devo ser redirecionado para a página de Vacinados
  E a página deve conter o texto "Lista de Vacinados contra COVID-19"   
  Então devo clicar no botão "Pesquisar"
  E devo ver na tabela de vacinados a coluna "Nome"