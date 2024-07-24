let obj = {
    
    x: 20,
    y: 30,
    fn: function(){
        const arrow = () =>{
            console.log(this.x, this.y);
        }
        arrow();
       

    }
   

}
 obj.fn();
