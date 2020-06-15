// https://www.acmicpc.net/problem/9663

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ9663 {
	private static int[] col;
	private static int n, cnt;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		n = Integer.parseInt(br.readLine());
		for(int i = 0; i<n; i++) {
			col = new int[n];
			
			col[0] = i;
			
			backTracking(0);
		}
		System.out.println(cnt);
	}
	
	private static void backTracking(int row) {
		if(row==n-1) {
			cnt++;
		} else {
			for(int i = 0; i<n; i++) {
				col[row+1] = i;
				if(isPossible(row+1)) {
					backTracking(row+1);
				}
			}
		}
	}
	
	private static boolean isPossible(int row) {
		for(int i = 0; i<row; i++) {
			int diff = row-i;
			if(col[row] == col[i] || col[row] == col[i]+diff || col[row] == col[i]-diff)
				return false;
		}
		return true;
	};
}
