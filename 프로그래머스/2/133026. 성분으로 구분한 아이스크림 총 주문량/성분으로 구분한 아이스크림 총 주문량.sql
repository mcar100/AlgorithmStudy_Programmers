-- 코드를 입력하세요
-- first_half - shipment_id(pk), flavor(fk), total_order
-- icecream_info - flavor(pk), ingredient_type
SELECT  i.ingredient_type, SUM(f.total_order) AS total_order
FROM first_half f, icecream_info i
WHERE f.flavor = i.flavor
GROUP BY i.ingredient_type
ORDER BY SUM(f.total_order)