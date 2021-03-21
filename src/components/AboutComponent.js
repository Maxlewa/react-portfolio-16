import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';

export default function AboutComponent() {

    const [hoverbis, setHoverbis] = useState(false)

    let hoverPolarity = () => {
        setHoverbis(true)
    }
    let backPolarity = () => {
        setHoverbis(false)
    }

    return (
        <div id="sectionAbout">
            <div id="divAbout">
                <Fade top>
                <div id="divA1">
                    <img src="./images/ableton.png" alt="Ableton"/>
                    <img src="./images/protools.png" alt="Pro Tools"/>
                    <img src="./images/reason.png" alt="Reason"/>
                    <img src="./images/vscode.png" alt="VS Code"/>
                </div>
                </Fade>
                <Fade top>
                <div id="divA2">
                    <i class="fas fa-terminal"></i>
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-sass"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-react"></i>
                </div>
                </Fade>
            </div>
            <Fade bottom>
            <div id="texteAbout">
                <p>I have been using Ableton Live since 2011 (both in <span id="spanStudio">studio</span> and <span id="spanLive">live</span> situations), Pro Tools since 2013 and Reason since 2019.</p>
                <p>I got a master degree in sound engineering (mixing/mastering) in 2017 from IAD, Louvain-la-Neuve.</p>
                <p>The same year, I wrote a <span id="spanThesis">thesis</span> about drums production, {hoverbis == true ? <span onMouseOut={backPolarity}>polarity</span> : <span onMouseOver={hoverPolarity} id="spanPolarityRev">ʎʇᴉɹɐๅod</span>} & phase alignment.</p>
                <p>I began learning to code in 2020, & I enjoy <span id="spanBuilding">building</span> websites.</p>
            </div>
            </Fade>
        </div>
    )
}
