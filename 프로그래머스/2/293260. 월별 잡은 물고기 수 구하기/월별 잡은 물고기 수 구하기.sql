-- 코드를 작성해주세요
SELECT COUNT(*) fish_count, MONTH(time) month FROM fish_info
    GROUP BY month
    ORDER BY month