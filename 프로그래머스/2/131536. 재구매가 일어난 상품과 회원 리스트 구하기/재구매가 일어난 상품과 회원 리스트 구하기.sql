-- 코드를 입력하세요
SELECT DISTINCT a.user_id, a.product_id FROM online_sale a
    JOIN online_sale b ON a.product_id = b.product_id
    WHERE a.user_id = b.user_id AND
        a.product_id = b.product_id AND
        a.sales_date != b.sales_date
ORDER BY user_id, product_id DESC;