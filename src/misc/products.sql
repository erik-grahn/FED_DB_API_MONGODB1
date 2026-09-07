CREATE TABLE "products" (
  "product_id" int NOT NULL AUTO_INCREMENT,
  "name" varchar(100) NOT NULL,
  "description" text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  "price" decimal(10,2) NOT NULL,
  "stock" int NOT NULL,
  "img" varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  "created_at" timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("product_id")
);insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-12 11:49:38', 'Touch-sensitive mouse especially made for MAC', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgFigZW7exPPH0n3Dm-52boFPtOQjfQhdVkB-PsTvdQ&s=10', 'Magic Mouse', '899.00', 1, 1);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-18 12:05:17', 'Keyboard with a sleek and modern designe, made to fit the Apple family of products', '', 'Magic Keyboard 2', '1299.00', 2, 1);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-18 21:30:16', 'Black Mouse Pad', NULL, 'Mouse Pad 2.0', '199.00', 4, 1);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:25:03', 'Lightweight wireless gaming mouse with adjustable DPI', NULL, 'Wireless Gaming Mouse', '599.00', 5, 25);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:25:12', 'Compact mechanical keyboard with RGB lighting', NULL, 'Mechanical Gaming Keyboard', '899.00', 6, 18);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:25:22', 'USB-C hub with HDMI, USB and SD card ports', NULL, 'USB-C Hub 7-in-1', '449.00', 7, 30);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:25:31', 'Surround sound gaming headset with detachable microphone', NULL, 'Gaming Headset Pro', '799.00', 8, 14);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:25:46', '27 inch 1440p gaming monitor with 165Hz refresh rate', NULL, '27 Inch Gaming Monitor', '3299.00', 9, 9);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:26:06', 'Large 32 inch 4K monitor with IPS panel', NULL, '32 Inch 4K Monitor', '4499.00', 11, 7);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:26:12', 'Fast 1TB NVMe solid state drive for desktop computers', NULL, '1TB NVMe SSD', '999.00', 12, 35);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:26:22', 'Portable 2TB external SSD with USB-C connection', NULL, '2TB External SSD', '1799.00', 13, 16);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:26:31', 'High-capacity 4TB external hard drive for backups and storage', NULL, '4TB External Hard Drive', '1199.00', 14, 22);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:26:39', 'High-performance graphics card designed for modern gaming', NULL, 'RTX Gaming Graphics Card', '6499.00', 15, 6);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:26:46', 'Affordable graphics card for everyday gaming and multimedia', NULL, 'Budget Graphics Card', '2499.00', 16, 12);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:26:54', 'Quiet desktop computer designed for work, browsing and everyday tasks', NULL, 'Home Office Desktop', '7999.00', 17, 8);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:27:11', 'Powerful gaming desktop with dedicated graphics card', NULL, 'Gaming Desktop PC', '14999.00', 18, 5);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:27:23', 'Compact wireless speakers with clear sound and deep bass', NULL, 'Bluetooth Speakers', '699.00', 19, 24);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:27:31', 'Streaming device for movies, TV shows and music in 4K', NULL, '4K Streaming Device', '899.00', 20, 19);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:27:38', 'Full HD webcam with built-in microphone for meetings and streaming', NULL, 'Webcam Full HD', '499.00', 21, 27);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:27:45', 'Wireless controller compatible with PC gaming', NULL, 'Gaming Controller', '649.00', 22, 21);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:27:53', '32GB DDR5 memory kit for modern desktop computers', NULL, '32GB DDR5 RAM Kit', '1299.00', 23, 28);
insert into `products` (`created_at`, `description`, `img`, `name`, `price`, `product_id`, `stock`) values ('2026-08-19 15:28:01', 'Cable management set for keeping your computer setup organized', NULL, 'Desk Cable Management Kit', '249.00', 24, 40);
