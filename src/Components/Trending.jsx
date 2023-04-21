import ProductCard from "./ProductCard"
const products = [
  {
    id: 1,
    name: "Leather Long Wallet mkvemv ev ekv ekv e",
    fav: true,
    banner: "sale",
    mrp: "75",
    price: "50",
    rating: 4.0,
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
  },
  {
    id: 2,
    name: "Leather kol",
    fav: false,
    banner: "bs",
    mrp: "100",
    price: "50",
    rating: 2.5,
    href: "#",
  },
  {
    id: 3,
    name: "Hey Product Price",
    fav: true,
    mrp: "7500",
    price: "5550",
    rating: 1.0,
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
  },
  {
    id: 4,
    name: "Leather kol rush true",
    fav: true,
    banner: "bs",
    mrp: "1000",
    price: "990",
    rating: 4.5,
    href: "#",
  },
  {
    id: 5,
    name: "Leather Long Wallet mkvemv ev ekv ekv e",
    fav: true,
    banner: "sale",
    mrp: "75",
    price: "50",
    rating: 4.1,
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
  },
  {
    id: 6,
    name: "Leather kol",
    fav: false,
    mrp: "100",
    price: "50",
    rating: 0,
    href: "#",
  },
  {
    id: 7,
    name: "Leather Long Wallet mkvemv ev ekv ekv e",
    fav: true,
    banner: "sale",
    mrp: "75",
    price: "50",
    rating: 4.0,
    href: "#",
    image:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
  },
  {
    id: 8,
    name: "Leather kol",
    fav: false,
    banner: "bs",
    mrp: "100",
    price: "50",
    rating: 2.5,
    href: "#",
  },
]

const Trending = () => {
  return (
    <div className="bg-white ">
      <div className="mx-auto container p-2 ">
        <div className="flex items-center justify-between md:mx-8 lg:mx-24">
          <h2 className="text-2xl font-bold text-gray-900">
            Trending products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop the collection <span> →</span>
          </a>
        </div>
        <div className=" container mx-auto mt-6 ml-2 md:ml-8 grid grid-cols-2 lg:gap-x-0 gap-y-3 lg:gap-y-8 lg:grid-cols-4 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
          {/* prods */}
          {products.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
        <div className="mt-8 text-sm md:hidden flex flex-col items-end ">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection <span> →</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Trending
