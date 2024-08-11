-- 코드를 작성해주세요
SELECT info.item_id, info.item_name  FROM item_info info, item_tree tree
    WHERE tree.parent_item_id IS NULL
    AND info.item_id = tree.item_id