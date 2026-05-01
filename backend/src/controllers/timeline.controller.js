const { ELECTION_TIMELINE } = require('../data/mockData');

const getTimeline = (req, res) => {
  const { country = 'India', type = 'national' } = req.query;
  const data = ELECTION_TIMELINE[country]?.[type];
  
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Timeline data not found for this location/type' });
  }
};

module.exports = { getTimeline };
