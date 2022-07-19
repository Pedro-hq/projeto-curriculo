function calcula(op){
    switch (op) {
        case 'op1':
            quant = document.getElementById(op).value
            prect1 = 25 * quant
            pt1.innerHTML = "R$" + prect1 + ",00"
            break;
        case 'op2':
            quant = document.getElementById(op).value
            prect2 = 400 * quant
            pt2.innerHTML = "R$" + prect2 + ",00"
            break;
        case 'op3':
            quant = document.getElementById(op).value
            prect3 = 200 * quant
            pt3.innerHTML = "R$" + prect3 + ",00"
            break;
    }
    let precttotal = 0
    if (prect1 != 0) {
        precttotal += prect1
    }
    if (prect2 != 0){
        precttotal += prect2
    }
    if (prect3 != 0){
        precttotal += prect3
    }
    ptotal.innerHTML = "R$" + precttotal + ",00"
}