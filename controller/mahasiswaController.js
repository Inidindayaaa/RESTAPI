import db from '../koneksi.js'

export const getMahasiswa = (req,res) => {
    // const kelas = req.query.kelas
    const sql = 'SELECT * FROM mahasiswa';
    db.query(sql, (error, result) => {
        res.send(result)
    })
}

//http:localhost:3000
//localhost:3000//find?nim

export const getMahasiswaBynim = (req,res) => {
    const nim = req.query.kelas
    const sql = 'SELECT * FROM mahasiswa WHERE nim = ${nim}';
    db.query(sql, (error, result) => {
        res.json(result)
    })
}


export const createMahasiswa = (req, res) => {
    const {nama_lengkap, kelas, alamat} = req.body
const sql = "INSERT INTO mahasiswa (nama_lengkap, kelas, alamat) VALUES (?,?,?,?)"
db.query(sql[nama_lengkap, kelas, alamat], (error, result) =>{
    if(error){
        //jika terdspst eror
        res.status(400)
        res.send(error)
        //jika tidak ada errper
    }
    })
    res.json(result)
}


export const updateMahasiswa = (req, res) => {
    const nim = req.query.nim;
    
    const{nama_lengkap, alamat} = req.body;
    if(nama_lengkap ||  kelas || alamat) {
        const query = 'UPDATE mahasiswa SET nama_lengkap = *${nama_lengkap}*, kelas = *${kelas}*, alamat = *${alamat}* WHERE nim =  ${nim}';
        db.query(query, (error, result) => {
            if(error) res.status(400).send(error.massage);
            res.json(result);
        })
    }
}