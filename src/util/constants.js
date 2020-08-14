export const MAXIMIZED_CONSOLE_HEIGHT = 230;
export const MINIMIZED_CONSOLE_HEIGHT = 40;
export const SAMPLE_CODE = `
import java.util.Scanner;  // Import the Scanner class

public class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);  // Create a Scanner object
    System.out.println("Enter username");

    String userName = myObj.nextLine();  // Read user input
    System.out.println("Username is: " + userName);  // Output user input
  }
}
`;
