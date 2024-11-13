import React from 'react'
import CategoryCard from '../Components/Category_Card';

const Home = () => {
  return (
    <div>
      {" "}
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <CategoryCard
          title="Poultry"
          text="Explore poultry items"
          link="/categories/poultry"
        />
        <CategoryCard
          title="Men"
          text="Explore men's products"
          link="/categories/men"
        />
        <CategoryCard
          title="Women"
          text="Explore women's products"
          link="/categories/women"
        />
        <CategoryCard
          title="Electronics"
          text="Explore electronics"
          link="/categories/electronics"
        />
      </div>
    </div>
  );
}

export default Home