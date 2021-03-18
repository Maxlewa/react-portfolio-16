import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player';

export default function Presentation() {
    return (
        <div id="presentation">
            {/* <video onMouseEnter={(e) => playVideo(e)} onMouseOut={(e) => stopVideo(e)} src="./videos/vidsquareme.mp4"></video> */}
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
                <p>I particularly enjoy <span id="spanElectronic">electronic</span> music with heavy beats and distorted synths, punchy rock n’roll, <span id="spanGlitch">g̶l̴i̷t̷c̵h̵ ̸ar̶t</span>, & <span id="spanHorror">horror</span> movies.</p>
                <p>I produce songs for other artists but my own & main musical project is called Løyd.</p>
                <p>It’s all about dystopia.</p>
                <p>I also was recently introduced into the cryptoworld, and plan to release my first NFT soon.</p>
                <img src="./images/ETH.png" alt=""/>
            </div>
        </div>
    )
}
