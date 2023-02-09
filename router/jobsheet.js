const jobsheetController = require('../controllers/jobsheett');
const router = require('express').Router();

router.post('/one', jobsheetController.submitOne);
router.post('/many', jobsheetController.submitMany);

module.exports = router;