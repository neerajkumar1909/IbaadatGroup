import './Rights.css'

export default function Right() {
    const year = new Date();
    const getYear = year.getFullYear()
    return (
        <div className='rights-container'>
            <div className='copyright'>
                <h4>Ibaadat Music Academy   </h4>
                <span>  © {getYear}. All Rights Reserved.</span>
            </div>
            <div className='copyright-by'>
                <span>Made by</span>
                <a target='_blank' href="https://www.linkedin.com/in/neerajkumar24/">Neeraj Kumar</a>
            </div>
        </div>
    )
}
