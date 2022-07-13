import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

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
      firstName: '',
      lastName: '',
      age: 0,
   },
  ];

  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
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

  getPeople(){
    this.peopleService.getPpl().subscribe(people=> {
      this.pessoas = people;
    })
  }

}
