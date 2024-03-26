#taking input from user & printing it
#print("hello world")
#print("hellow world")
#arithmatic operators
a = 5
b = 2

print(a-b)
print(a+b)
print(a*b)
print(a/b)
print(a%b)
print(a**b)

#relational operators
a = 50
b = 20
print(a == b)#False
print(a != b)#True
print(a >= b)#True
print(a > b)#True
print(a <= b)#False
print(a < b)#False

#assignment operators
num = 10
num = num + 10 #10+10 => 20
print("num : ", num)
 
 #logical operators
a = 50
b = 30

print(not False)
print(not (a > b))

val1 = True
val2 = False
print("And operator:", val1 and val2)
print("OR operator", (a == b) or (a > b))

"""name = input("enter name : ")
age = int(input("enter age: "))
marks = float(input("enter marks:"))
print("Welcome", name)
print("age =", age)
print("marks =", marks)
print(type(name))"""

#Write a Program to input 2 numbers & print their sum

"""First =int (input("Enter First:"))
Second =int (input("Enter Second:"))

print("sum", First + Second)"""

#WAP to input side of a square & print it is area

"""side = float(input("enter square side:"))

print("area =", side ** 2)"""
#WAP to input 2 floating point number & print their average
 
"""a = float(input("enter first :"))
b = float(input("enter second:"))

print("avg =",(a+b)/2)"""

#WAP to input 2 int numbers, a and b.print True if a is greter than or equal to b. if not print Else

#a = int(input("enter first:"))
#b = int(input("enter second:"))
#print(a >= b)
marks = int(input("enter student marks :"))

if(marks >= 90):
    grade = "A"
elif(marks >=80 and marks < 90):
    grade = "B"
elif(marks >= 70 and marks < 80):
    grade ="C"
elif(marks >=60 and marks <70):
    grade = "D"
else:
    grade = "E"
    print("grade of the student ->", grade)



