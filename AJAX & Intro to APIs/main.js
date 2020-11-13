// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })


//spotcheck
// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function(result){
//   console.log(result.items[0].volumeInfo.description)
// })




//spotcheck
//request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user

//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
  
//   //log the data
//   console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
//   console.log(users[users.length - 1].company.catchPhrase)
// })



// const fetch = function () {
//   $.ajax({
//       method: "GET",
//       url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//       success: function (data) {
//           console.log(data)
//       },
//       error: function (xhr, text, error) {
//           console.log(text)
//       }
//   })
// }


//exrec1

// const fetch = function (isbn) {
//   $.ajax({
//       method: "GET",
//       url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//       success: function (data) {
//           console.log(data)
//       },
//       error: function (xhr, text, error) {
//           console.log(text)
//       }
//   });
// }

// fetch(9780575087057)
// fetch(9782806269171)


//exrec2

// const fetch = function (queryType , queryValue) {
//   $.ajax({
//       method: "GET",
//       url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//       success: function (data) {
//           console.log(data)
//       },
//       error: function (xhr, text, error) {
//           console.log(text)
//       }
//   });
// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")



//exrec3

// const fetch = function (queryType , queryValue) {
//   $.ajax({
//       method: "GET",
//       url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//       success: function (data) {
//         data.items.forEach(b => console.log(`Title: ${b.volumeInfo.title}, Author: ${b.volumeInfo.authors}, ISBN: ${b.volumeInfo.industryIdentifiers[0].identifier}`))
//     },
//       error: function (xhr, text, error) {
//           console.log(text)
//       }
//   });
// }

// fetch("title", "The Wise Man's Fears")




//exrec4

