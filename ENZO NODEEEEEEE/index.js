const api = require('./api')

//Chamar o express

const express = require('express');

//criando uma instancia de server

const server = express();

server.use(express.json());

// deixar o server na porta 1000

server.listen(3000);

server.get("/Home", (req, res) => {
    return res.send({Home: "Ola mundo!"});
});

server.get("/parametro", (req, res) => {
    const {name, idade} = req.query;
    return res.send({resultado: `meu nome é ${name} e minha idade é ${idade}` });

})

let produtos= []

//post = insert

server.post('/produtos', (req, res) => {
    const {id, nome, preco} = req.body

    produtos.push({id: id, nome: nome, preco: preco})
    res.send({mensagem:"Concluido!"})
})  

server.get('/produtos', (req, res) => {
    res.send({produtos: produtos})
})


server.put('/produto', (req, res) => {
    const{id, nome, preco} = req.body
    const{outronome} = req.query

    const posicao = produtos.findIndex
    (item => item.nome === outronome)

    produtos[posicao].nome = nome;
    produtos[posicao].preco = preco;
    produtos[posicao].id = id;

    res.send({Mensagem: "Sucesso!"})
});

server.delete('/produto/:id', (req, res) => {
    const {id} =req.params;
    const newProduto = produto.filter(item => item.id !== parseInt(id));
    produtos = newProduto;
    res.send({Mensagem: "Sucesso!"})
}
)

server.get('/pokemon/:id', async (req, res) => {

    const {id} = req.params
    try{
        const {data} = await api.get(`pokemon/${id}`)
        return res.send({name: data.name})

    } catch {error} {
        res.send({erro: error.message})
    }
})

const apikey = '152cb9060be1db8b9025cf917ed3333d';

server.get('/climatempo/:cidade', async(req, res) => {

    const city = req.params.cidade;
    try{
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric')

    res.send({Temperatura: response.data.main.temp});

    }catch(error) {
        res.send({ erro: "Erro ao obter dados meorológicos", error});
    }
});