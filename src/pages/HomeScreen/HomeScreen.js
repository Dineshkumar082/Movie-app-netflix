import React from 'react'
import "./HomeScreen.css"
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import requests from '../../helpers/requests'
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>
        <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen