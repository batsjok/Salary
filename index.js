function hesap() {
    const brut = parseFloat(document.getElementById("brut").value);
    let newValue;
    let vergi = 0;
    let Voran = 0.15;
    let matrah = 0;
    let ogv = 0;
    let dv = 0;
    let sgv = 0;
    let issiz_sg = 0;
    let sgkIsci = 0;
    let isverenpay = 0;
    let Pek = 0;
    const asgari = 11250;
    let sgkTaban = asgari;
    let sgkTavan = asgari * 7.5;

    // ssk hesabı
    // alert(brut);
    if (brut < asgari ) {
        document.getElementById("message").innerHTML = "Geçersiz Değer";
    }
    else {
        if (brut > sgkTavan) {
            pek = sgkTavan;
        }
        else {
            pek = brut;
        };
        // alert(pek);
        if (brut > 0) {
            sgkIsci = pek * 0.14;
            isverenpay = pek * 0.155;
        }
        else {
            sgkIsci = 0;
            isverenpay = 0;
        };
        // alert(sgkIsciPayi);


        if (brut > asgari) {
            matrah = ((brut - asgari));
            ogv = matrah * 0.14;
            dv = matrah * 0.09;
            sgv = matrah * 0.25;
            issiz_sg = matrah * 0.07;
            vergi = ogv + dv + sgv + issiz_sg;

        } else {
            vergi = 0;
        };
        newValue = brut - vergi;

        document.getElementById("sskisci").innerHTML = "SSk Kesintisi:  " + sgkIsci.toFixed(2);
        document.getElementById("net").innerHTML = "Net MAAŞINIZ:  " + newValue.toFixed(2);
        document.getElementById("kes").innerHTML = "Toplam KESİNTİ:  " + vergi.toFixed(2);


    }
    if (brut > sgkTavan) {
        pek = sgkTavan;
    }
    else {
        pek = brut;
    };
    // alert(pek);
    if (brut > 0) {
        sgkIsci = pek * 0.14;
        isverenpay = pek * 0.155;
    }
    else {
        sgkIsci = 0;
        isverenpay = 0;
    };
    // alert(sgkIsciPayi);


    if (brut > asgari) {
        matrah = ((brut - asgari));
        ogv = matrah * 0.14;
        dv = matrah * 0.09;
        sgv = matrah * 0.25;
        issiz_sg = matrah * 0.07;
        vergi = ogv + dv + sgv + issiz_sg;

    } else {
        vergi = 0;
    };
    newValue = brut - vergi;

    document.getElementById("sskisci").innerHTML = "SSk Kesintisi:  " + sgkIsci.toFixed(2);
    document.getElementById("net").innerHTML = "Net MAAŞINIZ:  " + newValue.toFixed(2);
    document.getElementById("kes").innerHTML = "Toplam KESİNTİ:  " + vergi.toFixed(2);

}
