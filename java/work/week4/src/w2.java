import java.util.Scanner;

public class w2 {
    public static void main(String[] args) {
        Scanner kb = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = kb.nextInt();

        System.out.println("Counting from " + number + " to 99:");
        while (number <= 99) {
            System.out.println(number);
            number++;
        }
    }
}
