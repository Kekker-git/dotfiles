/** Stuff */

import java.util.ArrayList;
import java.util.Collections;

public class Node implements Comparable<Node>
{
    private Node prev;
    private String data;
    private ArrayList<Node> next = new ArrayList<Node>();

    public Node(String d, Node p)
    {
        prev = p;
	data = d;
    }
    
    public void setNext(Node n)
    {
        next.add(n);
	nextSort();
    }

    public void setPrev(Node p)
    {
        prev = p;
    }
    
    public ArrayList getNext()
    {
	return next;
    }
    
    public Node getPrev()
    {
        return prev;
    }
    
    public String getData()
    {
	return data;
    }

    public int compareTo(Node n)
    {
	if (this.getData() == n.getData())
	    return 1;
	return 0;
    }
    
    /** Merge sort */
    public void nextSort()
    {
        Collections.sort(next);
    }
}
