import { Component, Input, OnInit } from '@angular/core';
import Building from '../building';
import { Subscription } from 'rxjs';
import { ClockService } from '../clock.service';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit{

  @Input() building!:Building;

  constructor(private clockService:ClockService, private buildingService:BuildingService){};

  clockSubscription!:Subscription;

  ngOnInit(): void {
      if(this.building.type=='House' || this.building.type=='Service')
          return;

      this.clockSubscription = this.clockService.clock.subscribe
      (
        n=>this.building.production+=this.building.productionrate
      );
  }

  getClass():string{
    return "w3-col m1 l1 building " + this.building.type + " "+(this.building==this.buildingService.selected);    
  }

  selectMe():void{
    this.buildingService.select(this.building);
    
  }

}
