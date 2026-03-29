import random

random_integer = random.randint(1, 100)
player_guess = None

while player_guess != random_integer:
    try:
        player_guess = int(input("Guess a number from 1 - 100" ))
        if player_guess == random_integer:
            print("Excelllent, you guessed the number")
            break
        elif player_guess > random_integer:
            print("Too high, try agian")
        else:
            print("Too low, try agian")
    except ValueError:
        print("Invalid input. Please enter a valid integer")

