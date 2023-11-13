public class w3 {
    static void myname() {
        System.out.println("My Name is Jiraphat Nurach");
    }
 //สร้าง methode บวก ลบ คูณ หาร แล้วส่งค่าให้กับ methode แล้วทดลองใช้
    static int add(int a, int b) {
        return a + b;
    }

    static int subtract(int a, int b) {
        return a - b;
    }

    static int multiply(int a, int b) {
        return a * b;
    }

    static double divide(double a, double b) {
        if (b != 0) {
            return a / b;
        } else {
            System.out.println("Error: Division by zero.");
            return Double.NaN;
        }
    }

    public static void main(String[] args) {
        int ans = Math.max(2, 3);
        System.out.println("Max: " + ans);

        myname();

        int sum = add(5, 3);
        System.out.println("Sum: " + sum);

        int difference = subtract(8, 3);
        System.out.println("Difference: " + difference);

        int product = multiply(4, 6);
        System.out.println("Product: " + product);

        double quotient = divide(10.0, 2.0);
        System.out.println("Quotient: " + quotient);
    }
}
