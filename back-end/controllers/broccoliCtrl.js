const connection = require('../dbConfig');
const bcrypt = require('bcrypt');

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
            connection.query(`SELECT * FROM broccoli.board where board_id = ${board_id};`, (error, rows)=>{
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

    getLog : async(req, res)=>{
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
                connection.query(`SELECT user, profile, time, price, board_id FROM broccoli.auction_log where board_id = ${board_id};`, (error, rows)=>{
                    if(error){
                        res.send({"statusCode":404, "message" : error});
                        return;
                    };
                    res.send({"statusCode" : 200, "data" : {"log" : rows[0]}});
            })
        }

        }

        
    },

    insertLog : async(req, res)=>{
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
    },



    getUsers : async(req, res)=>{
        const id = req.query.id;
        const pw = req.query.pw;

        //id값을 받지 않으면 모든 계정정보를 볼 수 있음
        if(id == undefined){
            connection.query('SELECT * FROM broccoli.users;', (error, rows)=>{
                if(error){
                    res.send({"statusCode" : 404, "message" : error})
                    return;
                };
                res.send({"statusCode" : 200, "data" : { "board" : rows }});
            })
            return;
        }

        console.log(pw);
        //id만 입력이 들어온 경우
        if(pw == undefined){
            connection.query(`SELECT * FROM broccoli.users where id = ${id};`, (error, rows)=>{
                if(error){
                    res.send({"statusCode" : 404, "isAvailable" : false, "message" : error})
                    return;
                };

                if (rows.length > 0) res.send({"statusCode" : 200, "isAvailable" : false, "message" : "이미 사용중인 ID입니다."});
                else                 res.send({"statusCode" : 200, "isAvailable" : true, "message" : "사용 가능한 ID입니다."});
            })
        }

        //id + pw 둘 다 입력 받은 경우
        else{
            connection.query(`SELECT password FROM broccoli.users where id = '${id}';`, (error, result)=>{
                if(error)   return res.send({"statusCode" : 400, "isAvailable" : false, "message" : error});
                //해싱값과 비교하여 비밀번호가 일치하는지 확인
                bcrypt.compare(pw, result[0].password, (err, isMatch) => {
                    if(err)     return res.send({"statusCode" : 400, "isAvailable" : false, "message" : err});
                    if(!isMatch)return res.send({"statusCode" : 200, "isAvailable" : false, "message" : "ID 또는 Password가 일치하지 않습니다."});
                    
                    res.send({"statusCode" : 200, "isAvailable" : true, "message" : "로그인 성공"});
                })
            })
        }

    },
    

    insertUser : async(req, res)=>{
        let {id, password, email, name, phone, latitude, longitude, role} = req.body;
        const profile_image = req.file ? req.file.filename : null;
        
        // 비밀번호 해싱
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if(err) return res.send({"statusCode" : 400, "message" : err});
            const sql = `INSERT INTO broccoli.users
            VALUES(
                '${id}',
                '${hash}',
                '${email}',
                '${name}',
                '${phone}',
                '${profile_image}',
                ${latitude},
                ${longitude},
                '${role}'
            );`
            connection.query( sql, (error, rows) =>{
                    if(error) return res.send({"statusCode": 400, "message": "입력 규격이 맞지 않습니다." + error });
                    res.send({"statusCode" : 200, "message" : "회원가입 완료"});
                }
            )
        });


        
    },

    deleteUser: async(req, res)=>{
        const id = req.params.id;
        const pw = req.params.pw;
        connection.query(`SELECT password FROM broccoli.users where id = '${id}';`, (error, result)=>{
            if(error)   return res.send({"statusCode" : 400, "isAvailable" : false, "message" : error});
            bcrypt.compare(pw, result[0].password, (err, isMatch) => {
                if(err)     return res.send({"statusCode" : 400, "message" : err});
                if(!isMatch)return res.send({"statusCode" : 200, "isAvailable" : false, "message" : "ID 또는 Password가 일치하지 않습니다."});
            })
            
            connection.query(`DELETE FROM broccoli.users where id='${id}';`, (err, rows)=>{
                if(err)     return res.send({"statusCode" : 400, "isAvailable" : false, "message" : err});
                else        return res.send({"statusCode" : 200, "isAvailable" : true, "message" : "회원탈퇴가 완료되었습니다."});
            })
        })
    }


}

module.exports = broccoliCtrl;