const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');

const {List, Task} = require('./db/models');

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});

app.get('/lists', (req, res) => {
    List.find()
        .then((lists) => {
            res.send(lists);
        })
        .catch(error => res.send(error));
});

app.post('/lists', (req, res) => {
    let title = req.body.title;
    let newList = new List({
        title,
    })
    newList.save().then((listDoc) => {
        res.send(listDoc);
    })
});

app.patch('/lists/:id', (req, res) => {
    List.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body,
    }).then(res.sendStatus(200));
})

app.delete('/lists/:id', (req, res) => {
    List.findOneAndRemove({_id: req.params.id})
        .then((removedListDoc) => {
            res.send(removedListDoc);
        });
})

app.get('/lists/:listId/tasks', (req, res) => {
    Task.find({
        _listId: req.params.listId,
    })
        .then(tasks => res.send(tasks));
})

app.get('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.find({
        _listId: req.params.listId,
        _id: req.params.taskId,
    })
        .then(task => res.send(task));
})

app.post('/lists/:listId/tasks', (req, res) => {
    let title = req.body.title;
    let listId = req.params.listId
    let newTask = new Task({
        title,
        _listId: listId,
    })
    newTask.save().then((taskDoc) => {
        res.send(taskDoc);
    })
});

app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId,
    }, {
        $set: req.body,
    }).then(res.sendStatus(200));
})

app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndRemove({
        _id: req.params.taskId,
        _listId: req.params.listId,
    })
        .then((removedTaskDoc) => {
            res.send(removedTaskDoc);
        });
})