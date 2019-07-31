import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Vehicles } from 'src/api/models';
import { RapidControllerService } from 'src/api/services';

@Component({
  selector: 'app-vehicles-star-wars',
  templateUrl: './vehicles-star-wars.component.html',
  styleUrls: ['./vehicles-star-wars.component.scss']
})
export class VehiclesStarWarsComponent implements OnInit {

  public vehicleRest: Observable<Vehicles[]>
  constructor(public vehicleService: RapidControllerService) { }

  ngOnInit() {
   this.vehicleRest = this.vehicleService.getVehiclesUsingPOST()
  }

}
