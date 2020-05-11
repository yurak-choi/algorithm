// https://www.acmicpc.net/problem/2644

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class BOJ2644 {
	private static int[][] family;
	private static int[] chon;
	private static boolean[] visited;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		family = new int[n+1][n+1];
		chon = new int[n+1];
		visited = new boolean[n+1];
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		int start = Integer.parseInt(st.nextToken());
		int end = Integer.parseInt(st.nextToken());
		
		int m = Integer.parseInt(br.readLine());
		for(int i = 0; i<m; i++) {
			st = new StringTokenizer(br.readLine());
			int x = Integer.parseInt(st.nextToken());
			int y = Integer.parseInt(st.nextToken());
			
			family[x][y] = family[y][x] = 1;
		}
		
		bfs(start);
		System.out.println(chon[end]==0? -1:chon[end]);
	}
	
	private static void bfs(int start) {
		Queue<Integer> q = new LinkedList<Integer>();
		q.offer(start);
		visited[start] = true;
		
		while(!q.isEmpty()) {
			int temp = q.poll();
			for(int i = 1; i<family.length; i++) {
				if(family[temp][i]==1 && !visited[i]) {
					q.offer(i);
					visited[i] = true;
					chon[i] = chon[temp]+1;
				}
			}
		}
	}
}
