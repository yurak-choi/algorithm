// https://www.acmicpc.net/problem/1629

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ1629 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		long a = Integer.parseInt(st.nextToken());
		long b = Integer.parseInt(st.nextToken());
		long c = Integer.parseInt(st.nextToken());
		
		System.out.println(getResult(a%c, b, c));
	}
	
	private static long getResult(long a, long b, long c) {
		if(b==1){
			return a;
		} else{
			long temp = getResult(a, b/2, c);
			if(b%2==1){
				return ((temp*temp)%c*a)%c;
			}
			else{
				return (temp*temp)%c;
			}
		}
	}
}
