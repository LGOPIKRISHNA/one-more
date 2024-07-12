import React from 'react';
import './Categories.css';
import Quckacs from './Quck-acs';

const CategoriesPage = () => {
  const categories = [
    { id: 1, name: 'Traditional Wear', image: 'https://media.samyakk.com/pub/media/catalog/product/s/r/sr27173-g.jpg', description: 'Elegant sarees, kurtas, and ethnic ensembles' },
    { id: 2, name: 'Western Clothing', image: 'https://images.meesho.com/images/products/99790396/onstd_512.jpg', description: 'Trendy dresses, tops, jeans, and more' },
    { id: 3, name: 'Electronics', image: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/6d2c5b68-1c8c-4b44-b184-d90a0d7beab4/d5b2d3f1-ca9e-4d70-80e5-a43e5680ee37.png', description: 'Latest gadgets, smartphones, and appliances' },
    { id: 4, name: 'Home Decor', image: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2019/02/16170944/decorate-rooms-like-pooja-room-bedroom-living-room-using-lights-jaali-accents.jpg', description: 'Stylish furnishings and decorative items' },
    { id: 5, name: 'Beauty & Personal Care', image: 'https://cdn.open-pr.com/T/2/T206450182_g.jpg', description: 'Cosmetics, skincare, and grooming products' },
    { id: 6, name: 'Footwear', image: 'https://www.tresmode.com/cdn/shop/articles/best-travel-footwear-explore-your-wanderlust-with-tresmode-tresmode_2b8eea43-658a-4fbe-a317-989bad82cf57.jpg?v=1720373553', description: 'Shoes, sandals, and traditional footwear' },
    { id: 7, name: 'Jewelry', image: 'https://imageio.forbes.com/specials-images/imageserve/663529f298332aa13656c237/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds', description: 'Exquisite gold, silver, and fashion jewelry' },
    { id: 8, name: 'Books & Stationery', image: 'https://qph.cf2.quoracdn.net/main-qimg-737e65e2b67fd21bc97f4dd0c602a7da-lq', description: 'Wide range of books and office supplies' },
    { id: 9, name: 'Sports & Fitness', image: 'https://static.vecteezy.com/system/resources/previews/016/267/905/non_2x/fitness-inventory-gym-accessories-sport-equipment-dumbbells-fitness-tracker-sports-bag-sportswear-mat-healthy-lifestyle-concept-vector.jpg', description: 'Sports equipment and fitness gear' },
    { id: 10, name: 'Kids & Baby', image: 'https://m.media-amazon.com/images/I/613yNNItGmS.jpg', description: 'Clothing, toys, and essentials for children' },
  ];

  return (
    <div className="krishna-mall categories-page">


      <main className="categories-content">
        <h2>Shop by Category</h2>
        
        <section className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
          ))}
        </section>

        <section className="featured-brands">
          <h3>Featured Brands</h3>
          <div className="brand-logos">
            {/* Add brand logos here */}
            <img src="https://images.squarespace-cdn.com/content/v1/5ba250f03c3a53c7878a4afa/6001923c-e564-40b0-915f-091be10bdb4b/Nike+logo.jpg" alt="Brand 1" />
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Aqua-themed-apple-logo.png" alt="Brand 2" />
            <img src="https://c8.alamy.com/comp/2B6KHTX/zara-collection-19-logo-2B6KHTX.jpg" alt="Brand 3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1024px-Samsung_Logo.svg.png" alt="Brand 4" />
          </div>
        </section>
      </main>

      <footer className="mall-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Quckacs/>
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

export default CategoriesPage;