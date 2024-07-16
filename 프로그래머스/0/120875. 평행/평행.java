// 기울기: (y2-y1)/(x2-x1)
// 조합: nCr = n-1Cr-1 + n-1Cr
import java.util.*;
class Solution {
    public int solution(int[][] dots) {
        for(int i=1; i<4; i++){
            double slop1 = getSlop(dots[0], dots[i]);
            List<Integer> idxArray = getOtherDots(i);
            double slop2 = getSlop(dots[idxArray.get(0)],dots[idxArray.get(1)]);
            if(slop1==slop2){
                return 1;
            }
        }
        
        return 0;
    }
    
    public double getSlop(int[] d1,int[] d2){
        int x = d1[0]-d2[0];
        int y = d1[1]-d2[1];
        return (double)y/(double)x;
    }
    
    public List<Integer> getOtherDots(int idx){
        List<Integer> idxArray = new ArrayList<>();
        for(int j=1; j<4; j++){
            if(idx!=j){
                idxArray.add(j);
            }
        }
        return idxArray;
    }

}