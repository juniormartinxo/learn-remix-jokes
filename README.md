# Estudando REMIX

Para iniciar os estudos irei realizar o tutorial proposto no site do Remix - [Jokes App](https://remix.run/docs/en/v1/tutorials/jokes)

### Motivação

Testar para ver se é a melhor opção para criar meu site pessoal utilizando REMIX.

### Estrutura do projeto REMIX

`app/` - todo código vai aqui
`app/entry.client.tsx` - usado para dar um React.hydrate() nos componentes
`app/entry.server.tsx` - usado para renderizar nosso React app para uma string/ stream e enviar uma resposta rápida ao cliente
`app/root.tsx`- Aqui fica o componente Root
`app/routes/` - O REMIX utiliza os arquivos deste diretório para criar as urls da aplicação
`public` - aqui estarão os arquivos estáticos
`remix.config.js`- Arquivo de configurações do REMIX
