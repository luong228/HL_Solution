'use strict'

const util = require('util')
const mysql2 = require('mysql2')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM joke'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    like: (req, res) => {
        let idJoke = parseInt(req.params.idJoke);
        let sql = 'UPDATE joke SET `like` = `like` + 1 WHERE idJoke = ?'
        db.query(sql,[idJoke], (err, response) => {
            if (err) throw err
            res.status(200).json({
                message: 'Like joke successfully',
            })
        })
    },
    dislike: (req, res) => {
        let idJoke = parseInt(req.params.idJoke);
        let sql = 'UPDATE joke SET `dislike` = `dislike` + 1 WHERE idJoke = ?'
        db.query(sql,[idJoke], (err, response) => {
            if (err) throw err
            res.status(200).json({
                message: 'Dislike joke successfully',
            })
        })
    }
}