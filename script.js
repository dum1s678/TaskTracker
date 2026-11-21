const issue = document.getElementById('issue')
const place = document.getElementById('place')
const category = document.getElementById('category')
const addAplication = document.getElementById('addApplication')
const listApplication = document.getElementById('listApplication')
const issueMessage = document.getElementById('issue_message')
const placeMessage = document.getElementById('place_message')
const categoryMessage = document.getElementById('category_message')

const tickets = [
    {title: "Проектор не включается", room: "203", category: "Оборудование", done: false},
    {title: "Не закрывается окно", room: "105", category: "Аудитория", done: false},
    {title: "В коридоре не горит свет", room: "Коридор, 2-ой этаж", category: "Другое", done: true}
]

function renderApplication() {
    listApplication.innerHTML = ""
}