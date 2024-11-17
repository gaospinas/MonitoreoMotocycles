import { Component, OnInit } from '@angular/core';
import { RefillService } from '../services/refill.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-all-fuel-comparison',
  templateUrl: './all-fuel-comparison.component.html',
  styleUrls: ['./all-fuel-comparison.component.css']
})
export class AllFuelComparisonComponent implements OnInit {
  data: any[] = [];
  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Efficiency';

  colorScheme: Color = {
    name: 'fuelEfficiency',
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
      console.log('Datos devueltos del backend:', result);
      this.data = this.transformData(result);
    }, error => {
      console.error('Error al obtener datos:', error);
    });
  }

  transformData(result: any[]): any[] {
    const transformedData = result.map((item: any) => {
      if (item && item.userName && item.motorcycleBrand && item.motorcycleModel && item.refills) {
        return {
          name: `${item.userName} - ${item.motorcycleBrand} ${item.motorcycleModel}`,
          series: item.refills.map((refill: any) => ({
            name: refill.fecha ? refill.fecha : 'Unknown Date',
            value: refill.efficiency ? refill.efficiency : 0
          }))
        };
      } else {
        console.warn('Datos incompletos o nulos:', item);
        return null;
      }
    }).filter(item => item !== null);
    console.log('Datos transformados para ngx-charts:', transformedData);
    return transformedData;
  }
}
