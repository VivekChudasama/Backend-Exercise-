const app = require('./routes')

const PORT = 3001;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});