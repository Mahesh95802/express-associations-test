const express  = require('express');

const userRouter = require('./routers/user.router');

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(userRouter);

app.get('/', (req, res) => {
	res.send('Hii');
});

app.listen(PORT, () => {
	console.log(`The application has started at PORT: ${PORT}`);
});