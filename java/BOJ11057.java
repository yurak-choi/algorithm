// https://www.acmicpc.net/problem/11057

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ11057 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		
		int[] result = topDown(n);
		
		int sum = 0;
		for(int i = 0; i<10; i++) {
			sum+=result[i];
		}
		System.out.println(sum%10007);
	}
	
	private static int[] topDown(int n) {
		int[] dp = new int[10];
		if(n==1) {
			for(int i = 0; i<10; i++) dp[i] = 1;
		} else {
			int[] before = topDown(n-1);
			dp[0] = 1;
			for(int i = 1; i<10; i++) {
				dp[i] = (dp[i-1]+before[i])%10007;
			}
		}
		return dp;
	}
	
	private static int[] bottomUp(int n) {
		int[] dp = new int[10];
		
		for(int i = 0; i<10; i++) dp[i] = 1;

		for(int i = 1; i<n; i++) {
			for(int j = 1; j<10; j++) {
				dp[j] = (dp[j]+dp[j-1])%10007;
			}
		}
		return dp;
	}
}
