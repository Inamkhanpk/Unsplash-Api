import React, { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
   const [images, setImage] = useState()
   const [query, setQuery] = useState("")
   

   const getphotos = async () => {
      if (query) {
         const filteredphotos = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=I7SERCNfgsTD7Os70BfdF7iNCEvu94Tx1amJKEEGwWo`)
         console.log("filter", filteredphotos.data.results)
         setImage(filteredphotos.data.results)
      }
      else {
         const photos = await axios.get("https://api.unsplash.com/photos/?client_id=I7SERCNfgsTD7Os70BfdF7iNCEvu94Tx1amJKEEGwWo")
         console.log(photos.data)
         setImage(photos.data)
      }
   }

   useEffect(() => {
      getphotos()
   }, [query])




   return (
      <div>

         <div style={{ display: "flex", justifyContent: 'center' }}>
            <input 
            type="search"
            placeholder="Search" 
            style={{ padding: "12px 20px", margin: "8px 0", boxSizing: "border-box" }} 
            data-testid="add-word-input"
            onChange={event => setQuery(event.target.value)} />
         </div>

         <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {images ? images.map((value) => {
               return (
                  <div data-testid="lis">
                     <a href={value.urls.full}><img src={value.urls.small} /></a>
                  </div>
               )
            }) : null}
         </div>




      </div>


   )
}

export default Home













// var findSubstring = function (s, words) {
//     // Resultant list
//     const indices = [];
//     // Base conditions
//     if (s === null || s.length === 0 || words === null || words.length == 0) {
//         return indices;
//     }
//     // Store the words and their counts in a hash map
//     const wordCount = words.reduce((a, b) => {
//         a[b] = (a[b] + 1) || 1;
//         return a;
//     }, {});
//     // Length of each word in the words array`
//     const wordLength = words[0].length;
//     // Length of all the words combined in the array
//     const wordArrayLength = wordLength * words.length;
//     // Loop for the entire string
//     for (let i = 0; i <= s.length - wordArrayLength; i++) {
//         // Get the substring of length equal to wordArrayLength
//         let current = s.substring(i, i + wordArrayLength);
//         // Map to store each word of the substring
//         const wordMap = {};
//         // Index to loop through the words array
//         let index = 0;
//         // Index to get each word in the current
//         let j = 0;
//         // Loop through each word of the words array
//         while (index < words.length) {
//             // Divide the current string into strings of length of
//             // each word in the array
//             const part = current.substring(j, j + wordLength);
//             // Put this string into the wordMap
//             wordMap[part] = (wordMap[part] + 1) || 1;
//             // Update j and index
//             j += wordLength;
//             index++;
//         }
//         // At this point compare the maps
//         let a = JSON.stringify(Object.entries(wordCount).sort());
//         let b = JSON.stringify(Object.entries(wordMap).sort());
//         if (a === b) {
//             indices.push(i);
//         }
//     }
//     return indices;
// };