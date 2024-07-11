import './Booking.css'
import bookingType from '../../assets/BookingType.png';
import forClass from '../../assets/ForClass.jpg';
import socialMedia from '../../assets/SocialMedia.png';

export default function Booking() {
    return (
        <>
            <h1 name="Booking">For Booking & Class</h1>
            <div className='container-booking'>
                <div className='booking-details'>
                    <div className='booking-div'>
                        <img className='booking-image' src={bookingType} alt='' />
                        <span className='booking-image-caption'>Booking Type</span>
                    </div>
                    <div className='booking-div'>
                        <img className='booking-image' src={forClass} alt='' />
                        <span className='booking-image-caption'>For Class</span>
                    </div>
                    <div className='booking-div'>
                        <img className='booking-image' src={socialMedia} alt='' />
                        <span className='booking-image-caption'>Social Media</span>
                    </div>
                </div>
            </div>
        </>
    )
}
