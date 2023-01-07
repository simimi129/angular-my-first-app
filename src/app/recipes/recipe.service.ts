import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'This is simply a test',
      'https://img.bestrecipes.com.au/mNZdPYR3/w643-h428-cfill-q90/br/2019/05/pumpkin-spinach-and-ricotta-lasagne-952087-2.jpg'
    ),
    new Recipe(
      'Another Test recipe',
      'This is simply a test',
      'https://img.bestrecipes.com.au/mNZdPYR3/w643-h428-cfill-q90/br/2019/05/pumpkin-spinach-and-ricotta-lasagne-952087-2.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
