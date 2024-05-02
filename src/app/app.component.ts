import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

interface Vehicle  {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals';
  quantity = signal<number>(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedVehicle = signal<Vehicle>({
    id: 1,
    name: 'AT-AT',
    price: 19416.13
  });

  vehicles = signal<Vehicle[]>([]);
  totalPrice = computed(() => this.selectedVehicle().price * this.quantity());
  color = computed(() => this.totalPrice() > 50000 ? 'green' : 'blue');

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }
}
