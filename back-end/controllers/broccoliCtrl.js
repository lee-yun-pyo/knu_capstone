const connection = require('../dbConfig');

const broccoliCtrl = {
    getBroccoli : async(req, res)=>{
        const board_id = req.query.id;
        //id값을 받지 않으면 모든 상품 조회
        if(board_id == undefined){
            connection.query('SELECT * FROM broccoli.board;', (error, rows)=>{
                if(error) throw error;
                res.send(rows);
            })
        }

        else{
            //숫자를 입력받았는지 체크
            let check = /^[0-9]+$/; 
            if (!check.test(board_id)) {
                res.send("숫자만 입력가능")
            }
            else{
                connection.query(`SELECT * FROM broccoli.auction_log where board_id = ${board_id}`, (error, rows)=>{
                    if(error) throw error;
                    res.send(rows);
                })
            }
        }
        


        
    },

    insertBroccoli : async(req, res) => {
        const {store_name, store_location, product_name, product_description,
        current_price, upper_limit, lower_limit, like_count, start_time, end_time, product_image}
        = req.body;

        let sql=``;
        if(start_time == null){
            sql = `INSERT INTO broccoli.board
            VALUES(
                default,
                '${store_name}', 
                '${store_location}',
                '${product_name}',
                '${product_description}',
                ${current_price},
                ${upper_limit},
                ${lower_limit},
                ${like_count},
                default,
                '${end_time}',
                ${product_image}
            );`
        }
        else{
            sql = `INSERT INTO broccoli.board
            VALUES(
                default,
                '${store_name}', 
                '${store_location}',
                '${product_name}',
                '${product_description}',
                ${current_price},
                ${upper_limit},
                ${lower_limit},
                ${like_count},
                '${start_time}',
                '${end_time}',
                ${product_image}
            );`
        }

        connection.query(
            sql, (error, rows)=>{
                if(error) throw error;
                res.send(rows);
            }
        )
    },

    insertlog : async(req, res)=>{
        const {user, profile, price, board_id} = req.body;
        const sql = `INSERT INTO broccoli.auction_log
        VALUES(
            default,
            '${user}',
            ${profile},
            default,
            ${price},
            ${board_id}
        );`

        connection.query(
            sql, (error, rows) =>{
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports = broccoliCtrl;