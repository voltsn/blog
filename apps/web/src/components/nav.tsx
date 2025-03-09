import { Link } from '@tanstack/react-router';

function Nav() {
  return (
    <>
      <nav>
        <div className="font-gugi">
          AV
        </div>
        <div>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/test" className="[&.active]:font-bold">
           Test 
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav;
