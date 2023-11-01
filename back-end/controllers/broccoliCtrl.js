const connection = require('../dbConfig');

const broccoliCtrl = {
    getBroccoli : async(req, res)=>{
        const board_id = req.query.id;

        //id값을 받지 않으면 모든 상품 조회
        if(board_id == undefined){
            connection.query('SELECT * FROM broccoli.board;', (error, rows)=>{
                if(error){
                    res.send({"statusCode" : 404, "message" : error})
                    return;
                };
                res.send({"statusCode" : 200, "data" : { "board" : rows }});
            })
        }

        else{
            //숫자를 입력받았는지 체크
            let check = /^[0-9]+$/; 
            if (!check.test(board_id)) {
                res.send({"statusCode" : 400, "message" : "숫자만 입력가능"});
                return;
            }
            connection.query(`SELECT * FROM broccoli.board where board_id = ${board_id}`, (error, rows)=>{
                if(error){
                    res.send({"statusCode" : 404, "message" : error})
                    return;
                };
                res.send({"statusCode" : 200, "data" : { "board" : rows[0]}});
            })
        }
    },

    insertBroccoli : async(req, res) => {
        let {store_name, store_location, product_name, product_description,
        current_price, upper_limit, lower_limit, start_time, end_time}
        = req.body;
        const product_image = req.file ? req.file.filename : null;

        let sql=``;
        if(start_time == null) start_time = "default";
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
            default,
            '${start_time}',
            '${end_time}',
            '${product_image}'
            );`
        
        connection.query(
            sql, (error, rows)=>{
                if(error){
                    res.send({"statusCode" : 400, "message" : "입력 규격에 맞지 않습니다." + error});
                    return;
                }
                res.send({"statusCode" : 200, "board_id" : rows.insertId});
            }
        )
    },

    deleteBroccoli : async(req, res)=>{
        const board_id = req.params.id;
        let check = /^[0-9]+$/; 
        if (!check.test(board_id)) {
            res.send({"statusCode" : 400, "message" : "숫자만 입력가능"});
            return;
        }

        connection.query(`DELETE FROM broccoli.board where board_id=${board_id};`, (error, rows) =>{
            if(error){
                res.send({"statusCode" : 400, "message": "board_id 값을 찾을 수 없음" + error});
                return;
            }
            res.send({"statusCode" : 200, "message" : "정상적으로 제거되었습니다."});
        })
    },

    
    addLike : async(req, res)=>{
        const board_id = req.body.id;
        let check = /^[0-9]+$/; 
        if (!check.test(board_id)) {
            res.send({"statusCode" : 400, "message" : "숫자만 입력가능"});
            return;
        }
        connection.query(`UPDATE broccoli.board SET like_count = like_count+1 WHERE board_id = ${board_id};`, (error, rows)=>{
            if(error){
                res.send({"statusCode" : 400, "message": "board_id 값을 찾을 수 없음" + error});
                return;
            }
        });
        connection.query(`SELECT like_count FROM broccoli.board WHERE board_id = ${board_id};`, (error, rows)=>{
            if(error){
                res.send({"statusCode" : 400, "message": "board_id 값을 찾을 수 없음" + error});
                return;
            }
            res.send({"statusCode" : 200, "like_count" : rows[0].like_count});
        });
        
    },

    getlog : async(req, res)=>{
        const board_id = req.query.id;

        //id를 입력 받을 경우 모든 경매 기록 출력
        if(board_id == undefined)
        {
            connection.query('SELECT user, profile, time, price, board_id FROM broccoli.auction_log;', (error, rows)=>{
                if(error){
                    res.send({"statusCode" : 404, "message" : error});
                    return;
                }
                res.send({"statusCode" : 200, "data" : {"log" : rows}});
            })
        }

        else{
            //숫자만 입력받음
            let check = /^[0-9]+$/; 
            if (!check.test(board_id)) {
                res.send({"statusCode" : 400, "message" : "숫자만 입력가능"})
            }
            else{
                connection.query(`SELECT user, profile, time, price, board_id FROM broccoli.auction_log where board_id = ${board_id}`, (error, rows)=>{
                    if(error){
                        res.send({"statusCode":404, "message" : error});
                        return;
                    };
                    res.send({"statusCode" : 200, "data" : {"log" : rows[0]}});
            })
        }

        }

        
    },

    insertlog : async(req, res)=>{
        const {user, price, board_id} = req.body;
        const profile = req.file ? req.file.filename : null;
        const sql = `INSERT INTO broccoli.auction_log
        VALUES(
            default,
            '${user}',
            '${profile}',
            default,
            ${price},
            ${board_id}
        );`

        connection.query(
            sql, (error, rows) =>{
                if(error) res.send({"statusCode": 400, "message": "입력 규격이 맞지 않습니다." + error });
                else res.send({"statusCode" : 200});
            }
        )
    }
}

module.exports = broccoliCtrl;