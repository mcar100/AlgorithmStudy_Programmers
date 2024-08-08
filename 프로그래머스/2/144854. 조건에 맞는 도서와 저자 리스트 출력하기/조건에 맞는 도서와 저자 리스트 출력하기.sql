-- 코드를 입력하세요
SELECT b.book_id, a.author_name, DATE_FORMAT(b.published_date, "%Y-%m-%d") as published_date
FROM book b, author a  
WHERE b.author_id = a.author_id
AND b.category = '경제'
ORDER BY b.published_date