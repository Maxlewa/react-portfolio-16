import React from 'react'
import Fade from 'react-reveal/Fade';

export default function ContactComponent() {
    return (
        <div id="sectionContact">
            <Fade right><h1>Say hello,</h1></Fade>
            <div id="twoDivs">
                {/* LEFT */}
                <Fade>
                <div id="divContactLeft">
                    <div id="divNameMail">
                        <div className="nameMail">
                            <p>Name</p>
                            <input type="text"/>
                        </div>
                        <div className="nameMail">
                            <p>E-mail</p>
                            <input type="text" placeholder="example@hotmail.com"/>
                        </div>
                    </div>
                    <div id="divMessage">
                        <p>Message</p>
                        <textarea name="" id="" cols="30" rows="15" id="textareaOne"></textarea>
                        <textarea name="" id="" cols="30" rows="10" id="textareaTwo"></textarea>
                    </div>
                    <div id="divSubmit">
                        <button id="buttonSubmit">Submit</button>
                    </div>
                </div>
                </Fade>
                {/* RIGHT */}
                <Fade>
                <div id="divContactRight">
                    <div className="contactPart">
                        <i class="fas fa-map-pin"></i>
                        <p id="pAdress">Rue des Trois Rois, 146 - 1180 Brussels</p>
                    </div>
                    <div className="contactPart">
                        <i class="fas fa-phone-alt"></i>
                        <p id="pTelephone">+32 478 73 29 40</p>
                    </div>
                    <div className="contactPart">
                        <i class="fas fa-envelope"></i>
                        <p id="pMail">lemairemaxence@hotmail.com</p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}
