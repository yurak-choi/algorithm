// https://www.acmicpc.net/problem/1003

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ1003 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testcase = Integer.parseInt(br.readLine());
		for(int t = 0; t<testcase; t++) {
			int n = Integer.parseInt(br.readLine());
			
			int cnt0 = 1, cnt1 = 0;
			for(int i = 0; i<n; i++) {
				int temp = cnt0+cnt1;
				cnt0 = cnt1;
				cnt1 = temp;
			}
			System.out.printf("%d %d\n", cnt0, cnt1);
		}
	}

}
