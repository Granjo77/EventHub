import { Router } from "express";

const router = Router();

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
};

const events: Event[] = [];
let nextId = 1;

/**
 * @swagger
 * /events:
 *   get:
 *     summary: List all events
 *     responses:
 *       200:
 *         description: List of events
 */
router.get("/", (_req, res) => {
    res.json(events);
});

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *                 example: "2025-01-01"
 *     responses:
 *       201:
 *         description: Event created
 *       400:
 *         description: Missing required fields
 */
router.post("/", (req, res) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newEvent: Event = {
    id: nextId++,
    title,
    description,
    date,
  };

  events.push(newEvent);

  res.status(201).json(newEvent);
});

export default router;