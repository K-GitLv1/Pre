import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String code[] = new String[5];
        String name[] = new String[5];
        int test[]    = new int[5];
        int mid[]     = new int[5];
        double grade[] = new double[5];
        Scanner kb = new Scanner(System.in);        
        for(int x=0; x<code.length; x++){
            System.out.println("No : "+(x+1));
           
            System.out.print("รหัสนักศึกษา : ");
            code[x] = kb.next();
            
            System.out.print("ชื่อนักศึกษา  : ");
            name[x] = kb.next();
            
            System.out.print("คะแนนเก็บ  : ");
            test[x] = kb.nextInt();
            
            System.out.print("คะแนนสอบย่อย  : ");
            mid[x] = kb.nextInt();         
        if (test[x] + mid[x] >= 80){
                  grade[x] = 4.0;
        }else if ( test[x] + mid[x] >= 75){
                  grade[x] = 3.5;         
        }else if ( test[x] + mid[x] >= 70){
                  grade[x] = 3.0;         
        }else if ( test[x] + mid[x] >= 65){
                  grade[x] = 2.5;         
        }else if ( test[x] + mid[x] >= 60){
                  grade[x] = 2.0;         
        }else if ( test[x] + mid[x] >= 55){
                  grade[x] = 1.5;         
        }else if ( test[x] + mid[x] >= 50){
                  grade[x] = 1.0;         
        }else{    
                  grade[x] = 0;         
        }
        System.out.println("Grade : "+grade[x]+"\n");
        }
        
        System.out.println("—-------------------------------------------------------------------------------------------");
        System.out.println("No"+"\t"+"Code"+"\t"+"Name"+"\t"+"Test"+"\t"+"Mid"+"\t"+"Total"+"\t"+"Grade");
        for(int z=0; z<code.length; z++){
        System.out.println((z+1)+"\t"+code[z]+"\t"+name[z]+"\t"+test[z]+"\t"+mid[z]+"\t"+(test[z]+mid[z])+"\t"+grade[z]);
        }   
        System.out.println("—-------------------------------------------------------------------------------------------");
    }    
}