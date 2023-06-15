//ENTER
const input = document.querySelector('.input')
input.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        addNewWord()
    }
})
    const container2 = document.querySelector('.container2')
//КНОПКА
    const button = document.querySelector('.button');
    button.addEventListener('click', addNewWord)

//ФУНКЦИЯ 
function addNewWord() {
    const container2 = document.querySelector('.container2')
    const indexes = document.querySelectorAll('.index')
    const input = document.querySelector('.input')

    const russianDiv = document.createElement('div')
    const russianFull = document.createElement('div')
    const russianIndex = document.createElement('span')
    const translateDiv = document.createElement('div')
    const transleteFull = document.createElement('div')
    const translateIndex = document.createElement('span');
    const deleteNew = document.createElement('span')
    deleteNew.className = ('delete-new')

    translateDiv.className = 'translate'
    translateDiv.innerText = slice(translateRuEn (input.value))
    translateIndex.className = 'index2'
    transleteFull.innerText = translateRuEn(input.value);
    transleteFull.className = 'translete-full'
    translateIndex.innerText = indexes.length + 1

    russianFull.innerText = input.value;
    russianFull.className = 'russian-full'
    russianDiv.className = 'russian';
    russianDiv.innerText = slice(input.value);
    russianIndex.className = 'index';
    russianIndex.innerText = indexes.length + 1
    
    //Подсказка
    russianDiv.addEventListener('mouseover', () => {
        russianFull.style.display = 'block'
    })
    russianDiv.addEventListener('mouseleave', () => {
        russianFull.style.display = 'none'
    })

    translateDiv.addEventListener('mouseover', () => {
        transleteFull.style.display = 'block'
    })
    translateDiv.addEventListener('mouseleave', () => {
        transleteFull.style.display = 'none'
    })

function slice(str) {
    if (str.length > 6) {
      return `${str.slice(0, 6)}...`;
    }
    return str;
  }

    translateDiv.prepend(translateIndex)
    translateDiv.append(deleteNew)
    russianDiv.prepend(russianIndex)

    const div = document.createElement('div')
    div.className = 'superDiv'
    div.append(russianDiv, russianFull, translateDiv, transleteFull)
    container2.append(div)
    input.value = '';

}

//ФУНКЦИЯ переводчик
function translateRuEn (str) {
    const arrayList = [["а", "a"], ["б", "b"], ["в", "v"], ["г", "g"], ["д", "d"], ["е", "e"], ["ё", "yo"], ["ж", "zh"],
    ["з", "z"], ["и", "i"], ["й", "j"], ["к", "k"], ["л", "l"], ["м", "m"], ["н", "n"], ["о", "o"], ["п", "p"], ["р", "r"], 
    ["с", "s"], ["т", "t"], ["у", "u"], ["ф", "f"], ["х", "h"], ["ц", "c"], ["ч", "ch"], ["ш", "w"], ["щ", "shh"], ["ъ", "' '"],
    ["ы", "y"], ["ь", "'"], ["э", "e"], ["ю", "yu"], ["я", "ya"],

    ["А", "A"], ["Б", "B"], ["В", "V"], ["Г", "G"], ["Д", "D"], ["Е", "E"], ["Ё", "YO"], ["Ж", "ZH"],
    ["З", "Z"], ["И", "I"], ["Й", "J"], ["К", "K"], ["Л", "L"], ["М", "M"], ["Н", "N"], ["О", "O"], ["П", "P"], ["Р", "R"], 
    ["С", "S"], ["Т", "T"], ["У", "U"], ["Ф", "F"], ["Х", "H"], ["Ц", "C"], ["Ч", "CH"], ["Ш", "W"], ["Щ", "SHH"], ["Ъ", "' '"]
    ["Ы", "Y"], ["Ь", "'"], ["Э", "E"], ["Ю", "YU"], ["Я", "YA"], [" ", " "]]
  

    let result = '';
	for (let i = 0; i < str.length; i++) {
		if (arrayList[str[i]] == undefined) {
			result = result + str[i];
		} else {
			result = result + arrayList[str[i]];
		}
	}
	return result;
    // function getEnLit(lit){
    //     let s = arrayList.find(i=>i[0]===lit)
    //     return s != undefined ? s[1] : "-" 
    // }
    // return [...str].map(getEnLit).join("")
}

container2.addEventListener('click', (e) => {
    if(e.target.className === 'delete-new'){
        e.target.closest('.superDiv').remove()
        Array.from(container2.children).forEach((element, index) => {
            console.log(element)
        element.querySelector('.index').innerText = index + 1
        element.querySelector('.index2').innerText = index + 1
        
        });
    }
});