/** Stuff */

import java.util.ArrayList;

public class Tree
{
    private Node root;
    private int size;

    public Tree(String r)
    {
	root = new Node(r, null);
	size = 0;
    }

    public void addChild(Node p, Node c)
    {
     	p.setNext(c);
	c.setPrev(p);
    }

    public ArrayList getChildren(Node p)
    {
        return p.getNext();
    }

    public Node getParent(Node c)
    {
	return c.getPrev();
    }

    public String getElement(Node p)
    {
	return p.getData();
    }

    public Node root()
    {
	return root;
    }

    public int numChildren(Node p)
    {
	return p.getNext().size();
    }

    public boolean isInternal(Node p)
    {
	return numChildren(p) > 0;
    }

    public boolean isExternal(Node p)
    {
	return numChildren(p) == 0;
    }

    public boolean isRoot(Node p)
    {
	return p == root;
    }

    public int size()
    {
	return size;
    }

    public boolean isEmpty()
    {
	if (size == 0)
	    return true;
	return false;
    }

}

