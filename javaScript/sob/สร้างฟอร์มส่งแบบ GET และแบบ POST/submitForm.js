function submitForm(method) {
    var form = (method === 'get') ? document.getElementById('myForm')
    : document.getElementById('myFormPost');
    form.submit();
}
