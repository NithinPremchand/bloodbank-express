const express = require("express");
const BloodDonor = require("../models/donor_model");
const router = express.Router()

router.get('/',(req, res) => {
    res.render('blood/blood_home')
})

router.get('/create_donor',(req, res) => {
    res.render('blood/create_donor', {donor : new BloodDonor()})
})

router.post('/', async  (req, res) => {
    console.log(req)
    const bloodDonor = new BloodDonor({
        fullName : req.body.fullName,
        age : req.body.age,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        prevDonation: req.body.prevDonation,
        lastDonatedDate: req.body.lastDonatedDate
    });
    const donor = await bloodDonor.save()
    // bloodDonor.save((err) => {
    //     if (err) {
    //         /* res.render('donors/new', {
    //             donor: Donor,
    //             errorMessage: 'Error creating Donor'
    //         }) */
    //         res.send('Error saving Blood Donor data.');
    //     } else {
    //         // console.log(res);
    //         res.send('Blood Donor data saved successfully.');
    //     }
    // })
})

module.exports = router