-- 코드를 작성해주세요
-- 호선, 순번, 노선, 역이름, 역사이거리, 노선별누계거리
SELECT route, CONCAT(ROUND(SUM(d_between_dist),1),'km') total_distance, CONCAT(ROUND(AVG(d_between_dist),2),'km') average_distance
FROM subway_distance
GROUP BY route
ORDER BY SUM(d_between_dist) DESC