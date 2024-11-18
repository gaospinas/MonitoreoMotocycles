import { Component, OnInit } from '@angular/core';
import { RefillService } from '../services/refill.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-refill-history',
  templateUrl: './refill-history.component.html'
})
export class RefillHistoryComponent implements OnInit {
  view: [number, number] = [700, 400];
  data: any[] = [];
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
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
    this.refillService.getAllUserMotorcycleRefills().subscribe((result: any) => {
      this.data = result.map((item: any) => ({
        name: `${item.userName} - ${item.motorcycleBrand} ${item.motorcycleModel}`,
        series: item.refills.map((refill: any) => ({
          name: refill.fecha,
          value: refill.efficiency
        }))
      }));
    }, error => {
      console.error('Error fetching refill history data:', error);
    });
  }
}
