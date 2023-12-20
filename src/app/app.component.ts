import { Component, OnInit } from '@angular/core';
import { CompraService } from './Services/compra.service';
import { Compra } from './Interfaces/compra';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubtotalService } from './Services/subtotal.service';
import { Subtotal } from './Interfaces/subtotal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuickCartCalc';
  compras: Compra[] = [];
  compraForm!: FormGroup;
  searchTerm: string = '';
  p: number = 1; // Página actual
  itemsPerPage: number = 4; // límite de páginas
  totalCantidad: number = 0;

  constructor(
    private compraService: CompraService,
    private formBuilder: FormBuilder,
    private subtotalService: SubtotalService
  ) {
    // Inicialización del formulario
    this.compraForm = this.formBuilder.group({
      producto: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {
    // Cargar las compras y el subtotal al iniciar el componente
    this.loadCompras();
    this.loadSubtotal();
  }

  // Obtener la lista de compras
  loadCompras(): void {
    this.compraService.getAll().subscribe((data: Compra[]) => {
      this.compras = data;
    });
  }

  // Eliminar una compra por su ID
  deleteCompra(id: number): void {
    this.compraService.delete(id).subscribe(() => {
      // Recargar las compras y el subtotal después de eliminar
      this.loadCompras();
      this.loadSubtotal();
    });
  }

  // Enviar un formulario de compra
  onSubmit(): void {
    const compraData = this.compraForm.value as Compra;
    this.compraService.create(compraData).subscribe(() => {
      // Reiniciar el formulario y recargar las compras y el subtotal después de crear una compra
      this.compraForm.reset();
      this.loadCompras();
      this.loadSubtotal();
    });
  }

  // Obtener el subtotal
  loadSubtotal(): void {
    this.subtotalService.getSubtotal().subscribe((data: Subtotal) => {
      this.totalCantidad = data.totalCantidad;
    });
  }

  // Truncar todas las compras
  truncateCompras(): void {
    const confirmacion = confirm('¿Está seguro de que desea borrar todos los registros de compras?');

    if (confirmacion) {
      this.subtotalService.truncateCompras().subscribe(
        (response) => {
          // Lógica adicional después de truncar las compras, si es necesario
          this.loadCompras();
          this.loadSubtotal();

          // Mostrar el mensaje de la respuesta del servidor
          alert(response);
        },
        (error) => {
          console.error('Error al truncar compras:', error);
        }
      );
    }
  }
}
