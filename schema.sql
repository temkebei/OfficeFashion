DROP DATABASE IF EXISTS OFFICEFASHION_DB;
CREATE DATABASE OFFICEFASHION_DB;

USE OfficeFashion_DB;

CREATE TABLE Products (
  id INTEGER AUTO_INCREMENT NOT NULL,
  department varchar(100),
  Item varchar(100),
  price INTEGER NOT NULL,
  instock INTEGER NOT NULL,
  PRIMARY KEY(id)
);


INSERT INTO Products (Image,department, Item,price, instock)
VALUES ("men","shoe (Clasic)",100, 1000);
INSERT INTO Products (Image department, Item,price, Instock)
VALUES ("men","shoe (Casual Friday)",95, 1000);
INSERT INTO Products (image,department, Item,price, Instock)
VALUES ("men","shoe",75, 1000);
INSERT INTO Products (image,department, Item, price, Instock)
VALUES ("men","Suite (Clasic)",500, 700);
INSERT INTO Products (image,department, Item, price, Instock)
VALUES ("men","Suite (Slim Fit)",500, 700);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","Pants (Clasic)",70, 1000);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","Pants (Slim Fit)",70, 1000);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","Shirts (Clasic)",70, 1000);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","Shirts (Slim fit)",70, 1000);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","T-shirt",65, 500);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","Socks",10,1000);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","Ties",30, 1000);
INSERT INTO Products (image, department, Item, price, Instock)
VALUES ("men","Belts",25, 500);
INSERT INTO Products (Image,department, Item, price, Instock)
VALUES ("men","Watch",500, 500);



INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Shirts",25, 500);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Suite(Clasic)",300, 300);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Suite(Slim Fit)",300, 570);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Skirts",70, 1000);s
INSERT INTO Products (Image,department, Item, price, Instock)
VALUES ("women","T-shirts",25, 500);
INSERT INTO Products (Image, department, Item,price, Instock)
VALUES ("women","shoe (Clasic)",75, 1000);
INSERT INTO Products (Image, department, product,price, Instock)
VALUES ("women","shoe (Casual Friday)",75, 1000);
INSERT INTO Products (Image, department, Item,price, Instock)
VALUES ("women","Shoe",50, 1000);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Socks",15, 2000);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Scalfs",25, 1000);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Belts",30, 1000);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","Earings",30, 1000);
INSERT INTO Products (Image, department, Item, price, Instock)
VALUES ("women","watch",300, 500);


// to view DATABASE enter
// select * from products;

//second Table

CREATE TABLE departments(
  DepartmentID INTEGER AUTO_INCREMENT PRIMARY KEY,
  DepartmentName VARCHAR(55),
  TotalCosts DOUBLE(10,2),
  TotalSales DOUBLE(10,2)
);
// seed Departments into DATABASE

INSERT INTO Departments(DepartmentName, TotalCosts, TotalSales)
VALUES ("men", 105000.00, -1000000.00),
VALUES ("women", 205000.00, 0.00),
VALUES ("men", 90000.00, 0.00),


//to view DATABASE enter
//select * from Departments




