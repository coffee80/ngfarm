import { Component } from '@angular/core';
import { BuildingService } from '../building.service';
import Building from '../building';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {

    constructor(private buildingService:BuildingService){}

    get buildings():Observable<Building[]>{
      return this.buildingService.getBuildings();
    }

}
