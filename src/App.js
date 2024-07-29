import { Navigate, Outlet } from 'react-router-dom';
import './App.css';
import { useMyContext } from './components/MyContext';


function App() {
  const { isLogin } = useMyContext();

  return (
    <div className='w-screen h-screen flex'>
      {isLogin ? (
        <div>
          <Outlet/>
        </div>
      ) : (
        <Navigate to='/login'/>
      )}
    </div>
  )
}

export default App;
