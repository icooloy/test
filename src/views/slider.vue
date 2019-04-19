<template>
  <div class="slider" ref="slider">
    <div class="stepbg" ref="stepbg" :style="{width:width}"></div>
    <div class="step" ref="stepbar" :style="{left:left}">
      <span class="stepbar" ref="stepitem"></span>
      <span class="steptips">{{newstep}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    props:['min','max','step','stepcolor','stepbg'],
    data(){
      return{
        slider:'',        
        stepbar:'',         
        newstep:this.step,
        stepbgwidth:'',
        stepbarleft:'',     
      }
    },
    watch: {
      newstep(val) {
        this.newstep = val
      },
      stepbg(val) {
        var checkcolor = /^#[0-9a-fA-F]{6}$/;
        if (val.match(checkcolor)) {
          this.$refs.slider.style.background= val;
        } 
      },
      stepcolor(val) {
        var checkcolor = /^#[0-9a-fA-F]{6}$/;
        if (val.match(checkcolor)) {
          this.$refs.stepbg.style.background= val;
        } 
      },
    },
    mounted () {
      // document.addEventListener("mousemove", , true);
      // document.addEventListener("mouseup", , true);
      this.slider = this.$refs.slider;
      this.stepbar = this.$refs.stepbar;
      this.$refs.slider.onmousedown = ( e => {
        if (e.target.className == 'slider' || e.target.className == 'stepbg'){
         this.newstep = parseInt(parseInt(e.offsetX) / parseInt(this.$refs.slider.offsetWidth) * parseInt(this.max));
       }
       var eX = e.clientX;
       var eW = parseInt(this.width);
       this.stepbar.onmousemove = ( e => {
        var avg = (e.clientX - eX + eW) / this.$refs.slider.offsetWidth;
        if (e.target.className == 'stepbar'){
          this.newstep = Math.ceil((this.max - this.min) * avg + this.min)
          if(this.newstep > this.max){
            this.newstep = this.max
          }
          if(this.newstep < this.min){
            this.newstep = this.min 
          }
        }
        this.$emit('change', this.newstep);
      });
       this.stepbar.onmouseup = ( e => {
         this.stepbar.onmousemove = this.stepbar.onmouseup = null;
       }); 
     });
    },
    methods:{

    },
    computed:{
      avg(){
        return (this.newstep - this.min) / (this.max - this.min);
      },
      width(){
        return this.slider.offsetWidth * this.avg + 'px';
      },
      left(){
        return this.slider.offsetWidth * this.avg -  this.stepbar.offsetWidth / 2  + 'px';
      }
    }
  }
</script>
<style type="text/css" lang="scss">
.slider {
  position:relative;
  margin:60px auto;
  width:100%;
  height:10px;
  background:#e4e7ed;
  border-radius:5px;
  cursor:pointer;
  .stepbg {
    position:absolute;
    left:0;
    top:0;
    width:112px;
    height:10px;
    border-radius:5px;
    background:#409eff;
  }
  .step {
    position:absolute;
    left:100px;
    top:-12px;
    width:30px;
    height:30px;
    .stepbar {
      width:30px;
      height:30px;
      display:block;
      border-radius:50%;
      border:2px solid #409eff;
      background:rgba(255,255,255,1);
      transition:.2s all;
      
    }
    .steptips{
      position:absolute;
      top:37px;
      left:0;
    }
  }
}
.contrl{
  text-align:left;
  label{
    width:20%;
    display:inline-block;
    input{
      max-width:80%;
    }
  }
}
</style>