from pathlib import Path
input = Path("../input.txt").read_text("utf-8").split('\n', -1)
score = 0


class ZONE:
    def __init__(self, start: int, end: int):
        self.start = start
        self.end = end

    def __str__(self):
        return f"start {start} end {end}"

    def __str__(start) -> int:
        return start

    def __str__(end) -> int:
        return end


for pair in input:
    zone = [ZONE]

    elf = pair.split(",")
    i = 0
    for singlelef in elf:
        zones = singlelef.split("-")
        start = int(zones[0])
        end = int(zones[1])
        newzone = ZONE(start, end)
        print(newzone)
        zone.append(newzone)
        i += 1

    if (zone[0].start <= zone[1].start and zone[0].end >= zone[1].end):
        score += 1
    elif (zone[0].start >= zone[1].start and zone[0].end <= zone[1].end):
        score += 1

print(score)
