const mongoose = require('mongoose');

class DButil {
     static connectDB(dburl,dbname){
        return new Promise((resolve, reject) =>{
            mongoose.connect(dburl, {
                dbname: dbname
            }).then(()=>{
                resolve('DB connection established');
            }).catch((err)=>{
                if(err) throw err;
                reject('Connection error: ' + err);
            })
        })
    }
};

module.exports = DButil;
