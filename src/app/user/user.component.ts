import { Component, EventEmitter, Input, Output } from "@angular/core";

import { type User } from "./user.model";
import { CardComponent } from "../shared/card.component";

// import { DUMMY_USERS } from "../dummy-users";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CardComponent], 
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent{
    @Input({required:true}) user!: User;
    @Input({required:true}) selected!: boolean;
    @Output() select = new EventEmitter<string>();

    get imagePath(){
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser(){
        this.select.emit(this.user.id);
    }
}

// With Signals
    //avatar = input<string>(); //the <string> is not angular, it's a Typescript generic type. 
    // avatar = input.required<string>();
    // name = input.required<string>();
    //Alternative newer approach for output. For this you import output on top.
    // select = output<string>(); 

    // imagePath = computed(() => {
    //     return 'assets/users/' + this.avatar();
    // })

// export class UserComponent {
//     // <!-- Without Signals -->
//     // selectedUser = DUMMY_USERS[randomIndex]
//     // selectedUser = signal(DUMMY_USERS[randomIndex])

//     // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
//     // <!-- Without Signals -->
//     // get imagePath() {
//         // return 'assets/users/' + this.selectedUser.avatar
//     // }

//     // onSelectUser() {
//         // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//         // this.selectedUser.set(DUMMY_USERS[randomIndex])

//         // <!-- Without Signals -->
//         // this.selectedUser = DUMMY_USERS[randomIndex]
//     // }
    
// }