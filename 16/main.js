class First {
    hello() {
        console.log('Привет я метод родителя!')
    }
}


class Second extends First {
    test() {
        super.hello()
        console.log('А я наследуемый метод!')
    }

}
const secondClass = new Second
secondClass.test()