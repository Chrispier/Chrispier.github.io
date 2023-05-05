/** 
   Name: 
   Date: 
   Period: 

 * This project is an introduction into implementing algorithms 
 */
import java.util.ArrayList;

public class Bubble {
    public static void main(String[] args) throws Exception {
        ArrayList<Integer> numList = randomize(10);
        // create a randomized ArrayList of integers.
        System.out.println(numList);
        // print out the unsorted list
        numList = bubbleSort(numList);
        // sort the list
        System.out.println(numList);
        // print out the sorted list
    }

    // Return an ArrayList of the given size of randomized integers from 1-100. 
    // Precondition: size is a positive integer.
    public static ArrayList<Integer> randomize(int size){
        ArrayList<Integer> randomList = new ArrayList<Integer>();
        for(int count = 0; count < size; count++){
            randomList.add(Integer.valueOf(((int)(Math.random()*100))));
        }
        return randomList;
    }

    public static ArrayList<Integer> bubbleSort(ArrayList<Integer> list){
        // TODO: We are implementing the BubbleSort algorithm
        // to sort the given ArrayList of integers in ascending order.
        // The function should return a sorted list. 
        
        return null;
    }

}
