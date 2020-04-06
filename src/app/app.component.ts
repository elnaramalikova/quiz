import { Component } from '@angular/core';
// import {CounteService} from './countservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // questions: any;
  // correctIndex: any ;
  question: string;
  constructor() {
  }
  questions = [
    {
      question: ['What is the islamic term for fast?'],
      option: [
        {name: 'Novruz', correct: 1},
        {name: 'New year', correct: 0},
        {name: 'Ramadan', correct: 0},
        {name: 'Qurban Bayram', correct: 0}
      ],
      correctAnswer: 2
    },
    {
      question: ['In which city was the Titanic built?'],
      option: [
        {name: 'Basra', correct: 0 },
        {name: 'Belfast', correct: 1},
        {name: 'Alexandria', correct: 0},
        {name: 'Hamburg', correct: 0}
      ],
      correctAnswer: 1
    },
    {
      question: ['Which is the world s second largest French-speaking city?'],
      option: [
        {name: 'Montreal (Canada)', correct: 0},
        {name: 'Aarhus (Denmark)', correct: 0},
        {name: 'Espoo (Finland)', correct: 1},
        {name: 'Kópavogur (Iceland)', correct: 0}
      ],
      correctAnswer: 0
    },
    {
      question: ['How many children did Queen Victoria have?'],
      option: [
        {name: 'Three children', correct: 0},
        {name: 'None', correct: 0},
        {name: 'Ten children', correct: 0},
        {name: 'Nine children', correct: 1}
      ],
      correctAnswer: 3
    },
    {
      question: ['Which region produces the most apples?'],
      option: [
        {name: 'Russia', correct: 0},
        {name: 'China', correct: 1},
        {name: 'Turkey', correct: 0},
        {name: 'United States', correct: 0}
      ],
      correctAnswer: 1
    }
  ];
  winScore = 0;
  loseScore = 0;
  // correctIndex = this.questions[0].option[0].correct;
  endCount = 0;

  change = () => {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.questions[0].question.length; i++) {
      if (this.questions[i].option[i].correct === 1) {
        this.winScore++;
      } else {
        this.loseScore++;
        this.endCount++;
      }
    }
  }
  // private reset: () => void;
getnew = () => {
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.questions.length; i++) {
    this.questions[i].question = this.questions[i + 1].question;
    this.questions[i].option = this.questions[i + 1].option;

    //     if (this.winScore < this.questions.length){
    //     // document.getElementById('game').append('GAME OVER !!!!');
    //       alert('Game Over !!!');
    //   }
    //     else {
    //       // document.getElementById('game').append('WINNER !!!!');
    //       alert('Winner');
    //     }
    // }
  }
  }



}
