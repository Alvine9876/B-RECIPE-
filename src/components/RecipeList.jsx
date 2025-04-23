import RecipeCard from './RecipeCard'

function RecipeList({ recipes }) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">All Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    )
  }

  export default RecipeList
