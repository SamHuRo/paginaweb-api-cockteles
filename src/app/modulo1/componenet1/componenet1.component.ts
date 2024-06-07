import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenet1',
  templateUrl: './componenet1.component.html',
  styleUrls: ['./componenet1.component.css']
})

export class Componenet1Component  implements OnInit{
  data: any[] = [];

  constructor() {}

  ngOnInit(): void {
      this.llenarData();
  };

  llenarData(){
    //this.backService.getData().subscribe( data => {this.data = data; console.log(this.data)})
  };
}
