# Calvin Williams
# 901944191
# CSE2400, Applied Statistics
# Python Assignment 1
# 09/22/17

#############################
# WILLIA.py
# A program that can provide the following statistical measures:
# Measures of Central Tendency:
#   Dataset Mean, Dataset Median, Dataset Mode/Modes
# Measures of Dispersion:
#   Dataset Minimum, Dataset Maximum, Dataset Range,
#   Dataset Standard Deviation, Dataset Frequency Table
#############################
import math

def getMean(alist):
    total = sum(alist)
    return total / len(alist)

def getMedian(alist):
    copy = alist[:]
    copy.sort()
    if len(copy)%2 == 0:
        right = len(copy)//2
        left  = right - 1
        median = (copy[left] + copy[right])/2
    else:
        mid = len(copy)//2
        median = copy[mid]
    return median

def getMode(alist):
    countdict = {}
    for item in alist:
        if item in countdict:
            countdict[item] = countdict[item] + 1
        else:
            countdict[item] = 1
    countlist = countdict.values()
    maxcount = max(countlist)

    modelist = []
    for item in countdict:
        if countdict[item] == maxcount:
            modelist.append(item)

    return modelist

def getMin(alist):
    alist.sort()
    minSoFar = alist[0]
    for item in alist[1:]:
        if item < minSoFar:
            minSoFar = item
    return minSoFar

def getMax(alist):
    alist.sort()
    maxSoFar = alist[0]
    for item in alist[1:]:
        if item > maxSoFar:
            maxSoFar = item
    return maxSoFar

def getRange(alist):
    return getMax(alist) - getMin(alist)

def getStandardDeviation(alist):
    mean = getMean(alist)
    total = 0.0
    for item in alist:
        total += (item - mean) ** 2
    if (len(alist) > 1):
        return math.sqrt((total) / (len(alist) - 1))
    else:
        return 0

def getFrequencyTable(alist):
    countdict = {}

    for item in alist:
        if item in countdict:
            countdict[item] = countdict[item] + 1
        else:
            countdict[item] = 1
    itemlist = list(countdict.keys())
    itemlist.sort()

    print("ITEM","FREQUENCY")

    for item in itemlist:
        print(item, "     ",countdict[item])

def dataSummary(alist):
    print("Mean: ", getMean(alist))
    print("Median: ", getMedian(alist))
    print("Mode(s): ", getMode(alist))
    print("Range: ", getRange(alist))
    print("Standard Deviation: ", getStandardDeviation(alist))
    print("Frequency Table:\n")
    print(getFrequencyTable(alist))
