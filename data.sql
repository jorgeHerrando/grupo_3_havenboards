--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'2021-09-20 15:47:58','2021-10-06 17:31:55','Almozara',32,'2B','Buenos Aires','Merlo',1722,'Argentina',7);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Quicksilver','2021-09-17 21:20:15',NULL),(2,'Billabong','2021-09-17 21:20:17',NULL),(3,'Roxy','2021-09-17 21:20:20',NULL),(4,'Patagonia','2021-09-17 21:20:23',NULL),(5,'Hurley','2021-09-17 21:20:25',NULL),(6,'Burton','2021-09-17 21:20:28',NULL),(7,'North','2021-09-17 21:20:30',NULL),(8,'Olaian','2021-09-17 21:20:32',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Snowboard','Snowboard.jpg',NULL,NULL),(2,'Skateboard','Skateboard.jpg',NULL,NULL),(3,'Surf','Surf.jpg',NULL,NULL),(4,'Wakeboard','Wakeboard.jpg',NULL,NULL),(5,'Accessory','Accessory.jpg',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,1,26,1,20.00,'2021-09-20 16:43:36',NULL,7),(2,1,27,2,40.00,'2021-09-20 16:43:36',NULL,7);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,7,1,1,60.00,'2021-09-20 15:57:45',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` VALUES (1,'Débito','2021-09-20 14:47:26',NULL),(2,'Crédito','2021-09-20 14:47:26',NULL),(3,'Transferencia Bancaria','2021-09-20 14:47:26',NULL),(4,'Mercado Pago','2021-09-20 14:47:26',NULL),(5,'PayPal','2021-09-20 14:47:26',NULL);
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,'Nitro-Prime-Blue-Snowboard-Gullwing--Rocker-1.jpg',1,'2021-09-17 23:49:45',NULL),(2,'Nitro-Prime-Blue-Snowboard-Gullwing--Rocker-2.jpg',1,'2021-09-17 23:49:45',NULL),(3,'Nitro-Mystique-Rocker-Snowboard-1.jpg',2,'2021-09-17 23:49:45',NULL),(4,'Burton-Yeasayer-Flat-Top-2020-Snowboard-1.jpg',3,'2021-09-17 23:49:45',NULL),(5,'Burton-Yeasayer-Flat-Top-2020-Snowboard-2.jpg',3,'2021-09-17 23:49:45',NULL),(6,'Burton-Yeasayer-Flat-Top-2020-Snowboard-3.jpg',3,'2021-09-17 23:49:45',NULL),(7,'Burton-Rewind-Camber-2020-Snowboard-1.jpg',4,'2021-09-17 23:49:45',NULL),(8,'Burton-Rewind-Camber-2020-Snowboard-2.jpg',4,'2021-09-17 23:49:45',NULL),(9,'Burton-Rewind-Camber-2020-Snowboard-3.jpg',4,'2021-09-17 23:49:45',NULL),(10,'Nitro-Prime-Snowboard-Rocker-Wide.jpg',5,'2021-09-17 23:49:45',NULL),(11,'Custom-Camber-2020-Snowboard-1.jpg',6,'2021-09-17 23:49:45',NULL),(12,'Custom-Camber-2020-Snowboard-2.jpg',6,'2021-09-17 23:49:45',NULL),(13,'Custom-Camber-2020-Snowboard-3.jpg',6,'2021-09-17 23:49:45',NULL),(14,'natural-chick-web-lq.jpg',7,'2021-09-17 23:49:45',NULL),(15,'skate-tomboy-full.jpg',8,'2021-09-17 23:49:45',NULL),(16,'gran-ola-full.jpg',9,'2021-09-17 23:49:45',NULL),(17,'floral-rosas-truck-1.jpg',10,'2021-09-17 23:49:45',NULL),(18,'aletas-surf-1.jpg',11,'2021-09-17 23:49:45',NULL),(19,'aletas-surf-2.jpg',12,'2021-09-17 23:49:45',NULL),(20,'casco-skate-hurley1-1.jpg',13,'2021-09-17 23:49:45',NULL),(21,'casco-skate-hurley2-1.jpg',13,'2021-09-17 23:49:45',NULL),(22,'casco-snow-quicksilver1-1.jpg',14,'2021-09-17 23:49:45',NULL),(23,'casco-snow-quicksilver2-1.jpg',14,'2021-09-17 23:49:45',NULL),(24,'casco-snow-quicksilver3-1.jpg',14,'2021-09-17 23:49:45',NULL),(25,'casco-snow-quicksilver4-1.jpg',14,'2021-09-17 23:49:45',NULL),(26,'casco-wakeboard1-1.jpg',15,'2021-09-17 23:49:45',NULL),(27,'casco-wakeboard2-1.jpg',15,'2021-09-17 23:49:45',NULL),(28,'gafas-snow-roxy1-1.jpg',16,'2021-09-17 23:49:45',NULL),(29,'gafas-snow-roxy2-1.jpg',16,'2021-09-17 23:49:45',NULL),(30,'gafas-snow-roxy3-1.jpg',16,'2021-09-17 23:49:45',NULL),(31,'guantes-snow-billabong-1.jpg',17,'2021-09-17 23:49:45',NULL),(32,'proteccion-skate-rodilleras-1.jpg',18,'2021-09-17 23:49:45',NULL),(33,'surf-wax1-1.jpg',19,'2021-09-17 23:49:45',NULL),(34,'surf-wax2-1.jpg',19,'2021-09-17 23:49:45',NULL),(35,'gafas-snow-quicksilver-1.jpg',20,'2021-09-17 23:49:45',NULL),(36,'tabla-wake-azul-north-1-1.jpg',21,'2021-09-17 23:49:45',NULL),(37,'tabla-wake-azul-north-2-1.jpg',21,'2021-09-17 23:49:45',NULL),(38,'tabla-wake-azul-north-3-1.jpg',21,'2021-09-17 23:49:45',NULL),(39,'tabla-wake-azul-north-4-1.jpg',21,'2021-09-17 23:49:45',NULL),(40,'tabla-wake-azul-north-5-1.jpg',21,'2021-09-17 23:49:45',NULL),(41,'tabla-wake-celeste-north-1-1.jpg',22,'2021-09-17 23:49:45',NULL),(42,'tabla-wake-celeste-north-2-1.jpg',22,'2021-09-17 23:49:45',NULL),(43,'tabla-wake-celeste-north-3-1.jpg',22,'2021-09-17 23:49:45',NULL),(44,'tabla-wake-celeste-north-4-1.jpg',22,'2021-09-17 23:49:45',NULL),(45,'tabla-wake-celeste-north-5-1.jpg',22,'2021-09-17 23:49:45',NULL),(46,'tabla-wake-rojo-north-1-1.jpg',23,'2021-09-17 23:49:45',NULL),(47,'tabla-wake-rojo-north-2-1.jpg',23,'2021-09-17 23:49:45',NULL),(48,'tabla-wake-rojo-north-3-1.jpg',23,'2021-09-17 23:49:45',NULL),(49,'tabla-wake-rojo-north-4-1.jpg',23,'2021-09-17 23:49:45',NULL),(50,'tabla-wake-rojo-north-5-1.jpg',23,'2021-09-17 23:49:45',NULL),(51,'tabla-wake-negro-north-1-1.jpg',24,'2021-09-17 23:49:45',NULL),(52,'tabla-wake-negro-north-2-1.jpg',24,'2021-09-17 23:49:45',NULL),(53,'tabla-wake-negro-north-3-1.jpg',24,'2021-09-17 23:49:45',NULL),(54,'tabla-wake-negro-north-4-1.jpg',24,'2021-09-17 23:49:45',NULL),(55,'tabla-wake-negro-north-5-1.jpg',24,'2021-09-17 23:49:45',NULL),(56,'tabla-wake-verde-north-1-1.jpg',25,'2021-09-17 23:49:45',NULL),(57,'tabla-wake-verde-north-2-1.jpg',25,'2021-09-17 23:49:45',NULL),(58,'tabla-wake-verde-north-3-1.jpg',25,'2021-09-17 23:49:45',NULL),(59,'tabla-wake-verde-north-4-1.jpg',25,'2021-09-17 23:49:45',NULL),(60,'tabla-wake-verde-north-5-1.jpg',25,'2021-09-17 23:49:45',NULL),(61,'tabla-surf-amarillo-olaian-1-1.jpg',26,'2021-09-17 23:49:45',NULL),(62,'tabla-surf-amarillo-olaian-2-1.jpg',26,'2021-09-17 23:49:45',NULL),(63,'tabla-surf-amarillo-olaian-3-1.jpg',26,'2021-09-17 23:49:45',NULL),(64,'tabla-surf-amarillo-olaian-4-1.jpg',26,'2021-09-17 23:49:45',NULL),(65,'tabla-surf-amarillo-olaian-5-1.jpg',26,'2021-09-17 23:49:45',NULL),(66,'tabla-surf-amarillo-olaian-6-1.jpg',26,'2021-09-17 23:49:45',NULL),(67,'tabla-surf-azul-olaian-1-1.jpg',27,'2021-09-17 23:49:45',NULL),(68,'tabla-surf-azul-olaian-2-1.jpg',27,'2021-09-17 23:49:45',NULL),(69,'tabla-surf-azul-olaian-3-1.jpg',27,'2021-09-17 23:49:45',NULL),(70,'tabla-surf-azul-olaian-4-1.jpg',27,'2021-09-17 23:49:45',NULL),(71,'tabla-surf-azul-olaian-5-1.jpg',27,'2021-09-17 23:49:45',NULL),(72,'tabla-surf-azul-olaian-6-1.jpg',27,'2021-09-17 23:49:45',NULL),(73,'tabla-surf-azul-olaian-7-1.jpg',27,'2021-09-17 23:49:45',NULL),(74,'tabla-surf-blanco-olaian-1-1.jpg',28,'2021-09-17 23:49:45',NULL),(75,'tabla-surf-blanco-olaian-2-1.jpg',28,'2021-09-17 23:49:45',NULL),(76,'tabla-surf-blanco-olaian-3-1.jpg',28,'2021-09-17 23:49:45',NULL),(77,'tabla-surf-blanco-olaian-4-1.jpg',28,'2021-09-17 23:49:45',NULL),(78,'tabla-surf-blanco-olaian-5-1.jpg',28,'2021-09-17 23:49:45',NULL),(79,'tabla-surf-celeste-olaian-1-1.jpg',29,'2021-09-17 23:49:45',NULL),(80,'tabla-surf-celeste-olaian-2-1.jpg',29,'2021-09-17 23:49:45',NULL),(81,'tabla-surf-celeste-olaian-3-1.jpg',29,'2021-09-17 23:49:45',NULL),(82,'tabla-surf-celeste-olaian-4-1.jpg',29,'2021-09-17 23:49:45',NULL),(83,'tabla-surf-celeste-olaian-5-1.jpg',29,'2021-09-17 23:49:45',NULL),(84,'tabla-surf-celeste-olaian-6-1.jpg',29,'2021-09-17 23:49:45',NULL),(85,'tabla-surf-verde-olaian-1-1.jpg',30,'2021-09-17 23:49:45',NULL),(86,'tabla-surf-verde-olaian-2-1.jpg',30,'2021-09-17 23:49:45',NULL),(87,'tabla-surf-verde-olaian-3-1.jpg',30,'2021-09-17 23:49:45',NULL),(88,'tabla-surf-verde-olaian-4-1.jpg',30,'2021-09-17 23:49:45',NULL),(89,'tabla-surf-verde-olaian-5-1.jpg',30,'2021-09-17 23:49:45',NULL),(90,'tabla-surf-verde-olaian-6-1.jpg',30,'2021-09-17 23:49:45',NULL),(188,'abc2f0e3-0c08-4bad-b490-e04a1730bef1.jpg',153,'2021-10-02 19:40:39','2021-10-02 19:40:39'),(189,'ecb12ed7-d4b4-421d-9481-991a910a8e0b.jpg',153,'2021-10-02 19:40:39','2021-10-02 19:40:39'),(190,'5d0df3d4-2677-4f37-9c4f-42ba9deb77b9.jpg',153,'2021-10-02 19:40:39','2021-10-02 19:40:39'),(191,'036159ac-d72e-4e2f-a5d2-1434bc4cc942.jpg',153,'2021-10-02 19:40:39','2021-10-02 19:40:39');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_size`
--

LOCK TABLES `product_size` WRITE;
/*!40000 ALTER TABLE `product_size` DISABLE KEYS */;
INSERT INTO `product_size` VALUES (1,1,2),(2,1,3),(3,1,4),(4,2,2),(5,2,3),(6,2,4),(7,3,2),(8,3,3),(9,3,4),(10,4,2),(11,4,3),(12,4,4),(13,5,2),(14,5,3),(15,5,4),(16,6,2),(17,6,3),(18,6,4),(19,7,2),(20,7,3),(21,7,4),(22,8,2),(23,8,3),(24,8,4),(25,9,2),(26,9,3),(27,9,4),(28,10,2),(29,10,3),(30,10,4),(31,11,1),(32,11,1),(33,11,1),(34,12,1),(35,12,1),(36,12,1),(37,13,1),(38,13,1),(39,13,1),(40,14,2),(41,14,3),(42,14,4),(43,15,2),(44,15,3),(45,15,4),(46,16,2),(47,16,3),(48,16,4),(49,17,2),(50,17,3),(51,17,4),(52,18,2),(53,18,3),(54,18,4),(55,19,1),(56,19,1),(57,19,1),(58,20,2),(59,20,3),(60,20,4),(61,21,2),(62,21,3),(63,21,4),(64,22,2),(65,22,3),(66,22,4),(67,23,2),(68,23,3),(69,23,4),(70,24,2),(71,24,3),(72,24,4),(73,25,2),(74,25,3),(75,25,4),(76,26,2),(77,26,3),(78,26,4),(79,27,2),(80,27,3),(81,27,4),(82,28,2),(83,28,3),(84,28,4),(85,29,2),(86,29,3),(87,29,4),(88,30,2),(89,30,3),(90,30,4),(160,153,4);
/*!40000 ALTER TABLE `product_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_tag`
--

LOCK TABLES `product_tag` WRITE;
/*!40000 ALTER TABLE `product_tag` DISABLE KEYS */;
INSERT INTO `product_tag` VALUES (1,1,1),(2,1,5),(3,1,13),(4,2,1),(5,2,5),(6,2,17),(7,3,1),(8,3,5),(9,3,18),(10,4,1),(11,4,5),(12,4,18),(13,5,1),(14,5,5),(15,5,16),(16,6,1),(17,6,5),(18,6,18),(19,7,1),(20,7,3),(21,7,15),(22,8,1),(23,8,3),(24,8,15),(25,9,1),(26,9,3),(27,9,14),(28,10,1),(29,10,3),(30,10,16),(31,11,2),(32,11,6),(33,11,11),(34,11,15),(35,12,2),(36,12,6),(37,12,11),(38,12,14),(39,13,3),(40,13,6),(41,13,9),(42,13,17),(43,14,5),(44,14,6),(45,14,9),(46,14,13),(47,15,4),(48,15,6),(49,15,9),(50,15,16),(51,16,5),(52,16,6),(53,16,7),(54,16,15),(55,17,5),(56,17,6),(57,17,12),(58,17,14),(59,18,3),(60,18,6),(61,18,8),(62,18,15),(63,19,2),(64,19,6),(65,19,10),(66,19,17),(67,20,5),(68,20,6),(69,20,7),(70,20,13),(71,21,1),(72,21,4),(73,21,19),(74,22,1),(75,22,4),(76,22,19),(77,23,1),(78,23,4),(79,23,19),(80,24,1),(81,24,4),(82,24,19),(83,25,1),(84,25,4),(85,25,19),(86,26,1),(87,26,2),(88,26,20),(89,27,1),(90,27,2),(91,27,20),(92,28,1),(93,28,2),(94,28,20),(95,29,1),(96,29,2),(97,29,20),(99,30,2),(100,30,20),(131,153,1),(132,153,2),(133,153,15),(136,30,1);
/*!40000 ALTER TABLE `product_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Nitro Prime Blue Snowboard Gullwing Rocker','2021-09-17 22:35:49',NULL,'Pulveriza la línea de aprendizaje con esta tabla enfocada a la progresión. La Prime es la tabla All Mountain que, como a un buen amigo, nunca querrás dejar de lado. La Prime ofrece un tipo de riding y un control muy sencillo para que puedas progresar con facilidad. Su Shape Direccional ayuda mucho en este aspecto para que puedas desarrollar plenamente tu habilidad y traspases tus limites con confianza, mientras que el Flat-Out Rocker permite que aprender nuevos trucos y maniobras sea el pan de cada día. La Prime esta hecha para riders que quieren algo mas que una tabla básica.',1,NULL,1,45.00,10,1,NULL),(2,'Nitro Mystique Rocker Snowboard','2021-09-17 22:35:49',NULL,'Para aquellos que buscan una tabla de snowboard Gullwing Rocker indulgente y sin obstáculos, que les ayude a mejorar su juego dentro y fuera del parque. El Mystique ofrece un viaje tan cómodo y familiar que se siente como si siempre lo hubiera estado conduciendo durante años. Diseñamos a este amigo místico para que sea familiar, juguetón, libre de problemas y perdonador agregando nuestro Gullwing Rocker y Powercore II. El Gullwing Rocker le permite progresar con facilidad con el rocker inverso entre las fijaciones, mientras que el camber debajo del pie le brinda la respuesta que necesita para alejarse. Deja que Mystique te muestre todos los lugares místicos escondidos en las montañas.',1,NULL,5,50.00,5,1,NULL),(3,'Burton Yeasayer Flat Top 2020','2021-09-17 22:35:49',NULL,'Desde picos inexplorados hasta sus parques favoritos, el Burton Yeasayer doma todo lo que se interpone en su camino. El perfil Flat Top de la tabla navega a través del polvo profundo mientras mantiene las cosas estables bajo los pies, y un verdadero diseño gemelo lo mantiene en control sin importar hacia dónde lo apunte. Disponible en dos versiones, elija el Flying V ™ relajado y flotante o el control sin enganche de Flat Top. Una lista completa de características funciona en conjunto para garantizar que el viaje sea tan amigable como divertido, con un núcleo energético y punta y cola Scoop, que elevan los bordes para una sensación de libertad de captura, ya sea que esté navegando por la rodilla. Pow profundo o deslizando una caja en el parque.',1,NULL,6,110.00,15,0,NULL),(4,'Burton Rewind Camber 2020','2021-09-17 22:35:49',NULL,'El Burton Rewind mejorado es para Rides que les gusta hacer alarde de una actitud de estilo libre respaldada por la progresión constante del parque. El perfil plano, ultrafino y tipo patín mejora la conducción, gracias al diseño Filet-O-Flex, pero se rasga más fuerte que cualquier tabla blanda. El agarre reforzado y una base sinterizada rápida pero de bajo mantenimiento ofrecen control y durabilidad en condiciones variables, mientras que la construcción Off-Axis alinea perfectamente el diseño de la tabla con la postura y el posicionamiento de su cuerpo para una sensación de tabla que se adapta como un guante.',1,NULL,6,115.00,20,1,NULL),(5,'Nitro Prime Snowboard Rocker Wide','2021-09-17 22:35:49',NULL,'La tecnología asequible de Prime ofrece la combinación perfecta de flexibilidad y respuesta para todos aquellos que buscan pasar un buen rato en la montaña. El nuevo Flat-Out Rocker ofrece el viaje perfecto y sin capturas que permite a los usuarios evitar el estrés y disfrutar de la diversión de navegar con sus amigos durante todo el día por la montaña. ¡Este palo triturador proporciona todas las campanas y silbidos que necesitas para cualquier condición, especialmente cuando la Forma direccional proporciona la avena que necesitas para atravesar el polvo más profundo! ¡Prepárate para explorar lo básico y comenzar a aprender trucos en muy poco tiempo!',1,NULL,4,45.00,0,0,NULL),(6,'Burton Custom Camber 2020','2021-09-17 22:35:49',NULL,'Un favorito de los fanáticos por su libertad para surfear, el Custom es un enlace que facilita el trabajo en cualquier terreno y ofrece una flexión suave que siempre es divertida. Ahora con un puñado de actualizaciones y una nueva actitud, el Custom presenta una placa base liviana y a prueba de bombas con un nuevo hi-back de inclinación cero ergonómicamente inclinado con MicroFLAD ™ para un rendimiento que va mucho más allá de su precio. La NUEVA respuesta Reactstraps ™ envuelve uniformemente alrededor de sus botas y se combina con la amortiguación debajo de los pies para hacer de esta la Custom más cómoda de la historia. Re: Flex ™ le brinda más flexibilidad y sensación que las fijaciones de discos tradicionales, junto con compatibilidad universal para personalizar cualquier tabla en la tienda.',1,NULL,6,147.00,15,1,NULL),(7,'Natural-Chick-Web-LQ','2021-09-17 22:35:49',NULL,'Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. Truck reforzados de aluminio. Bujes 95 A – Rulemanes Abec 9 – Ruedas de Uretano 52 a 54 mm.',2,NULL,3,13.00,10,1,NULL),(8,'Skate Tomboy Full','2021-09-17 22:35:49',NULL,'Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. Truck reforzados de aluminio. Bujes 95 A – Rulemanes Abec 9 – Ruedas de Uretano 52 a 54 mm. Podes elegir entre estos dos tipos de madera.',2,NULL,3,14.00,0,0,NULL),(9,'Skate gran ola','2021-09-17 22:35:49',NULL,'Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. Truck reforzados de aluminio. Bujes 95 A – Rulemanes Abec 9 – Ruedas de Uretano 52 a 54 mm. Resiste hasta 60 kg, viene solo en medida 8” es ideal para niños.',2,NULL,2,11.00,7,1,NULL),(10,'Skate rosas','2021-09-17 22:35:49',NULL,'Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. Truck reforzados de aluminio. Bujes 95 A – Rulemanes Abec 9 – Ruedas de Uretano 52 a 54 mm.',2,NULL,4,13.00,5,1,NULL),(11,'Quillas Roxy','2021-09-17 22:35:49',NULL,'Están diseñadas para desarrollar un surfing performance en olas pequeñas. Sus formas facilitan la fluidez en las transiciones, a la vez que su marcado foil hacen que sea tremendamente fácil generar velocidad. La conjunción del carbono con el honeycomb hacen que tengan un flex que genera giros más nerviosos y eléctricos.',5,4,3,32.00,10,1,NULL),(12,'Quillas Billabong','2021-09-17 22:35:49',NULL,'Su foil plano proporciona una sensación de estabilidad haciendo de ella una quilla perfecta para controlar la velocidad en olas potentes.',5,4,2,23.00,0,0,NULL),(13,'SK1 Hurley','2021-09-17 22:35:49',NULL,'Casco con regulador interno. Ofrece una excelente protección con tirantes ajustables y hebilla de liberación rápida.',5,1,5,35.00,0,0,NULL),(14,'SN1 Quicksilver Axis','2021-09-17 22:35:49',NULL,'Tejido exterior súper resistente, con ventilación pasiva frontal y superior, para mejorar la circulación del aire. El tejido interior de malla y polar para un confort y un calor óptimos. Viene con un sistema de ajuste integrado en calienta-cuello completo.',5,1,1,63.00,20,1,NULL),(15,'WB1 Patagonia','2021-09-17 22:35:49',NULL,'El nuevo casco de wakeboard de Patagonia intensifica el juego, con el forro Sweat Saver con calificación CE. El forro Sweat Saver está compuesto por una suave espuma de doble densidad, envuelta en una tela de felpa de felpa diseñada para ser suave y ajustada al casco más cómodo del mercado.',5,1,4,55.00,15,1,NULL),(16,'GL Roxy','2021-09-17 22:35:49',NULL,'Estas gafas combinan lentes Vivid Zeiss de alta calidad, diseño de marco semi frameless y sistema magnético de lentes intercambiables para proporcionar el mejor rendimiento en la nieve. La construcción amplia de la máscara ofrece un campo de visión excelente. Este modelo incluye 2 lentes, una para luz intensa y otra para cielo nublado, que se cambian rápidamente, ofreciendo gran visibilidad en cualquier condición climática.',5,6,3,75.00,30,1,NULL),(17,'Stoke Mitt Billabong','2021-09-17 22:35:49',NULL,'Guantes con interior suave algodonado. Palma y llemas de dedos a prueba de abrasión. Muñeca con elástico y velcro ajustable.',5,2,2,62.00,0,0,NULL),(18,'RSK Roxy','2021-09-17 22:35:49',NULL,'Fueron diseñadas con un duro escudo para la protección de la rodilla. Viene con un acolchonado adicional más pequeño para una absorción de los golpes óptima, además de proporcionar flexibilidad a las mismas.',5,3,3,15.00,10,1,NULL),(19,'Wax Hurley','2021-09-17 22:35:49',NULL,'La revolución del mundo de las ceras para el surf. Cera para surf en aguas frías súper adherente. Produce un granulado excelente y duradero.',5,5,5,5.00,0,0,NULL),(20,'Quicksilver Fenom','2021-09-17 22:35:49',NULL,'Máscara para esquí/snowboard. Lente esférica sin distorsión, con tratamiento anti-niebla y anti-rayas. Ventilación de lentes para un óptimo flujo de aire. Dispone de filtros de malla 3D. La cincha es de 40 mm de ancho con 2 deslizadores de ajuste. Dispone de una protección UV del 100%. Viene con funda protectora de micro fibra.',5,6,1,200.00,30,1,NULL),(21,'Tabla Wakeboard 1','2021-09-17 22:35:49',NULL,'Las tablas North están fabricadas con la tecnología Protech epoxy. Llevan un alma de espuma poliestireno, fibras de vidrio laminadas con resina epoxi, refuerzos de carbono en la cola, y un acabado con pintura mate. El resultado: una tabla de surf de epoxy ligera, resistente, con un precio increíble. Una muy buena opción como primera tabla de fibra, para continuar progresando.',4,NULL,7,120.00,20,0,NULL),(22,'Tabla Wakeboard 2','2021-09-17 22:35:49',NULL,'Las tablas North están fabricadas con la tecnología Protech epoxy. Llevan un alma de espuma poliestireno, fibras de vidrio laminadas con resina epoxi, refuerzos de carbono en la cola, y un acabado con pintura mate. El resultado: una tabla de surf de epoxy ligera, resistente, con un precio increíble. Una muy buena opción como primera tabla de fibra, para continuar progresando.',4,NULL,7,120.00,10,1,NULL),(23,'Tabla Wakeboard 3','2021-09-17 22:35:49',NULL,'Las tablas North están fabricadas con la tecnología Protech epoxy. Llevan un alma de espuma poliestireno, fibras de vidrio laminadas con resina epoxi, refuerzos de carbono en la cola, y un acabado con pintura mate. El resultado: una tabla de surf de epoxy ligera, resistente, con un precio increíble. Una muy buena opción como primera tabla de fibra, para continuar progresando.',4,NULL,7,120.00,20,0,NULL),(24,'Tabla Wakeboard 4','2021-09-17 22:35:49',NULL,'Las tablas North están fabricadas con la tecnología Protech epoxy. Llevan un alma de espuma poliestireno, fibras de vidrio laminadas con resina epoxi, refuerzos de carbono en la cola, y un acabado con pintura mate. El resultado: una tabla de surf de epoxy ligera, resistente, con un precio increíble. Una muy buena opción como primera tabla de fibra, para continuar progresando.',4,NULL,7,120.00,20,1,NULL),(25,'Tabla Wakeboard 5','2021-09-17 22:35:49',NULL,'Las tablas North están fabricadas con la tecnología Protech epoxy. Llevan un alma de espuma poliestireno, fibras de vidrio laminadas con resina epoxi, refuerzos de carbono en la cola, y un acabado con pintura mate. El resultado: una tabla de surf de epoxy ligera, resistente, con un precio increíble. Una muy buena opción como primera tabla de fibra, para continuar progresando.',4,NULL,7,120.00,10,1,NULL),(26,'Tabla de surf 1','2021-09-17 22:35:49',NULL,'Combinan perfectamente las características de lo retro y lo moderno. El ancho se mantiene hasta la cola por lo que puede soportar más peso. Esta tabla ofrece una entrada fácil a las olas más pequeñas y una rápida aceleración, hasta en las secciones más tranquilas. Es lo suficientemente estable como primera tabla para gente sin experiencia y es a la vez ideal para cualquier surfista experimentado.',3,NULL,8,120.00,20,0,NULL),(27,'Tabla de surf 2','2021-09-17 22:35:49',NULL,'Combinan perfectamente las características de lo retro y lo moderno. El ancho se mantiene hasta la cola por lo que puede soportar más peso. Esta tabla ofrece una entrada fácil a las olas más pequeñas y una rápida aceleración, hasta en las secciones más tranquilas. Es lo suficientemente estable como primera tabla para gente sin experiencia y es a la vez ideal para cualquier surfista experimentado.',3,NULL,8,120.00,20,1,NULL),(28,'Tabla de surf 3','2021-09-17 22:35:49',NULL,'Combinan perfectamente las características de lo retro y lo moderno. El ancho se mantiene hasta la cola por lo que puede soportar más peso. Esta tabla ofrece una entrada fácil a las olas más pequeñas y una rápida aceleración, hasta en las secciones más tranquilas. Es lo suficientemente estable como primera tabla para gente sin experiencia y es a la vez ideal para cualquier surfista experimentado.',3,NULL,8,120.00,20,1,NULL),(29,'Tabla de surf 4','2021-09-17 22:35:49',NULL,'Combinan perfectamente las características de lo retro y lo moderno. El ancho se mantiene hasta la cola por lo que puede soportar más peso. Esta tabla ofrece una entrada fácil a las olas más pequeñas y una rápida aceleración, hasta en las secciones más tranquilas. Es lo suficientemente estable como primera tabla para gente sin experiencia y es a la vez ideal para cualquier surfista experimentado.',3,NULL,8,120.00,20,0,NULL),(30,'Tabla de surf 5 Olaian','2021-09-17 22:35:49','2021-10-03 02:59:43','Combinan perfectamente las características de lo retro y lo moderno. El ancho se mantiene hasta la cola por lo que puede soportar más peso. Esta tabla ofrece una entrada fácil a las olas más pequeñas y una rápida aceleración, hasta en las secciones más tranquilas. Es lo suficientemente estable como primera tabla para gente sin experiencia y es a la vez ideal para cualquier surfista experimentado.\r\n                \r\n                ',3,NULL,8,120.00,20,0,NULL),(153,'Nueva tabla de surf Roxy AL_FIN','2021-10-02 19:40:39','2021-10-02 19:40:39','Tabla foam ideal para usuarios de nivel principiante e intermedio.',3,NULL,3,159.99,10,0,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user','2021-09-20 14:57:02',NULL),(2,'admin','2021-09-20 14:57:02',NULL),(3,'sales','2021-09-20 14:57:02',NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'Talle único','2021-10-02 17:37:45',NULL),(2,'S','2021-09-18 17:20:48',NULL),(3,'M','2021-09-18 17:20:48',NULL),(4,'L','2021-09-18 17:20:48',NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (1,2,1,4,'2021-09-18 17:58:15',NULL),(2,3,1,3,'2021-09-18 17:58:15',NULL),(3,2,2,3,'2021-09-18 17:58:15',NULL),(4,3,2,2,'2021-09-18 17:58:15',NULL),(5,4,2,1,'2021-09-18 17:58:15',NULL),(6,2,3,4,'2021-09-18 17:58:15',NULL),(7,3,4,0,'2021-09-18 17:58:15',NULL),(8,4,4,3,'2021-09-18 17:58:15',NULL),(9,3,5,5,'2021-09-18 17:58:15',NULL),(10,2,6,2,'2021-09-18 17:58:15',NULL),(11,3,6,2,'2021-09-18 17:58:15',NULL),(12,2,7,2,'2021-09-18 17:58:15',NULL),(13,3,7,3,'2021-09-18 17:58:15',NULL),(14,2,8,2,'2021-09-18 17:58:15',NULL),(15,3,8,1,'2021-09-18 17:58:15',NULL),(16,2,9,2,'2021-09-18 17:58:15',NULL),(17,3,9,0,'2021-09-18 17:58:15',NULL),(18,2,10,3,'2021-09-18 17:58:15',NULL),(19,3,10,1,'2021-09-18 17:58:15',NULL),(20,1,11,3,'2021-09-18 17:58:15',NULL),(21,1,12,2,'2021-09-18 17:58:15',NULL),(22,1,13,4,'2021-09-18 17:58:15',NULL),(23,3,14,2,'2021-09-18 17:58:15',NULL),(24,3,15,2,'2021-09-18 17:58:15',NULL),(25,3,16,2,'2021-09-18 17:58:15',NULL),(26,4,16,3,'2021-09-18 17:58:15',NULL),(27,4,17,5,'2021-09-18 17:58:15',NULL),(28,3,18,1,'2021-09-18 17:58:15',NULL),(29,1,19,3,'2021-09-18 17:58:15',NULL),(30,3,20,2,'2021-09-18 17:58:15',NULL),(31,2,21,3,'2021-09-18 17:58:15',NULL),(32,3,22,3,'2021-09-18 17:58:15',NULL),(33,4,23,3,'2021-09-18 17:58:15',NULL),(34,2,24,2,'2021-09-18 17:58:15',NULL),(35,3,25,2,'2021-09-18 17:58:15',NULL),(36,4,26,2,'2021-09-18 17:58:15',NULL),(37,4,27,3,'2021-09-18 17:58:15',NULL),(38,3,28,3,'2021-09-18 17:58:15',NULL),(39,2,29,3,'2021-09-18 17:58:15',NULL),(40,3,30,1,'2021-09-18 17:58:15',NULL),(56,4,153,3,'2021-10-02 19:40:39','2021-10-02 19:40:39');
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Helmet','2021-09-17 21:10:42',NULL),(2,'Gloves','2021-09-17 21:10:47',NULL),(3,'Protection','2021-09-17 21:10:49',NULL),(4,'Fin','2021-09-17 21:10:51',NULL),(5,'Wax','2021-09-17 21:10:54',NULL),(6,'Glasses','2021-09-17 21:10:57',NULL);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'tablas','2021-09-18 18:26:48',NULL),(2,'surf','2021-09-18 18:26:48',NULL),(3,'skateboard','2021-09-18 18:26:48',NULL),(4,'wakeboard','2021-09-18 18:26:48',NULL),(5,'snowboard','2021-09-18 18:26:48',NULL),(6,'accesorios','2021-09-18 18:26:48',NULL),(7,'gafas','2021-09-18 18:26:48',NULL),(8,'proteccion','2021-09-18 18:26:48',NULL),(9,'cascos','2021-09-18 18:26:48',NULL),(10,'ceras','2021-09-18 18:26:48',NULL),(11,'quillas','2021-09-18 18:26:48',NULL),(12,'guantes','2021-09-18 18:26:48',NULL),(13,'quicksilver','2021-09-18 18:26:48',NULL),(14,'billabong','2021-09-18 18:26:48',NULL),(15,'roxy','2021-09-18 18:26:48',NULL),(16,'patagonia','2021-09-18 18:26:48',NULL),(17,'hurley','2021-09-18 18:26:48',NULL),(18,'burton','2021-09-18 18:26:48',NULL),(19,'north','2021-09-18 18:26:48',NULL),(20,'olaian','2021-09-18 18:26:48',NULL);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_images`
--

LOCK TABLES `user_images` WRITE;
/*!40000 ALTER TABLE `user_images` DISABLE KEYS */;
INSERT INTO `user_images` VALUES (1,'defaultAvatar.png','2021-09-20 14:53:58',NULL),(2,'1632104135676_img.jpg','2021-09-20 14:53:58','2021-09-20 15:19:43'),(3,'1632105049423_img.jpg','2021-09-25 00:59:57','2021-09-25 00:59:57'),(4,'1632105227254_img.jpg','2021-09-25 01:00:23','2021-09-25 01:00:23'),(5,'1632105619041_img.jpg','2021-09-25 01:00:43','2021-09-25 01:00:43'),(6,'1632105770850_img.jpg','2021-09-25 01:00:57','2021-09-25 01:00:57'),(7,'1632105862819_img.jpg','2021-09-25 01:02:40','2021-09-25 01:02:40'),(15,'1633541515499_img.jpg','2021-10-06 17:31:55','2021-10-06 17:31:55');
/*!40000 ALTER TABLE `user_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2021-09-20 15:43:19',NULL,'Flor','Ocampo','florenciaocampo@icloud.com','$2a$10$FpHBuf3yZejIkUC6.KhPnOZNlwFHOLe6Zs1rVWSAEXD061jIZqQ66',2,2,NULL),(2,'2021-09-20 15:43:19',NULL,'Pablo','Sarrión','pablo@gmail.com','$2a$10$ViKdDhKfpZPIFfPuJlELSeF3za8PChiRJjw91giRlNBM5tSkdY1IK',3,2,NULL),(3,'2021-09-20 15:43:19','2021-10-06 17:21:21','Jorge','Herrando','jorge@gmail.com','$2a$10$7UQhoKmWxxgQL2NKgW9eDeovUQjp7ywz21.pdbI2SEEdrIvwy4YVq',4,2,NULL),(4,'2021-09-20 15:43:19',NULL,'Diego','Horovitz','diego@gmail.com','$2a$2a$10$43Qc9YsMTIO3HpoZaad0geT9y/HQKp0gd1VTE67FaesyS65oppMvO',5,1,NULL),(5,'2021-09-20 15:43:19',NULL,'Darío','García','dario@gmail.com','$2a$2a$10$sBhvDzgszNWPVKxmNnuaR.ymDDBvbeGBMhYYDVScxZ.7CZWpz29UC',6,1,NULL),(6,'2021-09-20 15:43:19',NULL,'Javier','Alvárez','javier@gmail.com','$2a$10$DedcV.OZmigx3QAogo0OPOUG/cfJ7qhLYsipnG58kwYRAPfvktUQu',7,1,NULL),(7,'2021-10-05 13:41:55','2021-10-06 17:31:55','JorgeDos','HerrandoDos','jorge2@gmail.com','$2a$10$pCpAa0WTxB.E7vFGOyH0DeK0YtVTQiATzsUmnFd.vk8hMoi2Bk8Qu',15,1,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


