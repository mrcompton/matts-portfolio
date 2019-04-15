import React from 'react';
import './AboutMe.scss';
import img from '../IMG_8672.jpg'




const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='box1'>
                <div className='box1a'>
                    <div className='title'>
                        ABOUT ME
                    </div>
                    <div className='body'>
                        <p>I am a former GIS/mapping professional who has embarked on an exciting new journey in the field of Web Development.  I thoroughly enjoy using my newfound coding skills to build useful things and solve real problems.</p>

                        <p>I have lived in a variety of places, including the Mountain West, the East Coast, and Europe. I have learned to appreciate the richness that can be found when you combine differing ideas and approaches when facing challenges and solving problems. </p>

                        <p>Outside of work, I enjoy spending time with my family, exploring the natural world, and learning new things.</p>
                    </div>
                </div>
                <div className='box1b'>
                    <img id='photo' src={img} alt=''/>
                </div>
            </div>

        </div>
    )
}

export default AboutMe