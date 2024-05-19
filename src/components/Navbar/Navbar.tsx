import { FunctionComponent } from "react"
import { Link } from "react-router-dom"

export const Navbar: FunctionComponent = () => {
    return <nav className="h-16 px-4 py-4 mb-3">
      <Link to="/">Life Tracker</Link>
    </nav>
}