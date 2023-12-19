import { Component, OnInit, inject } from '@angular/core';
import { CompraService } from './Services/compra.service';
import { Compra } from './Interfaces/compra';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'QuickCartCalc';
  compras: Compra[] = [];
  compraForm!: FormGroup;
  searchTerm: string = '';
  p: number = 1; // Página actual
  itemsPerPage: number = 4; // limite de paginas 

  constructor(private compraService: CompraService, private formBuilder: FormBuilder) {
    this.compraForm = this.formBuilder.group({
      producto: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      precio: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {
    this.loadCompras();
  }

  loadCompras(): void {
    this.compraService.getAll().subscribe((data: Compra[]) => {
      this.compras = data;
    });
  }

  deleteCompra(id: number): void {
    this.compraService.delete(id).subscribe(() => {
      // Recargar las compras después de eliminar
      this.loadCompras();
    });
  }

  onSubmit(): void {
    const compraData = this.compraForm.value as Compra;
    this.compraService.create(compraData).subscribe(() => {
      this.compraForm.reset();
      this.loadCompras();
    });
  }

}
