import './App.css'
import { Avatar } from './components/avatar'
import { Reseaux } from './components/Reseaux'

function App() {
 

  return (
    <>
    <div className='min-h-screen flex items-center justify-between'>
    <div className='ml-6'>
    <Avatar/>
    </div>
    <div className='mr-6'>
    <Reseaux/>
    </div>
    </div>
    
    </>
  )
}

export default App
