import React from "react";

const recipes = [
  {
    title: "Classic Margherita Pizza",
    description: "A timeless favorite with fresh basil and mozzarella.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Creamy Alfredo Pasta",
    description: "Rich, cheesy, and full of flavor.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Spicy Chicken Curry",
    description: "A fiery blend of spices and tender chicken.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Fresh Greek Salad",
    description: "Crisp veggies, feta, and olives for a light meal.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Homemade Pancakes",
    description: "Fluffy and golden with maple syrup.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Garlic Butter Shrimp",
    description: "Savory shrimp sautéed in garlic butter.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Chocolate Lava Cake",
    description: "Warm, gooey chocolate in every bite.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Avocado Toast",
    description: "Simple, tasty, and healthy breakfast option.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
  {
    title: "Vegetable Stir Fry",
    description: "Quick, colorful, and packed with nutrition.",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
  },
];

const Items = () => {
  return (
    <div className="items mt-16 px-4 pt-16">
      <h1 className="text-3xl font-bold text-center mb-2">Our Items</h1>
      <p className="text-center text-gray-600 mb-10">
        Explore our delicious recipes!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{recipe.title}</h3>
              <p className="text-sm text-gray-600">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
