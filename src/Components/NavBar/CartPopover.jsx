import React from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  ShoppingBagIcon,
  PlusSmallIcon,
  MinusSmallIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../../redux/slices/cartSlice"

const CartPopover = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const cartQuantity = cart.totalQuantity
  return (
    <Popover className="relative">
      <Popover.Button className="flex mr-4 relative text-gray-600 hover:text-gray-900">
        <ShoppingBagIcon className="h-6 w-6 " />
        <span class="absolute right-0 top-0 -mr-2.5 -mt-2.5 text-xs bg-indigo-600 text-white font-medium px-1.5 shadow-lg rounded-full border-2 border-white">
          {cartQuantity}
        </span>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-white pb-4 shadow-lg px-2 top-full -right-12 sm:right-0 mt-3 w-80 rounded-lg">
        {cart.cartItems.length ? (
          <div className="mx-auto max-w-2xl px-4">
            <ul role="list" className="max-h-64 overflow-y-scroll">
              {cart.cartItems.map((product) => (
                <li
                  key={product.id}
                  className="flex border-b items-center py-3"
                >
                  <img
                    src={product.image}
                    alt="Product Image"
                    className="h-16 w-16 max-w-full rounded-lg object-cover border border-gray-200"
                  />
                  <div className="relative m-2">
                    {/* title */}
                    <div className="absolute -top-8 w-40 line-clamp-1 left-0">
                      <a
                        href=""
                        className="text-sm text-gray-9
                                00 font-medium"
                      >
                        {product.productName}
                      </a>
                    </div>
                    {/* qty */}
                    <div className="absolute flex items-center -bottom-7 whitespace-nowrap font-medium left-0 text-gray-600">
                      <PlusSmallIcon
                        className="h-4 w-4 mx-2"
                        onClick={(e) => {
                          e.preventDefault()
                          dispatch(cartActions.incrementQuantity(product.id))
                        }}
                      />
                      <span className="  text-sm"> {product.quantity}</span>
                      <MinusSmallIcon
                        className="h-4 w-4 mx-2"
                        onClick={(e) => {
                          e.preventDefault()
                          dispatch(cartActions.decrementQuantity(product.id))
                        }}
                      />
                    </div>
                    {/* trash */}
                    <div className="absolute -top-7 text-gray-600 -right-48">
                      <TrashIcon
                        className="h-5 w-5 rounded-xl"
                        onClick={(e) => {
                          e.preventDefault()
                          dispatch(cartActions.removeItem(product.id))
                        }}
                      />
                    </div>

                    {/* price */}
                    <div className="absolute text-sm font-medium -bottom-7  text-gray-900 -right-48">
                      ₹{Number(product.totalPrice).toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div class="border-b">
              <div class="flex my-1.5 items-center justify-between">
                <p class="text-gray-400 text-sm">Subtotal</p>
                <p class="text-base font-medium text-gray-900">
                  ₹{Number(cart.totalAmount).toFixed(2)}
                </p>
              </div>
              <div class="flex my-1.5 items-center justify-between">
                <p class="text-gray-400 text-sm">Shipping</p>
                <p class="text-base font-medium text-gray-900">₹00.00</p>
              </div>
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-xl font-semibold text-gray-900">
                <span class="text-xs font-normal text-gray-400">Rs.</span>{" "}
                {Number(cart.totalAmount).toFixed(2)}
              </p>
            </div>

            <button className="w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white shadow-md my-2 hover:bg-indigo-700">
              Checkout
            </button>

            <p className="mt-1.5 text-center">
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View Shopping Bag
              </a>
            </p>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl px-4">
            <img src="/empty-cart.png" alt="" />
            <button className="w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white shadow-md my-2 hover:bg-indigo-700">
              Continue Shopping
            </button>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  )
}

export default CartPopover
