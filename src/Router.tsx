import { Route, Routes } from 'react-router-dom'
import HomeBlog from './Pages/HomeBlog'
import PagePost from './Pages/PagePost'


function Router() {

  return (
    <Routes>
      <Route path='/' element={<HomeBlog/>}></Route>
      {/* <Route path='/PostIssue' element={<PagePost/>}></Route> */}
      <Route path='/PostIssue/:id'  element={<PagePost/>}></Route>
    </Routes>
  )
}

export default Router