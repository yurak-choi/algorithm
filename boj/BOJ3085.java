// https://www.acmicpc.net/problem/3085

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ3085 {
	private static char[][] board;
	private static int n;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
		n = Integer.parseInt(br.readLine());
		board = new char[n][n];
		for(int i = 0; i<n; i++) {
			String s = br.readLine();
			for(int j = 0; j<n; j++) {
				board[i][j] = s.charAt(j);
			}
		}
		System.out.println(bruteForce());
	}
	
	private static int bruteForce() {
		int max = 0;
		for(int i = 0; i<n; i++) {
			for(int j = 0; j<n-1; j++) {
				swap(i,j,i,j+1);
				max = getMax(max, getCnt(i,j,true));
				swap(i,j,i,j+1);
			}
		}
		for(int i = 0; i<n-1; i++) {
			for(int j = 0; j<n; j++) {
				swap(i,j,i+1,j);
				max = getMax(max, getCnt(i,j,false));
				swap(i,j,i+1,j);
			}
		}
		return max;
	}

	private static int getCnt(int i, int j, boolean garo) {
		int max = 0;
		int cnt = 1;
		
		if(garo) {
			for(int x = 0; x<n-1; x++) {
				if(board[i][x]==board[i][x+1]) {
					cnt++;
				} else {
					max = getMax(max, cnt);
					cnt = 1;
				}
			}
			max = getMax(max, cnt);
			
			for(int x = j; x<=j+1; x++) {
				cnt = 1;
				for(int y = 0; y<n-1; y++) {
					if(board[y][x]==board[y+1][x]) {
						cnt++;
					} else {
						max = getMax(max, cnt);
						cnt = 1;
					}
				}
				max = getMax(max, cnt);
			}
		} else {
			for(int y = 0; y<n-1; y++) {
				if(board[y][j]==board[y+1][j]) {
					cnt++;
				} else {
					max = getMax(max, cnt);
					cnt = 1;
				}
			}
			max = getMax(max, cnt);
			
			for(int y = i; y<=i+1; y++) {
				cnt = 1;
				for(int x = 0; x<n-1; x++) {
					if(board[y][x]==board[y][x+1]) {
						cnt++;
					} else {
						max = getMax(max, cnt);
						cnt = 1;
					}
				}
				max = getMax(max, cnt);
			}
		}
		return max;
	}
	
	private static int getMax(int max, int cnt) {
		return max>cnt? max:cnt;
	}

	private static void swap(int i1, int j1, int i2, int j2) {
		char temp = board[i1][j1];
		board[i1][j1] = board[i2][j2];
		board[i2][j2] = temp;
	}
}