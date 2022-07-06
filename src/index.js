console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// ## Challenge 1


// Add JavaScript that:
// - on page load, fetches the images using the url above ⬆️
// - parses the response as `JSON`
//     - adds image elements to the DOM **for each ** 🤔 image in the array

// imgUrl is a JSON database, so I will need to use fetch and GET (which doesn't
// need to be specified as it's the default method).

// I can do the DOM manipulation with in one function, invoked in an outer fnc
// that does the HTTP method

// The JSON at the lnk:
// {"message": [
    //     "https://images.dog.ceo/breeds/entlebucher/n02108000_352.jpg",
    //     "https://images.dog.ceo/breeds/dachshund/dachshund-2033796_640.jpg",
    //     "https://images.dog.ceo/breeds/lhasa/n02098413_4100.jpg",
    //     "https://images.dog.ceo/breeds/sharpei/noel.jpg"
    // ],
//     "status": "success"
// }

// Everything in JSON will be an object and its name: value pairs, or arrays and
// the values stored in them, or trees of these data structures. In our case,
// there is an array called message that contains four URLs of dog pics. 

// so, I need to convert the JSON array into a javascript array. I can use a loop to 
// iterate over the array to do our third goal for the first task, which is DOM
// manipulation - adding image elements to a div

const appendDoge = async (url) => {
    // find the element we're appending to
    let div = document.getElementById('dog-image-container')
    // create an img element
    let img = document.createElement('img')
    // set its source attribute as the url argument
    img.src = url
    // append img to div
    div.append(img)
}

// now, to get the URLs from the JSON and invoke appendDoge. I can pass the URL
// as an argument or hard code it, works either way.

const getDoge = (jsonUrl) => {
    // fetch makes a request to database (GET by default)
    fetch(jsonUrl)
    // fetch returns a promise and value, fetch(jsonUrl).then uses the value
    // in the expression (resp => resp.json()) 
    .then(resp => resp.json())
    // resp.json() uses a method to turn the json string into a JS object  
    // which I'm calling resultArray, which we use in yet another expression.
    // result in an object with two properties, and we access the message
    // property, since each element of that array is one of the URLs we want.
    // we those elements and pass them value as an argument into our appendDoge
    // function, using a forEach loop to make sure the function is invoked for
    // each element.
    .then(result => {
        result.message.forEach(urlElement => appendDoge(urlElement))
    })
}

// It's a mouthful, but I need it all laid out at least one time to really get
// it. AND I probably still don't get it completely.

// invocation on page load
getDoge(imgUrl)




// ## Challenge 2
// Add JavaScript that:
// - on page load, fetches all the dog breeds using the url above ⬆️
// - adds the breeds to the page in the`<ul>` provided in `index.html`


// ## Challenge 3


// Add JavaScript that: 
// - when the user clicks on any one of the `<li>`s, the font color of that`<li>`
// changes.This can be a color of your choosing.

// ---

// ## Challenge 4

// Add JavaScript so that:
// - the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a - d.However, we can imagine expanding this to include the entire
// alphabet.
