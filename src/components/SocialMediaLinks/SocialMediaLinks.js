import './SocialMediaLinks.css'


// this file is used in Contact.js 
export default function SocialMediaLinks() {
    return (
        <div>
            <li><i className="icons fa-solid fa-phone"></i>  +91-8285785564 </li>

            <li className='contact-lists'>
                <a className='links' href='https://www.instagram.com/satenderibaadat/'>
                    <i className="icons fa-brands fa-instagram"></i>
                    satenderibaadat
                </a>
            </li>

            <li className='contact-lists'>
                <a className='links' href='https://www.facebook.com/Satender2404?mibextid=ZbWKwL'>
                    <i className="icons fa-brands fa-facebook"></i>
                    Satender Verma
                </a>
            </li>

            <li className='contact-lists'>
                <a className='links' href='https://www.youtube.com/@SatenderVerma'>
                    <i className="icons fa-brands fa-youtube"></i>
                    Satender Verma
                </a>
            </li>
        </div>
    )
}
