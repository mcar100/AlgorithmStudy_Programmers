-- 코드를 작성해주세요
SELECT 
    (select score from hr_grade where half_year = 1 AND emp_no=e.emp_no)+(select score from hr_grade where half_year = 2 AND emp_no=e.emp_no) score, 
    e.emp_no, e.emp_name, e.position, e.email   FROM hr_employees e, hr_grade g
    WHERE e.emp_no = g.emp_no
    GROUP BY e.emp_no
    ORDER BY score DESC LIMIT 1;