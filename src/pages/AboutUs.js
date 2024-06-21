import React from 'react'
import kimetsu from '../assets/aboutUs.png'
import '../styles/AboutUs.css'

function AboutUs() {
    return (
        <div className='home' style={{ backgroundImage: `url(${kimetsu})` }}>
            div
            <div className='headerContainer' >
                <h1>ABOUT US</h1>
                <br></br>
                <p>Founded in 2000, Ufotable Inc. is a renowned Japanese animation studio celebrated for its high-quality productions
                    and innovative animation techniques. With a commitment to storytelling excellence and visual artistry, Ufotable has
                    captivated audiences worldwide through its diverse portfolio of anime series, films, and video game adaptations.
                    <br></br><br></br>
                    Our studio is best known for its work on critically acclaimed titles such as "Fate/Zero,
                    " "Demon Slayer: Kimetsu no Yaiba," and the "Kara no Kyōkai" series, where we push the boundaries of animation
                    to deliver breathtaking and immersive experiences. <br></br><br></br>At Ufotable, we pride ourselves on our collaborative approach,
                    leveraging the talents of our passionate team to bring compelling narratives and unforgettable characters to life.
                    Driven by creativity and dedication, we continue to set new standards in the animation industry, inspiring
                    and entertaining fans across the globe.
                </p>
            </div>
        </div>
    )
}

export default AboutUs