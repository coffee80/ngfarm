import { Injectable } from '@angular/core';
import Building from './building';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private notifier:Subject<void> = new Subject<void>();
  updateChannel:Observable<void> = this.notifier.asObservable();

  selected:Building | null = null;

  buildings:Building[] = [
    {
      position:1,
      name:'Bananas Libres',
      type:'Farm',
      subtype:'Banana',
      production:0,
      productionrate:5
      },
      {
        position:2,
        name:'Bananas Solidales',
        type:'Farm',
        subtype:'Banana',
        production:0,
        productionrate:2
    }
  ];

  constructor() {

    for(let i:number=2;i<=59;i++)
      this.buildings.push({
        position:i,
        name:'Vuoto',
        type:'Empty',
        subtype:'',
        production:0,
        productionrate:0
    });
  }
  
  

  getBuildings(): Observable<Building[]>  {
    return of(this.buildings);
  }

  save(newBuilding: Building) {
    for(let i=0;i<this.buildings.length;i++)
      if(this.buildings[i].position==newBuilding.position)
      {
        this.buildings[i] = newBuilding;
        return;
      }

  }

  select(building:Building){
      this.selected = building;
      this.notifier.next();
  }

}
