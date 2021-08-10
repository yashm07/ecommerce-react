const DUMMY_DATA = [
  {
    id: "p1",
    name: "Keyboard",
    price: 29.99,
  },
  {
    id: "p2",
    name: "Arduino",
    price: 59.99,
  },
  {
    id: "p3",
    name: "Batteries",
    price: 7.99,
  },
  {
    id: "p4",
    name: "Mouse",
    price: 29.99,
  },
  {
    id: "p5",
    name: "Jumper Wires",
    price: 10.99,
  },
  {
    id: "p6",
    name: "Motors",
    price: 14.99,
  },
];

// ADD IN IMAGES

const AvailableProducts = () => {
  return (
    <section>
      <ul>
        {DUMMY_DATA.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableProducts;
