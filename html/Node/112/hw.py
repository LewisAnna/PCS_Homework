import random

class Die:
    """A class representing a single die with a variable number of sides."""
    
    def __init__(self, sides=6):
        """Initializes the die with a specific number of sides (default is 6)."""
        self.sides = sides

    def roll(self):
        """Returns a random number between 1 and the number of sides."""
        # Using random.randint which is inclusive of both endpoints [1, 5, 8]
        return random.randint(1, self.sides)

# --- Interactive Portion ---
def main():
    try:
        # Asking the user for the number of sides
        user_input = input("How many sides would you like the dice to have? ")
        num_sides = int(user_input)

        if num_sides < 1:
            print("A die must have at least 1 side.")
            return

        # Create an instance of the Die class
        my_die = Die(num_sides)

        print(f"\nRolling a {num_sides}-sided die 10 times:")
        
        # Roll the die 10 times and print each result
        for i in range(1, 11):
            result = my_die.roll()
            print(f"Roll {i}: {result}")

    except ValueError:
        print("Invalid input. Please enter a whole number.")

if __name__ == "__main__":
    main()


input("Press Enter to exit...")