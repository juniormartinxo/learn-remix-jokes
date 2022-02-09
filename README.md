# Estudando REMIX

Para iniciar os estudos irei realizar o tutorial proposto no site do Remix - [Jokes App](https://remix.run/docs/en/v1/tutorials/jokes)

## Motivação

---

Testar para ver se é a melhor opção para criar meu site pessoal utilizando REMIX.

## Estrutura do projeto REMIX

---

- `app/` - todo código vai aqui
- `app/entry.client.tsx` - usado para dar um React.hydrate() nos componentes
- `app/entry.server.tsx` - usado para renderizar nosso React app para uma string/ stream e enviar uma resposta rápida ao cliente
- `app/root.tsx`- Aqui fica o componente Root
- `app/routes/` - O REMIX utiliza os arquivos deste diretório para criar as urls da aplicação
- `public` - aqui estarão os arquivos estáticos
- `remix.config.js`- Arquivo de configurações do REMIX

## Rotas

---

É possível criar rotas no REMIX tanto no arquivo `remix.config.js`, quanto através do meio do sistema de arquivos. Isso é chamado de `"file-based routing"`.

Cada arquivo inserido no diretório `app/routes/`será chamado pelo `Route Module` e se transformará em uma rota.

## Outlet

---

O `outlet` é um componente que deve ser colocado em uma elemento de rota pai para carregar elementos de rota filhos.
Outlet permite que sejam criadas várias urls filhas, para isto basta criar um componente na raiz da pasta `routes` que possua o componente Outlet e depois criar um diretório com o mesmo nome deste arquivo, exemplo:

```
// Para a rota pai
app/routes/jokes.tsx

// Para as rotas filhas devem ser criados os arquivos dentro de
app/routes/jokes/*

// Para criar rotas parametrizadas
app/routes/jokes/$jokeId
```

Para criar rotas parametrizadas devem ser criados arquivos dentro dos diretórios com o símbolo sifrão `($)` na frente.

## Estilos

---

Você pode criar uma folha de estilos para cada rota ou uma geral a diferença é quando e onde elas irão carregar. Para criar estilos exclusivos para uma rota basta adicioná-lo apenas onde se quer que aquele estilo funcione, caso contrário adicione nas rotas pais. Lembre-se sempre que no arquivo `root` deve ser inserido entre as tags `head` o componente `<Links />`. Exemplo:

```
<head>
    <meta charSet='utf-8' />
    <title>Remix: So great, it's funny!</title>
    <Links />
</head>
```

### LinksFunctions()

`LinksFunctions` propõe uma função que retorna um objeto com várias folhas de estilo que serão adicionadas em cascata na página que está sendo chamada.
