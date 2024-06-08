import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
  <div>
      <Navbar/>
      <div className='p-2'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg font-semibold mb-2  text-white'>HTML</h2>
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg font-semibold mb-2 text-white'>CSS</h2>
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg font-semibold mb-2 text-white'>Javascript</h2>
          </div>
        </div>
      </div>
  </div>
  )
}

export default App
