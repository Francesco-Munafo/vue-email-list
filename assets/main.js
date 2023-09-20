const { createApp } = Vue

createApp({
  data() {
    return {

        emailList:[],

    }
  },
  mounted(){

   for (let i = 0; i < 10; i++) {
        axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        console.log(response);

        this.emailList.push(response.data.response);   
    }) 

        
    }

    console.log(this.emailList);

    
    
  },
  methods(){
    
  }
}).mount('#app')