import java.util.*;
class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int denom = 0;
        int numer = 0;
        if(denom1==denom2){
            denom = denom1;
            numer = numer1+numer2;
        }
        else{
            denom = denom1*denom2;
            numer = (numer1*denom2)+(numer2*denom1);
        }
        List<Integer> numerDivisors = getDivisors(numer);
        List<Integer> denomDivisors = getDivisors(denom);
        
        int gcDivisor = 0;
        if(numerDivisors.size() > denomDivisors.size()){
            gcDivisor = getGCDivisor(numerDivisors, denomDivisors);
        }
        else{
            gcDivisor = getGCDivisor(denomDivisors, numerDivisors);
        }
        
        
        return getIF(numer, denom, gcDivisor);
    }
    
    public List<Integer> getDivisors(int n){
        List<Integer> divisors = new ArrayList<>();
        if(n==1){
            divisors.add(1);
            return divisors;
        }
        
        for(int i=1; i<Math.sqrt(n); i++){
            if(n%i!=0){
                continue;
            }
            divisors.add(i);
            int rest = (int)n/i;
            if(!divisors.contains(rest)){
                divisors.add(rest);
            }
        }
        return divisors;
    }
    
    public int getGCDivisor(List<Integer> bigArr, List<Integer> smallArr){
        int gcDivisor = 0;

        for(int i=0; i<smallArr.size(); i++){
            int n = (int)smallArr.get(i);
            if(bigArr.contains(n)&&gcDivisor<n){
                gcDivisor = n;
            }
        }
        return gcDivisor;
    }
    
    public int[] getIF(int numer, int denom, int gcDivisor){
        return new int[] {(int)numer/gcDivisor, (int)denom/gcDivisor};
    }
}