// https://www.acmicpc.net/problem/1012

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ1012 {
	private static int[][] arr;
	private static int m, n;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		int testcase = Integer.parseInt(br.readLine());
		for(int t = 0; t<testcase; t++) {
			st = new StringTokenizer(br.readLine());
			m = Integer.parseInt(st.nextToken());
			n = Integer.parseInt(st.nextToken());
			int k = Integer.parseInt(st.nextToken());
			int cnt = 0;
			
			arr = new int[n][m];
			for(int i = 0; i<k; i++) {
				st = new StringTokenizer(br.readLine());
				int x = Integer.parseInt(st.nextToken());
				int y = Integer.parseInt(st.nextToken());
				arr[y][x] = 1;
			}
			
			for(int i = 0; i<n; i++) {
				for(int j = 0; j<m; j++) {
					if(arr[i][j]==1) {
						cnt++;
						dfs(j,i);
					}
				}
			}
			System.out.println(cnt);
		}
	}
	
	private static void dfs(int x, int y) {
		arr[y][x] = 0;
		int[] dx = {-1, 0, 1, 0};
		int[] dy = {0, -1, 0, 1};
		
		for(int i = 0; i<4; i++) {
			int newX = x+dx[i];
			int newY = y+dy[i];
			
			if(newX<0 || newX>=m || newY<0 || newY>=n || arr[newY][newX]==0)
				continue;
			
			dfs(newX, newY);
		}
	}
}