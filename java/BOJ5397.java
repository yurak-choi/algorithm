// https://www.acmicpc.net/problem/5397

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;

public class BOJ5397 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testCase = Integer.parseInt(br.readLine());
		for(int t = 0; t<testCase; t++) {
			char[] inputArr = br.readLine().toCharArray();
			
			LinkedList<Character> password = new LinkedList<>();
			int cursor = 0;
			for(char ch : inputArr) {
				switch(ch) {
				case '<' : 
					if(cursor>0) {
						cursor--;
					}
					break;
				case '>' : 
					if(cursor<password.size()) {
						cursor++;
					}
					break;
				case '-' : 
					if(cursor>0) {
						password.remove(cursor-1);
						cursor--;
					}
					break;
				default : 
					password.add(cursor, ch);
					cursor++;
					break;
				}
			}
			
			StringBuilder sb = new StringBuilder();
			for(char ch : password) {
				sb.append(ch);
			}
			System.out.println(sb.toString());
		}
	}
}
