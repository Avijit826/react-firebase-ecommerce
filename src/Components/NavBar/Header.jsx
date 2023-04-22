import { Fragment, useState } from "react"
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  HomeIcon,
  TagIcon,
  ChatBubbleLeftEllipsisIcon,
  ShoppingBagIcon,
  PlusSmallIcon,
  MinusSmallIcon,
  HeartIcon,
  XMarkIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"
import { useSelector } from "react-redux"
import CartPopover from "./CartPopover"

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
]

const Header = () => {
  const [cartMenu, setCartMenu] = useState(false)
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 border-b border-gray-200">
            {/* mobile nav open button */}
            <div className="flex items-center">
              <Disclosure.Button className="pr-2 text-gray-400 lg:hidden">
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Disclosure.Button>
              <a href="/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="Flowbite Logo"
                />
                <span className="text-2xl font-semibold whitespace-nowrap">
                  Flow bite
                </span>
              </a>
            </div>
            {/* desk menu */}
            <ul className="lg:flex items-center hidden ">
              <li className="py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 rounded-xl">
                <a href="#" className="flex items-center">
                  {" "}
                  <HomeIcon className="h-5 mr-2" />
                  Home
                </a>
              </li>
              <li className="py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 rounded-xl">
                {" "}
                <a href="#" className="flex items-center">
                  {" "}
                  <TagIcon className="h-5 mr-2" />
                  Categories
                </a>
              </li>
              <li className="py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 rounded-xl">
                {" "}
                <a href="#" className="flex items-center">
                  {" "}
                  <ChatBubbleLeftEllipsisIcon className="h-5 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
            {/* nav right section*/}
            <div className="flex items-center">
              {/* fav button */}
              <button
                type="button"
                className="hidden lg:flex mr-4 relative text-gray-600 hover:text-gray-900"
                onClick={() => {}}
              >
                <HeartIcon className="h-6 w-6" />
                <span class="absolute right-0 top-0 -mr-2.5 -mt-2.5 text-xs bg-indigo-600 text-white font-medium px-1.5 shadow-lg rounded-full border-2 border-white">
                  3
                </span>
              </button>
              {/* cart button */}
              <CartPopover />
              {/* profile button */}
              <Menu as="div" className="relative">
                <Menu.Button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 hover:ring-4 hover:ring-gray-300"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="user-photo"
                  />
                </Menu.Button>
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                  <Menu.Item className="block lg:hidden">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Favourites{" "}
                      <span class="text-xs bg-indigo-600 text-white font-medium px-1.5 ml-1 shadow-lg rounded-full">
                        100
                      </span>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Signout
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>

          {/* mob menu panel */}
          <Disclosure.Panel className="lg:hidden">
            <ul className="space-y-1 pt-2 pb-4">
              <li className="py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                <a href="#" className="flex items-center">
                  {" "}
                  <HomeIcon className="h-5 mr-2" />
                  Home
                </a>
              </li>
              <li className="py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                {" "}
                <a href="#" className="flex items-center">
                  {" "}
                  <TagIcon className="h-5 mr-2" />
                  Categories
                </a>
              </li>
              <li className="py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                {" "}
                <a href="#" className="flex items-center">
                  {" "}
                  <ChatBubbleLeftEllipsisIcon className="h-5 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
