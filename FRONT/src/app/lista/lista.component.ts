import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public items: any = [];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private api: ApiService) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const search = params['search'];
      // console.log(search);
      this.api.getItems(search).then((items) => {
        this.items = items.results;
      });
    });
  }

  verDetalle(idProducto) {
    this.router.navigate(['detalle'], { queryParams: { mlid: idProducto } });
  }
}
