import '../styles/globals.css'
import { DataContext } from '../context/Context'

function MyApp({ Component, pageProps }) {
  return (
    <DataContext>
      <Component {...pageProps} />
    </DataContext>
  )
}

export default MyApp
