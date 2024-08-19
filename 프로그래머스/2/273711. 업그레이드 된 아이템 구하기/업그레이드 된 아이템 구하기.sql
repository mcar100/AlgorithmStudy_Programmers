-- 코드를 작성해주세요
SELECT ii.item_id, ii.item_name, ii.rarity FROM 
( SELECT * FROM item_info WHERE rarity = 'RARE' ) ir, item_info ii, item_tree it
WHERE ii.item_id = it.item_id
AND it.parent_item_id = ir.item_id
GROUP BY ii.item_id
ORDER BY ii.item_id DESC;