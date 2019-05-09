function bmi () {
    var weightBHO = Number(document.getElementById("weightBHO").value);
    var weightNUG = Number(document.getElementById("weightNUG").value);
    var volumeOIL = Number(document.getElementById("volumeOIL").value);
    var bhopercent = Number(document.getElementById("bhopercent").value);
    var nugpercent = Number(document.getElementById("nugpercent").value);
    var capsize = Number(document.getElementById("capsize").value);
    var MGs_total = ((bhopercent * 10) * weightBHO) + ((nugpercent * 10) * weightNUG);
    var caps_total = (volumeOIL * 30) / capsize;
    var mgpercap = MGs_total / caps_total;
    var mltotal = volumeOIL * 30;
    var soylecithin = volumeOIL * 0.375;
    var soyfrac = new Fraction(soylecithin);
    document.getElementById("soylecithin").innerHTML = "Optional addition of " +  soyfrac.toString() + " tsp. of lecithin (soy/sunflower)";
    document.getElementById("MGs_total").innerHTML = "total MGs : " + MGs_total;
    document.getElementById("caps_total").innerHTML = "total caps : " + Math.floor(caps_total);
    document.getElementById("mgpercap").innerHTML = "mgs per cap : " +  mgpercap;
    document.getElementById("mltotal").innerHTML = "total mL : " +  mltotal;
    }
