
// usage bill conversion
var ENEA = {}; 
  ENEA['C22b'] = [1000,6000,0.555083,533.5181,0.000055,11.3663];
  ENEA['C22a'] = [1000,6000,0.612323,533.5181,0.000551,15.5051];
  ENEA['C21'] = [500,3000,0.692976,533.5181,0.00075,12.7122];
  ENEA['C12b'] = [500,3000,0.537511,57.9208,-0.000794,12.5351];
  ENEA['C12a'] = [500,3000,0.584151,57.9208,-0.000447,17.6844];
  ENEA['C11'] = [200,1200,0.609912,50.9793,-0.00321,17.795];
  ENEA['B23'] = [18000,108000,0.502122,4427.4932,0.000038,16.079];
  ENEA['B22'] = [10000,60000,0.539655,3225.3237,0.000081,16.4569];
  ENEA['B11'] = [18000,108000,0.516711,1992.1949,0.000029,21.4098];

var ENERGA = {};
  ENERGA['C23'] = [1000,6000,0.701943,814.6512,0.000529,13.146];
  ENERGA['C22b'] = [1000,6000,0.643453,814.6512,0.000205,8.7412];
  ENERGA['C22a'] = [1000,6000,0.757053,814.6512,0.000634,11.8397];
  ENERGA['C21'] = [500,3000,0.899375,814.6512,0.000776,9.1296];
  ENERGA['C12w'] = [500,3000,0.620255,77.3742,-0.001125,16.8545];
  ENERGA['C12b'] = [500,3000,0.587055,77.3742,-0.00123,16.259];
  ENERGA['C12a'] = [500,3000,0.650555,77.3742,-0.001017,17.7106];
  ENERGA['C11'] = [200,1200,0.736029,67.8344,-0.005574,19.75];
  ENERGA['B23'] = [18000,108000,0.544507,5361.3356,0.000054,18.3117];
  ENERGA['B22'] = [10000,60000,0.594028,3529.9661,0.000091,17.5445];
  ENERGA['B11'] = [18000,108000,0.546622,2608.9492,0.000025,20.5766];

var PGE = {};
  PGE['C23'] = [1000,6000,0.610823,694.0651,0.000312,12.3433];
  PGE['C22b'] = [1000,6000,0.597958,693.6997,0.000373,10.0312];
  PGE['C22a'] = [1000,6000,0.705438,693.6997,0.000497,11.3533];
  PGE['C21'] = [500,3000,0.786155,693.3342,0.000538,8.8039];
  PGE['C12w'] = [500,3000,0.553936,52.2036,-0.000158,11.3741];
  PGE['C12n'] = [500,3000,0.541916,52.2036,-0.00015,11.5877];
  PGE['C12b'] = [500,3000,0.548712,55.1847,-0.00013,11.336];
  PGE['C12a'] = [500,3000,0.631592,55.1847,0.000029,14.2748];
  PGE['C11'] = [200,1200,0.617582,47.1622,-0.001133,11.4572];
  PGE['B23'] = [18000,108000,0.463399,4353.1559,0.000028,12.8882];
  PGE['B22'] = [10000,60000,0.53359,3019.1356,0.000057,14.1452];
  PGE['B11'] = [18000,108000,0.497196,1432.9593,0.000016,17.1612];

var RWE = {};
  RWE['C23'] = [1000,6000,0.602579,470.9314,0.000148,21.5049];
  RWE['C22b'] = [1000,6000,0.579999,470.9314,0.000196,17.9509];
  RWE['C22a'] = [1000,6000,0.634179,470.9314,0.000569,21.7141];
  RWE['C21'] = [500,3000,0.673628,453.7714,0.00089,15.3477];
  RWE['C12b'] = [500,3000,0.595467,67.269,-0.000314,20.4022];
  RWE['C12a'] = [500,3000,0.625587,67.269,-0.000282,20.6935];
  RWE['C11'] = [200,1200,0.651751,57.9813,-0.002735,20.1302];
  RWE['B23'] = [18000,108000,0.480717,3175.6014,0.000039,22.0598];
  RWE['B22'] = [10000,60000,0.500105,2329.2353,0.000078,21.0664];

var TAURON = {};
  TAURON['C22b'] = [1000,6000,0.48612,439.9369,0.00003,6.4851];
  TAURON['C22a'] = [1000,6000,0.573034,365.3607,0.000293,9.4761];
  TAURON['C21'] = [500,3000,0.640099,365.3607,0.000557,7.9486];
  TAURON['C12b'] = [500,3000,0.502552,46.6863,-0.000539,3.3153];
  TAURON['C12a'] = [500,3000,0.534192,46.6863,-0.000357,6.4171];
  TAURON['C11'] = [200,1200,0.541483,40.8499,-0.002242,6.9353];
  TAURON['B23'] = [18000,108000,0.432913,3611.4339,0.000017,11.4362];
  TAURON['B22'] = [10000,60000,0.475494,2420.8983,0.000029,12.3394];
  TAURON['B11'] = [18000,108000,0.434703,1316.6475,0.000001,14.9915];

// dropdown tarrifs
var eTarrifs = {};
  eTarrifs['PGE'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C12n', 'C12w', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B21', 'B22', 'B23'];
  eTarrifs['TAURON'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C21', 'C22a', 'C22b', 'B11', 'B22', 'B23'];
  eTarrifs['ENEA'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C21', 'C22a', 'C22b', 'B11', 'B22', 'B23'];
  eTarrifs['ENERGA'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C12w', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B22', 'B23'];
  eTarrifs['RWE'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C21', 'C22a', 'C22b', 'C23', 'B22', 'B23'];

function changeCompanyList() {
  var companyList = document.getElementById("company");
  var tarrifList = document.getElementById("enTaryfa");
  var selTarif = companyList.options[companyList.selectedIndex].value;
    while (tarrifList.options.length) {
      tarrifList.remove(0);
 	    document.regForm.enBill.value = '0'; 		
      document.getElementById("enBill").disabled = true;
    	document.getElementById("enUsage").disabled = true;
    	document.getElementById("enTerm").disabled = true; 
      document.getElementById("ResultId").style.opacity = 0.2; 
      document.getElementById("ResultId").innerHTML= "0";	
      document.getElementById("enUsageL").innerHTML= "0";           	
    }
    var tarrifs = eTarrifs[selTarif];
    if (tarrifs) {
      var i;
      for (i = 0; i < tarrifs.length; i++) {
        var company = new Option(tarrifs[i], tarrifs[i]);
        tarrifList.options.add(company);
      }
    }
}

function getArray() {
  var companyList = document.getElementById("company").value;    
  var tarrifList = document.getElementById("enTaryfa").value;
	switch (companyList) {
	 	case 'ENEA': 
	    var tarr = ENEA[tarrifList];
	    break;
	  case 'ENERGA':
	    var tarr = ENERGA[tarrifList];
	    break;
	  case 'PGE':
	    var tarr = PGE[tarrifList];
	    break;
	  case 'RWE':
	    var tarr = RWE[tarrifList];
	    break;
	  case 'TAURON':
	    var tarr = TAURON[tarrifList];
	    break;
	    default:
	}
	return tarr;
}

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

function calculateSavings(savval) {
  document.getElementById("ResultId").innerHTML= "Możesz wydać mniej o: " + savval.formatMoney(2, ',', '.') + " pln"; 
}

function checkIdCom (){
  var element =  document.getElementById('ResultIdCom');
  if (typeof(element) != 'undefined' && element != null) {
    document.getElementById("ResultIdCom").setAttribute("id","ResultId"); 
  }
}

function changeTariff() {
  var tarrArr = getArray();
// enable controls
  document.getElementById("enBill").disabled = false;
  document.getElementById("enUsage").disabled = false;
  document.getElementById("enTerm").disabled = false; 	
	document.getElementById("enUsage").setAttribute("min", tarrArr[0]);
	document.getElementById("enUsage").setAttribute("max", tarrArr[1]);
  document.getElementById('enUsage').value=tarrArr[0];
	document.getElementById("enUsageL").innerHTML = tarrArr[0] + " kwh";
  document.getElementById('enTerm').value=36;  
  document.getElementById("enTermL").innerHTML= "36 miesięcy";   
// set the start bill value
	billval = (tarrArr[2] * tarrArr[0] + tarrArr[3]);
 	document.regForm.enBill.value = billval.toFixed(2);
 	document.getElementById("enBill").innerHTML = billval.toFixed(2);
// set start savings value
  var termval = document.regForm.enTerm.value;
	savval = ((tarrArr[4] * tarrArr[0] + tarrArr[5])/100);
	savval = savval*billval*termval*0.94;	
  checkIdCom ();
  calculateSavings(savval)
// visual effects  
  document.getElementById("ResultId").style.opacity = 1;
  document.getElementById("mailButton").style.visibility = "visible";
}

function onSliderTermChanged() {
	if (fval == 24 || fval == 23) {
		document.getElementById("enTermL").innerHTML= fval + " miesiące";	
	}
	else {
		document.getElementById("enTermL").innerHTML= fval + " miesięcy";	
	}
}

 document.regForm.enBill.oninput = function(){ // set bill value
	var tarrArr = getArray();
  var billval = document.regForm.enBill.value;
  initBillval = (tarrArr[2] * tarrArr[0] + tarrArr[3]);
  maxValue = (tarrArr[2] * tarrArr[1] + tarrArr[3]);
  if(billval < initBillval || billval > 2*maxValue){  
    document.getElementById('enUsage').value=tarrArr[0];
    document.getElementById("enUsageL").innerHTML = tarrArr[0] + " kwh";  

    var element =  document.getElementById('ResultId');
    if (typeof(element) != 'undefined' && element != null) {
      document.getElementById("ResultId").setAttribute("id","ResultIdCom"); 
    }
    maxValue = maxValue*2
    document.getElementById("ResultIdCom").innerHTML= "Wprowadź wartość faktury pomiędzy " + initBillval.formatMoney(0, ',', '.') + " a " + maxValue.toFixed(0) + " pln";
  } else {
    checkIdCom ();
    billval = (Math.round(((billval - tarrArr[3]) / tarrArr[2])/10)*10);
    document.regForm.enUsage.value = billval.toFixed(2);
    document.getElementById("enUsageL").innerHTML= billval + " kwh";

    // calculate savings
    var usageval = document.regForm.enUsage.value;
    var termval = document.regForm.enTerm.value;
    savval = ((tarrArr[4] * usageval + tarrArr[5])/100);
    savval = savval*billval*termval*0.94; 
    calculateSavings(savval)
  }
}

 document.regForm.enUsage.oninput = function(){ // moving range
 	var usageval = document.regForm.enUsage.value;
	var tarrArr = getArray();
	billval = (tarrArr[2] * usageval + tarrArr[3]);
 	document.regForm.enBill.value = billval.toFixed(2);
  	document.getElementById("enUsageL").innerHTML= usageval + " kwh";
// calculate savings
 	var termval = document.regForm.enTerm.value;
	savval = ((tarrArr[4] * usageval + tarrArr[5])/100);
	savval = savval*billval*termval*0.94;	
  calculateSavings(savval)
}

 document.regForm.enTerm.oninput = function(){ // moving savings range
 	var termval = document.regForm.enTerm.value;
	var usgval = document.getElementById("enUsage").value;
	var bilval = document.getElementById("enBill").value; 	
 	document.getElementById("enTermL").innerHTML= termval + " miesięcy";
 	var tarrArr = getArray();
	savval = ((tarrArr[4] * usgval + tarrArr[5])/100);
	savval = savval*bilval*termval*0.94;
  calculateSavings(savval)
}
