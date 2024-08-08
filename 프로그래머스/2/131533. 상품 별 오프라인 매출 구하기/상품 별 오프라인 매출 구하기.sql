-- 코드를 입력하세요
SELECT p.product_code, SUM(p.price * o.sales_amount) sales FROM product p, offline_sale o
WHERE p.product_id = o.product_id
GROUP BY p.product_code
ORDER BY SUM(p.price * o.sales_amount) DESC, product_code
