let current=0;


let scores={

Vision:0,
Team:0,
Action:0,
Strategy:0,
Creative:0

};



let questions=[


{
q:"A project starts with no clear direction. You:",

a:[

["Create a future vision","Vision"],

["Ask everyone ideas","Team"],

["Start working immediately","Action"],

["Analyse before deciding","Strategy"]

]

},


{
q:"Your team misses a deadline. You:",

a:[

["Find a new approach","Vision"],

["Understand team problems","Team"],

["Push execution harder","Action"],

["Find the reason","Strategy"]

]

},


{
q:"You enjoy work when:",

a:[

["Creating new possibilities","Vision"],

["Working with people","Team"],

["Achieving targets","Action"],

["Solving difficult problems","Strategy"]

]

},


{
q:"Your colleagues come to you for:",

a:[

["Ideas","Vision"],

["Support","Team"],

["Getting things done","Action"],

["Advice","Strategy"]

]

},


{
q:"Your ideal role:",

a:[

["Innovator","Vision"],

["Mentor","Team"],

["Leader","Action"],

["Planner","Strategy"]

]

}


];



function load(){


document.getElementById("question")
.innerHTML=

questions[current].q;


let html="";


questions[current].a.forEach(x=>{


html+=

`
<button onclick="choose('${x[1]}')">

${x[0]}

</button>

`;

});


document.getElementById("answers")
.innerHTML=html;


}



function choose(type){

scores[type]++;

}



function nextQuestion(){


current++;


if(current<questions.length)

load();


else

result();


}




function result(){


let winner=

Object.keys(scores)
.reduce((a,b)=>

scores[a]>scores[b]?a:b);



let text={


Vision:"🚀 Vision Builder",

Team:"🤝 Team Connector",

Action:"⚡ Execution Driver",

Strategy:"🧠 Strategic Thinker"

};



document.body.innerHTML=

`

<div class="box">

<h1>
Your Work DNA
</h1>


<h2>

${text[winner]}

</h2>


<p>
Your hidden strength is revealed.
</p>


<button onclick="share()">
Share Result
</button>


</div>

`;

}



function share(){

window.open(

"https://www.linkedin.com/sharing/share-offsite/?url="+window.location.href

);

}



load();
