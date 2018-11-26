import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public search: string = "";

  constructor(private router: Router) { }

  buscar(busqueda: string) {
    this.router.navigate(['lista'], { queryParams: { search: busqueda } });
  }
}
