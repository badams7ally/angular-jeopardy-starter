import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {
  @Input() questionInfo;
  @Input() score;
  constructor() { }

  ngOnInit() {
  }

}
