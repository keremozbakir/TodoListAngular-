import { Component, HostListener, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray ,transferArrayItem} from '@angular/cdk/drag-drop';
import { PercentageCalculatorService } from 'src/app/services/percentage-calculator.service';
import { TodoService } from 'src/app/services/todo.service';
import { coerceStringArray } from '@angular/cdk/coercion';
import { JsonPipe } from '@angular/common';
import { Todo } from 'src/app/todo';
import { single } from 'rxjs';




@Component({
  selector: 'app-todo-panel',
  templateUrl: './todo-panel.component.html',
  styleUrls: ['./todo-panel.component.css']
})
  
  
  
  
export class TodoPanelComponent implements OnInit {

  constructor(private percentageCalc: PercentageCalculatorService, private todoService: TodoService) { }
  
  @HostListener('window:unload', [ '$event' ])
   beforeUnloadHandler(event: { preventDefault: () => void; }) {
   this.terminateFunction()
   event.preventDefault();
   return false;   
  }


  unloadHandler(event: any) {
    this.terminateFunction( )
  
  } 
  terminateFunction() {
    localStorage.setItem('data1',JSON.stringify(this.data))
  }

  selected!: Date | null;
  opened = false;
  percentage!: any;
  
  buttonDisplayDone:string='none'
  ngOnInit(): void {
    this.percentage = String(this.data.length / this.data2.length)
    this.percentage=this.percentageCalc.calculatePercentage(this.data.length, this.data2.length)
    //localStorage.setItem('data1',JSON.stringify(this.data))
    //var dataTemp = localStorage.getItem('data1') || '{"add new ":"item"}'
    //this.data =JSON.parse(dataTemp)
  }

  addToDone(datam: any) {
    const target ={
      "title": datam.title,
      "text":datam.text
    }
    const dataNew =this.data.filter((singleData)=>{
      return singleData.title !== target.title && singleData.text !== target.text
    })
    this.data = dataNew
    this.data2.unshift(target)
  }

  deleteTodo(arr: string, datam: any) {
    var targetArray: Array<Todo>;
    var liste: boolean = false;
    const target ={
      "title": datam.title,
      "text":datam.text
    }
    console.log(arr);
    console.log("------------------------------------------")
    console.log(datam)
    if (arr === "todoList") {
      targetArray = this.data; 
      liste = true
    }
    else {
      targetArray=this.data2
    }

    const dataNew = targetArray.filter((singleData:any)=>{
      return singleData.title !== target.title && singleData.text !== target.text
    })
    if (liste) {
      this.data =dataNew
    } else {
      this.data2=dataNew
    }
    
     console.log("delte button clicked")


  }



  addNewTodo(dataInput: any) {
    var duplicate = false
    this.data.forEach(element => {
    if (element['title'] === dataInput.title && element['text'] === dataInput.text) {
      console.log(element)
      console.log("Duplicate")
      duplicate = true;
      }
    });

    if (!duplicate) {
      this.data.unshift({title:dataInput.title,text:dataInput.text})
    }
    
  }










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
        this.percentage=this.percentageCalc.calculatePercentage(this.data.length, this.data2.length)
        if (event.container.id == 'cdk-drop-list-2') {
          console.log('its the bin')
          var value: Object = event.container.data
          console.log(value)
          this.data2 = this.data2.filter(item => item !== value)
          console.log(this.data2)
          this.bin = []
        }
    }

  }

  bin:any=[]

 // data:any=[]
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



