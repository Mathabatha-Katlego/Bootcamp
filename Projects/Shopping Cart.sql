CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (name, price)
VALUES
('Coke',10),
('Chips',5),
('Candy',2.50),
('Chocolate', 10);

SELECT * FROM products;
Drop table users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

INSERT INTO users (name)
VALUES
('sheryl'),
('Arnold');
select * from users
CREATE TABLE cart_table (
  product_id INT REFERENCES products(id) UNIQUE,
  qty INT CONSTRAINT quantity_key CHECK(qty >=0)
);
drop table cart_table
INSERT INTO cart_table (product_id, qty) VALUES
 (1, 2),
 (2, 1),
 (3, 2),
 (4, 1);

SELECT * FROM cart_table;

CREATE TABLE OrderHeader (
  id SERIAL PRIMARY KEY,
  "User" VARCHAR(25) NOT NULL,
  Orderdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

drop table orderheader

INSERT INTO OrderHeader ("User", Orderdate) VALUES ('2', CURRENT_TIMESTAMP);


DROP TABLE IF EXISTS OrderDetails;

CREATE TABLE OrderDetails (
  OrderHeader_id INT REFERENCES OrderHeader(OrderID),
  product_id INT REFERENCES products(id),
  qty INT NOT NULL
);



INSERT INTO OrderDetails (OrderHeader_id, product_id, qty) VALUES
  (1, 1, 2),
  (1, 2, 1);

SELECT * FROM cart_table;

CREATE OR REPLACE FUNCTION add_update_product(prod_id BIGINT)
RETURNS void 
AS $$
BEGIN
    IF EXISTS (SELECT * FROM cart_table WHERE product_id = prod_id) THEN
        UPDATE cart_table SET qty = qty + 1 WHERE product_id = prod_id;
    ELSE
        INSERT INTO cart_table (product_id, qty) VALUES (prod_id, 1);
    END IF; 
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION add_update_product(prod_name VARCHAR(255))
RETURNS void 
AS $$
BEGIN
    IF EXISTS (SELECT * FROM products WHERE name = prod_name) THEN
        UPDATE cart_table SET qty = qty + 1 WHERE product_id = (SELECT id FROM products WHERE name = prod_name);
    ELSE
        INSERT INTO cart_table (product_id, qty) VALUES ((SELECT id FROM products WHERE name = prod_name), 1);
    END IF; 
END;
$$ LANGUAGE plpgsql;


-- Add Coke and Chips to the cart
SELECT add_update_product('Coke');
SELECT add_update_product('Chips');
SELECT * FROM cart_table;

-- Add Candy to the cart
SELECT add_update_product('Candy');
SELECT * FROM cart_table;

-- Add Chocolate to the cart
SELECT add_update_product('Chocolate');
SELECT * FROM cart_table;

Deleting products from the cart:

-- Delete Candy from the cart
DELETE FROM cart_table WHERE product_id = 3;
SELECT * FROM cart_table;

-- Delete Chips from the cart
DELETE FROM cart_table WHERE product_id = 2;
SELECT * FROM cart_table;

Checking out multiple times:

-- Create an order with Coke and Chocolate
INSERT INTO OrderHeader ("User", orderdate) VALUES ('1', NOW());
INSERT INTO OrderDetails (OrderHeader_id, product_id, qty) VALUES (1, 1, 1);
INSERT INTO OrderDetails (OrderHeader_id, product_id, qty) VALUES (1, 4, 1);

-- Create another order with Coke and Chips
INSERT INTO OrderHeader ("User") VALUES ('1');
INSERT INTO OrderDetails (OrderHeader_id, product_id, qty) VALUES (2, 1, 1);
INSERT INTO OrderDetails (OrderHeader_id, product_id, qty) VALUES (2, 2, 1);

Printing orders:

-- Print order details for Order 1
SELECT products.name, OrderDetails.qty
FROM OrderDetails
INNER JOIN products ON OrderDetails.product_id = products.id
WHERE OrderDetails.OrderHeader_id = 1;

-- Print order details for Order 2
SELECT products.name, OrderDetails.qty
FROM OrderDetails
INNER JOIN products ON OrderDetails.product_id = products.id
WHERE OrderDetails.OrderHeader_id = 2;

-- Print all orders for today
SELECT OrderHeader.OrderID, products.name, OrderDetails.qty
FROM OrderDetails
INNER JOIN products ON OrderDetails.product_id = products.id
INNER JOIN OrderHeader ON OrderDetails.OrderHeader_id = OrderHeader.OrderID







