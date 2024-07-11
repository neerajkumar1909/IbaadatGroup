import './Main.css';
// import videoMain from '../../assets/video1.mp4'
import mainpage from '../../assets/MainPage.png'
import videoLive from '../../assets/VideoLive.mp4'
import maincover from '../../assets/MainCover.jpg'
import teamImageMain from '../../assets/TeamImageMain.jpg'

export default function Main() {
    return (
        <>
            <h1 name="Home">Ibaadat - The Classical Music Academy</h1>
            <div className='container-main'>
                <div className='container-main-details'>
                    <img className='container-main-image' src={mainpage} alt='' />
                    <video className='container-main-video' controls>
                        <source src={videoLive} type='video/mp4' />
                    </video>
                </div>
                <div className='container-main-details'>
                    <img className='container-main-image' src={maincover} alt='' />
                    <img className='container-main-image' src={teamImageMain} alt='' />
                </div>
            </div>
        </>
    )
}
