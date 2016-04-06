//import files so they can be shown in client or ui
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './body.html';

Template.body.helpers({
    tasks(){
        //all new tasks will be placed at the top
        return Tasks.find({}, { sort:{ createdAt: -1 }});
      
    },
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();
        
        //get the value from the form element
        const target = event.target;
        const text = target.text.value; console.log(event);
        //insert a task into the db
        Tasks.insert({
            text, 
            //timestamp
            createdAt: new Date(),
        });
        //clear form
        target.text.value = '';
    },
});