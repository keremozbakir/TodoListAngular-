import { Component, EventEmitter, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @Output() openPanel = new EventEmitter<any>;
  ngOnInit(): void {
  }

  openPanelOnClick() {
    this.openPanel.emit()
  }
  opened = false;
}
