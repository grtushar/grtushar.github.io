---
title: 'Bit Manipulation Handbook'
date: 2018-06-04
permalink: /blog/bit-manipulation-handbook/
excerpt: 'Bitwise operators, truth tables, and a list of practical bit tricks gathered in one place.'
original_url: https://medium.com/@grtushar11/bit-manipulation-handbook-415fe919dba8
original_source: Medium
tags:
  - Bit
  - Bit Manipulation
  - Fast Operation
---

I have read some quite good blogs and book chapters regarding bit manipulation. And I learned new techniques to manipulate bit in every one of them. So, I decided to gather them in one place to use it as a handbook for future use. As this blog’s primary purpose is to get things in one place, it lacks elaborate explanation. Nevertheless, I have added some reference blog links and book name, If anyone wants to know detail explanation.

Enough useless talks. Now the good stuffs -

Bit manipulation or Bitwise operations are fast and need less code to write. More importantly, sometimes using bit manipulation can reduce the running time of a program heavily.

## Bitwise Operations

1. `~` (1’s complement)
2. `<<` (left shift)
3. `>>` (right shift)
4. `&` (and)
5. `|` (or)
6. `^` (XOR)

## Bitwise & (and) truth table

```
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1
```

## Bitwise \| (or) truth table

```
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1
```

## Bitwise ^ (xor) truth table

```
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0
```

⇒ `~` is a unary operator and it toggle all the bits in a variable.

```
~1 = 0
~0 = 1
```

⇒ Left shifting (`<<`) means shifting the bits of a variable to the left.

For example: `7 << 1` will result 14. How?

Binary of 7 is 111. Left shifting this by 1 results 1110. That is 14.

Left shifting a variable by x bits means multiplying the variable with 2ˣ. That means `a << x` is equal to `a * 2ˣ`.

⇒ Right shifting (`>>`) means shifting the bits of a variable to right.

For example: `7 >> 1` will result 3. Why?

Binary of 7 is 111. Right shifting this by 1 results 011. That is 3.

Right shifting a variable by x bits means dividing the variable by 2ˣ. That means `a >> x` is equal to `a / 2ˣ`.

⇒ The two shift operators are used with unsigned variables to avoid ambiguity. The result of Shifting Right or Left by a value which is larger than the size of the variable is undefined. The result of shifting Right or Left by a negative value is also undefined.

⇒ Order precedence of the basic operators highest to lowest:

- NOT ( `~` )
- AND ( `&` )
- XOR ( `^` )
- OR ( `|` )

## Some Important Facts

Let, X is a single bit, then we can write the following:

```
X & 1 = X
X & 0 = 0
X | 1 = 1
X | 0 = X
X ^ 1 = ~X
X ^ 0 = X
```

## Use Cases

**1) Check if a number is power of 2**

```
if (a & (a-1)) is equal 0, then a is power of 2
else not
```

**2) Swap 2 integers without using third variable**

```
a = a ^ b
b = a ^ b
a = a ^ b
```

**3) Use while computing %, /, \* if the second number (P) is power of 2**

```
N % P = N & (P-1)
N / P = N >> X
N * P = N << X
```

In the above P is power of 2.

**4) Check if i’th bit of a variable ‘x’ is ON or OFF**

```
if (x & (1<<i)) is non-zero then the bit is ON
else OFF
```

**5) To ON the i’th bit of a variable ‘x’**

```
x = x | (1 << i)
```

**6) To toggle to the i’th bit a variable ‘x’**

```
x = x ^ (1 << i)
```

**7) To OFF the i’th bit of variable ‘x’**

First check if i’th bit is ON or OFF. if OFF then no need to do anything. if ON then toggle.

**8) OFF all the bits of a variable x except the last n bits**

```
x = x & ((1 << n) - 1)
```

I will keep updating this use case list of bit manipulation whenever I find one. And of course, suggesting new techniques will be very much appreciated.

## References

- [Hackerearth Blog](https://www.hackerearth.com/practice/notes/bit-manipulation/)
- [Topcoder Blog](https://www.topcoder.com/community/data-science/data-science-tutorials/a-bit-of-fun-fun-with-bits/)
- [Zobayer Hasan’s blog part 1](http://zobayer.blogspot.com/2009/12/bitwise-operations-in-cc-part-1.html)
- [Zobayer Hasan’s blog part 2](http://zobayer.blogspot.com/2009/12/bitwise-operations-in-c-part-2.html)
- [Zobayer Hasan’s blog part 3](http://zobayer.blogspot.com/2009/12/bitwise-operations-in-c-part-3.html)
- [প্রোগ্রামিং কনটেস্ট ডেটা স্ট্রাকচার ও অ্যালগরিদম](https://www.rokomari.com/book/117663/programming-contest-data-structures-and-algorithms)
