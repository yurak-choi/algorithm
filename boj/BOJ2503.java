// https://www.acmicpc.net/problem/2503

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ2503 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		
		Input[] input = new Input[n];
		for(int i = 0; i<n; i++) {
			input[i] = new Input(br.readLine());
		}
		System.out.println(bruteForce(input));
	}
	
	private static int bruteForce(Input[] input) {
		int result = 0;
		for(int i = 123; i<=987; i++) {
			char[] num = String.valueOf(i).toCharArray();
			
			if(num[0]=='0' || num[1]=='0' || num[2]=='0') continue;
			if(num[0]==num[1] || num[1]==num[2] || num[2]==num[0]) continue;
			
			boolean flag = true;
			for(int j = 0; j<input.length; j++) {
				if(!input[j].check(num)) {
					flag = false;
					break;
				}
			}
			if(flag) result++;
		}
		return result;
	}
}

class Input {
	private char[] num;
	private int strike;
	private int ball;
	
	public Input(String input) {
		String[] input_split = input.split(" ");
		
		num = input_split[0].toCharArray();
		strike = Integer.parseInt(input_split[1]);
		ball = Integer.parseInt(input_split[2]);
	}
	
	public boolean check(char[] num) {
		int strike = 0;
		int ball = 0;
		
		for(int i = 0; i<3; i++) {
			for(int j = 0; j<3; j++) {
				if(this.num[i]==num[j]) {
					if(i==j) strike++;
					else ball++;
				}
			}
		}
		
		if(this.strike!=strike || this.ball!=ball) return false;
		return true;
	}
}
