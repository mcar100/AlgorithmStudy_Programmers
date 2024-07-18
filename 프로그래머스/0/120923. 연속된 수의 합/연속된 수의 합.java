class Solution {
    public int[] solution(int num, int total) {
        
        if(total%num==0){
            return getOddSequenceNum(total, num);
        }
        else{
            return getEvenSequenceNum(total, num);   
        }
    }
    
    public int[] getOddSequenceNum(int total, int num){
        int[] array = new int[num];
        int middleIdx = (int)num/2;
        int middleNum = (int)total/num;
        array[middleIdx] = middleNum; 
        for(int i=middleIdx-1; i>=0; i--){
            array[i] = middleNum - (middleIdx - i);
        }
        for(int i= middleIdx+1; i<num; i++){
            array[i] = middleNum + (i - middleIdx); 
        }
            
        return array;
    }
    
    
    public int[] getEvenSequenceNum(int total, int num){
        int[] array = new int[num];
        int middleIdx = (int)num/2-1;
        int middleNum = (int)total/num;
        array[middleIdx] = middleNum; 
        for(int i=middleIdx-1; i>=0; i--){
            array[i] = middleNum - (middleIdx - i);
        }
        for(int i= middleIdx+1; i<num; i++){
            array[i] = middleNum + (i - middleIdx); 
        }
            
        return array;
    }
}