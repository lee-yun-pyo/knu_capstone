const connection = require('../dbConfig');

const broccoliCtrl = {
    getBroccoli : async(req, res)=>{
        connection.query('SELECT * FROM broccoli.board', (error, rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }
}

module.exports = broccoliCtrl;