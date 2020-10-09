let myFullName = "Brandon Cantey" // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
document.querySelector(".header").innerHTML = myFullName + "\'s Lab 4\n";
 
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
var paragraphOne = document.createElement("Paragraph1:");
var paragraphTwo = document.createElement("Paragraph2:");
var paragraphOneText = document.createTextNode("Paragraph1:");
var paragraphTwoText = document.createTextNode("Paragraph2:");
paragraphOne.appendChild(paragraphOneText);
paragraphTwo.appendChild(paragraphTwoText);
var newContentParagraphs = document.querySelector(".content");
newContentParagraphs.appendChild(paragraphOne);
newContentParagraphs.appendChild(paragraphTwo);
paragraphOne.className = "content1"
paragraphTwo.className = "content2"
 
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
 
var paragraph = " my name has " + myFullName.length + " characters.";
paragraphOne.append(paragraph);
 
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
 
var third = " the third charater is " + myFullName.charAt(2);
paragraphTwo.append(third);
 
// 6 Add a new line to your second paragraph
 
paragraphTwo.append("\n");
 
// 7 Return the final three characters of your last name to that new line
 
var final = ", the third charaters of my last name is  " + myFullName.substring(myFullName.length - 3, myFullName.length);
paragraphTwo.append(final);
 
 
// 8 Substring your first and last name into two separate variables
 
var first = myFullName.substring (0,6)
var last = myFullName.substring(8,13)
 
// 9 Add the total length of your first and last names together
 
var total = first.length + last.length;
 
// 10 Display that total next to your name in your header

document.querySelector(".header").append("The length of my name is: " + total);