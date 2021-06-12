const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => { 
  event.target.classList.add('hide'), 0})
}


function dragend(event) {
  event.target.className = 'item';
}

function dragover(event) {
  event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add('hovered');
}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
}

function random_color() {
  setInterval(() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length)
        color += hex[random];
    }
    document.querySelector('.item').style.backgroundColor = `${color}`
    document.querySelector('.item').style.border = `1px solid ${color}`
    document.querySelector('.item').style.boxShadow = `2px 3px 10px ${color}`
  }, 1500);
}

random_color()