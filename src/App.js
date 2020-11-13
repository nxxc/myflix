import './App.scss';
import Row from './Row.js';
import requests from './requests.js';
import Banner from './Banner.js';
import Nav from './Nav.js';

function App() {
    return (
        <div className='App'>
            <Nav />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending}></Row>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}></Row>
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            ></Row>
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            ></Row>
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            ></Row>
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            ></Row>
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            ></Row>
        </div>
    );
}

export default App;
