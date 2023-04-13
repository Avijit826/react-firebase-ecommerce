import React from 'react'
const images = [
  "https://source.unsplash.com/bird/potrait",
  "https://source.unsplash.com/random/potrait",
  "https://source.unsplash.com/random/landspace",
  "https://source.unsplash.com/random/potrait",
  "https://source.unsplash.com/lion/landspace",
  "https://source.unsplash.com/random/landspace",
  "https://source.unsplash.com/sky/landspace",
  "https://source.unsplash.com/tree/potrait"
];
const Promo = () => {
  return (
    <div className="relative mx-auto overflow-hidden">
        <div className=" absolute inset-0 mx-auto p-8 space-y-2 sm:space-y-4 columns-3 sm:cloumns-4 lg:columns-5 gap-2 sm:gap-4">
          {images.map((image) => (
            <img className="rounded-xl" src={image} alt="" />
          ))}
          <div className="absolute inset-0 bg-white bg-opacity-75 md:bg-opacity-25 sm:bg-opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white via-30%" />
        </div>
        <div className="relative pt-20 sm:pt-48 lg:pt-32 lx:pt-48 ml-4 sm:ml-8 pb-20 mx-auto">
          <div className="sm:max-w-2xl xl:ml-52 2xl:ml-64 3xl:ml-96">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Step Back in Time with Our Vintage Collection
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              From vintage-inspired dresses to retro accessories, our collection
              includes a range of items from different decades, such as the 50s,
              60s, and 70s. Whether you're looking to add a touch of vintage
              flair to your wardrobe or you're a dedicated vintage fashion
              enthusiast, our online store has something for everyone.
            </p>
            <a
              href="#"
              className="inline-block rounded-md my-4 bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
  )
}

export default Promo