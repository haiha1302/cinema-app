import { Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/Shared/NavigationBar';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TVSeries from './Pages/TVSeries';
import Watch from './Pages/Watch';
import WatchDetails from './Pages/WatchDetails';
import styled from 'styled-components';
// import SeasonsTV from './Components/Shared/SeasonsTV';

const AppStyle = styled.div`
  background-color: #02080f;
`

function App() {
  return (
    <AppStyle>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/details/:type/:id" element={<WatchDetails />} />
        <Route path='/:type/:id' element={<Watch />} />
        {/* <Route path='/:type/seasons/:id' element={<SeasonsTV />} /> */}
      </Routes>
    </AppStyle>
  );
}

export default App;
