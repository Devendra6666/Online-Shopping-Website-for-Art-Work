import React, { useEffect, useState } from 'react'
import products from "./products.json"
import "./Products.css"

const Products = () => {
   const[data,setData] = useState(products)

   console.log(data)
   useEffect(() => {
    setData(products)
   },[])

    const input_change = (event) => {
        console.log(event.target.value)
    }

    const filter = () => {
       const res =  data.filter((ele) => {
        return(
            ele.name.includes("a")
        )
        })
        // console.log(res)
        setData(res)
    }
  return ( 
    <>
       <div className='search_box'>
        <input type='text' placeholder='Enter the Product' onChange={input_change}></input>
       </div>

       <div className='image_section'>
        <div className='filter_section'>
            <button type='button' onClick={filter}>picasso</button>
        </div>
         <div className='map_section'>
            {
                data.map((curele) => {
                    return(
                        <>
                        <figure>
                            <img alt='img' src={curele.image}/>
                            <p>{curele.name}</p>
                        </figure>
                        </>
                    )
                })
            }
         </div>
       </div>
    </>
  )
}

export default Products