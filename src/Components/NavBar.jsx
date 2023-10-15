import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav> 
      <h1>
        <Link to="/logs"> Show all logs </Link>
      </h1>
    <button>
      <Link to="/logs/new"> Add new log </Link>
    </button>
    
    </nav> 
  )
}