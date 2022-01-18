import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/Shared/NavigationBar';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TVSeries from './Pages/TVSeries';
import WatchMovie from './Pages/WatchMovie';
import WatchDetails from './Pages/WatchDetails';
import styled from 'styled-components';
import Footer from './Components/Shared/Footer';
import WatchTVSeries from './Pages/WatchTVSeries';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Meta from './Components/Meta';

const AppStyle = styled.div`
  background-color: #02080f;
`

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          console.log(response.json())
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <AppStyle>
      <Meta title='Cinema App By HL' description='Movies and Tv Series free' />
      <NavigationBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/details/:media_type/:id" element={<WatchDetails />} />
        <Route path='/:media_type/:id' element={user ? <WatchMovie /> : <Login />} />
        <Route path='/:type/:id/season=:season_id/episode=:episode_id' element={<WatchTVSeries />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </AppStyle>
  );
}

export default App;
