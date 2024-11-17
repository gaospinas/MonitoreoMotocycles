import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MotorcycleService } from '../services/motorcycle.service';
import { RefillService } from '../services/refill.service';
import { Motorcycle } from '../models/motorcycle.model';
import { Refill } from '../models/refill.model';

@Component({
  selector: 'app-edit-motorcycle',
  templateUrl: './edit-motorcycle.component.html',
  styleUrls: ['./edit-motorcycle.component.css']
})
export class EditMotorcycleComponent implements OnInit {
  motorcycle: Motorcycle;
  refills: Refill[] = [];
  newRefill: Refill = { id: 0, motorcycleId: 0, fuelTypeId: 0, quantity: 0, cost: 0, date: new Date(), efficiency: 0 };

  constructor(
    public dialogRef: MatDialogRef<EditMotorcycleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { motorcycle: Motorcycle },
    private motorcycleService: MotorcycleService,
    private refillService: RefillService
  ) {
    this.motorcycle = data.motorcycle;
  }

  ngOnInit(): void {
    this.loadRefills();
  }

  loadRefills(): void {
    this.refillService.getRefillsByMotorcycleId(this.motorcycle.id).subscribe((refills: Refill[]) => {
      this.refills = refills;
    });
  }

  addRefill(): void {
    this.newRefill.motorcycleId = this.motorcycle.id;
    console.log('Datos a enviar:', this.newRefill); // Añade esta línea para depurar

    this.refillService.addRefill(this.newRefill).subscribe((refill: Refill) => {
      this.refills.push(refill);
      this.newRefill = { id: 0, motorcycleId: 0, fuelTypeId: 0, quantity: 0, cost: 0, date: new Date(), efficiency: 0 };
    }, (error) => {
      console.error('Error al añadir recarga:', error); // Añade esta línea para depurar errores
    });
  }


  close(): void {
    this.dialogRef.close();
  }
}
