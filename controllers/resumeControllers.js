const retrieveForm = (req, res) => {
  
    // Render the EJS template and pass data to it
    res.render("form", {});
  }

const submitForm = (req, res) => {
    const name = req.body.name
    const location = req.body.location
    const occupation = req.body.occupation
    const educations = req.body.education
    const experiences = req.body.experience
    const data = {
      name: name,
      location: location,
      occupation: occupation,
      educations: educations,
      experiences: experiences,
    }
    res.render("index", data);
  }

module.exports = { retrieveForm, submitForm };
