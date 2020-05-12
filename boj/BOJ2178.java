// https://www.acmicpc.net/problem/2178

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class BOJ2178 {
	private static int n, m;
	private static int[][] map;
	private static boolean[][] visited;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		map = new int[n][m];
		visited = new boolean[n][m];
		
		for(int y = 0; y<n; y++) {
			String str = br.readLine();
			for(int x = 0; x<m; x++) {
				map[y][x] = str.charAt(x)-'0';
			}
		}
		
		bfs();
		System.out.println(map[n-1][m-1]);
	}
	
	private static void bfs() {
		int dx[] = {0,-1,0,1};
		int dy[] = {-1,0,1,0};
		
		Queue<Location> q = new LinkedList<Location>();
		q.offer(new Location(0, 0));
		visited[0][0] = true;
		
		while(!q.isEmpty()) {
			Location location = q.poll();
			int nowX = location.x;
			int nowY = location.y;
			
			for(int i = 0; i<4; i++) {
				int nextX = nowX+dx[i];
				int nextY = nowY+dy[i];
				
				if(nextX>=0 && nextX<m && nextY>=0 && nextY<n) {
					if(map[nextY][nextX]!=0 && !visited[nextY][nextX]) {
						q.offer(new Location(nextX, nextY));
						visited[nextY][nextX] = true;
						map[nextY][nextX] = map[nowY][nowX]+1;
					}
				}
			}
		}
	}
}

class Location {
	int x;
	int y;
	
	public Location(int x, int y) {
		this.x = x;
		this.y = y;
	}
}
