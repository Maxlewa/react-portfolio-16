import React from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

export default function Footer() {
    return (
        <div id="footer">
            <div id="footerLeft">
                <a href="https://www.facebook.com/LoydBE/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/loydbe/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/LoydMusicBE" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCxhkP9IgusYDaQU5dW-w-fQ" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://github.com/Maxlewa" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:lemairemaxence@hotmail.com"><i class="fas fa-envelope"></i></a>
            </div>
            <div id="footerRight">
                <h3>2021 Copyright ©️ Maxence Lemaire</h3>
                <h5>All rights reserved.</h5>
            </div>
        </div>
    )
}
