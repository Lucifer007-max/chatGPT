import React from 'react'
import { Button } from '@mui/material'
function Chat() {
  return (
    <div className='conatiner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 className='text-light text-center padding-top'>Chat GPT AI</h2>
                </div>
                <div className='col-lg-12 p-0'>
                    <div className='chat--area text-light w-80'>
                    Skip to content
DEV Community 👩‍💻👨‍💻
Search...

Log in
Create account

38
Like
11
Jump to Comments
54
Save

Deepak Kumar
Deepak Kumar
Posted on Dec 17, 2019 • Updated on Mar 15, 2020

How to Pass Data From One Component to Other Component in React?
#
react
#
javascript
Alt Text

Props are used for passing data between the components. We usually use it to pass data from the parent component to the child component.

But what if you need to pass data from Child to Parent component? What if you need to pass data between siblings ??

There can be multiple ways of passing data from one component to another :

1. Using Props
You can use props to pass data from parent to child component. Example 1 illustrates the sample code for this.
|--- App.js
  |---- ParentComponent
       |----ChildComponent
2. Using React ContextAPI or State management library like Redux
Redux or React ContextAPI gives you the functionality of central state management to manage your application. It means all the application state will be stored in a single place known as Store.

Like a traditional database represents the point of record for an application, your Store can be thought of as a client-side ‘single source of truth’, or database.

Alt Text

Example #1 — Using Props to pass data from Parent Component to Child Component

ParentComponent.js
import React from 'react'
import ChildComponent from './ChildComponent';
fault ParentComponent;

ChildComponent.js
port default ChildComponent;

The above code snippets show how you can pass data from the Parent to Child component.

But, What if we need to pass data from Child to Parent Component ??? Let’s see this in the next!

3. Using Props as Callback Function
If you are not using any state management library like Redux or React ContextAPI and you need to pass data from Child to Parent Component, then callbacks come into the picture.
---App  
 |---- Table.js
    |---- ListItem.js
Preview

Alt Text

UseCase - When clicking on any rows on the table, Implement functionality to get that row data from the table and display on Table Main page.

Solution - Use Props as callback functions. Let’s see how in the example below!
import React from 'react'
import ListItem from './ListItem';


Subscribe to my email newsletter and stay updated!

Cheers!

Top comments (11)

Subscribe
pic
Add to the discussion
 
 
vvilliam5 profile image
Williams Oluwafemi
•
Dec 17 '19

Precise write up, but for beginners i would recommend a learning curve though, start with passing props, then when you are comfortable with that you can move to using the Context Component, and when you feel boss in that too migrate to the big boys of Redux


6
 likes
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Dec 17 '19

Thanks Williams ! I really appreciate it !

You are right as a beginner it's good to first learn the basics then migrate to advanced concepts like Redux or ContextAPI that's why I have not covered these topics in detail.

However, it always better to know what are the possible way to do this.


7
 likes
Like
Reply
 
 
alexanderop profile image
Alexander Opalic
•
Dec 17 '19

Hey nice Post

Just a small feedback I think your post would much benefit on syntax highlighting on your code snippets


5
 likes
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Dec 17 '19

Hi Alexander,

I didn't know about this feature.

Thank a lot for suggestion. I have done the required changes.


4
 likes
Like
Reply
 
 
anilsingh profile image
Anil Singh
•
Dec 17 '19

Great one.


3
 likes
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Dec 17 '19

Thanks Anil ! I am glad you liked it!


3
 likes
Like
Reply
 
 
davidyaonz profile image
David Yao
•
Dec 17 '19

The business logics behind the data passing always confuses me no matter what technology I use
You made some great points! Nice job. Thanks


3
 likes
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Dec 17 '19

Thanks David ! I really appreciate it !
kes
Like
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.
ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.
ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.ke
Reply
 
 
p4pranav profile image
Pranav Rai
•
Apr 23 '20

I have o

2
 line question, please advise me on that!

Suppose, ParentComponent.js has some content and ChildComponent.js has some content. And, when i am passing data from parent to child, i don't want to show the ChildComponent.js content inside the ParentComponent.js


1
 like
Like
Reply
 
 
dipakkr profile image
Deepak Kumar 
•
Apr 24 '20

Let's understand the hierarchy if I understood your question.

Now, you are saying that I don't want to show content of child in parent. If the strucuture of Child -parent will be this, then the child content will be visible inside parent.


1
 like
Like
Reply
 
 
beisixiong profile image
Bass
•
Nov 19 '20

hi, a quick question. is it possible to pass states to a peer component (not child-parent related) without redux?


1
 like
Like
Reply
Code of Conduct • Report abuse
DEV

Thank you.
 
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us. If you’d like to create an account, you can sign up here.

Read next
mcsee profile image
Code Smell 192 - Optional Attributes
Maxi Contieri ⭐⭐⭐ - Jan 17

yujiym profile image
Web 3.0 frontend stacks in 2023
Yuji Yamaguchi - Jan 29

alanfabricio profile image
Adicionando o Prettier ao seu projeto JavaScript/TypeScript
Alan Pereira - Jan 20

itskunal profile image
Why to use React.js?
Kunal Agrawal - Jan 19


Deepak Kumar
Follow
SDE @ Airmeet | Loves to write | I mainly work on React, Node, Redux, AWS, MongoDB
LOCATION
Bangalore, India
WORK
Software Developer at 91Wheels
JOINED
Aug 10, 2019
More from Deepak Kumar
WTF is Higher Order Function ?
#webdev #javascript #tutorial #beginners
Understanding Client-Side Storage
#javascript #database
Understanding Execution Context, Thread, and Functions in Javascript
#javascript
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.
                    </div>
                </div>
                {/* <div className='form--area'>
                    <Button variant="outlined" className='w-100 py-2' >Click Me</Button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Chat