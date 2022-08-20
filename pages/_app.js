import NavBarContextProvider from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NavBarContextProvider>
      <Component {...pageProps} />
    </NavBarContextProvider>
  )
}

export default MyApp
