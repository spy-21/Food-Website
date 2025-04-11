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
    image:
      "https://feastwithsafiya.com/wp-content/uploads/2021/09/easy-chicken-biryani.jpg",
    width: 400,
  },
  {
    title: "Sushi Platter",
    image:
      "https://jasbrofoods.co.zw/wp-content/uploads/2023/08/mutton-biryani-1024x683.png",
    width: 200,
  },
  {
    title: "Burger Deluxe",
    image:
      "https://as1.ftcdn.net/jpg/06/07/69/24/1000_F_607692433_E3ayvP0iLCy2Afr6wkrhORCl3mBn3VS1.jpg",
    width: 300,
  },
  {
    title: "Grilled Chicken",
    image: "https://honeycatering.co.in/wp-content/uploads/2024/11/1-02-1.jpg",
    width: 100,
  },
  {
    title: "Vegan Salad",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Crab-Curry.jpg",
    width: 200,
  },
  {
    title: "Chocolate Cake",
    image:
      "https://thepiethatbinds.com/wp-content/uploads/2022/02/JammyEggBiryani2.jpg",
    width: 300,
  },
];

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-6 lg:px-8 h-screen">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 -z-10 h-[100%] bg-[url(/images/lion.jpg)] md:h[100%]  bg-cover bg-no-repeat"
          aria-hidden="true"
        >
          <img src="" alt="herosection" />
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-2xl py-24 sm:py-36 lg:py-48 text-center md:flex md:flex-col md:items-center md:justify-center mt-48 md-mt-0">
          <h1 className="text-5xl font-bold font-sans tracking-tight text-neutral-900 sm:text-6xl">
            Lion Restruant
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="rounded-md font-sans bg-neutral-900 px-5 py-3 text-sm font-semibold text-amber-500 hover:bg-amber-700 hover:text-black w-34"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-bold font-sans text-white hover:text-amber-800 border-2 border-white hover:bg-white hover:text-amber-500 px-5 py-3 rounded-md transition duration-300"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Bottom Decorative Blob */}
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

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6 px-6 py-16 bg-amber-500">
        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full md:w-[60%] text-xl md:text-4xl">
          <p>
            The access token will expire, so ideally, you’d want to get it
            through OAuth with refresh support, rather than hardcoding. Avoid
            pushing this token to version control like GitHub. Let me know if
            you want help turning this into a proper Spotify OAuth flow.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-full overflow-hidden shadow-lg w-full md:w-[40%] h-[300px] md:h-[400px]">
          <img
            src="https://images.stockcake.com/public/4/9/4/494e7527-0b70-4f6d-b997-00dd8b94d734_large/delicious-biryani-feast-stockcake.jpg"
            alt="Delicious Biryani"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Food Gallery Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Food Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {foodItems.map((item, index) => (
              <div key={index} className="bg-white shadow-md  ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-fill"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
