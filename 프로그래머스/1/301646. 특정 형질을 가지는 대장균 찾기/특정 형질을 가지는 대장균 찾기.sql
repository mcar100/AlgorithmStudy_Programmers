-- 코드를 작성해주세요
-- 테이블: ECOLI_DATA
-- 개체ID(ID), 부모ID(PARENT_ID), 크기(SIZE_OF_COLONY), 
-- 분화날짜(DIFFERENTIATION_DATE), 형질(GENOTYPE)
-- 조건: 1번, 3번, 1+3번 형질을 보유한 대장균 개체수
-- genotype = 8 -> 1000 4번 형질 보유
SELECT COUNT(*) as Count FROM ecoli_data
WHERE genotype&2=0
AND (genotype&1>0 OR genotype&4>0)