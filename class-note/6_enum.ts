enum Shoes{
    Nike,
    Adidas
}

const myShoes = Shoes.Nike;

enum Shoes2{
    Nike = "나이키",
    Adidas = "아디다스"
}

// ex 드롭다운 등
enum Answer {
    Yes = 'yes',
    No = 'no'
}
function askQuestion(answer:string){
    if(answer===Answer.Yes){
        console.log("정답입니다.")
    }
    if(answer===Answer.No){
        console.log('오답입니다.')
    }
}