---
title: 'Chinese Remainder Theorem'
date: 2015-01-25
permalink: /blog/chinese-remainder-theorem/
lang: bn
excerpt: 'Solving systems of linear congruences with the Chinese Remainder Theorem and the Extended Euclid algorithm, with a worked example.'
original_url: https://grtushar.blogspot.com/2015/01/chinese-remainder-theorem.html
original_source: Blogspot
tags:
  - CRT
  - Chinese Remainder Theorem
  - Algorithm
---

ধরা যাক, আমাদের এমন একটা সংখ্যা X বের করতে বললো যাকে কিনাঃ

- ২ দিয়ে ভাগ করলে ভাগশেষ ১ থাকে
- ৩ দিয়ে ভাগ করলে ভাগশেষ ২ থাকে
- ৭ দিয়ে ভাগ করলে ভাগশেষ ৫ থাকে

এই ধরনের প্রবলেম গুলো "Chinese remainder theorem" ব্যবহার করে খুব সহজেই সমাধান করা যায়, তবে একটা শর্ত হচ্ছে যেই সংখ্যা গুলো দিয়ে ভাগ করা হবে সেগুলো relatively prime হতে হবে। মানে যেকোন ২ টি সংখ্যার [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor) (Greatest Common Divisor) সবসময় ১ হবে। উপরে উল্লেখিত সমস্যায় ২,৩,৭ সংখ্যা ৩ টি relatively prime. অর্থাৎ এই সমস্যাটিকে CRT দিয়ে সমাধান করা সম্ভব।

Chinese remainder theorem এমন একটি সংখ্যা X বের করে, যেখানে X হচ্ছে –

```
X ≡ C1 (mod P1)
X ≡ C2 (mod P2)
X ≡ C3 (mod P3)
.
.
X ≡ Cn (mod Pn)
```

কোন প্রবলেমকে এইরকম অনেকগুলো linear congruence\* এর ইকুশেনের একটি সিস্টেম আকার সাজানো গেলে, চাইনিজ রিমাইন্ডার থিওরাম অনুযায়ী X বের করার জন্য নিজের সমীকরণ ব্যবহার করা হয়ঃ

```
X = B1*X1*C1 + B2*X2*C2 + B3*X3*C3 + …… + Bn*Xn*Cn
```

এখানে,

```
Bi = B / Pi        [ i = 1, 2, 3, …, n ]
B  = P1 * P2 * P3 * … * Pn
```

B1, B2,,, Bn এবং C1, C2,,,,,Cn এর মান প্রবলেমে উল্লেখ করা থাকবে।

X1, X2,,, Xn এর মান বের করার জন্য নিচের সমীকরণটি ব্যবহার করা হয়,যা সকল Bi, Xi এবং Pi এর জন্য সত্য,

```
Bi*Xi ≡ 1 (mod Pi)   [ i = 1, 2, 3, …, n ]
```

এখন, যেহেতু Bi এবং Pi relatively prime সেহেতুঃ

```
Bi*x + Pi*y = 1
```

এইখানে, x = Xi এবং y যে কোন একটি সংখ্যা।

উপরের সমীকরণটি (Bi\*x + Pi\*y = 1) [Extended Euclid Algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm) এর মাধ্যমে সমাধান করলেই আমরা Xi এর মানে পেয়ে যাব।

X এর মান বের করার পর নিচের সমীকরণ ব্যবহার করে X এর অসংখ্য মান বের করা সম্ভব,

```
X = X ± i*B   [ i = 1, 2, 3, … ]
```

## উদাহরণ

আমরা এখন ব্লগের শুরুতে উল্লেখিত সমস্যাটিকে চাইনিজ রিমাইন্ডার থিওরামের মাধ্যমে সমাধান করবো। সমস্যাটিকে ৩ টি linear congruence\* ইকুয়েশনের একটা সিস্টেম হিসেবে দেখানো যায় নিম্নোক্ত ভাবেঃ

```
X ≡ 1 (mod 2)
X ≡ 2 (mod 3)
X ≡ 5 (mod 7)
```

এখানে, P1 = 2, P2 = 3, P3 = 7 এবং C1 = 1, C2 = 2, C3 = 5

এখন, 'Chinese remainder theorem' অনুযায়ী,

```
X = B1*X1*1 + B2*X2*2 + B3*X3*5
```

এখানে,

```
B  = P1 * P2 * P3 = 2 * 3 * 7 = 42

B1 = 42 / 2 = 21
B2 = 42 / 3 = 14
B3 = 42 / 7 = 6
```

সুতরাং, X = 21\*X1\*1 + 14\*X2\*2 + 6\*X3\*5

এখন,

```
B1*X1 ≡ 1 (mod P1)
=> 21 * X1 ≡ 1 (mod 2)
=> 21 * X1 + 2 * y = 1

B2*X2 ≡ 1 (mod P2)
=> 14 * X2 ≡ 1 (mod 3)
=> 14 * X2 + 3 * y = 1

B3*X3 ≡ 1 (mod P3)
=> 6 * X3 ≡ 1 (mod 7)
=> 6 * X3 + 7 * y = 1
```

উপরের 3 টি সমীকরণকে, [Extended Euclid Algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm) দিয়ে সমাধান করে পাই,

X1 = 1, X2 = -1 এবং X3 = -1

সুতরাং,

```
X = 21*1*1 + 14*(-1)*2 + 6*(-1)*5
  = 21 – 28 – 30
  = -37
```

অর্থাৎ -37 হচ্ছে এই সমস্যাটির অনেকগুলো সমাধান এর একটি :)
X = X ± i\*B, সমীকরণটি ব্যবহার করে আরো অসংখ্য সমাধান বের করা যাবে।

Chinese Remainder Theorem ব্যবহার করে [আলোর 1319](http://lightoj.com/volume_showproblem.php?problem=1319) প্রবলেমটা সল্ভ করা যাবে।

\*Linear congruence : [এই লিঙ্কে](https://mathworld.wolfram.com/LinearCongruenceEquation.html) Linear congruence ইকুয়েশন সম্পর্কে জানা যাবে।
