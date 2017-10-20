/*

  Author: Calvin Williams
  Email: cwilliams2016@my.fit.edu
  Course: Algorithms and Data Structures in Java
  Section: 3
  Description:

 */

import java.io.File;
import java.io.IOException;

public class HW3
{
    /*
      Description
    */
    public void buildTree(File tree)
    {

    }
    public void searchNodes(File tree)
    {
	
    }
    public static void main(String[] args)
      throws IOException
    {
        File tree = new File(args[0]);
        File query = new File(args[1]);

        buildTree(tree);
        searchNodes(tree);
        tree.close();
        query.close();
    }

}
