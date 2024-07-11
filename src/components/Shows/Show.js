import './Show.css'
import performanceImage from '../../assets/PerformanceType.png';
import stageShow from '../../assets/StageShow.png';

import showImage1 from '../../assets/ShowImage.jpg'
import showImage2 from '../../assets/ShowImage2.jpg'
import showImage3 from '../../assets/ShowImage3.jpg'
import showImage4 from '../../assets/ShowImage4.jpg'

export default function Show() {
    return (
        <>
            <h1 name="Shows">Shows</h1>
            <div className='container-show'>
                <div className='show-top-details'>
                    <div className='show-top'>
                        <span className='show-img-text'>Performance Type</span>
                        <img className='show-image-top' src={performanceImage} alt='' />
                    </div>
                    <div className='show-top'>
                        <span className='show-img-text'>Team</span>
                        <img className='show-image-top' src={stageShow} alt='' />
                    </div>
                </div>
                <br />
                <h2 className='show-heading'>"Captivating stage performance image captures artists in motion, evoking mesmerizing emotions and atmosphere."</h2>
                <div className='show-bottom'>
                    <div className='show-bottom-details'>
                        <div className='show-bottom'>
                            <img className='show-image-bottom' src={showImage1} alt='' />
                        </div>
                        <div className='show-bottom'>
                            <img className='show-image-bottom' src={showImage2} alt='' />
                        </div>
                        <div className='show-bottom'>
                            <img className='show-image-bottom' src={showImage3} alt='' />
                        </div>
                        <div className='show-bottom'>
                            <img className='show-image-bottom' src={showImage4} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
