function bmi () {
    var weightBHO = Number(document.getElementById("weightBHO").value);
    var weightNUG = Number(document.getElementById("weightNUG").value);
    var volumeOIL = Number(document.getElementById("volumeOIL").value);
    var bhopercent = Number(document.getElementById("bhopercent").value);
    var nugpercent = Number(document.getElementById("nugpercent").value);
    var capsize = Number(document.getElementById("capsize").value);
    var bhocost = Number(document.getElementById("bhocost").value);
    var nugcost = Number(document.getElementById("nugcost").value);
    var oilcost = Number(document.getElementById("oilcost").value);
    var MGs_total = ((bhopercent * 10) * weightBHO) + ((nugpercent * 10) * weightNUG);
    var caps_total = (volumeOIL * 30) / capsize;
    var mgpercap = MGs_total / caps_total;
    var mltotal = volumeOIL * 30;
    var soylecithin = volumeOIL * 0.375;
    var soyfrac = new Fraction(soylecithin);
    var costpercap = ((bhocost + nugcost + oilcost) / caps_total);
    var costperml = ((bhocost + nugcost + oilcost) / mltotal);
    var totalcost = (bhocost + nugcost + oilcost);
    document.getElementById("soylecithin").innerHTML = "Optionally add " +  soyfrac.toString() + " tsp. of lecithin (soy/sunflower) during infusion process.";
    document.getElementById("MGs_total").innerHTML = "" + MGs_total + "mgs total";
    document.getElementById("caps_total").innerHTML = "" + Math.floor(caps_total) + " caps";
    document.getElementById("mgpercap").innerHTML = "" +  mgpercap + " mg/cap";
    document.getElementById("mltotal").innerHTML = "" +  mltotal + " mL";
    document.getElementById("costpercap").innerHTML = "$" + costpercap + "/cap";
    document.getElementById("costperml").innerHTML = "$" + costperml + "/mL";
    document.getElementById("totalcost").innerHTML = "$" + totalcost + " /batch";
    }
