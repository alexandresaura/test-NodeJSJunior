# contele js-junior back-end

## Como iniciar o projeto

Para rodar a aplicação é necessário primeiramente instalar as dependências e criar um banco de dados postgres.
Após isso, deve-se criar uma arquivo chamado `ormconfig.json` no diretório raiz, nele deve estar todas as informações que estão presentes no arquivo `ormconfig.example.json`, e além disso, deve ser inseridos as informações sobre o banco de dados, como usuário, senha e nome do banco de dados.
Com isso, podemos digitar no terminal `yarn|npm typeorm migration:run` para ser criado no banco de dados as tabelas necessárias e os dados préviamente inseridos.
E para finalizar, só necessitaremos rodar o comando `yarn/npm start` no terminal.

## Como testar o projeto

Para testar o projeto é somente necessário instalar as dependências e rodar o comando `yarn/npm test` no terminal.
