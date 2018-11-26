import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public item:any;
  constructor(private activatedRoute: ActivatedRoute, private api:ApiService){
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const mlid = params['mlid'];
      // console.log(mlid);
      this.api.getItemById(mlid).then((item) => {
        this.item = item;
      });
    });
  }

}
