import { Component, OnInit } from '@angular/core';
import { RefillService } from '../services/refill.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-efficiency-by-fuel-type',
  templateUrl: './efficiency-by-fuel-type.component.html'
})
export class EfficiencyByFuelTypeComponent implements OnInit {
  view: [number, number] = [700, 400];
  data: any[] = [];
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Fuel Type';
  showYAxisLabel = true;
  yAxisLabel = 'Efficiency';
  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private refillService: RefillService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.refillService.getEfficiencyByFuelType().subscribe((result: any) => {
      this.data = Object.keys(result).map(key => ({ name: key, value: result[key] }));
    }, error => {
      console.error('Error fetching efficiency data:', error);
    });
  }
}
