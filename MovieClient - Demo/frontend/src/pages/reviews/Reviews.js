import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../../components/reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  //Have movieId
  const revText = useRef();

  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId); //sets the movie object
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;
    //TODO
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="movie-poster" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
              </>
            );
          })}
        </Col>
        <Row>
          <Col></Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Reviews;
