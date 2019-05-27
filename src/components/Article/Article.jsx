// import React, { useState, useEffect } from 'react';
// import './Article.css';

// function Article() {
//   const [person, setPerson] = useState(null);

//   async function fetchData() {
//     const response = await fetch('https://api.randomuser.me/');
//     const person = await response.json();
//     const [item] = person.results;
//     setPerson(item);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <a href="/" className="Article">
//       {person && person.name.first}
//     </a>
//   );
// }

// export default Article;
