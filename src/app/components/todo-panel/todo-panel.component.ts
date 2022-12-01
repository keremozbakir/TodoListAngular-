import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray ,transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo-panel',
  templateUrl: './todo-panel.component.html',
  styleUrls: ['./todo-panel.component.css']
})
export class TodoPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened = false;


  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }

  }

  bin:any=[]


data=[{
  "title": "Augustus Downs Airport",
  "text": "Restriction of Abdominal Aorta, Perc Endo Approach"
}, {
  "title": "Tissa Tank Waterdrome",
  "text": "Sensory/Processing Assessment of Integu Body using Oth Equip"
}, {
  "title": "Drake Field",
  "text": "Excision of Left Eustachian Tube, Endo, Diagn"
}, {
  "title": "Lomé-Tokoin Airport",
  "text": "Reposition Lower Lip, External Approach"
}, {
  "title": "Skopje Alexander the Great Airport",
  "text": "Drainage of Left Foot Tendon, Open Approach, Diagnostic"
}, {
  "title": "Shelby Airport",
  "text": "Restriction of Up Esophag with Extralum Dev, Perc Approach"
}, {
  "title": "Haley Army Airfield",
  "text": "Occlusion of Accessory Pancreatic Duct, Via Opening"
}, {
  "title": "Dahl Creek Airport",
  "text": "Supplement L Renal Art with Autol Sub, Perc Endo Approach"
}, {
  "title": "Lučenec Airport",
  "text": "Dilate of Sup Vena Cava with Drug-elut Intra, Perc Approach"
}, {
  "title": "False Island Seaplane Base",
  "text": "Supplement L Knee Jt, Femoral with Liner, Open Approach"
  }]
  


  data2=[{
    "title": "Kazu",
    "text": "Human Resources"
  }, {
    "title": "Eidel",
    "text": "Legal"
  }, {
    "title": "Meetz",
    "text": "Accounting"
  }, {
    "title": "Devcast",
    "text": "Marketing"
  }, {
    "title": "Trudeo",
    "text": "Product Management"
  }, {
    "title": "Rhybox",
    "text": "Accounting"
  }, {
    "title": "Jayo",
    "text": "Marketing"
  }, {
    "title": "Plajo",
    "text": "Marketing"
  }, {
    "title": "Feedfire",
    "text": "Legal"
  }, {
    "title": "Skajo",
    "text": "Legal"
  }]
};



