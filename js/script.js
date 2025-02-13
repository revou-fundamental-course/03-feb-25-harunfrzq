// ini file javascript

console.log('javascript is ready');

function validateform() {
    let input = document.getElementById('main-input');
    console.log(input.value);

    if (input.value =='') {
        alert('Tolong diisi inputan');
    }else{
        ////proses konversi

    let calc = convertTocelcius(input.value);
    ///tampilkan hasil
    document.getElementById('main-result').value = calc;
    document.getElementById('cara-konversi').value = 'Diketahui : C=' + input.value + 'F..';
    console.log('berhasil di eksekusi ')};
}
   let convertTocelcius = (input)=>{
    return input*9/5 +32;
   }
