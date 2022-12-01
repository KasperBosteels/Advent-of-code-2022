
elfCallorydb = []
CalloryPerElfdb = []
with open("../input.txt", 'r') as f:
    input = f.readlines()
    elfCallorydb = input

totalPerElf = 0
for value in elfCallorydb:
    if value != '\n':
        totalPerElf += int(value.replace('\n', ''))
    else:
        CalloryPerElfdb.append(totalPerElf)
        totalPerElf = 0
CalloryPerElfdb.sort(reverse=True)
print(CalloryPerElfdb[0])
