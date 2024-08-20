-- 코드를 작성해주세요
SELECT dev.id, dev.email, dev.first_name, dev.last_name  
FROM developers dev,
(SELECT code FROM skillcodes WHERE name IN ('Python', 'C#')) sc
WHERE dev.skill_code & sc.code> 0
GROUP BY dev.id, dev.email, dev.first_name, dev.last_name  
ORDER BY dev.id