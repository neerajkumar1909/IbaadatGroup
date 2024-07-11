import './Navbar.css'

export default function Navbar() {
  return (
    <div className='container'>
      <div className='container navbar-left'>
        <h2>Ibaadat Group</h2>
      </div>
      <div className='container navbar-right'>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Awards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Social Media</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
