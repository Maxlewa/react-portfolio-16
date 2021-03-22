import React from 'react'
import Fade from 'react-reveal/Fade';

export default function LoydComponent() {
    return (
        <div id="divLoyd">
            <div id="divImg">
                <Fade>
                <img src="./images/background.png" alt=""/>
                </Fade>
            </div>
            <div id="playerSpotify">
                <Fade>
                <iframe src="https://open.spotify.com/embed/artist/6nTLSLkxAQp1F8L0VFvCpR" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" id="iframeOne"></iframe>
                <iframe src="https://open.spotify.com/embed/artist/6nTLSLkxAQp1F8L0VFvCpR" width="300" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media" id="iframeTwo"></iframe>
                <iframe src="https://open.spotify.com/embed/artist/6nTLSLkxAQp1F8L0VFvCpR" width="300" height="180" frameborder="0" allowtransparency="true" allow="encrypted-media" id="iframeThree"></iframe>
                </Fade>
            </div>
            <Fade right>
            <div id="divPresse">
                <a href="https://www.rtbf.be/emission/decibels/detail_decouvrez-l-yd-le-bruxellois-qui-fait-sensation?id=10522183" target="_blank"><img src="./images/tipik.png" alt="Tipik" id="imgTipik"/></a>
                <a href="https://www.lavenir.net/cnt/dmf20200304_01452215/ancien-etudiant-a-l-iad-l-yd-est-nomme-dans-la-categorie-dance-electro-aux-decibels-music-awards" target="_blank"><img src="./images/avenir.png" alt="L'Avenir" id="imgAvenir"/></a>
                <a href="https://www.dhnet.be/regions/bruxelles/le-brusseleir-de-la-semaine-loyd-le-jeune-dj-bruxellois-qui-fait-vibrer-5b447aef55324d3f1348847e" target="_blank"><img src="./images/dh.png" alt="DH" id="imgDH"/></a>
                <a href="https://www.dansendeberen.be/2018/09/12/nieuwe-single-loyd-lifetime/" target="_blank"><img src="./images/dansendeberen.png" alt="Dansende Beren" id="imgDB"/></a>
            </div>
            </Fade>
            <Fade left>
            <div id="divStreaming">
                <a href="https://open.spotify.com/artist/6nTLSLkxAQp1F8L0VFvCpR?si=dsIqHAP0RIatFnRQdl9MPQ"><i class="fab fa-spotify" target="_blank"></i></a>
                <a href="https://music.apple.com/be/artist/l%C3%B8yd/1334208192?l=fr" target="_blank"><i className="fab fa-apple"></i></a>
                <a href="https://music.amazon.com/artists/B078BF5Z4X/l%C3%B8yd" target="_blank"><i className="fab fa-amazon"></i></a>
                <a href="https://www.deezer.com/en/artist/13852921" target="_blank"><i className="fab fa-deezer"></i></a>
            </div>
            </Fade>
            <div id="divSony">
                <Fade>
                <img src="./images/sonybis.png" alt=""/>
                </Fade>
            </div>
        </div>
    )
}
