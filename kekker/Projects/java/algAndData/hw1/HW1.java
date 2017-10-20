/*

  Author: Calvin Williams
  Email: cwilliams2016@my.fit.edu
  Course: Algorithms and Data Structures in Java
  Section: 3
  Description: A text messaging app that can send and receive
               messages to and from different contacts.

 */

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class HW1 {

    /**
      A text messaging app that can send and receive messages to and
      from different contacts.
    */

    //--------------- nested Message class ---------------
    /**
     * Data structure defining a conversation for ease of use with
     * linked list. Only contains simple get methods to return the
     * related variables. Entirely self-explanatory.
     */
    private static class Message {
        private int    time;
        private String contact;
        private String message;

        public Message (int t, String c, String m) {
            time    = t;
            contact = c;
            message = m;
        }
        public int getTime () {
            return time;
        }
        public String getContact () {
            return contact;
        }
        public String getMessage () {
            return message;
        }
    }

    /*
     * Each of the user's contacts will have a SinglyLinkedList
     * dedicated to their conversation. The lists will be used
     * to keep their messages in order.
     */
    public static SinglyLinkedList<Message> Alice = new
                                    SinglyLinkedList<Message>();
    public static SinglyLinkedList<Message> Bob   = new
                                    SinglyLinkedList<Message>();
    public static SinglyLinkedList<Message> Carol = new
                                    SinglyLinkedList<Message>();

    /*
     * Each user also has their own unread count.
     */
    public static int unreadAlice = 0;
    public static int unreadBob   = 0;
    public static int unreadCarol = 0;

    // Input methods
    /**
     * Takes input message and inserts into the related contact's
     * linked list. Calls NotifyUser.
     * @param time     the timestamp of the received message
     * @param contact  the contact who sent the message
     * @param message  the contents of the received message
     */
    public static void ReceiveMessage (int time, String contact,
      String message) {
        /* Message object to be used in the sender's linked list */
        Message received = new Message(time, contact, message);

        /* Defines sender and inserts into linked list */
        switch (contact) {
            case "Alice":
                /* Inserting at head && checking for empty list */
                if (Alice.isEmpty() || Alice.first().getTime() >
                  received.getTime()) {
                    Alice.addFirst(received);
                }
                /* Inserting at tail */
                else if (received.getTime() > Alice.last().getTime()) {
                    Alice.addLast(received);
                }
                /* Inserting in middle */
                else {
                    Alice.resetCurrent();
                    while (Alice.hasNext()) {
                        if (Alice.getNextElement().getTime() > received.getTime())
                            break;
                        else
                            Alice.next();
                    }
                    Alice.insert(received, Alice.getCurrent());

                }
                /* Resets the "current" reference to the head */
                Alice.resetCurrent();
                unreadAlice++;
                break;

            /* These next two cases accomplish the same as above
             * with the other two contacts. This could be placed
             * into its own method to greatly shorten the code,
             * but I didn't realize this earlier and in the interest
             * of time neglected to do so. */
            case "Bob":
                if (Bob.isEmpty() || Bob.first().getTime() >
                  received.getTime()) {
                    Bob.addFirst(received);
                }
                else if (received.getTime() > Bob.last().getTime()) {
                    Bob.addLast(received);
                }
                else {
                    Bob.resetCurrent();
                    while (Bob.hasNext()) {
                        if (Bob.getNextElement().getTime() > received.getTime())
                            break;
                        else
                            Bob.next();
                    }
                    Bob.insert(received, Bob.getCurrent());

                }
                Bob.resetCurrent();
                unreadBob++;
                break;
            case "Carol":
                if (Carol.isEmpty() || Carol.first().getTime() >
                  received.getTime()) {
                    Carol.addFirst(received);
                }
                else if (received.getTime() > Carol.last().getTime()) {
                    Carol.addLast(received);
                }
                else {
                    Carol.resetCurrent();
                    while (Carol.hasNext()) {
                        if (Carol.getNextElement().getTime() > received.getTime())
                            break;
                        else
                            Carol.next();
                    }
                    Carol.insert(received, Carol.getCurrent());

                }
                Carol.resetCurrent();
                unreadCarol++;
                break;
            default:
                System.out.println("Error: Contact not parsed");
                break;
        }

        NotifyUser(contact);
    }

    /**
     * Displays list of contacts alphabetically with associated
     * number of unread messages.
     */
    public static void OpenApp () {
        System.out.println("OpenApp");
        /* Prints the contacts with their unread count */
        System.out.println("Alice " + unreadAlice);
        System.out.println("Bob "   + unreadBob  );
        System.out.println("Carol " + unreadCarol);
    }

    /**
     * Displays the full conversation with requested contact. Resets
     * unread to zero.
     * @param contact  the contact who sent the message
     */
    public static void DisplayConversation (String contact) {
        switch (contact) {
            case "Alice":
                /* Reset unread to 0, since the user now sees
                 * the messages */
                unreadAlice = 0;
                /* Reset "current" reference to head. For some reason
                 * it doesn't work without this. */
                Alice.resetCurrent();
                /* Prints the whole list. */
                for (int i = 0; i < Alice.size(); i++) {
                    /* Prints current message in conversation */
                    System.out.println(Alice.getElement().getTime() +
                                 " " + Alice.getElement().getContact() +
                                 " " + Alice.getElement().getMessage());
                    /* Checks for null */
                    if (!Alice.hasNext()) break;
                    /* Iterates */
                    else Alice.next();
                }
                break;

            /* These next two cases accomplish the same as above
             * with the other two contacts. This could be placed
             * into its own method to greatly shorten the code,
             * but I didn't realize this earlier and in the interest
             * of time neglected to do so. */
            case "Bob":
                unreadBob   = 0;
                Bob.resetCurrent();
                for (int i = 0; i < Bob.size(); i++) {
                    System.out.println(Bob.getElement().getTime() +
                                 " " + Bob.getElement().getContact() +
                                 " " + Bob.getElement().getMessage());
                    if (!Bob.hasNext()) break;
                    else Bob.next();
                }
                break;
            case "Carol":
                unreadCarol = 0;
                Carol.resetCurrent();
                for (int i = 0; i < Carol.size(); i++) {
                    System.out.println(Carol.getElement().getTime() +
                                 " " + Carol.getElement().getContact() +
                                 " " + Carol.getElement().getMessage());
                    if (!Carol.hasNext()) break;
                    else Carol.next();
                }
                break;
        }
    }

    /**
     * Sends a message to the specified contact.
     * @param time     the timestamp of the sent message
     * @param contact  the contact who the message was sent to
     * @param message  the contents of the sent message
     */
    public static void SendMessage (int time, String contact,
      String message) {
          /* Create a new message object */
          Message received = new Message(time, "me", message);
          System.out.println("SendMessage " + time + " " + contact + " " + message);
          /* This switch case does the exact same thing as ReceiveMessage, except
           * instead of NotifyUser it calls DisplayConversation at the end.
           * For clarity, it is still commented. */
           /* Defines recipient and inserts into linked list */
          switch (contact) {
              case "Alice":
                  /* Inserting at head && checking for empty list */
                  if (Alice.isEmpty() || Alice.first().getTime() >
                    received.getTime()) {
                      Alice.addFirst(received);
                  }
                  /* Inserting at tail */
                  else if (received.getTime() > Alice.last().getTime()) {
                      Alice.addLast(received);
                  }
                  /* Inserting in middle */
                  else {
                      Alice.resetCurrent();
                      while (Alice.hasNext()) {
                          if (Alice.getNextElement().getTime() > received.getTime())
                              break;
                          else
                              Alice.next();
                      }
                      Alice.insert(received, Alice.getCurrent());
                  }
                  /* Resets the "current" reference to head */
                  Alice.resetCurrent();
                  /* Displays the conversation again */
                  DisplayConversation("Alice");
                  break;

            /* These next two cases accomplish the same as above
             * with the other two contacts. This could be placed
             * into its own method to greatly shorten the code,
             * but I didn't realize this earlier and in the interest
             * of time neglected to do so. */
              case "Bob":
                  if (Bob.isEmpty() || Bob.first().getTime() >
                    received.getTime()) {
                      Bob.addFirst(received);
                  }
                  else if (received.getTime() > Bob.last().getTime()) {
                      Bob.addLast(received);
                  }
                  else {
                      Bob.resetCurrent();
                      while (Bob.hasNext()) {
                          if (Bob.getNextElement().getTime() > received.getTime())
                              break;
                          else
                              Bob.next();
                      }
                      Bob.insert(received, Bob.getCurrent());

                  }
                  Bob.resetCurrent();
                  DisplayConversation("Bob");
                  break;
              case "Carol":
                  if (Carol.isEmpty() || Carol.first().getTime() >
                    received.getTime()) {
                      Carol.addFirst(received);
                  }
                  else if (received.getTime() > Carol.last().getTime()) {
                      Carol.addLast(received);
                  }
                  else {
                      Carol.resetCurrent();
                      while (Carol.hasNext()) {
                          if (Carol.getNextElement().getTime() > received.getTime())
                              break;
                          else
                              Carol.next();
                      }
                      Carol.insert(received, Carol.getCurrent());

                  }
                  Carol.resetCurrent();
                  DisplayConversation("Carol");
                  break;
              default:
                  System.err.println("Error: Contact not parsed");
                  break;
          }
    }

    /**
     * Deletes message from specified contact at the timestamp
     * @param time     the timestamp of the message to be deleted
     * @param contact  the contact whose message will be deleted
     */
    public static void DeleteMessage (int time, String contact) {
        switch (contact) {
            case "Alice":
                Alice.resetCurrent();
                while (Alice.hasNext()) {
                    if (Alice.first().getTime() == time) {
                        Alice.removeFirst();
                    }
                    if (time == Alice.getNextElement().getTime()) {
                        Alice.removeAfter(Alice.getCurrent(), Alice.pgetNext());
                        break;
                    }
                    else
                        Alice.next();
                }
                DisplayConversation("Alice");
                break;
            case "Bob":
                Bob.resetCurrent();
                while (Bob.hasNext()) {
                    if (Bob.first().getTime() == time) {
                        Bob.removeFirst();
                    }
                    if (time == Bob.getNextElement().getTime()) {
                        Bob.removeAfter(Bob.getCurrent(), Bob.pgetNext());
                        break;
                    }
                    else
                        Bob.next();
                }
                DisplayConversation("Bob");
                break;
            case "Carol":
                Carol.resetCurrent();
                while (Carol.hasNext()) {
                    if (Carol.first().getTime() == time) {
                        Carol.removeFirst();
                    }
                    if (time == Carol.getNextElement().getTime()) {
                        Carol.removeAfter(Carol.getCurrent(), Carol.pgetNext());
                        break;
                    }
                    else
                        Carol.next();
                }
                DisplayConversation("Carol");
                break;
        }
    }

    /**
     * Closes the "application".
     */
    public static void CloseApp () {
        System.out.println("CloseApp");
    }

    /**
     * Notifies the user of an incoming message and who the message
     * was sent from.
     * @param contact  the sender of the incoming message
     */
    public static void NotifyUser (String contact) {
        switch (contact) {
            case "Alice":
                System.out.println("NotifyUser Alice");
                break;
            case "Bob":
                System.out.println("NotifyUser Bob"  );
                break;
            case "Carol":
                System.out.println("NotifyUser Carol");
                break;
        }

    }

    /**
     * Main method. Reads input file and calls the method it asks for.
     * @param args[0]  the input file
     */
    public static void main(String[] args)
      throws IOException {
        /** Input file from command line */
        String file = args[0];

        /** Scanner & delimiter to read input file line by line */
        Scanner scan = new Scanner(new File(file));
        scan.useDelimiter("\n");

        /** QOL variable to store the current command */
        String currLine;

        while (scan.hasNext()) {
            /** Stores current line */
            currLine = scan.nextLine();
            /** Splitting the thingy */
            String[] parts = currLine.split(" ", 4);
            /** Pre-defining args for when they're used */
            String command = parts[0];
            int time;
            String contact;
            String message;

            switch (command) {
                case "ReceiveMessage":
                    time = Integer.parseInt(parts[1]);
                    contact = parts[2];
                    message = parts[3];
                    ReceiveMessage(time, contact, message);
                    break;

                case "OpenApp":
                    OpenApp();
                    break;

                case "DisplayConversation":
                    contact = parts[1];
                    System.out.println("DisplayConversation " + contact);
                    DisplayConversation(contact);
                    break;

                case "SendMessage":
                    time = Integer.parseInt(parts[1]);
                    contact = parts[2];
                    message = parts[3];
                    SendMessage(time, contact, message);
                    break;

                case "DeleteMessage":
                    time = Integer.parseInt(parts[1]);
                    contact = parts[2];
                    System.out.println("DeleteMessage " + time + " "
                                       + contact);
                    DeleteMessage(time, contact);
                    break;

                case "CloseApp":
                    CloseApp();
                    break;

                default:
                    System.err.print("Unknown input: " + command);
                    return;
            }

        }
        scan.close();
    }

}
