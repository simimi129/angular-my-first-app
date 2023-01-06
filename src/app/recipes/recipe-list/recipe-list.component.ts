import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
