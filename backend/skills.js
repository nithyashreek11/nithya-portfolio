const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all skills grouped by category
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM skills ORDER BY category, proficiency DESC');
    const grouped = rows.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
    res.json({ success: true, data: grouped });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
