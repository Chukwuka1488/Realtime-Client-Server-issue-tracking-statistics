const Task = require('../models/task');

exports.homepageController = (req, res) => {
    res.send("Realtime Client Server Issue Tracking Statistics");
};


exports.createTask = (req, res, next) => {
    Task.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  };
  
  exports.getAllTasks = (req, res, next) => {
    Task.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  };
  
  exports.getTaskById = (req, res, next) => {
    Task.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  };
  
  exports.updateTaskById = (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  };
  
  exports.deleteTaskById = (req, res, next) => {
    Task.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  };

// module.exports = {homepageController};