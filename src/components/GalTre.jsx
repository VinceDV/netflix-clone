import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
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
      <Container fluid id="carowTainer">
        <Row>
          <Col className="mt-3">
            <h1 className="text-start mb-4">Terza Galleria</h1>

            <Carousel className="carousel">
              <Carousel.Item interval={this.props.int} className="caroItem">
                <Container fluid>
                  <Row>
                    {this.state.isError && (
                      <Alert variant="danger">
                        Qualcosa è andato storto :(
                      </Alert>
                    )}
                    {this.state.isLoading && (
                      <div className="text-center">
                        <Spinner
                          animation="border"
                          role="status"
                          variant="success"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </div>
                    )}
                    {this.state.movies.slice(0, 6).map((el) => {
                      return (
                        <Col sm={6} md={4} lg={2} key={el.imdbID}>
                          <Card className="carte">
                            <Card.Img width={100} variant="top" src={el.Poster} />
                            <Card.Body className="bg-dark">
                              <Card.Title className="text-truncate">{el.Title}</Card.Title>
                              <Card.Text>{el.Year}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item interval={this.props.int} className="caroItem">
                <Container fluid>
                  <Row>
                    {this.state.movies.slice(6, 10).map((el) => {
                      return (
                        <Col sm={6} md={4} lg={2} key={el.imdbID}>
                          <Card className="carte">
                            <Card.Img variant="top" src={el.Poster} />
                            <Card.Body className="bg-dark">
                              <Card.Title className="text-truncate">{el.Title}</Card.Title>
                              <Card.Text>{el.Year}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GalTre;
