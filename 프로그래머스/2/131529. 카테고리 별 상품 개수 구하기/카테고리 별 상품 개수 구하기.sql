-- 코드를 입력하세요
SELECT substr(product_code,1,2), COUNT(product_code) FROM product
GROUP BY substr(product_code,1,2)
ORDER BY product_code
