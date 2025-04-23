import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function RecipeDetail() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
  
    useEffect(() => {
      fetch(`http://localhost:3000/recipes/${id}`)
        .then(r => r.json())
        .then(setRecipe)
    }, [id])
  
    if (!recipe) return <p className="p-6 text-center">Loading...</p>
  
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
        <img src={recipe.image} className="w-full h-64 object-cover rounded mb-4" />
        <h2 className="text-2xl font-bold">{recipe.title}</h2>
        <p className="text-sm text-gray-500">Category: {recipe.category}</p>
        <h3 className="font-semibold mt-4">Ingredients</h3>
        <p>{recipe.ingredients}</p>
        <h3 className="font-semibold mt-4">Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    )
  }

  export default RecipeDetail
