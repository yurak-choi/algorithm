//https://www.acmicpc.net/problem/1260

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.StringTokenizer;

public class BOJ1260 {
	private static ArrayList<Integer>[] adj;
	private static boolean[] visited;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		visited = new boolean[n+1];
		adj = new ArrayList[n+1];
		for(int i = 1; i<=n; i++) {
			adj[i] = new ArrayList<Integer>();
		}
		
		for(int i = 0; i<m; i++) {
			st = new StringTokenizer(br.readLine());
			int u = Integer.parseInt(st.nextToken());
			int v = Integer.parseInt(st.nextToken());
			
			adj[u].add(v);
			adj[v].add(u);
		}
		
		for(int i = 1; i<adj.length; i++) {
			Collections.sort(adj[i]);
		}
		
		dfsStack(k);
		System.out.println();
		bfs(k);
	}
	
	private static void dfsRecursive(int node) {
		visited[node] = true;
		System.out.print(node+" ");
		
		for(int adjNode : adj[node]) {
			if(!visited[adjNode]) dfsRecursive(adjNode);
		}
	}
	
	private static void dfsStack(int node) {
		Stack<Integer> s = new Stack<Integer>();
		visited[node] = true;
		s.push(node);
		System.out.print(node+" ");
		
		while(!s.isEmpty()) {
			int curr = s.peek();
			boolean flag = true;
			
			for(int adjNode : adj[curr]) {
				if(!visited[adjNode]) {
					flag = false;
					visited[adjNode] = true;
					s.push(adjNode);
					System.out.print(adjNode+" ");
					break;
				}
			}
			if(flag) s.pop();
		}
	}

	private static void bfs(int node) {
		Queue<Integer> q = new LinkedList<Integer>();
		q.offer(node);
		visited[node] = false;
		
		while(!q.isEmpty()) {
			int curr = q.poll();
			System.out.print(curr+" ");
			
			for(int adjNode : adj[curr]) {
				if(visited[adjNode]) {
					q.offer(adjNode);
					visited[adjNode] = false;
				}
			}
		}
	}
}
