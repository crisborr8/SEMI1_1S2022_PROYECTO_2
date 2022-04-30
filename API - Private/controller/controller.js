const db = require('../db/db')
const aws = require('aws-sdk')
const s3 = new aws.S3({
    region: process.env.REGION,
    accessKeyId: process.env.KEY,
    secretAccessKey: process.env.SECRET_KEY,
})
const controller = {}

controller.login = async (req, res) => {
    let usr = req.body.usr
    let psw = req.body.psw
    db.query(`SELECT * FROM USUARIO WHERE username = '${usr}' AND contra = '${psw}'`,
        async (err, result) => {
        if (err) {
            console.log(err)
            return res.status(200).send({ msg: 'true' })
        }
        return res.status(200).send(result[0])
    })
}

controller.new_criminal = async (req, res) => {
    let nombre = req.body.nombre
    let delito = req.body.delito
    let recompensa = req.body.recompensa
    let peligro = req.body.danger
    let pais = req.body.ubicacion
    let fotos = req.body.fotos
    db.query(`INSERT INTO CRIMINAL (name, delito, recompensa, peligrosidad, pais)
     VALUES ('${nombre}', '${delito}', ${recompensa}, ${peligro}, '${pais}')`,
        async (err, result) => {
        if (err) {
            console.log(err)
            return res.status(200).send({ msg: 'true' })
        }
        await subir_foto(fotos, nombre)
        return res.status(200).send({ msg: 'false' })
    })
}

const subir_foto = async(foto, nombre) => {
    let name = "Fotos_Perfil/" + nombre + "-" + (Math.round(Date.now()/1000)) + ".jpg"
    console.log(name)
    let buff = new Buffer.from(foto, 'base64');
    const params = {
        Bucket: "tarea2-201700532",
        Key: name,
        Body: buff,
        ContentType: "image"
    };
    s3.upload(params, function async(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data.Location)
            db.query(`INSERT INTO PHOTO (nombre, idcriminal) SELECT '${data.Location}', idcriminal from CRIMINAL WHERE name = '${nombre}'`,
                async (err, result) => {
                if (err) {
                    console.log("Error db")
                    console.log(err)
                }
            })
        }
    })
}

controller.get_criminales = async (req, res) => {
    db.query('SELECT * FROM CRIMINAL',
        async (err, result) => {
        if (err) {
            console.log(err)
            return res.status(200).send({ msg: 'true' })
        }
        return res.status(200).send({ msg: 'false', criminales: result })
    })
}

controller.get_criminal = async (req, res) => {
    let id = req.body.id
    let criminal = {
        nombre: '',
        delito: '',
        recompensa: '',
        danger: '',
        ubicacion: '',
        fotos: ''
    }
    db.query(`SELECT * FROM CRIMINAL WHERE idcriminal =  ${id}`,
        async (err, result) => {
        if (err) {
            console.log(err)
            return res.status(200).send({ msg: 'true' })
        }
        criminal.nombre = result[0].name
        criminal.delito = result[0].delito
        criminal.recompensa = result[0].recompensa
        criminal.danger = result[0].peligrosidad
        criminal.ubicacion = result[0].pais
        db.query(`SELECT nombre FROM PHOTO WHERE idcriminal =  ${result[0].idcriminal}`,
            async (err, result) => {
            if (err) {
                console.log(err)
            }
            criminal.fotos = result
            return res.status(200).send({ msg: 'false', criminales: criminal })
        })
    })
}

controller.edit_criminal = async (req, res) => {
    let id = req.body.id
    let nombre = req.body.nombre
    let delito = req.body.delito
    let recompensa = req.body.recompensa
    let danger = req.body.danger
    let pais = req.body.pais
    db.query(`UPDATE CRIMINAL SET name = '${nombre}', delito = '${delito}', recompensa = ${recompensa}, peligrosidad = ${danger}, pais = '${pais}' WHERE idcriminal = ${id}`,
        async (err, result) => {
        if (err) {
            console.log(err)
            return res.status(200).send({ msg: 'true' })
        }
        return res.status(200).send({ msg: 'false' })
    })
}

module.exports = controller