// Document ready check
document.addEventListener('DOMContentLoaded', function() {
    console.log('Recipe App loaded successfully');
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupFormListener();
}

// Setup form submission
function setupFormListener() {
    const form = document.getElementById('ingredient-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const ingredients = document.getElementById('ingredients-input').value.trim();
        
        if (ingredients) {
            searchRecipes(ingredients);
        }
    });
}

// Search for recipes based on ingredients
async function searchRecipes(ingredientsList) {
    const ingredients = ingredientsList.split(',').map(i => i.trim());
    
    // Show loading state
    document.getElementById('search-section').style.display = 'block';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('error-section').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    
    try {
        // Fetch recipes for each ingredient
        const allRecipes = [];
        const recipeSeen = new Set();
        
        for (const ingredient of ingredients) {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
                );
                
                if (!response.ok) {
                    throw new Error(`API error for ingredient: ${ingredient}`);
                }
                
                const data = await response.json();
                
                if (data.meals) {
                    data.meals.forEach(meal => {
                        if (!recipeSeen.has(meal.idMeal)) {
                            allRecipes.push(meal);
                            recipeSeen.add(meal.idMeal);
                        }
                    });
                }
            } catch (error) {
                console.warn(`Error fetching recipes for ${ingredient}:`, error);
            }
        }
        
        // Hide loading and show results
        document.getElementById('loading').style.display = 'none';
        document.getElementById('search-section').style.display = 'block';
        
        if (allRecipes.length > 0) {
            displayRecipes(allRecipes);
        } else {
            showError('No recipes found for those ingredients. Try different ingredients!');
        }
    } catch (error) {
        document.getElementById('loading').style.display = 'none';
        console.error('Search error:', error);
        showError('An error occurred while searching. Please try again.');
    }
}

// Display recipes in grid
function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';
    
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        card.innerHTML = `
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.strMeal}</h3>
                <p class="recipe-source">Cuisine: ${recipe.strMeal}</p>
                <a href="https://www.themealdb.com/meal/${recipe.idMeal}" 
                   target="_blank" 
                   class="recipe-link">
                    View Full Recipe
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    document.getElementById('results-section').style.display = 'block';
}

// Show error message
function showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-section').style.display = 'block';
    document.getElementById('results-section').style.display = 'none';
}

// Reset search
function resetSearch() {
    document.getElementById('ingredient-form').reset();
    document.getElementById('search-section').style.display = 'block';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('error-section').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    document.getElementById('ingredients-input').focus();
}
