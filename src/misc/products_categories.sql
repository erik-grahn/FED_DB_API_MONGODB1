CREATE TABLE "products_categories" (
  "product_id" int NOT NULL,
  "category_id" int NOT NULL,
  PRIMARY KEY ("product_id","category_id"),
  KEY "category_id" ("category_id"),
  CONSTRAINT "products_categories_ibfk_2" FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id"),
  CONSTRAINT "products_categories_relation_3" FOREIGN KEY ("product_id") REFERENCES "products" ("product_id") ON DELETE CASCADE
);insert into `products_categories` (`category_id`, `product_id`) values (1, 1);
insert into `products_categories` (`category_id`, `product_id`) values (1, 4);
insert into `products_categories` (`category_id`, `product_id`) values (1, 5);
insert into `products_categories` (`category_id`, `product_id`) values (1, 6);
insert into `products_categories` (`category_id`, `product_id`) values (1, 7);
insert into `products_categories` (`category_id`, `product_id`) values (1, 8);
insert into `products_categories` (`category_id`, `product_id`) values (1, 13);
insert into `products_categories` (`category_id`, `product_id`) values (1, 19);
insert into `products_categories` (`category_id`, `product_id`) values (1, 21);
insert into `products_categories` (`category_id`, `product_id`) values (1, 22);
insert into `products_categories` (`category_id`, `product_id`) values (1, 24);
insert into `products_categories` (`category_id`, `product_id`) values (2, 1);
insert into `products_categories` (`category_id`, `product_id`) values (2, 5);
insert into `products_categories` (`category_id`, `product_id`) values (2, 6);
insert into `products_categories` (`category_id`, `product_id`) values (2, 8);
insert into `products_categories` (`category_id`, `product_id`) values (2, 9);
insert into `products_categories` (`category_id`, `product_id`) values (2, 15);
insert into `products_categories` (`category_id`, `product_id`) values (2, 18);
insert into `products_categories` (`category_id`, `product_id`) values (2, 22);
insert into `products_categories` (`category_id`, `product_id`) values (2, 23);
insert into `products_categories` (`category_id`, `product_id`) values (4, 8);
insert into `products_categories` (`category_id`, `product_id`) values (4, 19);
insert into `products_categories` (`category_id`, `product_id`) values (4, 20);
insert into `products_categories` (`category_id`, `product_id`) values (5, 9);
insert into `products_categories` (`category_id`, `product_id`) values (5, 11);
insert into `products_categories` (`category_id`, `product_id`) values (6, 12);
insert into `products_categories` (`category_id`, `product_id`) values (6, 13);
insert into `products_categories` (`category_id`, `product_id`) values (6, 14);
insert into `products_categories` (`category_id`, `product_id`) values (7, 15);
insert into `products_categories` (`category_id`, `product_id`) values (7, 16);
insert into `products_categories` (`category_id`, `product_id`) values (7, 18);
insert into `products_categories` (`category_id`, `product_id`) values (8, 7);
insert into `products_categories` (`category_id`, `product_id`) values (8, 12);
insert into `products_categories` (`category_id`, `product_id`) values (8, 17);
insert into `products_categories` (`category_id`, `product_id`) values (8, 18);
insert into `products_categories` (`category_id`, `product_id`) values (8, 21);
insert into `products_categories` (`category_id`, `product_id`) values (8, 23);
insert into `products_categories` (`category_id`, `product_id`) values (8, 24);
