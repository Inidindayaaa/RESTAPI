import express, {Router}from "express"
const app = express()
import router from "./routes/route.js"

// app.get("/find", (req,res) => {
    // const kelas = req.query.kelas
    // const sql = 'SELECT * FROM mahasiswa WHERE kelas = $(kelas)'
    // db.query(sql, (error, result) => {
        // res.json(result)
    // })
// })
// 
// 
// app.post("/create",(req,res) => {
    // const{nama_lengkap, kelas, alamat} = req.body
    // const sql = "INSERT INTO mahasiswa (nama_lengkap, kelas, alamat) VALUES (?,?,?,?)"
    // db.query(sql[nama_lengkap, kelas, alamat], (error, result) =>{
        // if(error){
            // jika terdspst eror
            // res.status(400)
            // res.send(error)
// 
            // jika tidak ada errper
            // 
        // }
        // res.json(result)
    // })
// })
// 
// 
// app.delete("/delete", (req, res)=>{
    // const kelas = req.query.kelas
    // const sql ="DELETE FROM mahasiswa WHERE kelas = ?"
    // db.query(sql,[kelas], (error, result)=> {
        // if(error){
            // res.ststus(400)
            // res.send(error)
        // }
        // res.status(200);
        // res.json("data berhasil di hapus")
    // })
// })
// 
// app.put("/update", (req,res) => {
    // const kelas = req.query.kelas;
// 
    // const{nama_lengkap, alamat} = req.body;
    // if(nama_lengkap ||  kelas || alamat) {
        // const query = 'UPDATE mahasiswa SET nama_lengkap = *${nama_lengkap}*, kelas = *${kelas}*, alamat = *${alamat}* WHERE nim = ${nim}';
        // db.query(query, (error, result) => {
            // if(error) res.status(400).send(error.massage);
// 
            // res.json(result);
        // })
    // }
// })
// 
// 
app.get("/", router)
app.get("/find", router)
app.post("/create", router)
app.put("/update", router)








app.listen(3000,() => {
    console.log("server berjalan di https://localhost:3000")
})