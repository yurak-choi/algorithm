// https://www.acmicpc.net/problem/1743

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ1743 {
	private static int[][] arr;
	private static int n, m;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		arr = new int[n+1][m+1];
		for(int i = 0; i<k; i++) {
			st = new StringTokenizer(br.readLine());
			int r = Integer.parseInt(st.nextToken());
			int c = Integer.parseInt(st.nextToken());
			
			arr[r][c] = 1;
		}
		
		int max = 0;
		for(int y = 1; y<=n; y++) {
			for(int x = 1; x<=m; x++) {
				if(arr[y][x]==1) {
					int cnt = dfs(x, y);
					max = max>cnt? max:cnt;
				}
			}
		}
		System.out.println(max);
	}
	
	private static int dfs(int x, int y) {
		if(x<1 || x>m || y<1 || y>n) return 0;
		if(arr[y][x]==0) return 0;
		
		arr[y][x] = 0;
		
		int[] dx = {-1, 0, 1, 0};
		int[] dy = {0, -1, 0, 1};
		
		int cnt = 1;
		for(int i = 0; i<4; i++) {
			int newX = x+dx[i];
			int newY = y+dy[i];
			
			cnt = cnt+dfs(newX, newY);
		}
		return cnt;
	}
}
