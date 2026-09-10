
import { Route, Routes } from 'react-router-dom';
import './App.css';

import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/*' element={<CustomerRoutes/>}></Route>
      <Route path='/admin/*' element={<AdminRouters/>}></Route>
    </Routes>

    
    </div>
  );
}

export default App;
