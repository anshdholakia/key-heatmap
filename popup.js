var key_percent = 41 // example data
var colors=['#fff33b', '#fdc70c', '#f3903f', '#ed683c', '#e93e3a'] // 

// since thre are 5 colors, we will divide the percentage by 20 and make the opacity in decimal form of percentage
// G -> 200 to 1
// (0, 200)
// (100, 1)
// slope: -1.99
var color = `rgb(255, ${Math.round(200 -1.99*key_percent)}, 1)`;

var element= document.querySelectorAll('div')[3]
element.style.background = color;
