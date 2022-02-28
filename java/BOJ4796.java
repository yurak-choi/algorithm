// https://www.acmicpc.net/problem/4796

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ4796 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
		for(int t = 1;;t++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			
			int l = Integer.parseInt(st.nextToken());
			int p = Integer.parseInt(st.nextToken());
			int v = Integer.parseInt(st.nextToken());
			
			if(l==0 && p==0 && v==0) break;
			
			int remainder = v%p>l? l:v%p;
			System.out.printf("Case %d: %d%n", t, v/p*l+remainder);
		}
	}
}
