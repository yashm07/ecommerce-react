import classes from "./BackgroundImage.module.css";
import background from "../../assets/background.jpeg";
import Image from "react-bootstrap/Image";

const BackgroundImage = () => {
  return <Image src={background} id={classes.image} />;
};

export default BackgroundImage;
