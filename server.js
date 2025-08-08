const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000; // You can change this to any available port

// Serve static folders
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes to HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Contact form handler (optional POST route)
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;
  console.log("📨 Contact Form Submitted:", { name, email, message });

  res.send(`
    <h2 style="color:green;font-family:sans-serif;">Message sent successfully!</h2>
    <a href="/" style="color:#00e0c8;">← Back to Home</a>
  `);
});

// 404 fallback route
app.use((req, res) => {
  res.status(404).send(`
    <h1 style="color:red;">404 - Page Not Found</h1>
    <a href="/" style="color:#00e0c8;">Go to Home</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
