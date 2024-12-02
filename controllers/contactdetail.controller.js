const Contactdetails = require('../models/contactdetail.model');

//create api
const createContactDetail = async (req, res) => {
    try {
      const contactlist = await Contactdetails.create(req.body);
      res.status(200).json(contactlist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //get contact details list
  const getcontactDetail= async (req, res) => {
    try {
      const contactdetail = await Contactdetails.find({});
      res.status(200).json(contactdetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    createContactDetail,
    getcontactDetail,
  };
  