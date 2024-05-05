import React from 'react'
import Trusted from "./Trusted"

const prod = [
    {
        "id":1,
        "name":"Blossom",
        "image":"https://img.freepik.com/free-photo/floral-patterns-depict-modern-wedding-celebration-generated-by-ai_188544-9728.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714608000&semt=ais",
        "category":"flowers"
    },
    {
        "id":2,
        "name":"Patty",
        "image":"https://img.freepik.com/premium-vector/colorful-cute-cat-pop-art-vector-illustration_825692-287.jpg?w=360",
        "category":"cats"
    },
    {
        "id":3,
        "name":"Picasso",
        "image":"https://m.media-amazon.com/images/I/81TGDhKF8NL.jpg",
        "category":"Artistic"
    }
]
const Home = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='image-section'>
            <figure>
              <img className='home_image' src='https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'></img>
            </figure>
        </div>
        <div className='content_section'>
            <h4>The Artistic Website for the Art Pictures...</h4>
        </div>
        <div className='para_sec'>
        <p>An effective artist's website should feature a captivating homepage with select works, an about page detailing the artist's background and philosophy, and a portfolio section</p>
        <p className='pp'>showcasing their art with high-quality images and descriptions.</p>
        </div>
    </div>
    <div className='images'>
        <div className='map_display'>
            {
                prod.map((ele,ind) => {
                    return(
                        <>
                         <div className='first'>
                            <figure>
                                <img className='m_img' src={ele.image}></img>
                                <div className='m_con'>
                            <p>{ele.name}</p>
                            <p>{ele.category}</p>
                         </div>
                            </figure>
                         </div>
        
                        </>
                    )
                })
            }
        </div>
        <Trusted/>
    </div>
    </>
  )
}

export default Home