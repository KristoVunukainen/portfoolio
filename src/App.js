
import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import Worked from './pages/Worked';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <div className="App">
      <img className='main-picture' src="https://www.wrc.com/images/redaktion/Season-2023-NEWS/WRC/January/180123_At-Season-Launch_Cars_04_83dce_f_1400x788.jpg" alt="" />
      <div className='main-text'><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quae. Facilis tempore!</h1></div>
      <div className='rectangle'></div>

      <div className='navigation-pictures'>
        <Link className='main-link' to="worked">
        <img src="https://www.onmanorama.com/content/dam/mm/en/news/business/images/2023/1/29/elephant-padayappa.jpg.transform/576x300/image.jpg" alt="" />
        <p>Tööde lehele</p>
        </Link>
        <Link className='main-link' to="hobbies">
        <img src="https://images.pexels.com/photos/761437/pexels-photo-761437.jpeg?cs=srgb&dl=pexels-peter-holmes-761437.jpg&fm=jpg" alt="" />
        <p>Hobide lehele</p>
        </Link>
        <Link className='main-link' to="courses">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/CB4E/production/_93264025_tigers.jpg" alt="" />
        <p>Kursuste lehele</p>
        </Link>
      </div>
      <div className='video'>
      <iframe width= "560" height="315" src="https://youtu.be/UJBC10MJpHU?t=122" title='Ollie' frameborder="100"></iframe>
      </div>
      
      <Routes>
        <Route path='worked' element={ <Worked />}/>
        <Route path='hobbies' element={ <Hobbies />}/>
        <Route path='courses' element={ <Courses />}/>
      </Routes>
      
    
  
    </div>
  );
}

export default App;
