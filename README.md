# QuickCartCalc

QuickCartCalc es una aplicación web simple para gestionar compras y calcular el subtotal. Está construida utilizando Angular para el frontend y ASP.NET Core con Entity Framework Core para el backend.

## Características

1. **Listar Compras:** Ver una lista de compras con detalles del producto.

2. **Agregar Compra:** Añadir una nueva compra con detalles del producto, cantidad y precio.

3. **Eliminar Compra:** Quitar una compra de la lista.

4. **Calcular Subtotal:** Ver el monto total calculado en función de la cantidad y el precio de cada compra.

5. **Eliminar Todas las Compras:** Borrar todas las compras de la lista.

## Tecnologías Utilizadas

- **Angular:** Desarrollo del frontend.
- **ASP.NET Core:** Desarrollo del backend.
- **Entity Framework Core:** Gestión de la base de datos.
- **SQL Server:** Almacenamiento de la base de datos.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/your-username/QuickCartCalc.git
   ```

2. Navegar a la carpeta de la aplicación Angular:

   ```bash
   cd QuickCartCalc/QuickCartCalcClient
   ```

3. Instalar dependencias:

   ```bash
   npm install
   ```

4. Ejecutar la aplicación Angular:

   ```bash
   ng serve
   ```

5. Navegar a la carpeta de la aplicación ASP.NET Core:

   ```bash
   cd ../QuickCartCalc/QuickCartCalcServer
   ```

6. Ejecutar la aplicación ASP.NET Core:

   ```bash
   dotnet run
   ```

7. Acceder a la aplicación en tu navegador:

   [http://localhost:4200/](http://localhost:4200/)

## Uso

1. Agregar compras utilizando el formulario en la página.
2. Ver la lista de compras.
3. Calcular el subtotal.
4. Eliminar compras individualmente o truncar la lista completa.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias para mejorar, por favor crea un problema (issue) o envía una solicitud de extracción (pull request).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.