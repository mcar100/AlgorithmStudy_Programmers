-- 코드를 작성해주세요
SELECT COUNT(*) fish_count FROM fish_info fi, fish_name_info fni
    WHERE fi.fish_type = fni.fish_type
    AND (fni.fish_name = 'BASS' OR fni.fish_name = 'SNAPPER');