<template>
    <div class="wrapper">
        <Navbar :navbar="navbar" :style="{fontFamily:'arial',borderBottom:'3px solid #09f'}"></Navbar>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
    </div>
</template>
<script>
import Navbar from './Navbar';
export default {
    name:'Page',
    data(){
        return {
            navbar:{
                // defaultAlign:'right',
                backgroundColor:'#1c1e30',
                // color:'#f30',
                activeLinkColor:'#f90',
                // hoverColor:'#99f',
                // brand:'Vue<span style="color:#ccc">Extra</span>',
                // shadow:true,
                navItems:[
                    {
                        name:'Home',
                        href:"home",
                        class:'active',
                    },
                    {
                        name:'Readme',
                        href:"https://github.com/saurabhdaware",
                        router:false,
                    }
                    
                ]

            }
        }
    },
    mounted(){
        setTimeout(()=>{
        },2000);
    },
    components:{
        Navbar
    }
}
</script>
<style scoped>

</style>

