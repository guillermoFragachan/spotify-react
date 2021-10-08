
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './components/styles/style.css';
import './components/js/player.js'
import './components/js/strivify.js';
import './components/js/player.js';
import './components/js/strivify.js';
import SongNav from './components/SongNav';


import './App.css';

function App() {
  return (
   <>
   
   <Container fluid className='class="mx-0 px-0 d-flex flex-column"'>
      <Row>


      <Sidebar/>
      <Content/>
      <SongNav/>
      </Row>




   </Container>
   
   
   
   
   </>
  );
}

export default App;
