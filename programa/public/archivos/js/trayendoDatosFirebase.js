/**
 * @Date:   2019-07-05T21:30:25-03:00
 * @Last modified time: 2019-07-06T00:09:14-03:00
 */
  var app = new Vue({
    el: '#app',
    data: {
      listaDeJugadores: [] ,
      database: db
    },
    methods: {
      cargarDatosDeBd: function(){

        this.database.collection('Jugadores').get().then(( snapshot ) => {
          snapshot.docs.forEach(doc =>{
             var jugador;
             
             jugador = doc.data();
             //agrego al array
             this.listaDeJugadores.push(jugador);
           })
          })

      },
      //otro metodo
    },
    created(){
      this.cargarDatosDeBd();
    },
  })
