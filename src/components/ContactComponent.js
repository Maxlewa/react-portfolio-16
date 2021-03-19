import React from 'react'

export default function ContactComponent() {
    return (
        <div id="sectionContact">
            {/* LEFT */}
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
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div id="divSubmit">
                    <button id="buttonSubmit">Submit</button>
                </div>
            </div>
            {/* RIGHT */}
            <div id="divContactRight">
                <div id="contactAdress">
                    <i class="fas fa-map-pin"></i>
                    <div>
                        <p>Rue des Trois Rois, 146</p>
                        <p>1180 Brussels</p>
                    </div>
                </div>
                <div id="contactPhone">
                    <i class="fas fa-phone-alt"></i>
                    <p>+32 478/73.29.40</p>
                </div>
                <div id="contactMail">
                    <i class="fas fa-envelope"></i>
                    <p>lemairemaxence@hotmail.com</p>
                </div>
            </div>
        </div>
    )
}
