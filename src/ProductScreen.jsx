import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';


const ProductScreen = () => {
  const card = [
    {
      src: 'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'Mango Computers Delhi',
      price: '₹28500/-',
      age: { key: 23 }

    },
    {
      src: 'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'New Delhi',
      price: '₹28500/-',

    },
    {
      src: 'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'New Delhi',
      price: '₹28500/-',

    },
    {
      src: 'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'New Delhi',
      price: '₹28500/-',

    },
    {
      src:'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'New Delhi',
      price: '₹28500/-',

    },
    {
      src: 'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'New Delhi',
      price: '₹28500/-',

    },
    {
      src: 'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'New Delhi',
      price: '₹28500/-',

    },
    {
      src: 'public/monitor.jpeg',
      desc: 'Asus ROG Gaming Laptop 256 SSD, 8gb, FHD',
      provider: 'New Delhi',
      price: '₹28500/-',

    },

  ]
  return (
    <>
    <div style={{margin: 100}}>
      <div className='mb-8 ' style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ display: "flex", width: "100%", fontFamily: "inter", fontSize: "23", fontWeight: "600", height: 28, color: "#000", justifyItems: "center" }}> Search Results</p>
          {/* <Link to="/CompareScreen"> */}
         <button  style={{ display: "flex", backgroundColor: "#F5F5F5", borderRadius: 12, padding: 12, justifyContent: "space-between", alignItems: "center", }}
            className='border rounded-lg w-[30%] sm:w-[40%] md:w-[30%] lg:w-[10%] mx-auto '>
            <img src='src/assets/images/icon1.png'></img>
            <a href={'/CompareScreen'}>Compare</a>
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))" }}
        className='w-full mt-2 grid  gap-10 '>
        {/* grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
        {card.map((items, index) => (
          <div style={{ borderRadius: 19, border: "1px solid #DADFE5" }}>
            <div className="flex justify-center items-center" >
              <img src={items.src} alt="lap" style={{ height: 150 }}></img>
            </div>
            <button style={{ marginBottom: 10 }} className='border rounded-lg w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] mx-auto bg-[#62B3FF40] text-[#003399]' >
              <p>compare</p>
            </button>
            <hr />
            <div className='px-2 font-medium mt-2'>
              <p style={{ fontWeight: "500" }} className='text-[16.22px] text-[#2E2E2E]'>{items.desc}</p>
              <p style={{ fontWeight: "500" }} className='leading-15 text-[12.74px] text-[#2E2E2E]'>{items.provider}</p>
            </div>

            <div className='flex justify-between p-2'>
              <p style={{ fontWeight: "600" }} className='font-medium text-[16.22px]'>{items?.age?.key}</p>
              <button style={{ fontWeight: "600" }} className='border border-[#001661] bg-[#E1E8FF] text-[#001661] rounded-lg px-3'>ADD</button>
            </div>
          </div>
        ))}
      </div>

      <button className='border border-[#D1D5DB] rounded-lg w-[100%] sm:w-[100%] md:w-[100%] lg:w-[15%] mx-auto bg-[#ffffff] text-[#374151] mt-10 flex justify-center'>
        <p className='text-[20.37px]'> Show More</p>

      </button>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <p style={{ display: "flex", width: "100%", fontFamily: "inter", fontSize: "23", fontWeight: "600", height: 28, color: "#000", justifyItems: "center" }}>You Might Also Like</p>
      </div>
      {/* <div className='w-full mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 '>
        {card.map((items, index) => (
          <div style={{ width: 240, height: 345, borderRadius: 19, border: "1px solid #DADFE5" }}>
            <div className="flex justify-center items-center" >
              <img src={items.src} alt="lap" style={{ height: 150 }}></img>
            </div>
            <div style={{ marginBottom: 10 }} className='border rounded-lg w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] mx-auto bg-[#62B3FF40] text-[#003399]' >
              <p>compare</p>
            </div>
            <hr />
            <div className='px-2 font-medium mt-2'>
              <p style={{ fontWeight: "500" }} className='text-[16.22px] text-[#2E2E2E]'>{items.desc}</p>
              <p style={{ fontWeight: "500" }} className='leading-15 text-[12.74px] text-[#2E2E2E]'>{items.provider}</p>
            </div>

            <div className='flex justify-between p-2'>
              <p style={{ fontWeight: "600" }} className='font-medium text-[16.22px]'>{items.price}</p>
              <p style={{ fontWeight: "600" }} className='border border-[#001661] bg-[#E1E8FF] text-[#001661] rounded-lg px-3'>ADD</p>
            </div>
          </div>
        ))}
      </div> */}
      <div style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))" }}
        className='w-full mt-2 grid  gap-10 '>
        {/* grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
        {card.map((items, index) => (
          <div style={{ borderRadius: 19, border: "1px solid #DADFE5" }}>
            <div className="flex justify-center items-center" >
              <img src={items.src} alt="lap" style={{ height: 150 }}></img>
            </div>
            <button style={{ marginBottom: 10 }} className='border rounded-lg w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] mx-auto bg-[#62B3FF40] text-[#003399]' >
              <p>compare</p>
            </button>
            <hr />
            <div className='px-2 font-medium mt-2'>
              <p style={{ fontWeight: "500" }} className='text-[16.22px] text-[#2E2E2E]'>{items.desc}</p>
              <p style={{ fontWeight: "500" }} className='leading-15 text-[12.74px] text-[#2E2E2E]'>{items.provider}</p>
            </div>

            <div className='flex justify-between p-2 ml-5'>
              <p style={{ fontWeight: "600" }} className='font-medium text-[16.22px]'>{items?.age?.key}</p>
              <button style={{ fontWeight: "600" }} className='border border-[#001661] bg-[#E1E8FF] text-[#001661] rounded-lg px-3'>ADD</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  )

}


export default ProductScreen