const Booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        let booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        });


        booking = await Booking.findById(booking._id).populate('spot').populate('user');

        return res.json(booking);
    
    }
}