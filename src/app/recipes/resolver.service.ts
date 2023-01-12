import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipe.model';
import { DataService } from '../shared/data.service';
import { RecipeService } from './recipe.service';

@Injectable()
export class ResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataService: DataService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
