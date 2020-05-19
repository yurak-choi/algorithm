// https://www.acmicpc.net/problem/1904

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ1904 {
	private static int[] dp;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		dp = new int[n+1];

//		System.out.println(topDown(n));
		System.out.println(bottomUp(n));
	}
	
	private static int topDown(int n) {
		if(n<=2) return n;
		if(dp[n]!=0) return dp[n];
		
		dp[n] = (topDown(n-1)+topDown(n-2))%15746;
		return dp[n];
	}
	
	private static int bottomUp(int n) {
		if(n<=2) return n;
		
		dp[1] = 1;
		dp[2] = 2;
		for(int i = 3; i<=n; i++) {
			dp[i] = (dp[i-1]+dp[i-2])%15746;
		}
		return dp[n];
	}
}
