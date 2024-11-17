import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-fuel-comparison',
  templateUrl: './fuel-comparison.component.html',
  styleUrls: ['./fuel-comparison.component.css']
})
export class FuelComparisonComponent implements OnInit {
  data: any[] = [];
  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Fuel Type';
  showYAxisLabel = true;
  yAxisLabel = 'Efficiency';

  colorScheme: Color = {
    name: 'fuelEfficiency',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get<any[]>('http://localhost:8080/api/fuel/efficiency').subscribe(data => {
      this.data = data.map(item => {
        return {
          name: item.fuelType,
          value: item.efficiency
        };
      });
    }, error => {
      console.error('Error fetching fuel efficiency data:', error);
    });
  }
}
