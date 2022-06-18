
import React, { useEffect, useState } from 'react'
import Image from 'next/image'



const Destination = ({ setBackImg }) => {

  const moonText = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  const marsText="Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!"
  const europaText="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
  const titanText="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
  
  const moonSet = { img: "moon", title: "MOON", text: moonText, distance: "384,400 KM",time:"3 DAYS" }
  const marsSet = { img: "mars", title: "MARS", text: marsText, distance: "225 MIL. km",time:"9 MONTHS" }
  const europaSet = { img: "europa", title: "EUROPA", text: europaText, distance: "628 MIL. km",time:"3 YEARS" }
  const titanSet = { img: "titan", title: "TITAN", text: titanText, distance: "1.6 BIL. km",time:"7 YEARS" }

  const [destChoice, setDestChoice] = useState(moonSet)

  useEffect(() => {
    document.querySelector("#puffImg").classList.remove("puff-in-center")
    setTimeout(() => {
      document.querySelector("#puffImg").classList.add("puff-in-center")
    }, 5);
  }, [destChoice])

  useEffect(() => {
    setBackImg("destination")
  }, [setBackImg])

  const {img,title,text,distance,time}=destChoice


 
  return (
    <div className='destDiv'>
      <h5><span>01</span> PICK YOUR DESTINATION</h5>
      <div className='grid destGrid'>


        <div id="puffImg"  className='puff-in-center'>
    
        <Image src={`/assets/destination/image-${img}.webp`} alt="spaceImg" quality={100} width={445} height={445} />
        {/* <img id="puffImg" className='puff-in-center' src={`/assets/destination/image-${img}.webp`} alt="spaceImg" /> */}
        </div>
        <div className='destText'>
          <div className='NavText flex destLinker spacerBotLight'>
            <div className={`${img==="moon"&&"underlined2"}`} onClick={()=>setDestChoice(moonSet)}>MOON</div>
            <div className={`${img==="mars"&&"underlined2"}`} onClick={()=>setDestChoice(marsSet)}>MARS</div>
            <div className={`${img==="europa"&&"underlined2"}`} onClick={()=>setDestChoice(europaSet)}>EUROPA</div>
            <div className={`${img==="titan"&&"underlined2"}`} onClick={()=>setDestChoice(titanSet)}>TITAN</div>
          </div>
          <div  className='spacerBot2'>
            <h2>{title}</h2>
            <p style={{color:"#D0D6F9"}}>{text}</p>
          </div>
          <hr />
          <div className='grid simpleGrid spacerTop'>
            <div>
              <div className='subheading2 spacerBotLight'>AVG. DISTANCE</div>
              <div className='subheading1'>{distance}</div>
            </div>
            <div>
            <div className='subheading2 spacerBotLight'>Est. travel time</div>
              <div className='subheading1'>{time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination