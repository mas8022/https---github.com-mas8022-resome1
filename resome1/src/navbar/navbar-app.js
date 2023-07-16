import "./navbar-style.css"

export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="logo"><h2>shapely demo</h2></div>
            <div>
                <ul className="nav-main-ul">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Portfolio</li>
                    <li>About The Tests</li>
                    <li>Shop</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
