
const decodedString = decodeURIComponent("How's%20it%20going%3F");
console.log(decodedString); 


const encodedString = encodeURIComponent("How's it going?");
console.log(encodedString); 


const website = "https://example.com";
const path = "/page.html";
const queryParams = "param1=value1&param2=value2";
const encodedURI = encodeURIComponent(`${website}${path}?${queryParams}`);
console.log(encodedURI); 


const baseUrl = "http://www.basescripts.com";
const queryParams2 = "?hello=world";
const encodedUrl = `${baseUrl}${encodeURIComponent(queryParams2)}`;
console.log(encodedUrl); 
