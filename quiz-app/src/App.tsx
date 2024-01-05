import { useEffect, useState } from 'react'
import Header from './components/header/index.tsx'
import { handleTheme } from './service/handleTheme.ts'
import './App.scss'

function App() {



  const imgUrl = [
    'icon-accessibility.svg',
    'icon-css.svg',
    'icon-html.svg',
    'icon-js.svg'
  ]

  const [mainTheme, setMainTheme] = useState<String>('light')

  useEffect(() => {

    setMainTheme(handleTheme.getPreferredTheme())
  
    
  }, [])

  function changeTheme(newTheme:string){
    setMainTheme(newTheme)
    handleTheme.setStoredTheme(newTheme);
  }
  
  /*
  TODO:
  1 - refazer a lógica do theme
  2 - o theme vai ser tratado no App.tsx
  3- cada componentirá herdar este theme do App.tsx, pois esta é a forma de fazer usando o useState e alterar a classe do container maior de toda a aplicação
 */
  

  return (
    <section className={`app-container ${mainTheme}`}>
    <Header callChangeTheme={changeTheme} />
      <h1>OK</h1>
    </section>
  )
}

export default App
