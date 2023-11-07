const express = require("express");
const BloodRecepient = require("../models/recepient_model");
const router = express.Router()


router.get('/', async (req, res) => {
    res.render('blood/create_recepient', {recepient : new BloodRecepient()})
    // try {
    //     const medicines = await PrescriptionHolder.find(); // Query the database for all medicines
    //     res.status(200).json(medicines);
    // } catch (error) {
    //     console.error(error); // Log the error for debugging
    //     res.status(500).json({ error: 'An error occurred while fetching medicines.' });
    // }
})

router.get('/create_recepient',(req, res) => {
    res.render('blood/create_recepient', {recepient : new BloodRecepient()})
})

router.post('/', async  (req, res) => {
    const bloodRecepient = new BloodRecepient({
        fullName : req.body.fullName,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        location: req.body.location,
        dateTime: req.body.dateTime,
        phoneNumber: req.body.phoneNumber,
    });
    const donor = await bloodRecepient.save()
})

module.exports = router