// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to the Home Page</h1>
//     </div>
//   );
// }

// export default Home;

import React, { useRef } from 'react';
import './Home.css'; // You'll need to create this CSS file
import ItemDetails from './ItemDetails';
import FeaturedItem from './FeaturedItem';


const KrishnaShoppingMall = () => {
  const featuredItems = [
    { id: 1, name: 'Elegant Saree', price: '₹1999', image: 'https://media.samyakk.com/pub/media/catalog/product/s/r/sr27311-d.jpg',},
    { id: 2, name: 'Smart Watch', price: '₹2999', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSoltBGVAh1_HxeWsZYyyfz8WpynMcHSaT-_ToQZxs8yl7WgOaWrhKq2XyyI4VLPE4ClfbCVp8ObnoO3Ehko6kpCsQHDnH-S4hCxttttoshWVIctLcbZb-U8A' },
    { id: 3, name: 'Designer Kurta', price: '₹1499', image: 'https://cdn.editorji.com/6565a9318a14e_1.png' },
    { id: 4, name: 'Leather Handbag', price: '₹2499', image: 'https://w0.peakpx.com/wallpaper/748/156/HD-wallpaper-mahesh-babu-prince-mahesh-babu-sarileru-nekkevaru-ssmb-superstar-mahesh-babu.jpg' },
    { id: 5, name: 'Wireless Earbuds', price: '₹1999', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/s/a/6/earbuds-bt-5-3-wireless-tws-earhook-headphone-buds-with-mic-life-original-imagp2bhmv2q8h3h.jpeg?q=90&crop=false' },
    { id: 1, name: 'Elegant Saree', price: '₹1999', image: 'https://media.samyakk.com/pub/media/catalog/product/s/r/sr27311-d.jpg' },
    { id: 2, name: 'Smart Watch', price: '₹2999', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSoltBGVAh1_HxeWsZYyyfz8WpynMcHSaT-_ToQZxs8yl7WgOaWrhKq2XyyI4VLPE4ClfbCVp8ObnoO3Ehko6kpCsQHDnH-S4hCxttttoshWVIctLcbZb-U8A' },
    { id: 3, name: 'Designer Kurta', price: '₹1499', image: 'https://cdn.editorji.com/6565a9318a14e_1.png' },
    { id: 4, name: 'Leather Handbag', price: '₹2499', image: 'https://w0.peakpx.com/wallpaper/748/156/HD-wallpaper-mahesh-babu-prince-mahesh-babu-sarileru-nekkevaru-ssmb-superstar-mahesh-babu.jpg' },
    { id: 5, name: 'Wireless Earbuds', price: '₹1999', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/s/a/6/earbuds-bt-5-3-wireless-tws-earhook-headphone-buds-with-mic-life-original-imagp2bhmv2q8h3h.jpeg?q=90&crop=false' },
    // Add more items as needed
  ];

  const scrollToFeaturedItems = () => {
    featuredItemsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredItemsRef = useRef(null);

  return (
    <div className="krishna-mall">
      <main>
        <section className="hero">
          <h2>Welcome to Krishna Shopping Mall</h2>
          <p>Discover a World of Fashion and Lifestyle</p>
          <button className="cta-button" onClick={scrollToFeaturedItems}>Shop Now</button>
        </section>

        <section className="featured-items" ref={featuredItemsRef}>
          <h2>Featured Items</h2>
          <div className="item-scroll">
            {featuredItems.map((item) => (
              <div key={item.id} className="item-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section className="categories">
          <h2>Shop by Category</h2>
          <div className="category-list">
            <div className="category">Clothing</div>
            <div className="category">Electronics</div>
            <div className="category">Home & Living</div>
            <div className="category">Beauty</div>
          </div>
        </section>
      </main>

      <footer className="mall-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Krishna Shopping Mall - Your one-stop destination for all your shopping needs.</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@krishnamall.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2024 Krishna Shopping Mall. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default KrishnaShoppingMall;
