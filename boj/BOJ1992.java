// https://www.acmicpc.net/problem/1992

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ1992 {
	private static int[][] image;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
		int n = Integer.parseInt(br.readLine());
		image = new int[n][n];
		for(int i = 0; i<n; i++) {
			String s = br.readLine();
			for(int j = 0; j<n; j++) {
				image[i][j] = s.charAt(j)-48;
			}
		}
		divAndConq(0, 0, n);
	}
	
	private static void divAndConq(int x, int y, int size) {
		if(sameCheck(x, y, size)) {
			System.out.print(image[y][x]);
		} else {
			System.out.print("(");
			int halfSize = size/2;
			divAndConq(x, y, halfSize);
			divAndConq(x+halfSize, y, halfSize);
			divAndConq(x, y+halfSize, halfSize);
			divAndConq(x+halfSize, y+halfSize, halfSize);
			System.out.print(")");
		}
	}
	
	private static boolean sameCheck(int x, int y, int size) {
		int temp = image[y][x];
		for(int i = y; i<y+size; i++) {
			for(int j = x; j<x+size; j++) {
				if(temp!=image[i][j]) {
					return false;
				}
			}
		}
		return true;
	}
}