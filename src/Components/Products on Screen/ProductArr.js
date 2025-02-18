// ProductArr.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductModal from './ProductModal';
import classes from './ProductArr.module.css';


export const productsArr = [
  {
    id: "e1",
    title: "Blue Abstract Shirt",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/51zkKVzqlcL._SX522_.jpg",
    description:
      "A stylish blue abstract design shirt perfect for casual outings.",
  },
  {
    id: "e2",
    title: "LookMark Men's Shirt",
    price: 50,
    imageUrl: "https://m.media-amazon.com/images/I/71On2XSPuRL._SY741_.jpg",
    description:
      "A comfortable and trendy shirt, ideal for both casual and formal events.",
  },
  {
    id: "e3",
    title: "Dennis Lingo",
    price: 70,
    imageUrl: "https://m.media-amazon.com/images/I/61Xv6ytnYiL._SY741_.jpg",
    description: "A sophisticated shirt by Dennis Lingo with a sleek design.",
  },
  {
    id: "e4",
    title: "Poly Cotton",
    price: 100,
    imageUrl:
      "https://vestirio.com/cdn/shop/files/70_a7088fbc-7890-4587-ad22-c1e87bf27295_1800x1800.webp?v=1693564485",
    description:
      "A classic poly-cotton shirt offering both comfort and durability.",
  },
  {
    id: "e5",
    title: "Casual Shirt",
    price: 100,
    imageUrl:
      "https://vestirio.com/cdn/shop/files/01_42401b59-8b6a-4713-838d-5f8f0b3a90fa_1800x1800.webp?v=1693566025",
    description: "A versatile casual shirt suitable for everyday wear.",
  },
  {
    id: "e6",
    title: "Men's Slim Fit",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/91Zpf-G1BZL._SX569_.jpg",
    description: "A sleek and stylish slim-fit shirt for a modern, sharp look.",
  },
  {
    id: "e7",
    title: "Men's Slim Fit",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/81dszCJ0etL._SY741_.jpg",
    description:
      "A slim fit shirt that offers a tailored and contemporary appearance.",
  },
  {
    id: "e8",
    title: "Men's Slim Fit",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/717sO06y-NL._SY741_.jpg",
    description: "A simple yet stylish slim-fit shirt with a modern cut.",
  },
  {
    id: "e9",
    title: "Men's Slim Fit",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/618LbDYIVRL._SY741_.jpg",
    description:
      "A smart slim-fit shirt perfect for both work and casual events.",
  },
  {
    id: "e10",
    title: "Men's Slim Fit",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/61YQd1wdQBL._SY741_.jpg",
    description:
      "A versatile slim-fit shirt that enhances your style effortlessly.",
  },
  {
    id: "e12",
    title: "Lymio Casual Shirt for Men",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/71SNEa-l3xL._SY741_.jpg",
    description:
      "A comfortable and stylish casual shirt perfect for every occasion.",
  },
  {
    id: "e11",
    title: "Lymio Casual",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/71dInK15s1L._SX569_.jpg",
    description:
      "An easy-going, casual shirt ideal for a relaxed, everyday look.",
  },
  {
    id: "e13",
    title: "Men's Slim Fit",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/71kkSLQhcGL._SY741_.jpg",
    description: "A premium slim-fit shirt made for comfort and fashion.",
  },
  {
    id: "e14",
    title: "Printed Shirt (Mistry)",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/71FuWChOI7L._SY741_.jpg",
    description: "A unique printed shirt designed to stand out in any crowd.",
  },
  {
    id: "e15",
    title: "Men's Slim Fit",
    price: 100,
    imageUrl:
      "https://vestirio.com/cdn/shop/files/88_1800x1800.webp?v=1693564771",
    description: "A sharp and fitted shirt that adds an edge to your wardrobe.",
  },
  {
    id: "e16",
    title: "Billford Men Relaxed Waist",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/61SRj3IzD1L._SY741_.jpg",
    description:
      "A relaxed waist shirt with a comfortable fit, perfect for easy wear.",
  },
  {
    id: "e17",
    title: "KOTTY Men's Mid",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/41UWdsMNgcL._SY679_.jpg",
    description: "A mid-length shirt designed for style and comfort.",
  },
  {
    id: "e18",
    title: "Peter England Men's Polyester",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/51W5sfC4c6L._SY741_.jpg",
    description: "A classic polyester shirt with a crisp, professional look.",
  },
  {
    id: "e19",
    title: "Two Piece Black Solid",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/51xOEswRrDL._SX679_.jpg",
    description:
      "A two-piece black solid shirt offering a minimalist yet chic style.",
  },
];


const ProductArr = () => {
  return (
    <>
    <Container className={`${classes.Container} }`}>
      <Row className={classes.Row}>
        {productsArr.map((product, index) => (
          <Col key={index} className={classes.Col}>
            <ProductModal {...product} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default ProductArr;
