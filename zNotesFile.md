1. Javascript is a dynamically typed programming language.


2. Javascript has 7 types of data type
	#number
	#string
	#boolean
	#undefined
	#null
	#object
	#symbol

Js has 2 border category for data types

### Primitive Data Type- (Primitive Data Type is immutable)
 	#number
	#string
	#boolean
	#undefined
	#null
	#symbol

### Non Primitive Data Type
	#object

3. /*
Falsy Value:
false, 0, empty string, undefined, null, NaN

Truthy Value: true, any number (positive or negative), any string including single whitespace, '0', 'false', [], {}

Summary: Anything else that is falsy will be truthy
*/


4. /*
Undefined: undefined is a fault by debveloper.
1. Variable value not assigned
2. function but didn't write return
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. propery that doesn't exist in an object
6. accessing array element out of range
7. accesing deleted array element
8. explicity set value to undefined

null: null is set by developer which mean the value is not yet on hand.

Diffrenece: In JavaScript, undefined is a type, whereas null is an object. It means a variable declared, but no value has been assigned a value it is undefined. Whereas, null in JavaScript is an assignment value.
*/


5. /*
== which works implicitely/hiddenly that means first it converts anything into value and then check only value. It doesn't check type.

===(Most of the time it is use for primitive data types) it's directly check both value and type.
*/

6. let, const are used in block scope.

7. Closure: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

-------------------------------------------------------------------------------------

1. Convert all text as lowercase by using toLowerCase() function/method after string.
2. Convert all text as upperrcase by using toUpperCase() function/method after string.

3. split- The split() method splits/divides a string into an array of substrings, and returns the new array. If an empty string ("") is used as the separator, the string is split between each character. The split() method does not change the original string.


4. slice- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 

5. substr- The substr() method extracts parts of a string, beginning at the character at a specified position, and returns a specified number of characters. 
Tip: To extract characters from the end of the string, use a negative start number.

substr() method does not change the original string.

start: Required. The position where to start the extraction. First character is at index 0. If start is positive and greater than, or equal, to the length of the string, substr() returns an empty string. If start is negative, substr() uses it as a character index from the end of the string. If start is negative or larger than the length of the string, start is set to 0.

length: Optional. The number of characters to extract. If omitted, it extracts the rest of the string.


6. substring- The substring() method extracts characters, between to indices (positions), from a string, and returns the substring. The substring() method extracts characters between "start" and "end", not including "end". If "start" is greater than "end", substring() will swap the two arguments, meaning (1, 4) equals (4, 1). If "start" or "end" is less than 0, they are treated as 0.

The substring() method does not change the original string.



7. join- The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

-------------------------------------------------------------------------------------

1. Function vs Method

- A JavaScript function is a block of code designed to perform a particular task. The javascript method is an object property that has a function value.

- Syntax of Function is -:

function functionName(parameters) {
   // Content
}

Syntax of Method is -:

object = {
   methodName: function() {
       // Content
   }
};

object.methodName()

- A function can pass the data that is operated and may return the data. The method operates the data contained in a Class.

- Data passed to a function is explicit. A method implicitly passes the object on which it was called.

- Functions are helpful because it increases the reusability of the code. Javascript includes some in-built methods also for example -: parseInt() Method


Q: Why do we need event handlers in JS ?

- Ans: Event handlers allow JavaScript code to alter the behavior of windows, of documents, and of the elements that make up those documents.



// NB: filter method returns a new array with all elements those are satisfy the given condition. find method returns the first element of the given array which satisfies the given condidtion.


<h2>forEach vs map</h2>

1. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.

2. map() is chainable that means that we can apply/use reduce(), sort(), filter() and so on after performing a map() method on an array, but forEach is not chainable because it returns undefined.