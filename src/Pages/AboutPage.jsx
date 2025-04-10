import React from "react";

const AboutPage = () => {
  return (
    <div className="about mt-16 px-4 py-10 max-w-6xl mx-auto space-y-16">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://blog.swiggy.com/wp-content/uploads/2024/02/Hyderabadi-Biryani-1024x538.jpg"
          alt="Cooking passion"
          className="rounded-lg w-full md:w-1/2 order-1 md:order-1"
        />
        <div className="md:w-1/2 order-2">
          <h2 className="text-2xl font-semibold mb-2">Our Passion for Food</h2>
          <p className="text-gray-600">
            Welcome to our food recipe website! We are passionate about food and
            love sharing our favorite recipes with you. Our team is dedicated to
            curating dishes that not only taste amazing but are easy to make at
            home.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl font-semibold mb-2">
            Inspiring Every Home Cook
          </h2>
          <p className="text-gray-600">
            Our mission is to inspire home cooks of all levels to create
            delicious meals, explore new flavors, and enjoy the art of cooking
            with confidence and joy.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
          alt="Kitchen inspiration"
          className="rounded-lg w-full md:w-1/2 order-1 md:order-2"
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHz1oghCMfie_4AOsUF0JwofGnAItBiH-hKQ&s"
          alt="Healthy food"
          className="rounded-lg w-full md:w-1/2 order-1 md:order-1"
        />
        <div className="md:w-1/2 order-2">
          <h2 className="text-2xl font-semibold mb-2">Quality Ingredients</h2>
          <p className="text-gray-600">
            We believe that great meals start with fresh, quality ingredients.
            That’s why our recipes are crafted to use easy-to-find, wholesome
            items you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
