# Estudando REMIX

Para iniciar os estudos irei realizar o tutorial proposto no site do Remix - [Jokes App](https://remix.run/docs/en/v1/tutorials/jokes)

### Motivação

Testar para ver se é a melhor opção para criar meu site pessoal utilizando REMIX.

### Estrutura do projeto REMIX

- `app/` - É aqui que vai todo o código do seu aplicativo Remix
- `app/entry.client.tsx` - Este é o primeiro bit do seu JavaScript que será executado quando o aplicativo for carregado no navegador. Usamos este arquivo para hidratar nossos componentes React.
- `app/entry.server.tsx` - Este é o primeiro bit do seu JavaScript que será executado quando uma solicitação atingir seu servidor. O Remix lida com o carregamento de todos os dados necessários e você é responsável por enviar de volta a resposta. Usaremos esse arquivo para renderizar nosso aplicativo React para uma `string/stream` e enviá-lo como nossa resposta ao cliente.
- `app/root.tsx` - É aqui que colocamos o componente raiz para nossa aplicação. Você renderiza o `<html>` elemento aqui.
- `app/routes/` - É aqui que todos os seus "módulos de rota" irão. O Remix usa os arquivos nesse diretório para criar as rotas de URL para seu aplicativo com base no nome dos arquivos.
- `public/` - É aqui que vão seus ativos estáticos (imagens/fontes/etc)
- `remix.config.js` - O Remix tem várias opções de configuração que você pode definir neste arquivo.

### Rotas

Dá pra criar rotas tanto pelo `remix.config.js`, ou pelo sistema de arquivos. Isso é chamado de "roteamento baseado em arquivo".
