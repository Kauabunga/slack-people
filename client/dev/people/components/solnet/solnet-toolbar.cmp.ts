import {Component} from '@angular/core';

@Component({
  selector: 'solnet-toolbar',
  template: `
    <header class="toolbar">
      <nav class="toolbar-content">
        <ng-content></ng-content>
      </nav>
    </header>
  `,
  styles: [`
    
    .toolbar {
      background: rgba(14, 88, 158, 1);
      color: #fff;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 70px;      
    }
    
    .toolbar-content {
      display: flex;
      max-width: 500px;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }
    
    `
  ]
})
export class SolnetToolbar {
}
