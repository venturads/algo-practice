let app = document.getElementById('app');

function Person(name, age, music) {
    this.name = name;
    this.age = age;
    this.music = music;

    this.greet = () => app.innerHTML= ("Welcome: " + this.name + ", age:" + this.age + ", music: " + this.music[0])
}

person1 = new Person('Kobe', 41, ['rap', 'hip hop', 'jazz']);

person1.greet();