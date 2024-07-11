import './Awards.css';
import achievement from '../../assets/Achievement.png';
import award from '../../assets/Award.jpg'

export default function Awards() {
    return (
        <>
            <h1 name="Awards">Awards and Achievements</h1>
            <div className='container-awards'>
                <div className='awards-left-details'>
                    {/* Left Container */}
                    <div className='awards-left'>
                        <img className='awards-image' src={achievement} alt='' />
                        <span className='awards-img-text'>Guinness World Record & Times Of India-Frame</span>
                    </div>
                    {/* Center Container */}
                    <div className='awards-center'>
                        <span className='awards-text-center'>"Iconic image showcases hundreds of singers united on one stage, setting a <b>World Record</b> in harmony."</span><br />
                        <span className='awards-text-center'>
                            "Captivating the Masses: <b>Satender Verma</b>   graces the headlines with a mesmerizing performance <b>@Hazrat Nizamuddin Dargah</b>"</span>
                    </div>

                    {/* Right container */}
                    {/* <div className='awards-right'>
                    <div className='awards-details'>
                        <img className='awards-image' src={award} alt='' />
                        <spn className='awards-image-text'>
                            "While harmonizing melodies on stage, I'm deeply honored by an organization, amplifying the power of music's resonance."
                        </spn>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    )
}
