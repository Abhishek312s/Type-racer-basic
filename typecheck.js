let Maininput = document.getElementById("maininput");
let Para = document.getElementById("para");
let btn = document.getElementById("btn1");
let previousword = document.getElementById("previousword");
let img1 = document.getElementById("img1");
let wordspara;
let index = 0;
count = 0;
modTxt = "";
Maininput.disabled = true;

let setofpara = [
  "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. ",
  "The natural environment or natural world encompasses all living and non-living things occurring naturally, meaning in this case not artificial. The term is most often applied to the Earth or some parts of Earth. This environment encompasses the interaction of all living species, climate, weather and natural resources that affect human survival and economic activity.",
  "A comparison or a contrast paragraph zeroes in on a key similarity or difference between for instance two sources positions or ideas Decide whether to deal only with similarities or only with differences or to cover both.",
];

btn.addEventListener("click", () => {
  img1.src="https://media.giphy.com/media/ZchkBcB4zKiuG4Y22I/giphy.gif"
  let show = Math.floor(Math.random() * setofpara.length);
  Para.innerText = setofpara[show];
  wordspara = Para.innerText.split(" ");
  Maininput.disabled = false;
  btn.disabled = true;
  Para.innerHTML = `<span style = "color: #224ce3;">${wordspara[0]}</span>`; 
  for (let i = 1; i < wordspara.length; i++) {
    Para.innerHTML += " " + wordspara[i];
  }
});
  

Maininput.addEventListener("keydown", function (e) {
  if (e.key == " ") {
   
    
    previousword.innerText = `Last word typed: ${Maininput.value.trim()}`;

    if (wordspara[index] == Maininput.value.trim()) {

      modTxt +=
        " " + `<span style = "color: #10916b;">${wordspara[index]}</span>`;
      count++;
    } else {
      modTxt +=
        " " + `<span style = "color: #d42424;">${wordspara[index]}</span>`;
    }

    index++;
    Maininput.value = "";
    Para.innerHTML = modTxt; 

    if (wordspara[index] != undefined) {
      Para.innerHTML +=
        " " + `<span style = "color: #224ce3;">${wordspara[index]}</span>`;
    } else {
      previousword.innerText = "You have a decent speed haha:)";
      Maininput.disabled = true;
      img1.src="https://media.giphy.com/media/YrMpuzXd1aro5pAHiV/giphy.gif"
      Maininput.placeholder="See you soon again:)"
      btn.innerText="Done"
    }
    for (let i = index + 1; i < wordspara.length; i++) {
      Para.innerHTML += " " + wordspara[i];
    }
  }
});
