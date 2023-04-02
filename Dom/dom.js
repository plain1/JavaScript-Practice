document.body.firstElementChild
document.body.children[0]
document.body.childNodes[1]

document.body.lastElementChild
document.body.children[1]

document.body.lastElementChild.lastElementChild


let table = document.getElementById('age-table')

table.getElementsByTagName('label')
document.querySelectorAll('#age-table label')

table.rows[0].cells[0]
table.getElementsByTagName('td')[0]
table.querySelector('td')

let form = document.getElementsByName('search')[0]
document.querySelector('form[name="search"]')

form.getElementsByTagName('input')[0]
form.querySelector('input')

let inputs = form.querySelectorAll('input')
inputs[inputs.length -1 ]


