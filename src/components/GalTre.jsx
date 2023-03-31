import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Component } from "react";
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

class GalTre extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  getMovies = async () => {
    try {
      let response = await fetch(
       " https://www.omdbapi.com/?apikey=32e12139&s=indiana%20jones"
        )
      if (response.ok) {
        let data = await response.json()
        console.log(data.Search)
        this.setState({
          movies: data.Search,
          isLoading: false,
        })
      } else {
        console.log('errore nella chiamata')
        this.setState({
          isLoading: false,
          isError: true,
        })
      }
    } catch (error) {
      console.log(error)
      this.setState({
        isLoading: false,
        isError: true,
      })
    }
  }

  componentDidMount() {
    this.getMovies()

  }

  render() {
  return (
    <Container className="mt-5 mx-4">
      <h1 className="text-start">Terza Galleria</h1>
      {this.state.isError && (
              <Alert variant="danger">Qualcosa è andato storto :(</Alert>
            )}
            {this.state.isLoading && (
              <div className="text-center">
                <Spinner animation="border" role="status" variant="success">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
      <Row className="mt-5">
    {this.state.movies.map(movie => (
      <Col sm={6} md={4} lg={3} key={movie.imdbID}>
        <Card>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body className="bg-dark">
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Year}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
    </Container>
  );
}}

export default GalTre;
