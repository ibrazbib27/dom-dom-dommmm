document.addEventListener("DOMContentLoaded", function(){
    var button = document.createElement("button");
    var buttonText = document.createTextNode("Add Square");

    button.id = "sqrbtn";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.borderColor = "black";
    button.style.marginLeft = "auto";
    button.style.marginRight = "auto";
    button.style.marginTop = "25px";
    button.style.marginBottom = "10px";
    button.style.display = "block";
    button.appendChild(buttonText);
    document.body.appendChild(button);
    var count = 0;
        button.addEventListener("click", function(){
            var squarez = document.createElement("div");
            var par = document.createElement("p");
            var idsqr = document.createTextNode((document.getElementsByClassName("squares")).length);
            par.appendChild(idsqr);
            squarez.appendChild(par);
            squarez.style.color = "white";
             squarez.style.textAlign = "center";
           par.style.verticalAlign="middle";
           
         squarez.style.border = "none";
            squarez.style.width = "75px";
            squarez.style.height = "75px";
            squarez.style.marginLeft = "5px";
            squarez.style.marginRight = "5px";
            squarez.style.marginBottom = "10px";
            squarez.id = (document.getElementsByClassName("squares")).length;
            par.style.visibility = "hidden";
            squarez.className = "squares";
            squarez.style.display = "inline-block";
            squarez.style.backgroundColor = "black";
         
            document.body.appendChild(squarez);
            
            (squarez).onmouseover = function(){par.style.visibility = "visible";};
             (squarez).onmouseout = function(){par.style.visibility = "hidden";};
            
               squarez.addEventListener("click", function(){
                   squarez.style.backgroundColor = newColor[Math.floor(Math.random()* (newColor.length))];
               })
            
               squarez.addEventListener("dblclick", function(){
                   for(var i = 0; i < (document.getElementsByClassName("squares")).length; i++){
                       if((document.getElementsByClassName("squares"))[i] === squarez){
                         if(((document.getElementsByClassName("squares")).length)%2 === 0){
                            
                             if((document.getElementsByClassName("squares")).length-1 === (i)){
                                 alert("Warning: This is the last in the EVEN COUNT sequence!");
                                 document.body.removeChild(squarez);
                             }
                             else{
                                 document.body.removeChild(squarez);
                             }
                             
                         }
                         else{
                               if(0 === i){
                                 alert("Warning: This is the first in the ODD COUNT sequence!");
                                   document.body.removeChild(squarez);
                             }
                             else{
                                 document.body.removeChild(squarez);
                             }
                             
                         }
                         
                       }
                   }
                   
               })
        })
})
//found this here: https://gist.github.com/bobspace/2712980
const newColor = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];
