import {Component} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import {QuizService} from "../../services/quiz.service";
import {SOLNET_LIST_DIRECTIVES} from "../solnet/solnet-list.cmp";
import {SolnetButton} from "../solnet/solnet-button.cmp";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SolnetContainer} from "../solnet/solnet-container.cmp";
import {SolnetPeopleBackgroundComponent} from "../solnet/solnet-people-background.cmp";



@Component({
  selector: 'quiz-cmp',
  styles: [`
    .quiz-container {
      border-top: 1px solid #A0ADB4;
      position: relative;
    }

    :host {
      display: block;
    }

    h2 {
      color: #fff;
      border-bottom: 1px solid white;
      padding-bottom: 30px;
      font-weight: 500;
      margin-top: 50px;
    }

    .action-container {
      display: flex;
      flex-direction: column;
    }
    @media screen and (min-width: 425px) {
      .action-container { flex-direction: row}
    }

  `],
  template: `

    <solnet-people-background></solnet-people-background>

    <div class="quiz-container">
      <solnet-container>
        <h2>Learn who the awesome people in your team are and see who knows the most on the leaderboard!</h2>

        <div class="action-container">
          <solnet-button [routerLink]="['/question']">Play Now</solnet-button>
          <solnet-button [routerLink]="['/leaderboard']">View Leaderboard</solnet-button>
        </div>
      </solnet-container>
    </div>

  `,
  directives: [SOLNET_LIST_DIRECTIVES, SolnetButton, ROUTER_DIRECTIVES, SolnetContainer, SolnetPeopleBackgroundComponent]
})
export class QuizComponent {

  constructor(private quizService: QuizService){
    this.quizService.getQuiz({});
  }

}


