const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects ORDER BY featured DESC, created_at DESC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET featured projects
router.get('/featured', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects WHERE featured = TRUE ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single project
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create project
router.post('/', async (req, res) => {
  const { title, description, tech_stack, category, github_url, demo_url, image_url, featured } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO projects (title, description, tech_stack, category, github_url, demo_url, image_url, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, description, tech_stack, category, github_url, demo_url, image_url, featured || false]
    );
    res.status(201).json({ success: true, message: 'Project created', id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
