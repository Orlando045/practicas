import { Component, Input, OnInit } from '@angular/core';
import { ParentAComponent } from '../parent-a/parent-a.component';

 
@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent {
  @Input() data:any;
  @Input() lista:string='';
 
  list=[

    {
      title: 'title1',
      version: '0,1',
      description: 'lorena',
      name:'josé',
      dato: 'dato',
      datos: 'dato',
      datoss: 'dato',
      datosss: 'dato',
      datossss: 'dato',
      datosssss: 'dato',
      datossssss: 'dato',
      datosssssss: 'dato',
      custom : true
    },
    {
      title: 'title2',
      version: '0,1',
      description: 'lorena',
      name:'josé',
      dato: 'dato',
      datos: 'dato',
      datoss: 'dato',
      datosss: 'dato',
      datossss: 'dato',
      datosssss: 'dato',
      datossssss: 'dato',
      datosssssss: 'dato',
      custom : true
    },
    {
      title: 'title3',
      version: '0,1',
      description: 'lorena',
      name:'josé',
      dato: 'dato',
      datos: 'dato',
      datoss: 'dato',
      datosss: 'dato',
      datossss: 'dato',
      datosssss: 'dato',
      datossssss: 'dato',
      datosssssss: 'dato',
      custom : true
    },
    {
      title: 'title4',
      version: '0,1',
      description: 'lorena',
      name:'josé',
      dato: 'dato',
      datos: 'dato',
      datoss: 'dato',
      datosss: 'dato',
      datossss: 'dato',
      datosssss: 'dato',
      datossssss: 'dato',
      datosssssss: 'dato',
      custom : true
    },
    {
      title: 'title5',
      version: '0,1',
      description: 'lorena',
      name:'josé',
      dato: 'dato',
      datos: 'dato',
      datoss: 'dato',
      datosss: 'dato',
      datossss: 'dato',
      datosssss: 'dato',
      datossssss: 'dato',
      datosssssss: 'dato',
      custom : true
    },
    {
      title: 'title6',
      version: '0,1',
      description: 'lorena',
      name:'josé',
      dato: 'dato',
      datos: 'dato',
      datoss: 'dato',
      datosss: 'dato',
      datossss: 'dato',
      datosssss: 'dato',
      datossssss: 'dato',
      datosssssss: 'dato',
      custom : true
    },

  ]
  tittle (){
    console.log(this.tittle);
  }
  version (){
    console.log(this.version);
  }

  

  }



