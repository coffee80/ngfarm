import { Component } from '@angular/core';
import Building from '../building';
import { BuildingService } from '../building.service';
import { BUILDINGTYPES } from '../buildingtypes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buildmenu',
  templateUrl: './buildmenu.component.html',
  styleUrls: ['./buildmenu.component.css']
})
export class BuildmenuComponent {
  
  constructor(private buildingService:BuildingService){}
  
  listenToNotifier:Subscription = 
    this.buildingService.updateChannel.subscribe(
        ()=>(this.buildingService.selected) && (this.building = {...this.buildingService.selected!})
    );

  open:boolean = false;
  building:Building= {position:0, name:'', type:'Farm', subtype:'Wheat', production:0, productionrate:0};
  types:string[] = ["Farm", "Service", "Industry", "House"];

  save():void{
      this.buildingService.save(this.building);
  }

  selectFirst():void{
    this.building.subtype = BUILDINGTYPES[this.building.type][0];
    this.building.name = '';
    this.building.production = 0;
    this.building.productionrate = 0;
  }

  getBuildingTypes():string[]{
      return BUILDINGTYPES[this.building.type];
  }


}
