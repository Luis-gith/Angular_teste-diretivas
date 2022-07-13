import { Component, OnInit } from '@angular/core';
import { ListApiService } from '../services/list-api.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  pokemons:Array<any> = [];

  constructor(private lista : ListApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
  this.lista.getList().subscribe(resultado => {
    this.pokemons = resultado.results;

    console.log(this.pokemons);
  })
  }


}
