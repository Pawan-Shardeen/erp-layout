import { Route, Routes } from 'react-router-dom';
import './assets/css/common.css';
import JqueryTable from './components/JqueryTable/JqueryTable';
import Table from './components/Table/Table';
import MainContainer from './layouts/Main/MainContainer';
import Home from './pages/Home/Home';
import Login from './pages/UserLogin/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainContainer />} >
          <Route path='/' element={<Home />}>
            <Route path='/' element={<h1>Default</h1>} />
            <Route path='table' element={<Table />} />
            <Route path='jquery-datatable' element={<JqueryTable />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
