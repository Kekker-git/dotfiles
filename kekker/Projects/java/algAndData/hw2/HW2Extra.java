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
/*
 * This is what my original solution was, but it kept overflowing with
 * the recursive call there so I simplified the algorithm in my
 * HW2.java. I tossed this into a normal loop and it worked beautifully,
 * and at more than double the speed of the other code.
 *
 * Enumerating all possible strings is almost a base conversion to base
 * 26. Unfortunately, since indexes start at 0 and you never really
 * write the leading 0 in a number (i.e. 01, 02, 03...), if I did a
 * straight base conversion it would skip the first letter.
 * continued at the ALPH array...
 */

public class HW2Extra
{
    /*
      sample use of HW2crypto

      encrypted = HW2crypto.encrypt(plain);
    */

    /* ...fortunately, I can just make the array start at 1 by putting
     * a sort of dummy variable at 0. */
    public static final char[] ALPH = new char[]
      {'0', // Without this, anything with a leading 'a' wouldn't output
       'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
    public static final int BASE = 26;

    /**
     * Brute forces a password by passing it through a pre-made
     * encryption algorithm and comparing to a given encrypted
     * string.
     * @param encrypted  the encrypted string this tries to crack
     * @param max        the maximum permutations of the max password length
     */
    public static void bruteForce(String encrypted, int max)
    {
        /* The remainder */
        int rem;

        /* Main loop for the algorithm. Starts at max length */
        for (int i = max; i > 0; i--)
        {
            /* Holds "i" so I can increment it separately later. */
            int curr = i;
            /* The string to test */
            String test = "";
            while (curr > 0)
            {
                /* The sort-of base conversion bit */
                rem = curr % BASE;
                /* This is the core algorithm. */
                if (rem != 0)
                {
                    /* Adds the index of ALPH(abet) */
                    test += ALPH[rem];
                    curr = curr / BASE;
                }
                else
                {
                    /* Adds z */
                    test += ALPH[BASE];
                    curr = (curr / BASE) - 1;
                }
            }
            /* Equality check */
            if (HW2crypto.encrypt(test).equals(encrypted))
            {
                System.out.println(test);
                return;
            }
        }
    }

    public static void main(String[] args)
        throws IOException
    {
        String file = args[0];
        Scanner scan = new Scanner(new File(file));
        scan.useDelimiter("\n");

        final int MAX = Integer.parseInt(scan.next());

        /* The maximum permutations of the given length of letters */
        int maxPerms = 0;
        /* Calculates the max permutations */
        for (int i = 0; i < MAX; i++)
            maxPerms = (maxPerms * BASE) + BASE;

        /* Timer to compare to HW2.java */
        long start = System.currentTimeMillis();
        /* Main function loop */
        while (scan.hasNext())
        {
            bruteForce(scan.next(), maxPerms);
        }
        /* More timer stuff. Commented out the print bit */
        long end = System.currentTimeMillis();
        long elapsed = end - start;
        // System.out.println(elapsed + "ms");
    }
}
