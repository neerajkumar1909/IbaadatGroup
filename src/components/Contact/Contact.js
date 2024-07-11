import './Contact.css';
import teamPerformance from '../../assets/TeamPerformance.png'

import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
// import ContactForm from '../ContactForm/ContactForm';
import ContactForm2 from '../ContactForm2/ContactForm2';

export default function Contact() {
    return (
        <>
            <h1 name="Contact">Contact</h1>
            <div className='container-contact'>
                <div className='contact-left-details'>
                    {/* Left Container */}
                    <div className='contact-left'>
                        <span className='contact-text-left'>
                            You can contact us on :
                        </span><br />
                        <div className='contact-left-icons-list'>
                            <ul className='contact-ul-details'>
                                <SocialMediaLinks />
                            </ul>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className='contact-right'>
                        <img className='contact-right-image' src={teamPerformance} alt='' />
                        <span className='contact-right-img-text'>Book for Shows</span>
                    </div>

                </div>
            </div >
            <ContactForm2 />
        </>
    )
}
