const Rectangle = require("../models/Rectangle");

// CREATE (calculate + save)
exports.calculateRectangle = async (req, res) => {
  try {
    const { length, width } = req.body;

    const a = Number(length);
    const b = Number(width);

    if (!a || !b || a <= 0 || b <= 0) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const area = a * b;
    const perimeter = 2 * (a + b);
    const diagonal = Math.hypot(a, b);

    const newData = await Rectangle.create({
      length: a,
      width: b,
      area,
      perimeter,
      diagonal,
    });

    res.json(newData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (history)
exports.getHistory = async (req, res) => {
  try {
    const data = await Rectangle.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL
exports.clearHistory = async (req, res) => {
  try {
    await Rectangle.deleteMany({});
    res.json({ message: "All history cleared" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ONE
exports.deleteOne = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Rectangle.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};