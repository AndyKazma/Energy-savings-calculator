
// usage bill conversion
var ENEA = {}; 
  ENEA['C22b'] = [1000,6000,0.555083,533.5181,0.000055,11.3663];
  ENEA['B11'] = [1000,6000,0.612323,533.5181,0.000551,15.5051];
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

// alert(usageL);

// dropdown 

var eTarrifs = {};
  	eTarrifs['PGE'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C12n', 'C12w', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B21', 'B22', 'B23'];
  	eTarrifs['TAURON'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C13', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B21', 'B22', 'B23'];
  	eTarrifs['ENEA'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C21', 'C22a', 'C22b', 'C22w', 'B11', 'B12', 'B21', 'B22', 'B23'];
  	eTarrifs['ENERGA'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C12w', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B21', 'B22', 'B23'];
  	eTarrifs['RWE'] = ['Wybierz', 'C11', 'C12a', 'C12b', 'C21', 'C22a', 'C22b', 'C23', 'B21', 'B22', 'B23'];

function ChangeCompanyList() {
    var companyList = document.getElementById("company");
    var tarrifList = document.getElementById("enTaryfa");
    var selCar = companyList.options[companyList.selectedIndex].value;
    while (tarrifList.options.length) {
        tarrifList.remove(0);
    }
    var tarrifs = eTarrifs[selCar];
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

function ChangeUsageBar() {

var tarrArr=getArray();
	document.getElementById("enUsage").setAttribute("min", tarrArr[0]);
	document.getElementById("enUsage").setAttribute("max", tarrArr[1]);
}

function onSliderChanged() {
	var pval = document.getElementById("enUsage").value;
//	var fval = document.getElementById("enTerm").value;
	
	document.getElementById("enUsageL").innerHTML= pval + " kwh";
// calculate an invoice amount enBill
	var tarrArr=getArray();
	var billValue = (tarrArr[2] * pval + tarrArr[3]);
	document.getElementById("enBill").setAttribute("value", billValue.toFixed(2));
}

function ChangeEnBill() {
	var bval = document.getElementById("enBill").value;
	var tarrArr = getArray();
	var uval = (Math.round(((bval - tarrArr[3]) / tarrArr[2])/10)*10);
   alert(uval);
	document.getElementById("enUsage").setAttribute("value", uval);
}

function onSliderTermChanged() {
	var fval = document.getElementById("enTerm").value;

	if (fval == 24 || fval == 23) {
		document.getElementById("enTermL").innerHTML= fval + " miesiące";	
	}
	else {
		document.getElementById("enTermL").innerHTML= fval + " miesięcy";	
	}
}

 document.regForm.enBill.oninput = function(){
	var billval = document.regForm.enBill.value;
	document.regForm.enUsage.value = billval;
 }
 document.regForm.enUsage.oninput = function(){
 	var usageval = document.regForm.enUsage.value;
 	document.regForm.enBill.value = usageval;
 	document.getElementById("enUsageL").innerHTML= usageval + " kwh";
 }
