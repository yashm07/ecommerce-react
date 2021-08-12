import Product from "./Product/Product";
import Row from "react-bootstrap/Row";

import image from "./Product/testimage.jpeg";

// For now, using same image change when connecting to database

const DUMMY_DATA = [
  {
    id: "p1",
    name: "Keyboard",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 29.99,
    image: image,
  },
  {
    id: "p2",
    name: "Arduino",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 59.99,
    image: image,
  },
  {
    id: "p3",
    name: "Batteries",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 7.99,
    image: image,
  },
  {
    id: "p4",
    name: "Mouse",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 29.99,
    image: image,
  },
  {
    id: "p5",
    name: "Jumper Wires",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 10.99,
    image: image,
  },
  {
    id: "p6",
    name: "Motors",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 14.99,
    image: image,
  },
];

// ADD IN IMAGES
// Get rid of ul if not using li

const AvailableProducts = () => {
  return (
    <section>
      <Row xs={1} md={2} lg={3} className="g-4">
        {DUMMY_DATA.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </Row>
    </section>
  );
};

export default AvailableProducts;
