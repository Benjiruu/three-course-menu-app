# three-course-menu-app/three-course-menu-app/README.md

# Three Course Menu App

This is a Vue.js application that allows users to create a three-course menu by selecting from various options for each category: appetizer, main course, and dessert. The application also generates a shopping list based on the selected recipes and provides a cooking page with instructions.

## Project Structure

```
three-course-menu-app
├── public
│   ├── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── AppetizerSelection.vue
│   │   ├── MainCourseSelection.vue
│   │   ├── DessertSelection.vue
│   │   ├── ShoppingList.vue
│   │   └── CookingPage.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── views
│   │   ├── Home.vue
│   │   ├── RecipeSelection.vue
│   │   └── MenuSummary.vue
│   ├── App.vue
│   ├── main.js
│   └── recipes.json
├── package.json
└── README.md
```

## Features

- Select an appetizer, main course, and dessert from predefined options.
- View selected recipes along with cooking instructions.
- Generate a shopping list based on the selected menu.
- Navigate between different views for recipe selection and menu summary.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd three-course-menu-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm run serve
   ```

5. Open your browser and go to `http://localhost:8080` to view the application.

## Usage

- Start on the Home page to learn about the application.
- Navigate to the Recipe Selection page to choose your three-course menu.
- After selecting your recipes, view the Menu Summary to see your shopping list and cooking instructions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.