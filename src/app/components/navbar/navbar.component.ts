import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @Output() openPanel = new EventEmitter<any>;
  @Output() toggleMode = new EventEmitter<any>;

  ngOnInit(): void {
  }

  openPanelOnClick() {
    this.openPanel.emit()
  }
  onToggle() {
    console.log("Hey theree!! toggled")
    this.toggleMode.emit()
  }
  opened = false;

  
}
