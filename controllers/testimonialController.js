import { Testimonial } from '../models/Testimoniales.js';   

const guardarTestimoniales = async (req, res) => {

   // console.log(req.body);
    //validar

    const{nombre, correo, mensaje} = req.body;

    const errores = [];
  

    if(nombre.trim() === ''){
        //console.log('El nombre esta vacio');
        errores.push({mensaje : 'El nombre esta vacio'});
    }



    if(correo.trim() ===''){
        errores.push({mensaje : 'El coorre esta vacio'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje : 'El mensaje esta vacio'});
    }

    console.log(errores);
    if(errores.length > 0){

        //Consultar Testimoniales Exitentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista de errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales

        });
    }else{
        //Almacenarlo en la BD
    
    try{
        await Testimonial.create({
            nombre,
            correo,
            mensaje,
        });

        res.redirect('/testimoniales');
    }catch(error){
        console.log(error)
    }
    
    }

}

export{
    guardarTestimoniales            
}