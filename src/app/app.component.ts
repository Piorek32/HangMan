import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiHttp } from "./services/api.http";
import { RandomWord} from "./shared/models/models"


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
    private  apiHttp: ApiHttp,
    private elementRef: ElementRef) {
  }
 
  title:string = 'Hand-man Game';
  randomWords:string = "";
  missedLetter: string = "";
  noHit:number = 0;
  endGame: boolean = false;
  isWin: boolean = false;

  spans = this.elementRef.nativeElement.getElementsByTagName('span');
  hangmanBox = this.elementRef.nativeElement.getElementsByClassName('man');

  onKeyUp(event: KeyboardEvent) {
    if (event.keyCode <= 90 && event.keyCode >= 48) {
      let keyPress = event.key;
      let arr = this.randomWords.split("");
      let q = arr.includes(keyPress);
      if (q) {
        arr.forEach(ele => {
          for (let i of this.spans) {
            if (i.innerText === keyPress.toUpperCase()) {
              i.style.fontSize = "46px";
              i.style.background = "antiquewhite";
              i.style.color = "white";

            }
          };

        });
      } else {
        if (this.noHit < this.hangmanBox.length) {
          this.missedLetter += keyPress;
          this.hangmanBox[this.noHit].classList.add("show");
          this.noHit += 1;
        }
        if (this.noHit === this.hangmanBox.length) {
          this.endGame = true;
          return;
        }
      }
    }
  }
  handmanSpans = (str) => {
    let array = str.split("");
    return `
         ${array.map((q) => `<span style=" font-size: 0px; height:50px; width:50px; text-align: center;
border: 5px solid black;margin: 0 10px;    text-transform: uppercase;
">${q}</span >`).join("")}
         `;
  }

  generateSpans(word) {
    
    this.randomWords = word;
    var handmanString = `
      ${this.handmanSpans(this.randomWords)}`;
    this.wordCtn.nativeElement.innerHTML = handmanString;
  }


  getWord() {
    this.apiHttp.getWord().subscribe(
      (word) => {
        const reg = new RegExp("[A - Za - z]");

        if (reg.test(word.word)) {
          this.randomWords = word.word;
          this.generateSpans(this.randomWords);
        } else {
          debugger 
          this.getWord();
        }
      },
      (err) => console.log(err),
      () => console.log("compled"));
  }


  ngOnInit() {
    this.getWord();
    
  }



}
