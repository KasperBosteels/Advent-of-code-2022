from pathlib import Path
input = Path("../input.txt").read_text("utf-8")
data = input.split()
starters = [int]
print(f"array length: {len(data)}")
for x in range(len(data)):
    occurance = 0
    sequence = [input[x], input[x+1], input[x+2], input[x+3]]
    print(f"current sequence of array: {sequence}")
    for val in sequence:
        if (sequence.count(val) > 1):
            occurance += 1
    if (occurance == 0):
        starters.append(x+4)
print(starters)
