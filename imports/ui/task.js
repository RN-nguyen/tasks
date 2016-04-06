import { Template } from 'meteor/templating';
//import Tasks table from db
import { Tasks } from '../api/tasks.js';
//importing task.html template to js file
import './task.html';

Template.task.events({
    'click .toggle-checked'(){
        //set checked property to the opposite of its current value
        Tasks.update(this._id, {
            $set: { checked: ! this.checked}, 
        });
    },
    //if delete button is pressed remove item
    'click .delete'() {
        Tasks.remove(this._id);
    },
});