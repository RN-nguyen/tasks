//import files so they can be shown in client or ui
import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
    tasks: [
        {text: 'task1'},
        {text: 'task2'},
        {text: 'task3'},
    ],
});