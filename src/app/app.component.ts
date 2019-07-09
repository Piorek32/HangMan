import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { words } from "./randomWord"

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})


export class AppComponent implements OnInit {
  @ViewChild('wordCtn') wordCtn: ElementRef;

  constructor(
    private elementRef: ElementRef) {
  }
  words = words;
  title = 'handman';
  randomWords = "";
  b = 0;
  spans = this.elementRef.nativeElement.getElementsByTagName('span');
  hangmanBox = this.elementRef.nativeElement.getElementsByClassName('man');

  onKeyUp(event: KeyboardEvent) {
    let keyPress = event.key;
    let arr = this.randomWords.split("");
    let q = arr.includes(keyPress);
    if (q) {
      arr.forEach(ele => {
        for (let i of this.spans) {
          if (i.innerText === keyPress.toUpperCase()) {
            i.style.fontSize = "46px";
          }
        };

      });
    } else {
      console.log(this.hangmanBox.length);
      if (this.b < this.hangmanBox.length) {
        this.hangmanBox[this.b].classList.add("show");
        this.b += 1;
      } else {
        
        console.log("koniec gry");
        return 
      }
    }
  }
  handmanSpans = (str) => {
    debugger 
    let array = str.split("");
    return `
         ${array.map((q) => `<span style=" font-size: 0px; height:50px; width:50px; text-align: center;
border: 5px solid black;margin: 0 10px;    text-transform: uppercase;
">${q}</span >`).join("")}
         `;
  }

  generateSpans() {
    let ctx = Math.floor((Math.random() * this.words.length) + 1);
    this.randomWords = this.words[ctx];
    var handmanString = `
      ${this.handmanSpans(this.randomWords)}
`;
    this.wordCtn.nativeElement.innerHTML = handmanString;
  }


  ngOnInit() {
    this.generateSpans();
  }



}
