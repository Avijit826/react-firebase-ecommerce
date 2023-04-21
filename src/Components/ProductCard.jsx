import { HeartIcon, StarIcon } from "@heroicons/react/24/solid"
import { useDispatch } from "react-redux"
import { cartActions } from "../redux/slices/cartSlice"

const ProductCard = ({ data }) => {
  const dispatch = useDispatch()
  const addToCart = (e) => {
    e.preventDefault()
    dispatch(
      cartActions.addItem({
        id: data.id,
        productName: data.name,
        price: data.price,
        image: data.image,
      })
    )
  }
  return (
    <div class="relative w-40 h-64 overflow-hidden rounded-lg bg-white shadow-md sm:scale-125 sm:my-8">
      <a href="#" class="">
        <img
          class="object-cover h-28  w-40 rounded-t-lg"
          src={
            data.image
              ? data.image
              : "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="product image"
        />
      </a>
      {data.banner === "sale" && (
        <span class="absolute top-0 left-0 w-20 translate-y-2 -translate-x-6 -rotate-45 bg-indigo-700 text-center text-xs text-white">
          Sale
        </span>
      )}
      {data.banner === "bs" && (
        <span class="scale-90 absolute top-0 left-0 p-0.5 text-center text-xs font-medium text-red-500">
          BESTSELLER
        </span>
      )}
      <span
        class={`absolute top-0 right-0 ${
          data.fav ? "text-indigo-700" : "text-gray-50"
        }`}
      >
        <HeartIcon className="relative h-5 w-5 m-2 " />
      </span>
      <div class="mt-1.5 px-2">
        {/* name */}
        <a href="#">
          <h5 class="h-10 text-sm font-semibold line-clamp-2 text-slate-900">
            {data.name}
            <br />{" "}
          </h5>
        </a>
        {/* rating */}
        <div class="m-1.5 -ml-2 flex items-center scale-90">
          <span class="mr-1 rounded bg-yellow-200 px-1 py-0.5 text-xs font-semibold">
            {data.rating.toFixed(1)}
          </span>
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              class={`h-3.5 w-3.5 ${
                data.rating > rating ? "text-yellow-300" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        {/* price */}
        <div class="flex items-center justify-between">
          <p>
            <span class="text-lg font-bold text-slate-900">₹{data.price}</span>
            <span class="ml-1 text-sm text-slate-900 line-through">
              {data.mrp}
            </span>
            <span class="ml-1 text-sm text-green-600 font-medium">
              -{(((data.mrp - data.price) * 100) / data.mrp).toFixed(0)}%
            </span>
          </p>
        </div>
        <button
          onClick={(e) => addToCart(e)}
          class="absolute bottom-0 left-0 w-40 mt-10"
        >
          <div className="m-1 flex items-center rounded-lg bg-indigo-700 py-1.5 justify-center text-xs font-medium text-white hover:bg-indigo-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Add to cart</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
