const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/UserRoute');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.get('/test',(req,res)=>{

return res.send('hiiiiiii')
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
