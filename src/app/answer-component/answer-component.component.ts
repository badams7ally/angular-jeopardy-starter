import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {
  @Input() questionInfo;
  @Output() somethingHappened = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  checkAnswerEvent() {
     this.somethingHappened.emit();
  }
}
