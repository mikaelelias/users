import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const app = express();
app.use(express.json())

// Rota GET para listar o item
app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
});

// Rota POST para processar dados
app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email, 
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
});


app.put('/usuarios/:id', async (req, res) => {
  

    const user = await prisma.user.update({

        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email, 
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
});


app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete ({
        where: {
            id: req.params.id
        }        
    })

     res.status(200).json({ message: 'Usuário deletado com sucesso!'})
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});



/*

MOngo DB

mikael 
57n2IpNPoaWDx5Js

/*

/* 

instalão do prisma

npm install prisma --save-dev 

*/ 