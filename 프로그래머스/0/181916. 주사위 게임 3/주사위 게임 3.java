import java.util.*;

class Solution {
    public int getMin(int[] nums){
        int min = nums[0];
        for(int n:nums){
            if(min>n){
                min = n;
            }
        }
        return min;
    }
    
    public int solution(int a, int b, int c, int d) {
        if(a==b&&b==c&&c==d){
            return 1111*a;
        }
        else if(a==b&&b==c&&c!=d){
            return (int)Math.pow(10*a+d,2);
        }
        else if(a==b&&b==d&&a!=c){
            return (int)Math.pow(10*a+c,2);
        }
        else if(a==c&&c==d&&a!=b){
             return (int)Math.pow(10*a+b,2);
        }
        else if(b==c&&c==d&&b!=a){
            return (int)Math.pow(10*b+a,2);
        }
        else if(a==b&&c==d&&a!=c){
            return (a+c)*Math.abs(c-a);
        }
        else if(a==c&&b==d&&a!=b){
            return (a+b)*Math.abs(b-a);
        }
        else if(a==d&&b==c&&a!=b){
            return (a+b)*Math.abs(b-a);
        }
        else if(a==b&&a!=c&&a!=d&&c!=d){
            return c*d;
        }
        else if(a==c&&a!=b&&a!=d&&b!=d){
            return b*d;
        }
        else if(a==d&&a!=b&&a!=c&&b!=c){
            return b*c;
        }
        else if(b==c&&b!=a&&b!=d&&a!=d){
            return a*d;
        }
        else if(b==d&&b!=a&&b!=c&&a!=c){
            return a*c;
        }
        else if(c==d&&c!=a&&c!=b&&a!=b){
            return a*b;
        }
        else if(a!=b&&a!=c&&a!=d&&b!=c&&b!=d&&c!=d){
            return getMin(new int[] {a,b,c,d});
        }
        return -1;
    }
}