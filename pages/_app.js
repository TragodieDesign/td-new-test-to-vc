import '../styles/globals.css'
import {ThemeProvider} from next/theme

function MyApp({ Component, pageProps }) {
  return  (
  <ThemeProvider enableSystem={true} attribute="class"> 
    Component {...pageProps} 
  </ThemeProvider> 
  );
}

export default MyApp
