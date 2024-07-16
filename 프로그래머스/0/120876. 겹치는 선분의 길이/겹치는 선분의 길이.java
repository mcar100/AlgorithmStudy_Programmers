import java.util.*;
class Solution {
    public int solution(int[][] lines) {
        int answer = 0;
        int min = getMin(lines);
        int max = getMax(lines);
        // 최소 점과 최고 점 범위의 선분을 생성
        Map<String, Integer> lineMap = getLineMap(min, max);
        
        // 겹치는 선 카운트
        for(int i=0; i<3; i++){
            int[] line = lines[i];
            for(int j=line[0]; j<line[1]; j++){
                String lineFormat = String.format("(%d, %d)",j,j+1);
                lineMap.put(lineFormat,lineMap.get(lineFormat)+1);
            }
        }
        
        for(Integer value:lineMap.values()){
            if(value>1){
                answer++;
            }
        }
        return answer;
    }
    
    public int getMin(int[][] lines){
        Arrays.sort(lines, (a,b)->Integer.compare(a[0],b[0]));
        return lines[0][0];
    }
    
    public int getMax(int[][] lines){
         Arrays.sort(lines, (a,b)->Integer.compare(b[1],a[1]));
        return lines[0][1];
    }
    
    public Map<String, Integer> getLineMap(int min, int max){
        Map<String, Integer> map = new HashMap<>();
        for(int i=min; i<max; i++){
            String lineFormat = String.format("(%d, %d)", i, i+1);
            map.put(lineFormat,0);
        }
        return map;
    }
}