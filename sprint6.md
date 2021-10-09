Aspectos a destacar para el testeo:

-Hemos dejado los archivos de creación de base de datos(structure.sql) y rellenos de datos(data.sql) por separado, así como el dump completo en el archivos Havenboards.sql

- Creación, edición, y eliminación de productos y sus tablas adheridas funcionando, con sólo acceso para usuarios admin (faltan crear las vistas admin)

- Búsqueda de artículos según tags, ya que los nombres no brindan demasiada info de momento

- Creación, edición, y eliminación de usuario con role:"user" por defecto funcionando, con sólo acceso para usuarios logueados. Si sube imagen, se carga, si no, se le pone una por default

- La edición de usuario permite editar la dirección. Si tiene, la actualiza, si no tiene, crea una nueva. La imagen subida sustituye a la que tenía antes (aquí se nos presenta el problema de que nunca se puede volver a la default, ya que no tenemos la opción de traer la imagen al form y poder eliminarla)

- Paginación de productos completa. Tanto para los productos en general, como para cada una de sus categorías, así como para los artículos en venta
