// https://www.acmicpc.net/problem/2212

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BOJ2212 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		int k = Integer.parseInt(br.readLine());
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] sensor = new int[n];
		for(int i = 0; i<n; i++)
			sensor[i] = Integer.parseInt(st.nextToken());
		Arrays.sort(sensor);
		
		int[] distance = new int[n-1];
		for(int i = 0; i<n-1; i++) 
			distance[i] = sensor[i+1]-sensor[i];
		Arrays.sort(distance);
		
		int result = 0;
		for(int i = 0; i<n-k; i++)
			result += distance[i];
		
		System.out.println(result);
	}
}
