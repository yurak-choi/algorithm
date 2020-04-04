// https://www.acmicpc.net/problem/1182

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ1182 {
	private static int n, s, cnt = 0;
	private static int[] arr;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		s = Integer.parseInt(st.nextToken());

		st = new StringTokenizer(br.readLine());
		arr = new int[n];
		for(int i = 0; i<n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		bruteForce(0, 0);
		if(s==0) {
			cnt--;
		}
		System.out.println(cnt);
	}
	
	private static void bruteForce(int sum, int step) {
		if(step==n) {
			if(sum==s) {
				cnt++;
			}
			return;
		}
		bruteForce(sum+arr[step], step+1);
		bruteForce(sum, step+1);
	}
}