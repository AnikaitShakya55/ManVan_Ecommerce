import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./HomePage.module.css";
import { Row, Col } from "react-bootstrap";
import BootStrapSlider from "../Layout/BootStrapSlider/BootStrapSlider";
import { Image } from "react-bootstrap";

const HomePage = () => {
  const history = useHistory();

  const viewMore = () => {
    history.push("/products");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bootStrapSliderContainer}>
        <BootStrapSlider />
      </div>
      <div className={styles.projectGlimpseContainer}>
        <h1 className={styles.glimpseHeading}>
          {" "}
          Discover Our Latest Collection
        </h1>
        <p className={styles.glimpseSubheading}>
          Explore our latest collection of trendy and fashionable clothing,
          designed to reflect your unique style and elevate your wardrobe
        </p>

        <div className={styles.projectGlimpseScroll}>
          <img
            src="https://images.pexels.com/photos/3375424/pexels-photo-3375424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Latest Collection 1"
            className={styles.projectGlimpseImage}
          />
          <img
            src="https://images.pexels.com/photos/8107218/pexels-photo-8107218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Latest Collection 2"
            className={styles.projectGlimpseImage}
          />
          <img
            src="https://images.pexels.com/photos/2868266/pexels-photo-2868266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Latest Collection 3"
            className={styles.projectGlimpseImage}
          />
          <img
            src="https://images.pexels.com/photos/3739943/pexels-photo-3739943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Latest Collection 4"
            className={styles.projectGlimpseImage}
          />

          <img
            src="https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Latest Collection 4"
            className={styles.projectGlimpseImage}
          />
          <img
            src="https://images.pexels.com/photos/10250614/pexels-photo-10250614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Latest Collection 4"
            className={styles.projectGlimpseImage}
          />
          <img
            src="https://images.pexels.com/photos/11021985/pexels-photo-11021985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Latest Collection 4"
            className={styles.projectGlimpseImage}
          />
        </div>
        <button className={styles.viewMoreButton} onClick={viewMore}>
          SHOP NOW
        </button>
      </div>

      <div className={styles.offer_container}>
        <div className={styles.offer_header}>
          <h2 className={styles.offer_heading}>SPECIAL OFFERS!</h2>
          <p className={styles.offer_p}>
            Unlock unbeatable discounts and elevate your style game with our
            curated selection of men's fashion essentials. Sign up for our
            newsletter to stay in the loop and enjoy even more savings on your
            next purchase!
          </p>
        </div>

        <div className={styles.offer_grid}>
          <div className={styles.offer_card}>
            <img
              src="https://logan.nnnow.com/content/dam/nnnow-project/31-oct-2023/12OCT23-AD-BP-PAYDAY-APP.jpg"
              alt="Summer Sale"
              className={styles.offer_image}
            />
            <div className={styles.offer_info}>
              <h3>Summer Sale</h3>
              <p>
                Enjoy up to 50% off on select swimwear, shorts, and sunglasses.
              </p>
              <button className={styles.offer_btn} onClick={viewMore}>
                Shop Now
              </button>
            </div>
          </div>

          <div className={styles.offer_card}>
            <img
              src="https://logan.nnnow.com/content/dam/nnnow-project/15-apr-2024/16APR24-SummerShirts-Upto55off-MLP-TB-Mob.jpg"
              alt="Flash Deal"
              className={styles.offer_image}
            />
            <div className={styles.offer_info}>
              <h3>Flash Deal</h3>
              <p>
                Save 30% on all jackets and coats. Limited quantities available.
              </p>
              <button className={styles.offer_btn} onClick={viewMore}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeContainer}>
        <div className={styles.homeSection}>
          <h1 className={styles.homeHeading}>
            Elevate Your Style with Our Fashion Trends
          </h1>
          <h3 className={styles.homeSubheading}>
            Explore our latest collection of trendy and fashionable clothing,
            designed to reflect your unique personality and style. From casual
            wear to formal attire, we have everything you need to make a
            statement.
          </h3>
          <img
            src="https://cdn.shopify.com/s/files/1/0601/1476/4025/files/02_f7090a03-e070-4027-82f6-d912c2dff2b8.jpg?v=1704778976"
            alt="Fashion Trends"
            className={styles.homeImage}
          />
        </div>
      </div>

      <Row className="my-5 values-container">
        <Row className="my-4">
          <Col>
            <h2 className="text-center">Meet Our Team</h2>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={4} className="text-center team-member">
            <Image
              src="https://img.freepik.com/free-photo/man-with-beard-shirt-that-says-word-it_1340-40384.jpg?t=st=1714056261~exp=1714059861~hmac=c88d3f1f4c90a67b0a2b11bf5683a5d9731aa7a411f74c70ed9266dcd5c45fad&w=740"
              roundedCircle
              fluid
              style={{ height: "200px", width: "200px" }} // Set height and width here
            />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
            <p>
              John is the visionary behind ManVan. With a passion for fashion
              and a drive for innovation, he leads our team to new heights.
            </p>
          </Col>
          <Col md={4} className="text-center team-member">
            <Image
              src="https://img.freepik.com/premium-photo/man-with-beard-brunette-business-suit-jacket-white-shirt-tie-poses-blue-background-business-style-clothing_396607-57258.jpg?w=740"
              roundedCircle
              fluid
              style={{ height: "200px", width: "200px" }} // Set height and width here
            />
            <h4>Jane Smith</h4>
            <p>Lead Designer</p>
            <p>
              Jane brings creativity and flair to everything she touches. With
              her keen eye for design, she ensures our products look as
              beautiful as they perform.
            </p>
          </Col>
          <Col md={4} className="text-center team-member">
            <Image
              src="https://img.freepik.com/free-photo/smiling-businessman-with-arms-crossed_329181-678.jpg?t=st=1714056304~exp=1714059904~hmac=6215856d07482fdc3fdaabcb925169f7f0d5bf12aa1a4359b9bee09155a07d3f&w=740"
              roundedCircle
              fluid
              style={{ height: "200px", width: "200px" }} // Set height and width here
            />
            <h4>Mike Johnson</h4>
            <p>Head of Marketing</p>
            <p>
              Mike is the driving force behind our marketing strategy. With his
              innovative ideas and strategic thinking, he ensures ManVan reaches
              its audience.
            </p>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default HomePage;
