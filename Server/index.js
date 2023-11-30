import express from 'express';
import supervisorRoutes from'./Routes/supervisors.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', supervisorRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})