import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/task-list' element={<TaskList/>}></Route>
      <Route path='/create-task' element={<CreateTask/>}></Route>
      <Route path='profile' element={<Profile/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
