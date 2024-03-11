const mysql = require('../../mysql');
const utils = require('../../utils');

exports.getProdutosDisponiveis = async (req, res, next) => {
    try {
        const resultado = await mysql.execute(`
        SELECT * FROM medicos;
        `);
        const urlDominio = utils.getApiConfig().url_dominio;
        resultado.map(r => r.img_url = urlDominio + r.img_url);
        return res.status(200).send({
            mensagem: 'Medicos retornados com sucesso!',
            resultado: resultado
        });
    } catch (error) {
        utils.getError(error);
        return res.status(500).send({ error: error.message });
    }
}