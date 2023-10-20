import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        
        Scanner kb = new Scanner(System.in);
        System.out.println("ทดลองบวกเลข");
        int num1,num2,sum;
        System.out.print("ป้อนค่าแรก");
        num1 = kb.nextInt();
        System.out.print("ป้อนค่าสอง");
        num2 = kb.nextInt();

        sum = num1 + num2;
        System.out.println("total = "+sum);
    }
}