import React, { useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import Flash from 'react-reveal/Flash';

export default function Presentation() {

    const [hover, setHover] = useState(false)

    let hoverElectronic = () => {
        setHover(true)
    }
    let backElectronic = () => {
        setHover(false)
    }
    
    return (
        <div id="presentation">
            {/* <video onMouseEnter={(e) => playVideo(e)} onMouseOut={(e) => stopVideo(e)} src="./videos/vidsquareme.mp4"></video> */}
            {/* <Fade bottom> */}
                <div id="divVideo">
                    <HoverVideoPlayer
                    videoSrc="./videos/vidsquareme.mp4"
                    // We should display an image over the video while it is paused
                    pausedOverlay={
                        <img
                        src="./images/me1080.jpg"
                        alt=""
                        style={{
                            // Make the image expand to cover the video's dimensions
                            width: "100%",
                            height: "100%",
                        }}
                        />
                    }
                    overlayTransitionDuration={0}
                    />
                </div>
                <div id="divTextePresentation">
                    <p>I’m a music producer, sound designer and web developer (in development <span id="spanSmiley">☻</span>).</p>

                    <p>I particularly enjoy {hover == true ? <Flash><span onMouseOut={backElectronic} id="spanElectronic">electronic</span></Flash> : <span onMouseOver={hoverElectronic} id="spanElectronic">electronic</span>} music with heavy beats and distorted synths, punchy rock n’roll, <span id="spanGlitch">g̶l̴i̷t̷c̵h̵ ̸ar̶t</span>, & <span id="spanHorror">horror</span> movies.</p>

                    <p>I produce songs for other artists but my own & main musical project is called <span id="spanLoyd">LØYD</span>.</p>
                    <p>It’s all about <span id="spanDystopia"><a href="https://en.wikipedia.org/wiki/Dystopia" target="_blank">dystopia</a></span>.</p>
                    <p>I also was recently introduced into the cryptoworld, and plan to release my first NFT soon.<img src="./images/ETH.png" alt="Ethereum" id="ethereum"/></p>
                </div>
            {/* </Fade> */}
        </div>
    )
}
