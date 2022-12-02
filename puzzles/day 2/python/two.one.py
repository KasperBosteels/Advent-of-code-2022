from pathlib import Path
gamestrategy = []
score: int = 0
gamestrategy = Path("../input.txt").read_text().split('\n')


def gamelogic(round):
    opponentMove = round[0]
    strategicMove = round[1]
    if (opponentMove == "A" or opponentMove == "B" or opponentMove == "C" and strategicMove == "X" or strategicMove == "Y" or strategicMove == "Z"):
        if (opponentMove == "A"):
            if (strategicMove == "X"):
                return 4
            if (strategicMove == "Y"):
                return 8
            if (strategicMove == "Z"):
                return 3
        if (opponentMove == "B"):
            if (strategicMove == "X"):
                return 1
            if (strategicMove == "Y"):
                return 5
            if (strategicMove == "Z"):
                return 9
        if (opponentMove == "C"):
            if (strategicMove == "X"):
                return 7
            if (strategicMove == "Y"):
                return 2
            if (strategicMove == "Z"):
                return 3
    else:
        print("error occured")


for round in gamestrategy:
    score += gamelogic(round.rstrip().lstrip().split(" "))

print("should be more than 13000")
print(score)
