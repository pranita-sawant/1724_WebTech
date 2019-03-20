package Test;

import Main.Elevator;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
public class ElevatorTest {
    @Test
    public void gotosecondfloor(){
        Elevator elevator=new Elevator();
        elevator.goTo(2);
        assertEquals(new Integer(2),elevator.getCurrentFloor());
    }

}