// https://www.acmicpc.net/problem/9012

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class BOJ9012 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int t = Integer.parseInt(br.readLine());
		while(t-->0) {
			Stack<Character> s = new Stack<Character>();
			String ps = br.readLine();
			boolean isVps = true;
			
			for(int i = 0; i<ps.length(); i++) {
				if(ps.charAt(i)=='(') {
					s.push('(');
				} else {
					if(s.empty()) {
						isVps = false;
						break;
					}
					s.pop();
				}
			}
			
			if(isVps && s.empty()) {
				System.out.println("YES");
			} else {
				System.out.println("NO");
			}
		}
	}
}
