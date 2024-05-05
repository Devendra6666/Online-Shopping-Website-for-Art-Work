import React, { useEffect, useState } from 'react'
import products from "./products.json"
import "./Products.css"

const Products = () => {
    const [data, setData] = useState(products)
    // const [field,setField] = useState(true)

    console.log(data)
    useEffect(() => {
        setData(products)
    }, [])

    const input_change = (event) => {
        console.log(event.target.value)
    }

    const filter = (event) => {
     const value = event.target.value
    //  console.log(value)
    if(value==="All"){
     setData(products)
     }
     else{
        const res = data.filter((ele) => {
            return (
                ele.name.includes(value)
            )
        })
        // console.log(res)
        setData(res)
     }
    }

    const transfer = (para) => {
        console.log(para)
        console.log("clicked")
    }
    return (
        <>
            <div className='search_box'>
                <input type='text' placeholder='Enter the Product' onChange={input_change}></input>
            </div>

            <div className='image_section'>
                <div className='first'>
                <div className='desc'>
                    <p>you can select products filter</p>
                </div>
                <div className='filter_section'>
                    <select name="products" id="cars" onChange={filter}>
                        <option value="All">All</option>
                        <option value="L">includes L</option>
                        <option value="a">includes a</option>
                        <option value="r">includes r</option>
                        <option value="s">includes s</option>
                        <option value="A">includes A</option>
                        <option value="e">includes e</option>
                    </select>
                </div>
                <p>this filter shows the <br/>arts that includes the letter<br/> in the art pictures..</p>
                </div>
                <div className='map_section'>
                    {
                        data.map((curele) => {
                            return (
                                <>
                                    <figure>
                                        <img  className="map_img" alt='img' src={curele.image} />
                                        <p className='mapimg_name'>Name:{curele.name}</p>
                                        <p className='mapimg_name'>company:{curele.company}</p>
                                        {/* <button type='button' onClick={(c)=>transfer(c.name)}>Add to cart</button> */}
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