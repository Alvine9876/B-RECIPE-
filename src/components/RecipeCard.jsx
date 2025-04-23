import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
    return (
      <Link to={`/recipes/${recipe.id}`} className="border rounded-lg p-4 hover:shadow-md transition-all">
        <img src={recipe.image} alt={recipe.title} className="h-40 w-full object-cover rounded" />
        <h3 className="text-lg font-bold mt-2">{recipe.title}</h3>
        <p className="text-sm text-gray-600">{recipe.category}</p>
      </Link>
    )
  }

  export default RecipeCard