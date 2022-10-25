const express =require('express');
const app = express();

//cette ligne suffit largement pour la mise en place du serveur via express.static
app.use(express.static('public'));

const PORT = 7777;

//pour démarrer un serveur via le PORT 7777
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});