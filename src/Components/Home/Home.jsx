import React from 'react'
import "./Home.css"
import Card from '../Card/Card'
import img from "./img3.png"
import Cont from '../Content-cont/Cont'

function Home() {
 
  return (
    <Cont>
      {/* <div className=' tablets:rounded-3xl w-full min-h-full relative tablets:p-8'> */}
       
        <div className=' tablets:mt-16  '>
          <Card
            className=""
            image={img}
            title="Hi, I am "
            content="I am a web developer with a passion for creating beautiful and functional websites. I have a strong interest in website development and take pride in building impressive and high-quality websites. Let's create something amazing together!"
          />
        </div>
      {/* </div> */}

    </Cont>
  )
}

export default Home
