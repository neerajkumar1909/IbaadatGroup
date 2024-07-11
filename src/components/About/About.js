import './About.css';
import aboutSatender from '../../assets/AboutSatender.png'
import teamIbaadat from '../../assets/TeamPerformance.png'

export default function About() {
    return (
        <>
            <h1 name="About">About</h1>
            <div className='container-about'>
                <div className='about-left'>
                    <h2 className='about-left-head'>Team Ibaadat</h2>
                    <h3 className='about-left-head'> ~Team of Sufi Qawwali Music</h3>
                    <span className='about-left-text'>A team of 10 young musicians who wants to create a atmosphere of Sufi Qawwali Music in all over the world.</span><br />
                    <span className='about-left-text'>The lead vocalist of team is masters of music and Guniess World Record holder.</span><br />
                    <span className='about-left-text'>He is also performed in Dubai and various cities of India</span>
                </div>
                <div className='about-right'>
                    <div className='about-right-div'>
                        <img className='about-right-image' src={aboutSatender} alt='' />
                        <span className='image-caption'>Satender Verma</span>
                    </div>
                    <div className='about-right-div'>
                        <img className='about-right-image' src={teamIbaadat} alt='' />
                        <span className='image-caption'>Team Ibaadat</span>
                    </div>
                </div>
            </div>
        </>
    )
}
