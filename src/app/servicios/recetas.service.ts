import { Injectable } from '@angular/core';
import { HttpClient, Headers } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private RecetasToUrl: Recetas[] = [];
  private Recetas: Recetas[] = [
      {
      title: "Ginger Champagne",
      href: "http://allrecipes.com/Recipe/Ginger-Champagne/Detail.aspx",
      ingredients: "champagne, ginger, ice, vodka",
      thumbnail: "http://img.recipepuppy.com/1.jpg"
      },
      {
      title: "Potato and Cheese Frittata",
      href: "http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx",
      ingredients: "cheddar cheese, eggs, olive oil, onions, potato, salt",
      thumbnail: "http://img.recipepuppy.com/2.jpg"
      },
      {
      title: "Eggnog Thumbprints",
      href: "http://allrecipes.com/Recipe/Eggnog-Thumbprints/Detail.aspx",
      ingredients: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
      thumbnail: "http://img.recipepuppy.com/3.jpg"
      },
      {
      title: "Succulent Pork Roast",
      href: "http://allrecipes.com/Recipe/Succulent-Pork-Roast/Detail.aspx",
      ingredients: "brown sugar, garlic, pork chops, water",
      thumbnail: "http://img.recipepuppy.com/4.jpg"
      },
      {
      title: "Irish Champ",
      href: "http://allrecipes.com/Recipe/Irish-Champ/Detail.aspx",
      ingredients: "black pepper, butter, green onion, milk, potato, salt",
      thumbnail: "http://img.recipepuppy.com/5.jpg"
      },
      {
      title: "Chocolate-Cherry Thumbprints",
      href: "http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx",
      ingredients: "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
      thumbnail: "http://img.recipepuppy.com/6.jpg"
      },
      {
      title: "Mean Woman Pasta",
      href: "http://allrecipes.com/Recipe/Mean-Woman-Pasta/Detail.aspx",
      ingredients: "garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato",
      thumbnail: "http://img.recipepuppy.com/7.jpg"
      },
      {
      title: "Hot Spiced Cider",
      href: "http://allrecipes.com/Recipe/Hot-Spiced-Cider/Detail.aspx",
      ingredients: "allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt",
      thumbnail: "http://img.recipepuppy.com/8.jpg"
      },
      {
      title: "Isa's Cola de Mono",
      href: "http://allrecipes.com/Recipe/Isas-Cola-de-Mono/Detail.aspx",
      ingredients: "cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar",
      thumbnail: "http://img.recipepuppy.com/9.jpg"
      },
      {
      title: "Amy's Barbecue Chicken Salad",
      href: "http://allrecipes.com/Recipe/Amys-Barbecue-Chicken-Salad/Detail.aspx",
      ingredients: "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
      thumbnail: "http://img.recipepuppy.com/10.jpg"
      }
    ];

  constructor( private http: HttpClient ) {
    this.getRecetasURl();
   }
  
  getRecetasURl(){
    this.http.get('http://www.recipepuppy.com/api/').subscribe( receta => {
      for( let i = 0; i < receta.results.length; i++ ){
        let recetas: {};
        recetas = receta.results[i];
        console.log(receta.results[i])
        this.RecetasToUrl.push(recetas);
      }
    } );
  }

  getRecetas() {
    // let RecetasURL = this.getRecetasURl();
    // console.log(RecetasURL);
    return this.RecetasToUrl;
  }
}

export interface Recetas{
  title:string;
  href:string;
  ingredients:string;
  thumbnail:string;
}