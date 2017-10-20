/*
  Author: Calvin Williams
  Email: cwilliams2016@my.fit.edu
  Course: Algorithms and Data Structures in Java
  Section: 3
  Description:
    A program that decrypts a string of characters.
 */
import java.util.Scanner;
import java.io.File;
import java.io.IOException;

/**
 * This program takes a string of characters and passes it through
 * a pre-made encryption algorithm, and checks to see if it's equal
 * to the given encrypted string.
 */

public class HW2
{
    /*
      sample use of HW2crypto

      encrypted = HW2crypto.encrypt(plain);
    */

    public static final char[] ALPH = new char[]
      {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

    /**
     * Brute forces a password by passing it through a pre-made
     * encryption algorithm and comparing to a given encrypted
     * string.
     * @param encrypted  the encrypted string this tries to crack
     * @param test       the string tested in the algorithm
     * @param max        the maximum password length
     */
    public static void bruteForce(String encrypted, String test, int max)
    {
        /* Checks for max length. Returns if reached. */
        if (test.length() == max)
            return;
        /* The main loop of the algoritm. Appends the letter from the
         * alphabet array to the end of the test string each loop,
         * then checks for equality. */
        for (int i = 0; i < ALPH.length; i++)
        {
            /* Appends the letter to the end of the string. */
            test += ALPH[i];
            /* Equality check */
            if (HW2crypto.encrypt(test).equals(encrypted))
            {
                System.out.println(test);
                /* For some reason, it doesn't like to actually return
                   here... */
                return;
            }
            else
            {
                /* Recursive call */
                bruteForce(encrypted, test, max);
                /* Cleaning up */
                test = test.substring(0, test.length() - 1);
            }
        }
    }

    /**
     * Main method. Parses command line input and starts main loop.
     * @param args[0]  the input file
     */
    public static void main(String[] args)
        throws IOException
    {
        /* Parses name of file, and sets up a scanner to read it */
        String file = args[0];
        Scanner scan = new Scanner(new File(file));
        scan.useDelimiter("\n");

        /* Takes the first line as maximum word length */
        final int MAX = Integer.parseInt(scan.next());

        /* Timer. I used this for comparing to the extra credit
         * code's algorithm. The extra credit was faster. By a lot. */
        long start = System.currentTimeMillis();

        /* Main loop. Pretty self-explanatory. */
        while (scan.hasNext())
        {
            /* Takes the next line as the encrypted string. */
            String encrypted = scan.next();
            /* The "new String()" is used to hold the test string. */
            bruteForce(encrypted, new String(), MAX);
        }
        /* More timer stuff. I commented out the part that prints the
         * time. */
        long end = System.currentTimeMillis();
        long elapsed = end - start;
        // System.out.println(elapsed + "ms");
    }
}
