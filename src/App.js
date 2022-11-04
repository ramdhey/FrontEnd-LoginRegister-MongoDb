import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Footer } from './Komponen/Footer';
import { NavBar } from './Komponen/NavBar';
import { Login } from './Screen/Login';
import { Register } from './Screen/Register';





import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';



function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <PrivateRoutes/>
      <PublicRoutes/>
      
      {/* <Login/> */}
      {/* <Register/> */}
      <Footer/>
    </div>
  );
}

export default App;
