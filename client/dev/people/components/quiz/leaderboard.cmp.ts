import {Component} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import {QuizService} from "../../services/quiz.service";
import {SOLNET_LIST_DIRECTIVES} from "../solnet/solnet-list.cmp";
import {SolnetLoader} from "../solnet/solnet-loader.cmp";
import {SolnetContainer} from "../solnet/solnet-container.cmp";



@Component({
  selector: 'leaderboard-cmp',
  styles: [''],
  template: `


    <solnet-container>
      <solnet-loader *ngIf="! leaderboard"></solnet-loader>

      <solnet-list>
        <solnet-list-item *ngFor="let leader of leaderboard">
          <img solnet-list-avatar src="{{leader.profile.image_192}}"/>
    
          <div>
            <h3>{{leader.real_name || leader.name}}</h3>    
            <p>{{leader.score}}</p>
          </div>
          
        </solnet-list-item>
      </solnet-list>
    </solnet-container>
  `,
  directives: [SOLNET_LIST_DIRECTIVES, SolnetLoader, SolnetContainer]
})
export class LeaderboardComponent {

  leaderboard: any;

  constructor(private quizService: QuizService){

    this.quizService.getLeaderBoard()
      .subscribe(leaderboard => {
        this.leaderboard = leaderboard.sort((a, b) => {
          return a.score < b.score;
        });
      });

  }

}
