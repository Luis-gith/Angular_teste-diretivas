import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  name = 'Luís Felipe Belasco Silva';
  text = '';

  pessoas = [
    {
       nome: 'Luis',
       sobrenome: 'Belasco'
    },
    {
      nome: 'Arthur',
      sobrenome: 'Raspanti'
    },
    {
      nome: 'Gabriel',
      sobrenome: 'Fagundes'
    },
    {
      nome: 'Samuel',
      sobrenome: 'Levi'
    },
  ];

  constructor() { }

  ngOnInit(): void {

    let intervalo = setInterval( ()=> {
      this.count++;
      if(this.count === 10) {
        clearInterval(intervalo);
      }
    }, 1000 )
  }


  clicked(nome:string): void {
    console.log(`${nome} clicou em mim`);
  }

}
