import { AnimateSharedLayout } from 'framer-motion';
import { createContext, useState } from 'react'
import '../styles/global.css'

export const Context = createContext();

export default function App({ Component, pageProps }) {

  const [state, setState] = useState(0);

  const upstate = () => {
    setState((prev) => {
      return ++prev;
    })
  }

  return (<Context.Provider
    value={{
      state: state,
      upState: upstate
    }}
  >
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  </Context.Provider>)
}
