/*
    n = 4
        [ 1, 2, 3, 4]
        [12,13,14, 5]
        [11,16,15, 6]
        [10, 9, 8, 7]

    idx= (0,0) -> (0,1) -> (0,2) -> (0,3)
    -> (1,3) -> (2,3) -> (3,3) -> (3,2) -> (3,1)
    우(x,y+1) 하(x+1,y) 좌(x,y-1) 상(x-1,y)
*/
import java.util.*;

class Solution {
    int[] xMap = {0,1,0,-1};
    int[] yMap = {1,0,-1,0};
    
    public int[][] solution(int n) {
        int[][] answer = init(n);   
        int dir = 0;
        int xPoint = 0;
        int yPoint = 0;
        answer[0][0] = 1;
        for(int i=2; i<=n*n; i++){
            int xTemp = xPoint+xMap[dir];
            int yTemp = yPoint+yMap[dir];
            if(xTemp<0||yTemp<0||xTemp>=n||yTemp>=n||answer[xTemp][yTemp]!=0){
                 dir = (dir+1)%4;
            }
            xPoint+=xMap[dir];
            yPoint+=yMap[dir];
            answer[xPoint][yPoint] = i;
        }
        
        return answer;
    }
    
    public int[][] init(int n){
        int[][] array = new int[n][n];
        for(int i=0; i<n; i++){
            Arrays.fill(array[i],0);     
        }
        return array;
    }
}