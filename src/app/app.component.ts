import { DragScrollComponent } from 'ngx-drag-scroll'
import { Component, Input, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent

moveLeft() {
    this.ds.moveLeft()
  }

moveRight() {
    this.ds.moveRight()
  }
}
