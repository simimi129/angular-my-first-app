import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'This is simply a test',
      'https://img.bestrecipes.com.au/mNZdPYR3/w643-h428-cfill-q90/br/2019/05/pumpkin-spinach-and-ricotta-lasagne-952087-2.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Test recipe',
      'This is simply a test',
      'https://img.bestrecipes.com.au/mNZdPYR3/w643-h428-cfill-q90/br/2019/05/pumpkin-spinach-and-ricotta-lasagne-952087-2.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
