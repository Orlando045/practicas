import { Component, Input } from '@angular/core';
import { productos } from './productos';
import { person } from './person';
import { ListCardsComponent } from './list-cards/list-cards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  imgpadre= 'mystore'
  widthimg=10;
  name = 'mmmmm';
  age = '12'
  img= './assets/Images/el doc.jpg'
  btn= true;
//names : any[]= ['nico', 'juli', 'pedro']
names : (string | number)[]= ['juan','abril', 'martha'];
newname = '';
box={
  width:100,
  height: 100,
  background:''
}
  person = {
    
      name : '',
      age : 12,
      img: './assets/Images/el doc.jpg'
  }

  productos=[
    {
      name: 'lo que sea',
      precio: 65,
      image: './assets/Images/si.jpg'
    },
    {
      name: 'otra cosa',
      precio: 65,
      image: './assets/Images/el doc.jpg'
    },
    {
      name: 'otra cosa',
      precio: 65,
      image: './assets/Images/si.jpg'
    },
    {
      name: 'otra cosa',
      precio: 65,
      image: './assets/Images/si.jpg'
    },
    {
      name: 'otra cosa',
      precio: 65,
      image: './assets/Images/si.jpg'
    },
      
  ]
list: any;
  toggleButton(){
   this.btn = !this.btn;
  }

  increage() {
    this.person.age += 1; 
  }

  addname(){
    this.names.push(this.newname);
    this.newname = '';
  }
  deletename(index:number){
    this.names.splice(index, 1);
  }

}
