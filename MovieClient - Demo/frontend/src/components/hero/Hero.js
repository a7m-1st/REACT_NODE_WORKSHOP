import Carousel from "react-material-ui-carousel";
import "./Hero.css";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Hero = ({ movies }) => {
  //TODO

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {/* //TODO */}
      </Carousel>
    </div>
  );
};

export default Hero;
