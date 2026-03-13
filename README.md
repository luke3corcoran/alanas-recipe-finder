# Alana's Recipe Finder

A modern web app that helps users discover recipes by entering their available ingredients. The app searches a comprehensive recipe database and displays delicious recipes that match your ingredients.

## Features

- **Ingredient Search** - Enter any ingredients (comma-separated) to find recipes
- **Recipe Database** - Access to thousands of recipes from TheMealDB
- **Recipe Details** - View full recipe instructions and ingredients
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Search** - Instant recipe results as you search
- **External Links** - Direct links to complete recipes with detailed instructions

## How to Use

1. **Enter Ingredients** - Type one or more ingredients separated by commas in the search box
   - Example: "chicken, tomato, garlic"
2. **Search** - Click the "Search Recipes" button
3. **View Results** - Browse through recipe cards that match your ingredients
4. **Get Recipe Details** - Click "View Full Recipe" to see complete cooking instructions and ingredient lists

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection (to fetch recipes from the API)

### Installation

1. Clone or download the project
2. Open the project folder in VS Code
3. Use the Live Server extension to run the app (recommended)
   - Install: VS Code Live Server extension by Ritwick Dey
   - Right-click `index.html` → "Open with Live Server"

Alternatively, simply open `index.html` directly in your browser.

## Development

### Project Files

- **index.html** - Search form and recipe results display
- **styles.css** - All styling, including responsive recipe grid
- **script.js** - Recipe search API integration and dynamic rendering
- **assets/** - Directory for custom images or resources

### Customization

1. **Change Recipe Source** - Current app uses TheMealDB API (free, no key required)
   - Edit the API URL in `script.js` to use a different recipe API
2. **Styling** - Modify colors, fonts, and layouts in `styles.css`
3. **Add Features** - Extend `script.js` to add:
   - Filters by cuisine type or meal type
   - Recipe saving/favorites
   - Nutritional information display
   - User ratings and reviews

## API Information

This app uses the **TheMealDB API** - a free, community-driven database of recipes.

- **Documentation**: https://www.themealdb.com/api.php
- **No API Key Required** - Free to use
- **CORS Enabled** - Works with client-side JavaScript
- **Database Size**: 1000+ recipes from various cuisines

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

**No recipes found?**
- Try common ingredients like: chicken, beef, tomato, garlic, rice, etc.
- Some ingredients may have limited recipes in the database
- Try broader ingredient names

**Slow loading?**
- Check your internet connection
- The API may take a few seconds to respond
- Most searches complete within 2-3 seconds

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to fork, modify, and submit pull requests.

## Support

For issues or questions, please refer to the TheMealDB documentation or create an issue in the project repository.
