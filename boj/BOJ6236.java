// https://www.acmicpc.net/problem/6236

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ6236 {
	private static int[] price;
	private static int n;
	private static int m;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		price = new int[n];
		
		int left = 0;
		int right = 0;
		for(int i = 0; i<n; i++) {
			price[i] = Integer.parseInt(br.readLine());
			
			left = left>price[i]? left:price[i];
			right+=price[i];
		}
		
		System.out.println(binarySearch(left, right));
	}
	
	private static int binarySearch(int left, int right) {
		int result = 0;
		while(left<=right) {
			int mid = (left+right)/2;
			
			if(getCnt(mid)<=m) {
				right = mid-1;
				result = mid;
			} else {
				left = mid+1;
			}
		}
		return result;
	}
	
	private static int getCnt(int mid) {
		int cnt = 1;
		int k = mid;
		for(int i = 0; i<n; i++) {
			if(price[i]>k) {
				k = mid;
				cnt++;
			}
			k-=price[i];
		}
		return cnt;
	}
}
