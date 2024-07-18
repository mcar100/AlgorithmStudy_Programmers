class Solution {
    public int[] xWay = { 0, 0, -1, 1, -1, -1, 1, 1 };
    public int[] yWay = { -1, 1, 0, 0, -1, 1, -1, 1 };
    
    
    public int solution(int[][] board) {
        int answer = 0;
        int n = board.length;
        
        for(int i=0; i<n; i++){
            int[] field = board[i];
            for(int j=0; j<n; j++){
                int bomb = field[j];
                if(bomb==1){
                    setDangerZone(board,i,j);
                }
            }
        }
        
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(board[i][j]==0){
                    answer++;
                }
            }
        }
        
        
        return answer;
    }
    
    // row, col -> board[row][col] -> 1일때의 index
    public void setDangerZone(int[][] board, int row, int col){
        for(int i=0; i<8; i++){
            int x = row+xWay[i];
            int y = col+yWay[i];
            
            if(x>=0&&y>=0&&x<board.length&&y<board.length&&board[x][y]==0){
                 board[x][y] = -1;
            }
        }
    }
}