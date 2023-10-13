const express = require('express');
const router = express.Router();
const abductionsCtrl = require('../../controllers/api/abductions');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, abductionsCtrl.index);
router.post('/', ensureLoggedIn, abductionsCtrl.create);
router.post('/:id', ensureLoggedIn, abductionsCtrl.update);
router.delete('/:id', ensureLoggedIn, abductionsCtrl.delete);
router.get('/:id', ensureLoggedIn, abductionsCtrl.edit);
module.exports = router;