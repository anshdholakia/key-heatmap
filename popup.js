var key_percent = 40 // example data
var colors=['#fff33b', '#fdc70c', '#f3903f', '#ed683c', '#e93e3a'] // 

// since thre are 5 colors, we will divide the percentage by 20 and make the opacity in decimal form of percentage
var color = colors[Math.round(key_percent/20)];

var element= document.querySelectorAll('div')[3]
element.style.background = color;
element.style.opacity = `${key_percent}%`;
