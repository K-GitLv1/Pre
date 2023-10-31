import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {    

/*         Programe choose 1 - 5 for sex
        1 male 2 famale 3 tom 4 gay 5 lady etc... */

    Scanner kb = new Scanner(System.in);
        System.out.println("\n"+"\n"+"\n"+"Program SEX: 1 - 5");
        System.out.println("1.Male");
        System.out.println("2.Famale");
        System.out.println("3.Tom");
        System.out.println("4.Gay");
        System.out.println("5.Lady");
        
        System.out.print("โปรดเลือกเลข: ");
        int x = kb.nextInt();
        
        switch (x) {
            case 1:
                System.out.println("คุณเลือก:Male");
                break;
            case 2:
                System.out.println("คุณเลือก:Famale");
                break;
            case 3:
                System.out.println("คุณเลือก:Tom");
                break;
            case 4:
                System.out.println("คุณเลือก:Gay");
                break;
            case 5:
                System.out.println("คุณเลือก:Lady");
                break;
            default:
                System.out.println("เลือกไม่ถูกต้อง");
        }
    }           
}