import { Route, Routes } from 'react-router-dom'
import './App.css'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import About from './components/About'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
      <Header title="Review APP"/>
      <div className='container'>
        <Routes>
          <Route path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </>
          }/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
