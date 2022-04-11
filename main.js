// const ul = document.querySelector('.items');

// //ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.innerHTML = '<h3 style= "color:green"> Hello </h3>';
// ul.children[1].innerHTML = '<h3 style ="color:yellow"> hello </h3>';
// //ul.secondElementChild.innerHTML = '<h3 style= "color:yellow"> Hello </h3>';


// const ul=document.getElementsByClassName('items');
// const wl=document.getElementById('email');
// wl.style.background='black';
// console.log(wl)


// ul.firstElementChild.textContent='Hello';

// ul.firstElementChild.style.background='green';

// ul.children[1].innerText='Brad';

// ul.children[1].style.background='yellow';

// ul.lastElementChild.innerHTML='<h1>Hello</h1>';

// const btn=document.querySelector('.btn');

// btn.style.background='red';



// const btun = document.querySelector('.btn')
// btun.addEventListener('click', (e) => {
//     e.preventDefault(); 
//     document.querySelector('#my-form').style.background = '#ccc' 
//     document
//     console.log('click')
// })
// btun.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     console.log('hello')
// })
// btun.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     console.log('hi')
// })




const myform = document.querySelector('#my-form')
const nameinput = document.querySelector('#name')
const msg = document.querySelector('.msg')
 const userList = document.querySelector('#users')
 const emailinput = document.querySelector('#email')

myform.addEventListener('submit', onSubmit);

    function onSubmit(e){
      e.preventDefault();
    console.log(nameinput.value);
    console.log(emailinput.value);
if(nameinput.value === '' || emailinput.value === '')
    {   
        console.log('anything')
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000);
    } 
    else 
    {
        console.log('success');
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`))
        userList.appendChild(li)

        nameinput.value = ''
        emailinput.value = ''
    }
   
    }
