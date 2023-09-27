import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './Requests';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
   
    <Row isPoster={true} title="NetFlix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
    <Row title="Trending in India" fetchUrl={requests.fetchTrending}></Row>
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}></Row>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
    <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
    <Row title="Documentires" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;