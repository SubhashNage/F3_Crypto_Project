#list Methods
#list = [2,1,3]
#list.append(4) adds one element at the end [2,1,3,4]
#list.sort()# sorts in ascending order [1,2,3]
#list.sort(reverse =True) sorts in descending order [3,2,1]
#list.reverse() reverses list [3,1,2]
#list insert(idx,el) #insert element at index
#list.remove(1) removes first occurrence of element list = [2,1,3,1] [2,3,1]
#list.pop(idx)# removes element at idx
#list = [2,1,3]
#print(list.append(4))
#print(list.sort())
#list.reverse()
#list.insert(1,5)
#print(list)
#Tuples in Python
#a built-in data type that lets us crete immutable sequence of values
"""tup = ("Hellow",)
print(tup)
print(type(tup))
tup = (2,1,3,1)
print(tup[0])
print(tup[1])
print([1,3])"""
#Tuple Methods
#tup = (2,1,3,1)
#tup.index(el) returns index of first occurrence
#tup.count(el) count total occurrences
#tup = (2,1,3,5,2,3,2,6,2)
#print(tup.index(1))
#print(tup.count(2))
"""movies = []
mov = input("enter 1st movie:")
movies.append(mov)
mov = input("enter 2nd movie:")
movies.append(mov)
mov = input("enter 3rd movie:")
movies.append(mov)
mov
print(movies)"""
#write palindrome program
#list1 = ["1","2","3","2","1"]

#copy_list1 = list1.copy()
#copy_list1.reverse()

#if(copy_list1 == list1):
   # print("palindrome")
#else:
    #print("Not palindrome")
#lets Practice
#WAP to count the number of students with the "A" grade in the following tuple
#grade =("C","D","A","A","B","A")
#print(grade.count("D"))
#store the above values in a list & sort them from "A" to "D"
#grade =["C","D","A","A","B","A"]
#grade.sort()
#print(grade)
student ={
    "name" : "rahul kumar",
    "subjects" : {
        "phy" : 97,
        "chem": 98,
        "math" : 95
    }

}
print(student["subjects"]["chem"])







