'use client';
import { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

const Page:NextPage = () => {

  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [query, setQuery] = useState('');


  return (
    <div className="page">
        <div className="flex w-full min-h-screen flex-col items-center justify-between ">
        <header className=" bg-gray-900 w-full h-20 items-center justify-center ">
          <nav className="flex h-20 items-center px-4  shadow-md">
            <Link href="/" className="text-lg font-bold">
               <Image src="/amazon.png" width={300} height={100} alt="" className="w-24"/>
            </Link>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto  hidden w-full justify-center md:flex "
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none rounded-br-none p-1 h-10 text-sm w-1/2 border-0 outline-0  focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                Pesquisar
              </button>
            </form>
            <div className="flex items-center z-10">
              <Link href="/cart" className="p-2">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

               </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">
            
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Amazon</p>
        </footer>
      </div>
    </div>
  )
}

export default Page