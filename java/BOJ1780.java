// https://www.acmicpc.net/problem/1780

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ1780 {
	private static int[][] arr;
	private static int[] cnt = new int[3];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		int n = Integer.parseInt(br.readLine());
		arr = new int[n][n];
		
		for(int i = 0; i<n; i++) {
			st = new StringTokenizer(br.readLine());
			for(int j = 0; j<n; j++) {
				arr[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		divAndConq(0,0,n);
		
		for(int i = 0; i<3; i++) {
			System.out.println(cnt[i]);
		}
	}
	
	private static void divAndConq(int x, int y, int len) {
		if(sameCheck(x, y, len)) {
			cnt[arr[y][x]+1]++;
		} else {
			int newLen = len/3;
			/*for(int newY = y; newY<y+len; newY+=newLen) {
				for(int newX = x; newX<x+len; newX+=newLen) {
					divAndConq(newX, newY, newLen);
				}
			}*/
			for(int i = 0; i<3; i++) {
				for(int j = 0; j<3; j++) {
					divAndConq(x+j*newLen, y+i*newLen, newLen);
				}
			}
		}
	}
	
	private static boolean sameCheck(int x, int y, int len) {
		int temp = arr[y][x];
		for(int i = y; i<y+len; i++) {
			for(int j = x; j<x+len; j++) {
				if(temp!=arr[i][j]) return false;
			}
		}
		return true;
	}
}
