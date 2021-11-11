<template>
  <div class="ex2" id="cabezera_background">
    
    <div id="espacio" ></div>
    <v-row >
      <v-column v-for="(visita, i) in visitas" :key="i" class="ma-16">
        <v-card class="mx-20" max-width="300">
          <v-img
            :src="visita.foto"
            height="200px"
          ></v-img>

          <v-card-title> {{ visita.Nombre }} </v-card-title>

          <v-card-subtitle> {{ visita.Cedula }} </v-card-subtitle>

          <v-card-subtitle> {{ visita.Ciudad}} </v-card-subtitle>
          

              <v-file-input   
                show-size 
                solo
                label="Foto del visitante"   
                @change="ClickImagen"
                accept=".png"
                
                class="inputVuetify"
                >
            </v-file-input>

            <v-btn class="mr-4" color="success darken-1" @click="insertar(visita._id)">
          Guardar F
        </v-btn> 

        </v-card>
      </v-column>
    </v-row >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      
    imagenes:[],
    imagen:null,
      bd: 0,
      visitas: [],
      
      
    };
  },
  
  created() {
    this.listarVisitas();
    },

   methods: {

     ejecuta(){
        window.location.href = '/'
        console.log(this.ejecuta)
     },
    listarVisitas(){
       let me = this;
      let header = {headers:{"token":this.$store.state.token}}
      axios.get('visitas', header)
      .then(function(response) {
        console.log(response);
        me.visitas = response.data.visitas;
        console.log(me.visitas)
      })
      .catch(error => {
        alert('no has iniciado', this.ejecuta())
        console.log(error.response)
      });
    },

    ClickImagen(e){
      console.log(e)
      this.imagen=e
      console.log(this.imagen)
    },

    
    async insertar(id){
      console.log(id)
       let header = {headers:{"token":this.$store.state.token}}
      const formData = new FormData();

      formData.append('archivo', this.imagen);
       await axios.post( `visitas/uploadcloud/${id}`,
        formData,header
        
        
      ).then(function(){
       
        this.listarVisitas();
      })
      .catch(function(error){
        console.log(error);
      });

      
    },

    mounted() {
    this.listarVisitas()
   }
  
   
  
   }

};
</script>

<style scoped>
#espacio{
  padding: 50px;
  width: -60px;

}

#cabezera_background{
  background:
  linear-gradient(
  rgba(12, 29, 112, 0.75),
  rgba(35,43,85,0.95));
} 
.inputVuetify{
        margin-left:30px;
        width:250px;
    }

</style>

