
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'
import ContextBlogGit from './context/ContextBlogGit'


function App() {

  return (
    <>
     <BrowserRouter>
        <ContextBlogGit>
          <Router />
        </ContextBlogGit>
    </BrowserRouter>
    </>
  )
}

export default App
