import { useState } from 'react'
import Navbar from './components/Navbar'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'
import RecipeDetail from './components/RecipeDetail'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [user, setUser] = useState(null)
  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, setUser)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((r) => r.json())
      .then(setRecipes)
  }, [])

  const addRecipe = (newRecipe) => setRecipes([...recipes, newRecipe])

  return (
    <>
    <div>
    <Navbar user={user} onLogout={() => signOut(auth)} />
      <Routes>
        <Route path="/" element={user ? <RecipeList recipes={recipes} /> : <Navigate to="/login" />} />
        <Route path="/new" element={user ? <RecipeForm addRecipe={addRecipe} user={user} /> : <Navigate to="/login" />} />
        <Route path="/recipes/:id" element={user ? <RecipeDetail /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
      </Routes>
    </div>

    </>
  )
}

export default App
