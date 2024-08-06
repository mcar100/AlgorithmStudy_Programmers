-- 코드를 입력하세요

-- 방법1
SELECT * FROM food_product ORDER BY price DESC LIMIT 1;

-- 방법2
SELECT * FROM food_product 
    WHERE price = (SELECT MAX(price) FROM food_product);
    
-- 방법3
WITH A AS (SELECT MAX(price) AS MAX_PRICE FROM food_product)
SELECT food_product.* FROM food_product, A 
    WHERE price = A.MAX_PRICE;