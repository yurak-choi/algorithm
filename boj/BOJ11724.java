// https://www.acmicpc.net/problem/11724

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class BOJ11724 {
	private static ArrayList<Integer>[] node;
	private static boolean[] visted;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		visted = new boolean[n+1];
		node = new ArrayList[n+1];
		for(int i = 1; i<=n; i++) {
			node[i] = new ArrayList<Integer>();
		}
		
		for(int i = 0; i<m; i++) {
			st = new StringTokenizer(br.readLine());
			int u = Integer.parseInt(st.nextToken());
			int v = Integer.parseInt(st.nextToken());
			
			node[u].add(v);
			node[v].add(u);
		}
		
		int cnt = 0;
		for(int i = 1; i<=n; i++) {
			if(!visted[i]) {
				cnt++;
				dfs(i);
			}
		}
		System.out.println(cnt);
	}
	
	private static void dfs(int index) {
		if(!visted[index]) {
			visted[index] = true;
			for(int i : node[index]) {
				if(!visted[i])
					dfs(i);				
			}
		}
	}
}
