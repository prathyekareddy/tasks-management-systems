import { Component, EventEmitter, Input, Output } from "@angular/core";

import { type Task } from "./task.model";
import { CardComponent } from "../../shared/card.component";
import { DatePipe } from "@angular/common";

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [CardComponent, DatePipe],
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent{
    @Input({required:true}) task!: Task;
    @Output() complete = new EventEmitter<string>();
    @Output() addTask = new EventEmitter<string>();

    onCompleteTask(){
        this.complete.emit(this.task.id)
    }

    onAddTask() {
        //
    }
}
