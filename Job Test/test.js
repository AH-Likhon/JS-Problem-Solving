// Q: Why do we need event handlers in JS ?
// Event handlers allow JavaScript code to alter the behavior of windows, of documents, and of the elements that make up those documents


// unique / not repeat

// const repeatedArr = [1, 1, 2, 3, 3, 5, 6, 9, 2];
// const uniqueArr = new Set(repeatedArr); // set as obj with all unique elements
// const uniqueArr = [...new Set(repeatedArr)]; // return with all unique elements
// console.log(uniqueArr);

// Another way

// const newArr = [];

// for (let i = 0; i < repeatedArr.length; i++) {
//     let item = repeatedArr[i];

//     if (newArr.indexOf(item) == -1) {
//         newArr.push(item);
//     }
// }

// for (const item of repeatedArr) {
//     if (newArr.indexOf(item) == -1) {
//         newArr.push(item);
//     }
// }

// console.log(newArr);



// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const style = {
//   mainArea: {
//     backgroundColor: 'black',
//     color: '#fff',
//     textAlign: 'center',
//     padding: '10px',
//     textTransform: 'capitalize'
//   },
// mainBtn: {
//   cursor: 'pointer',
// }
// }

// function Counter() {
//   const [number, setNumber] = useState(1);

//   const mainBtn = () => {
//     const count = number + 1;
//     setNumber(count);
//     const getSpan = document.getElementById('number');
//     getSpan.innerText = number;
//     console.log(number);
//   }

//   return (
//     <div style={style.mainArea} id="mainArea">
//       <p>button count: <span id="number">0</span></p>
//       <button onClick={mainBtn} id="mainButton">Increase</button>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Counter />,
//   document.getElementById('root')
// );




// function StringChallenge(num, token) {
//   const hours = num / 60;
//   const floorHours = Math.floor(hours);
//   // const min = (hours - floorHours) * 60;
//   // const roundMin = Math.round(min);
//   const min = num % 60;
//   const resultWithToken = `${floorHours}:${min}` + token;
//   const parts = resultWithToken.match(/.{1,3}/g);
//   // const result = parts.join().replace(/,/g, '_');
//   const result = parts.join('_');
//   console.log(result);
// }
// StringChallenge(125, 'kfd56qg23');

// // keep this function call here
// // console.log(StringChallenge(126, 'kfd56qg23'));
// console.log(StringChallenge(readline()));


// function StringChallenge(num, token) {
//   const hours = num / 60;
//   const floorHours = Math.floor(hours);
//   const min = (hours - floorHours) * 60;
//   const roundMin = Math.round(min);
//   return `${floorHours}${token[0]}:${token[1]}${roundMin}${token.slice(2,9)}`;
//   // console.log(token.length);
//   // return `${floorHours}:${roundMin}`;
// }

// // keep this function call here
// // console.log(StringChallenge(126, 'kfd56qg23'));
// console.log(StringChallenge(readline()));



// const axios = require('axios');

// axios.get('https://coderbyte.com/api/challenges/json/json-cleaning')
//     .then(res => {
//         const data = res.data;
//         // const keys = Object.keys(data).map(key => data[key]);
//         const arr = Object.values(data);
//         console.log(arr);
//         // const filterArr = Object.entries(arr).filter(val => val[1] !== '-');
//         const nameValue = Object.entries(arr[0]).filter(val => val[1] !== '');
//         // const nameObj = JSON.stringify(Object.fromEntries(nameValue));
//         const nameObj = Object.fromEntries(nameValue);
//         // console.log("name", nameArr);
//         // console.log("age", arr[1]);
//         const hobbies = arr[3].filter(val => val !== '-');
//         // const hobbies = JSON.stringify(arr[3].filter(val => val !== '-'));

//         const education = Object.entries(arr[4]).filter(val => val[1] !== 'N/A');
//         const eduObj = Object.fromEntries(education);
//         // const eduObj = JSON.stringify(Object.fromEntries(education));

//         const result = JSON.stringify({
//             "name": nameObj,
//             "age": arr[1],
//             "hobbies": hobbies,
//             "education": eduObj,
//         })

//         // console.log(result)
//         return result;
//     })



// Write a piece of code what can take a json as input and  produce 2 arrays, one contains only keys and other contains only value. But if a key and value is numerically equal then that pair won't take place in these arrays. *

// const sampleJSON = { "name": "Md. Akramul Hoque", "same": "same", "age": "27", "school": "school", "location": "Feni", "5": "5", "number": 1, "14": "12" };
// const takeJSON = () => {
//   const filterArr = Object.entries(sampleJSON).filter(val => val[0] !== val[1]);
//   const ArrToObj = Object.fromEntries(filterArr);
//   const JSONKeys = Object.keys(ArrToObj);
//   const JSONValues = Object.values(ArrToObj);
//   console.log(JSONKeys);
//   console.log(JSONValues);
//   return { JSONKeys, JSONValues };
// }
// takeJSON(sampleJSON);



// for (var i = 0; i < 3; i++) {
//     // setTimeout(function () { alert(i); }, 1000 + i);
//     setTimeout(function () { console.log(i); }, 1000 + i);
//     // console.log(setTimeout);
// }

// Output: Number 3 alerted three times


// for (let i = 0; i < 3; i++) {
//     // setTimeout(function () { alert(i); }, 1000 + i);
//     setTimeout(function () { console.log(i); }, 1000 + i);
//     // console.log(setTimeout);
// }

// Output: 0 1 2




// (function () {
//   var a = b = 5;
// })();

// console.log(b); // 5


// The first step of Heap sort is to: Build max heap / min heap

// Dijkstra's Algorithm cannot be applied on graphs having negative weight function because calculation of cost to reach a destination node from the source node becomes complex.

// A degenerate (or pathological) tree A Tree where every internal node has one child. Such trees are performance-wise same as linked list.




// frontend Challenge
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const style = {
//   table: {
//     borderCollapse: 'collapse'
//   },
//   tableCell: {
//     border: '1px solid gray',
//     margin: 0,
//     padding: '5px 10px',
//     width: 'max-content',
//     minWidth: '150px'
//   },
//   tabletd: {
//     border: '1px solid gray',
//     margin: 0,
//     padding: '0px 10px',
//     width: 'max-content',
//     minWidth: '150px',
//     textAlign: 'center'
//   },
//   form: {
//     container: {
//       padding: '20px',
//       border: '1px solid #F0F8FF',
//       borderRadius: '15px',
//       width: 'max-content',
//       marginBottom: '40px'
//     },
//     inputs: {
//       marginBottom: '5px'
//     },
//     submitBtn: {
//       marginTop: '10px',
//       padding: '10px 15px',
//       border:'none',
//       backgroundColor: 'lightseagreen',
//       fontSize: '14px',
//       borderRadius: '5px'
//     }
//   }
// }

// function PhoneBookForm({ setPhoneBook }) {
//   const [ state, setState ] = useState({
//     userFirstname: '',
//     userLastname: '',
//     userPhone: ''
//     });

//   const [ result, setResult ] = useState([state])

//   const handleOnChange = e => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = e => {
//     // console.log(state);
//     setResult([...result, state])
//     setPhoneBook([...result, state]);
//     e.preventDefault();
//   }

//   // console.log(result)
//   return (
//     <form onSubmit={ handleSubmit } style={style.form.container}>
//       <label htmlFor='userFirstName'>First name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         onChange={handleOnChange}
//         className='userFirstname'
//         name='userFirstname'
//         type='text'
//         placeholder='Coder'
//         value={state.userFirstname}
//       />
//       <br/>
//       <label htmlFor='userLastname'>Last name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         onChange={handleOnChange}
//         className='userLastname'
//         name='userLastname'
//         type='text'
//         placeholder='Byte'
//         value={state.userLastname}
//       />
//       <br />
//       <label htmlFor='userPhone'>Phone:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         onChange={handleOnChange}
//         className='userPhone'
//         name='userPhone'
//         type='tel'
//         placeholder='888559999'
//         value={state.userPhone}
//       />
//       <br/>
//       <input
//         style={style.form.submitBtn}
//         className='submitButton'
//         type='submit'
//         value='Add User'
//       />
//     </form>
//   )
// }

// function InformationTable({phoneBook}) {
//   // console.log(phoneBook);

//   return (
//     <table style={style.table} className='informationTable'>
//       <thead>
//         <tr>
//           <th style={style.tableCell}>First name</th>
//           <th style={style.tableCell}>Last name</th>
//           <th style={style.tableCell}>Phone</th>
//         </tr>
//         {
//           phoneBook.map(single => <tr>
//             <td style={style.tabletd}>{single?.userFirstname}</td>
//             <td style={style.tabletd}>{single?.userLastname}</td>
//             <td style={style.tabletd}>{single?.userPhone}</td>
//           </tr>)
//         }
//       </thead>
//     </table>
//   );
// }

// function Application(props) {
//   const [phoneBook, setPhoneBook] = useState([]);
//   // console.log(phoneBook);

//   return (
//     <section>
//       <PhoneBookForm setPhoneBook={setPhoneBook}/>
//       <InformationTable phoneBook={phoneBook}/>
//     </section>
//   );
// }

// ReactDOM.render(
//   <Application />,
//   document.getElementById('root')
// );

// // Backend Challenge
// const getData = (inputStr) => {
//     const axios = require('axios');
//     axios.get('https://coderbyte.com/api/challenges/json/age-counting')
//         .then(res => {
//             const str = res.data.data;
//             const arr = str.split(', ');
//             const newArr = arr.map(function (x) {
//                 return x.replace(/=/g, ':');
//             })

//             let strArr = [];
//             let numArr = [];

//             newArr.map(x => {
//                 if (x.slice(4) == Number(x.slice(4))) {
//                     numArr.push(x.slice(4))
//                 } else {
//                     strArr.push(x.slice(4))
//                 }
//             });

//             const filterArr = numArr.filter(n => n >= 50);
//             const revStr = inputStr.split('').reverse().join('');

//             const length = filterArr.length.toString();
//             const revlength = length.split('').reverse().join('');

//             console.log(`${revlength}: ${revStr}`);
//             console.log(filterArr);
//             return `${revlength}: ${revStr}`
//         });
// }

// getData('bf48ehqmcd');



// Reverse This String "Hello Javascript!"

// const reverse = input => {
//     //   const split = input.split('').reverse().join().replace(/, ,/g, ' ').replace(/,/g, '');
//     const split = input.split('').reverse().join('');
//     console.log(split);
// }
// reverse("Hello Javascript!");

// // get day from new date
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];

// const date = new Date().getDay();
// const day = days[date];
// // console.log(day);