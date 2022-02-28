// https://www.acmicpc.net/problem/2512

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ2512 {
	private static int[] budget;
	private static int n;
	private static int m;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		n = Integer.parseInt(br.readLine());
		st = new StringTokenizer(br.readLine());
		m = Integer.parseInt(br.readLine());
		
		budget = new int[n];
		
		int max = 0;
		int total = 0;
		for(int i = 0; i<n; i++) {
			budget[i] = Integer.parseInt(st.nextToken());
			
			max = max>budget[i]? max:budget[i];
			total+=budget[i];
		}
		
		if(total<=m)
			System.out.println(max);
		else
			System.out.println(binarySearch(0, max));
	}
	
	private static int binarySearch(int left, int right) {
		int result = 0;
		while(left<=right) {
			int mid = (left+right)/2;
			
			if(getTotal(mid)<=m) {
				left = mid+1;
				result = mid;
			} else {
				right = mid-1;
			}
		}
		return result;
	}
	
	private static int getTotal(int mid) {
		int total = 0;
		for(int i = 0; i<n; i++) {
			if(budget[i]>mid)
				total += mid;
			else
				total+=budget[i];
		}
		return total;
	}
}
