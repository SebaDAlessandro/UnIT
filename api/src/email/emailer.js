const nodemailer = require('nodemailer');

//CREAR TRANSPORTER -> TENEMOS QUE ESPECIFICAR A NODEMAILER QUE TIPO DE 
// CONEXION VAMOS A UTILIZAR

const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e9850001e3f0b7",
          pass: "5568cbcab5ce8e"
        }
      });
      return transport; // nos retorna la conexión
}
// funcion que dispara el correo, necesita el transporte que va a usar
const sendMail = async () => {
    const transporter = createTrans();
    const info = await transporter.sendMail({
        from:'"Fred Foo" <foo@exaple.com>', // desde donde lo envia unit@empresa.com
        to:['bar@example.com', 'baz@example.com'], // quienes lo reciben 
        subject: 'Hello', // asusto del mensaje
        html: '<b>Hello world?</b>' // html body, cuerpo del mensaje
    });

    console.log("Menssage send: %s", info.messageId);
    return
}

exports.sendMail = () => sendMail()