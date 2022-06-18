import React, { useEffect, useState } from 'react'

const Crew = ({ setBackImg }) => {

  const texter = {
    commander: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    mission: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    pilot: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    engineer: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  }
  const commanderSet = { img: "douglas-hurley", position: "COMMANDER", name: "DOUGLAS HURLEY", text: texter.commander }
  const missionSet = { img: "mark-shuttleworth", position: "MISSION SPECIALIST", name: "MARK SHUTTLEWORTH", text: texter.mission }
  const pilotSet = { img: "victor-glover", position: "PILOT", name: "VICTOR GLOVER", text: texter.pilot }
  const engineerSet = { img: "anousheh-ansari", position: "FLIGHT ENGINEER", name: "ANOUSHEH ANSARI", text: texter.engineer }

  const [crewMember, setcrewMember] = useState(missionSet)
  const { img, position, name, text } = crewMember

  useEffect(() => {
    setBackImg("crew")
  }, [setBackImg])

  useEffect(() => {
    document.querySelector("#hrer").classList.remove("displayer")
    setTimeout(() => {
      document.querySelector("#hrer").classList.add("displayer")
    }, 5);
  }, [crewMember])

  return (
    <div className='destDiv spacerCrew' >

      <h5><span>02</span> MEET YOUR CREW</h5>
      <div className='grid crewGrid'>
        <div className='spacerTop5f flex weirdFlex crewGridDiv1'>
          <div>
            <h4 className='opa-50'>{position}</h4>
            <h3 className='spacerBotLight'>{name}</h3>
            <p style={{ color: "#D0D6F9" }}>{text}</p>
          </div>
          <div className='flex spacerTop4f justifycenterMD '>
            <div className={`roundtabber opa-20 jello-horizontal ${position === "COMMANDER" && "opa-100"}`} onClick={() => setcrewMember(commanderSet)}></div>
            <div className={`roundtabber opa-20 jello-horizontal ${position === "MISSION SPECIALIST" && "opa-100"}`} onClick={() => setcrewMember(missionSet)}></div>
            <div className={`roundtabber opa-20 jello-horizontal ${position === "PILOT" && "opa-100"}`} onClick={() => setcrewMember(pilotSet)}></div>
            <div className={`roundtabber opa-20 jello-horizontal ${position === "FLIGHT ENGINEER" && "opa-100"}`} onClick={() => setcrewMember(engineerSet)}></div>
          </div>
        </div>
        <div className='crewGridDiv2' style={{marginTop: `${position === "COMMANDER"? "-50px":''}`}}>
          <img id="puffImg" className='puff-in-center crewimg' src={`/assets/crew/image-${img}.webp`} alt="crewImg" />
          <hr id="hrer" className='crewhr scale-up-hor-center nodisplay displayer' />
        </div>
      </div>

    </div>
  )
}

export default Crew