import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private detail: NavController){

  }

  items=[
{
    id:1,
    name:'Product A',
    price: 200,
    detail:'this is a product A',
    imageURL: 'https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg',
},
{
  id:2,
  name:'Product B',
  price: 250,
  detail:'this is a product B',
  imageURL: 'https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_640.jpg',
},
{
  id:3,
  name:'Product C',
  price: 300,
  detail:'this is a product C',
  imageURL: 'https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_640.jpg',
},
{
  id:4,
  name:'Product D',
  price: 350,
  detail:'this is a product D',
  imageURL: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
},

]

gotoDetail(i:any){
this.detail.navigateForward('/detail',{state:{i}})





}

}
