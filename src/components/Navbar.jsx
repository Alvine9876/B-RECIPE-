import { Link } from 'react-router-dom'

function Navbar({ user, onLogout }) {
    return (
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Recipe Book</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          {user && <Link to="/new" className="hover:underline">New Recipe</Link>}
          {user ? (
            <button onClick={onLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
          ) : (
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Login</Link>
          )}
        </div>
      </nav>
    )
  }

  export default Navbar
