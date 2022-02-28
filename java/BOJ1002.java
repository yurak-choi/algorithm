// https://www.acmicpc.net/problem/1002

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ1002 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		int testcase = Integer.parseInt(br.readLine());
		for(int t = 0; t<testcase; t++) {
			st = new StringTokenizer(br.readLine());
			
			int x1 = Integer.parseInt(st.nextToken()),
				y1 = Integer.parseInt(st.nextToken()),
				r1 = Integer.parseInt(st.nextToken()),
				x2 = Integer.parseInt(st.nextToken()),
				y2 = Integer.parseInt(st.nextToken()),
				r2 = Integer.parseInt(st.nextToken());
			
			System.out.println(getResult(x1, y1, r1, x2, y2, r2));
		}
	}

	private static int getResult(int x1, int y1, int r1, int x2, int y2, int r2) {
		int d = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2),
			sumR = (r1+r2)*(r1+r2),
			subR = (r1-r2)*(r1-r2);
		
		if(d==0 && subR==0) {
			return -1;
		} else if(d==sumR || d==subR) {
			return 1;
		} else if(d<sumR && d>subR) {
			return 2;
		} else {
			return 0;
		}
	}
}
