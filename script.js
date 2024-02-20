$(".datepicker").datepicker({ 
    clearBtn: true, 
    format: "dd/mm/yyyy", 
}); 
$(".datepicker").on("change", function() { 
    let pickedDate = $("input").val();
    // console.log(typeof pickedDate)
    $("#showdate").text( 
    `Tanggal Lahir Bayi Anda ${pickedDate} `); 

    let tanggal = new Date();
    let dd = String(tanggal.getDate()).padStart(2, '0');
    let mm = String(tanggal.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = tanggal.getFullYear();
    tanggal = dd + '/' + mm + '/' + yyyy;
    // console.log(typeof tanggal) 
    let tanggalHariIni = new Date(tanggal.split('/')[2],tanggal.split('/')[1]-1,tanggal.split('/')[0]);
    let tanggalLahir = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);
    let tanggalLahirHariKetujuh = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);
    let tanggalLahir_jadwalTepatSatu = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);
    let tanggalLahir_jadwalTepatDua = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);
    let tanggalLahir_jadwalTepatTiga = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);
    let tanggalLahir_jadwalTepatEmpat = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);
    let tanggalLahir_jadwalTepatLima = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);
    let tanggalLahir_jadwalTepatEnam = new Date(pickedDate.split('/')[2],pickedDate.split('/')[1]-1,pickedDate.split('/')[0]);


    let diff = tanggalHariIni.getTime() - tanggalLahir.getTime();
    let dayDiff = diff/ (1000 * 60 * 60 * 24);  


    function convert(tanggalLahir) {
    var date = new Date(tanggalLahir),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
    }

    // console.log(convert(tanggalLahir));
    // console.log(typeof convert(tanggalLahir));
    const tanggalLahirAwal = convert(tanggalLahir.setDate(tanggalLahir.getDate() + 0)); 
    const tanggalLahirAwalKedua = convert(tanggalLahir.setDate(tanggalLahir.getDate() + 7)); 
    const jadwalTepatSatu = convert(tanggalLahir_jadwalTepatSatu.setDate(tanggalLahir_jadwalTepatSatu.getDate() + 30));
    const jadwalTepatDua = convert(tanggalLahir_jadwalTepatDua.setDate(tanggalLahir_jadwalTepatDua.getDate() + 60));
    const jadwalTepatTiga = convert(tanggalLahir_jadwalTepatTiga.setDate(tanggalLahir_jadwalTepatTiga.getDate() + 90));
    const jadwalTepatEmpat = convert(tanggalLahir_jadwalTepatEmpat.setDate(tanggalLahir_jadwalTepatEmpat.getDate() + 90));
    const jadwalTepatLima = convert(tanggalLahir_jadwalTepatLima.setDate(tanggalLahir_jadwalTepatLima.getDate() + 240));
    const jadwalTepatEnam = convert(tanggalLahir_jadwalTepatEnam.setDate(tanggalLahir_jadwalTepatEnam.getDate() + 270));

    if (0 < dayDiff && dayDiff <= 30){
        $( "#info" ).html("<div><h3>Bayi Anda Seharusnya Dilakukan Imunisasi</h3><ul><li>Hepatitis B dapat dimulai tanggal "+ `${tanggalLahirAwal}` +" sampai dengan "+ `${tanggalLahirAwalKedua}` +"</li><li>BCG dapat diberikan mulai tanggal "+ `${tanggalLahirAwal}` +" sampai dengan "+ `${jadwalTepatSatu}` +"</li><li>Polio tetes 1 dapat diberikan mulai tanggal "+ `${tanggalLahirAwal}` +" sampai dengan tanggal "+`${jadwalTepatSatu}`+"</li></ul></div>")
    }else if (dayDiff > 30 && dayDiff <= 60){
        $( "#info" ).html("<div><h3>Bayi Anda Sehrusnya Dilakukan Imunisasi</h3><br><ul><li>DPT-HB-Hib 1 dapat dimulai tanggal "+`${jadwalTepatSatu}`+" sampai dengan tanggal "+ `${jadwalTepatDua}` + "</li><li>Polio Tetes 2 dapat diberikan mulai tanggal "+`${jadwalTepatSatu}`+" sampai dengan "+ `${jadwalTepatDua}` + "</li></ul></div>")
    }else if (dayDiff > 60 && dayDiff <= 90){
        $( "#info" ).html("<div><h3>Bayi Anda Sehrusnya Dilakukan Imunisasi</h3><br><ul><li>DPT-HB-Hib 2 dapat dimulai tanggal "+`${jadwalTepatDua}`+" sampai dengan tanggal "+ `${jadwalTepatTiga}` + "</li><li>Polio Tetes 3 dapat diberikan mulai tanggal "+`${jadwalTepatDua}`+" sampai dengan "+ `${jadwalTepatTiga}` + "</li></ul></div>")
    }else if (dayDiff > 90 && dayDiff <= 120){
        $( "#info" ).html("<div><h3>Bayi Anda Sehrusnya Dilakukan Imunisasi</h3><br><ul><li>DPT-HB-Hib 3 dapat dimulai tanggal "+`${jadwalTepatTiga}`+" sampai dengan tanggal "+ `${jadwalTepatEmpat}` + "</li><li>Polio Tetes 4 dapat diberikan mulai tanggal "+`${jadwalTepatTiga}`+" sampai dengan "+ `${jadwalTepatEmpat}` + "</li><li>Polio Suntik (IPV) dapat diberikan mulai tanggal "+ `${jadwalTepatTiga}` +" sampai dengan tanggal "+`${jadwalTepatEmpat}`+"</li></ul></div>")
    }else if (dayDiff > 240 && dayDiff <= 270){
        $( "#info" ).html("<div><h3>Bayi Anda Sehrusnya Dilakukan Imunisasi</h3><br><ul><li>Campak-Rubella (MR) dapat dimulai tanggal "+`${jadwalTepatLima}`+" sampai dengan tanggal "+ `${jadwalTepatEnam}` + "</li></ul></div>")
    }

}); 