import React, { useEffect } from 'react'

const Home = ({ setBackImg }) => {

  useEffect(() => {
    setBackImg("home")
  }, [setBackImg])

  return (
    <div className='flex apart homediv'>
      <div className='homeText'>
        <h5> SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p style={{ color: "#D0D6F9" }}>Let&apos;s face it, if you want to go to space, you might as well genuinely go
          to outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we&apos;ll give you a truly out of this world experience!
        </p>
      </div>
      <div className='circle textcenter puff-in-center'>
        <h4>EXPLORE</h4>
      </div>
    </div>
  )
}

export default Home