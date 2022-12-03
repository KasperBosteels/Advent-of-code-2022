from pathlib import Path
gamestrategy = []
score: int = 0
gamestrategy = Path("../input.txt").read_text("utf-8").split('\n', -1)


def gamelogic(round):
    opponentMove = round[0]
    strategicMove = round[1]
    if (opponentMove == "A"):
        if (strategicMove == "X"):
            return 3
        elif (strategicMove == "Y"):
            return 6
        else:
            return 0
    elif (opponentMove == "B"):
        if (strategicMove == "X"):
            return 0
        elif (strategicMove == "Y"):
            return 3
        else:
            return 6
    else:
        if (strategicMove == "X"):
            return 6
        elif (strategicMove == "Y"):
            return 0
        else:
            return 3


def moveScore(input: str):
    if (input == "X"):
        return 1
    elif (input == "Y"):
        return 2
    else:
        return 3


for round in gamestrategy:
    score += gamelogic(round.rstrip().lstrip().split(" "))
    score += moveScore(round.rstrip().lstrip().split(" "))
    print(moveScore(round.rstrip().lstrip().split(" ")[1]))

print("should be more than 13000")
print(score)
