import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const foodItems = [
  {
    title: "Spaghetti Bolognese",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
    width: 400,
  },
  {
    title: "Sushi Platter",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
    width: 200,
  },
  {
    title: "Burger Deluxe",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
    width: 300,
  },
  {
    title: "Grilled Chicken",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
    width: 100,
  },
  {
    title: "Vegan Salad",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
    width: 200,
  },
  {
    title: "Chocolate Cake",
    image: "https://www.eg2i.com/uploads/product_image/product_795_1.jpg",
    width: 300,
  },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-6 lg:px-8">
        <div
          className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden   bg-[url(https://eggnchicken4u.com/blog/wp-content/uploads/2023/07/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52332.jpg)] h-screen bgfit bg-cover "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-5xl  tracking-tight text-red-500 sm:text-7xl ">
              Data to enrich your online business
            </h1>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold text-black-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-between gap-6  px-6 py-24 bg-amber-500">
        <div className="flex flex-col gap-4 w-[700px] text-4xl">
          <p>
            The access token will expire, so ideally, you’d want to get it
            through OAuth with refresh support, rather than hardcoding. Avoid
            pushing this token to version control like GitHub. Let me know if
            you want help turning this into a proper Spotify OAuth flow.
          </p>
        </div>
        <div className="rounded-full overflow-hidden shadow-lg w-[400px] h-[400px]">
          <img
            src="https://images.stockcake.com/public/4/9/4/494e7527-0b70-4f6d-b997-00dd8b94d734_large/delicious-biryani-feast-stockcake.jpg"
            alt=""
          />
        </div>
      </div>
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Food Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-fill"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
