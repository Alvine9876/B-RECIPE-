import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RecipeForm({ addRecipe, user }) {
    const [formData, setFormData] = useState({
      title: '', ingredients: '', instructions: '', category: '', image: '', userId: user?.uid
    })
    const navigate = useNavigate()
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(r => r.json())
        .then(data => {
          addRecipe(data)
          navigate('/')
        })
    }
  
    return (
      <form onSubmit={handleSubmit} className="p-6 max-w-xl mx-auto bg-white shadow rounded space-y-4">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title"
          className="w-full border p-2 rounded" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category"
          className="w-full border p-2 rounded" />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL"
          className="w-full border p-2 rounded" />
        <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients"
          className="w-full border p-2 rounded h-24" />
        <textarea name="instructions" value={formData.instructions} onChange={handleChange} placeholder="Instructions"
          className="w-full border p-2 rounded h-24" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Recipe
        </button>
      </form>
    )
  }
  
  export default RecipeForm