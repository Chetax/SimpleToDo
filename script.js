const Addbtn = document.getElementById('Addbtn');
const task = document.getElementById('task');
const date = document.getElementById('date');
const maintable = document.getElementById('maintable');
var deletecount = 1;

Addbtn.addEventListener('click', () => {
    deletecount++;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const data = document.createTextNode(task.value);
    const Inputdate = document.createTextNode(date.value);
    const Tasktd = document.createElement('td');
    Tasktd.appendChild(data);
    const datetd = document.createElement('td');
    datetd.appendChild(Inputdate);
    const Checktd = document.createElement('td');
    Checktd.appendChild(checkbox);

    const button = document.createElement('button');
    button.type = 'button';
    button.id = `${deletecount}`;
    button.setAttribute('class', 'mt-3 btn btn-danger removetask');
    button.textContent = 'Remove';
    const buttontd = document.createElement('td');
    buttontd.appendChild(button);

    const tr = document.createElement('tr');

    tr.appendChild(Tasktd);
    tr.appendChild(datetd);
    tr.appendChild(Checktd);
    tr.appendChild(buttontd);
    maintable.appendChild(tr);

    task.value = '';
    date.value = '';
});

document.addEventListener('click', (e) => {
   if(e.target.classList.contains("removetask"))
   {
const row=e.target.closest('tr');
row.remove();
   }
});
