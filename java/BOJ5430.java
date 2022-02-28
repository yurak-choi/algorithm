// https://www.acmicpc.net/problem/5430

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;

public class BOJ5430 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testCase = Integer.parseInt(br.readLine());
		outer : for(int t = 0; t<testCase; t++) {
			char[] p = br.readLine().toCharArray();
			int n = Integer.parseInt(br.readLine());
			String input = br.readLine();
			
			String[] arr = input.substring(1, input.length()-1).split(",");
			Deque<String> deque = new LinkedList<String>();
			for(int i = 0; i<n; i++) {
				deque.add(arr[i]);
			}
			
			boolean direction = true; // true : front, false : rear
			for(char ch : p) {
				if(ch=='R') {
					direction = !direction;
				} else {
					if(!deque.isEmpty())
						if(direction) deque.pollFirst();
						else deque.pollLast();
					else {
						System.out.println("error");
						continue outer;
					}
				}
			}
			
			StringBuilder sb = new StringBuilder("[");
			while(!deque.isEmpty()) {
				if(direction) {
					sb.append(deque.pollFirst());
				} else {
					sb.append(deque.pollLast());
				}
				
				if(!deque.isEmpty()) sb.append(",");
			}
			System.out.println(sb.append("]").toString());
		}
	}
}
