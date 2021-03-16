import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js'

const paginaIncio = async (req, res) =>{//req - lo que enviamos : res - lo que express nos responde
    // res.send('Hola Mundo');   
    //res.render();
    //res.json({
    //  id:1
    //});
    //res.send('Inicio');
    const promiseDB =[];

    promiseDB.push( Viaje.findAll ({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll ({limit: 3 }) ); 

    try {
        //Solo nos va traer 3 viajes finAll limit
      //  const viajesw= await Viaje.findAll({limit: 3});
        //const testimoniales= await Testimonial.findAll({limit: 3});
        //Consultar 3 viajes del modelo viaje 
        const resultado = await Promise.all(promiseDB);
        
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
           viajes: resultado[0],
           testimoniales: resultado[1] ,
        });
    }catch(error){
       console.log(error);
    }
}

const paginaNosotros = (req, res) =>{//req - lo que enviamos : res - lo que express nos responde   
    //const viajes = 'Viaje a Alemania';
    res.render('nosotros',{  
        //textoViajes: viajes //se puede utilizar asi
        //viajes
        pagina: 'Nosotros'

    });

}

const paginaViajes =  async (req, res) =>{//req - lo que enviamos : res - lo que express nos responde
   //consultar bd   

   const viajes = await Viaje.findAll();

   console.log(viajes);
   
   
    res.render('viajes',{  
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const paginaTestimonios = async (req, res) =>{//req - lo que enviamos : res - lo que express nos responde
    
      try {
        //finAll(); nos a traer todos los testimoniales
        const testimoniales = await Testimonial.findAll();
        

        res.render('testimoniales',{  
            pagina: 'Testimoniales',
            //pasarlo asia la vista
            testimoniales

       });
      }catch(error){
          console.log(error)

      }

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) => {
    //console.log(req.params.viaje);
   const {viajeid} = req.params;

   try{
     const viaje = await Viaje.findOne({where : {slug:viajeid}})

     res.render('viaje', {
         pagina: 'Información Viaje',
         viaje
     })
   }catch(error){
     console.log(error);
   }
}
export {
    paginaIncio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}