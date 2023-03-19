class Animal{
	constructor(name, age, color, legs){
		this.name = name
		this.age  = age
		this.color= color
		this.legs = legs
	}
	makeSound(){
		console.log("unknown animal sound")
	}
}

class Dog extends Animal{
	constructor(name,age,color,legs){
		super(name,age,color,legs)
		this.sound = "hav hav"
	}
	makeSound(){
		console.log(this.sound)
	}
}

class Cat extends Animal{
	constructor(name,age,color,legs){
		super(name,age,color,legs)
		this.sound = "meow"
	}
	makeSound(){
		console.log(this.sound)
	}
}

const dog1 = new Dog("dog", 3, "black", 4)
const cat1 = new Cat("cat", 1, "grey", 4)
const dragon = new Animal("dragon", 50, "blue", 8)
dog1.makeSound()
cat1.makeSound()
dragon.makeSound()