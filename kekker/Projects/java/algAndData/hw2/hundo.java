public class hundo
{
    public static void main(String args[])
    {
        long max = 0;
        for (int i = 0; i < 8; i++)
            max = (max * 26) + 26;
        System.out.println(max);
    }
}
