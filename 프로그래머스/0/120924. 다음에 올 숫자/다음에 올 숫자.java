class Solution {
    public int solution(int[] common) {
        int n1 = common[0];
        int n2 = common[1];
        int n3 = common[2];
        int n = 0;
        int answer = 0;
        if(n3-n2 == n2-n1){
            n = n3-n2;
            answer = common[common.length-1]+n;
        }
        else if(n3/n2 == n2/n1){
            n = n3/n2;
            answer = common[common.length-1]*n;
        }
        
        return answer;
    }
}