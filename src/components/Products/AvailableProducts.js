import Product from "./Product/Product";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import classes from "./AvailableProducts.module.css";

import { useEffect, useState } from "react";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        process.env.REACT_APP_DATABASE_URL + "Products.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setProducts(loadedProducts);
      setLoading(false);
    };

    fetchProducts().catch((error) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const spinner = loading && (
    <Spinner animation="border" role="status" className={classes.loading}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  const error = httpError && <p>{httpError}</p>;

  return (
    <section>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
        {spinner}
        {error}
      </Row>
    </section>
  );
};

export default AvailableProducts;
