const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('livro'); //nome do banco
    collection = db.collection('livro'); //nome da coleção

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/matriculas', async (req, res) => {
  try {
    const novaMatricula = req.body;

    const result = await collection.insertOne(novaMatricula); //complemento
    
    res.status(201).json({ message: 'Livro cadastrado com sucesso', matriculaId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar livro', error: err });
  }
});

app.get('/matriculas', async (req, res) => {
  try {
  

    const matriculas = await collection.find().toArray(); //complemento

    res.status(200).json(matriculas);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livro', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/matriculas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    //complete o código

    if (!matricula) {
      res.status(404).json({ message: 'Livro não encontrado' });
    } else {
      res.status(200).json(matricula);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livro', error: err });
  }
});

app.put('/matriculas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;

    const result = await collection.updateOne( { _id: newId }, { $set: atualizacao });//complete o código

    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Livro não encontrado' });
    } else {
      res.status(200).json({ message: 'Livro atualizado com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar livro', error: err });
  }
});

app.delete('/matriculas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const result = await collection.deleteOne({ _id: newId }); //complemento

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Livro não encontrado' });
    } else {
      res.status(200).json({ message: 'Livro atualizado com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir livro', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
