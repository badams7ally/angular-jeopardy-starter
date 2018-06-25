import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  score = 0;
  answer = 'answer here';
  feedback = '';

  questionInfo;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getQuestionInfo()
  }

  checkAnswer(){
    if(this.answer.toLowerCase()==this.questionInfo.answer.toLowerCase()) {
      this.score = this.score + this.questionInfo.value;
      this.feedback = "correct!";
    }
    else {
      this.score = this.score - this.questionInfo.value;
      this.feedback = "incorrect!";
    }
    this.getQuestionInfo();
  }
}
