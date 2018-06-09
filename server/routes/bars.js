const router = require('express').Router();
const { Bar } = require('../db').models

router.get('/', (req, res, next) => {
  Bar.findAll()
  .then(bars => res.send(bars))
})

router.post('/:id', (req, res, next) => {
  Bar.findById(req.params.id)
  .then(bar => res.send(bar))
})

//DO WE NEED A SECOND POST?
router.post('/', (req, res, next) => {
  Bar.create(req.params.body)
  .then(bar => res.send(bar))
})

//ADDED PUT ROUTE
router.put('/:id', (req, res, next) => {
  Bar.findById(req.params.id)
    .then( bar => {
      Object.assign(bar, req.body);
      return bar.save();
    })
    .then( bar => res.send(bar))
    .catch(next);
});

module.exports = router;
