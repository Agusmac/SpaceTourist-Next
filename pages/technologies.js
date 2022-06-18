import React, { useEffect, useState } from 'react'

import Image from 'next/image'


const Technologies = ({ setBackImg }) => {

  const texterer = {
    a: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    b: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    c: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
  const setA = { title: "LAUNCH VEHICLE", text: texterer.a, imager: "image-launch-vehicle-portrait", imgSM: "image-launch-vehicle-landscape" }
  const setB = { title: "SPACEPORT", text: texterer.b, imager: "image-spaceport-portrait", imgSM: "image-spaceport-landscape" }
  const setC = { title: "SPACE CAPSULE", text: texterer.c, imager: "image-space-capsule-portrait", imgSM: "image-space-capsule-landscape" }

  const [tech, setTech] = useState(setA)

  const { title, text, imager, imgSM } = tech

  useEffect(() => {
    setBackImg("technology")
  }, [setBackImg])

  useEffect(() => {
    document.querySelector("#textanimated").classList.remove("displayer")
    setTimeout(() => {
      document.querySelector("#textanimated").classList.add("displayer")
    }, 5);
  }, [tech.text])

  return (
    <div className='techdiv'>
      <h5><span>03</span> SPACE LAUNCH 101</h5>
      <div className='grid techGrid'>
        <div className='flex apart alFlexStart techgriddiv1'>
          <div className='techbuttoneer'>
            <div className={`${title === "LAUNCH VEHICLE" && "techbutSelected"}`} onClick={() => setTech(setA)}><h4>1</h4></div>
            <div className={`${title === "SPACEPORT" && "techbutSelected"}`} onClick={() => setTech(setB)}><h4>2</h4></div>
            <div className={`${title === "SPACE CAPSULE" && "techbutSelected"}`} onClick={() => setTech(setC)}><h4>3</h4></div>
          </div>
          <div id="textanimated" className='nodisplay slide-in-blurred-left'>
            <div className='NavText'>THE TERMINOLOGY…</div>
            <h3 className='spacerBothLight'>{title}</h3>
            <p style={{ color: "#D0D6F9" }}>{text}</p>
          </div>
        </div>
        <div className='flex apart techgriddiv2'>
          <picture className='techimg'>

            {/* <source media="(max-width: 850px)" srcSet={`/assets/technology/${imgSM}.jpg`} />
            <img className='techimg' alt='techimg' src={`/assets/technology/${imager}.jpg`} /> */}

            {/* not sure which should i use */}
            <div className='techimg secondtechimg'>
              <Image className='techimg secondtechimg' alt='techimg' src={`/assets/technology/${imgSM}.jpg`} quality={100} width={850} height={343} />
            </div>

            <div className='techimg firsttechimg'>
              <Image className='techimg firsttechimg' alt='techimg' src={`/assets/technology/${imager}.jpg`} quality={100} width={515} height={527} />
            </div>


          </picture>
        </div>
      </div>
    </div>
  )
}

export default Technologies