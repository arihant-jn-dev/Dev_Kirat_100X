class Rectangle{
    constructor(h,w,color){
        this.h = h;
        this.w = w;
        this.color = color;
    }
    area(){
        return this.h*this.w;
    }
    paint(){
        console.log(this);
        console.log(`color is ${this.color}`);
    }
}
//create obj for class 
const obj_rect = new Rectangle(2,4,'Red'); // instance/object of Rectangle class
console.log(obj_rect.area());
obj_rect.paint();

/**
 * 
 * this : in a class refers to the object instance that the class creates.(gives you the access of current obj of class)
 */