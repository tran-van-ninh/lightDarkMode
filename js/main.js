window.$ = document.querySelector.bind(document);

let input = $('input');
let body = $('body');
let object = "";

if(localStorage.getItem('status') === 'true'){
    body.classList.add('dark');
    input.checked = true;
}
input.addEventListener('change', function(){
    // if([input][0].checked){
    //     body.classList.add('dark');
    // }else{
    //     body.classList.remove('dark');
    // }
    //[input][0].checked ? body.classList.add('dark') : body.classList.remove('dark');
    let isChecked = input.checked;
    if (isChecked) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    // Lưu trạng thái vào localStorage
    localStorage.setItem('status', isChecked);
    
});