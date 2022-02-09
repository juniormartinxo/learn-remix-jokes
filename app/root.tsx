import { LiveReload, Outlet } from 'remix'

export default function App() {
  return (
    <html lang='pt-br'>
      <head>
        <meta charSet='utf-8' />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}
