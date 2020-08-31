import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe("Palak paneer", "milk cubes mixed with green stuff", "https://static.toiimg.com/photo/53093667.cms")]

  constructor() { }

  ngOnInit(): void {
  }

}
