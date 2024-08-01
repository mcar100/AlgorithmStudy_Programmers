-- 코드를 입력하세요
SELECT COUNT(*) FROM user_info 
    WHERE joined LIKE '2021%'
    AND (age <= 29 AND age >= 20);