// var disease = new Array("Anemia","Asthma","Blood clots (Embolism)","Cancer","Diabetes","Cholera","Malaria","Dangue","Typhoid","Chikungunia","Yellow fever");

// var medicine = new Array();
// medicine[0]="";
// medicine[1]=" epoetin alfa | multivitamin with iron | Vitamin B6 | Anadrol-50 | Integra Plus | pyridoxine | Procrit | Epogen | Integra | pyridoxine | Ferocon | Aminoxin | Iron-150 | Ferrex 150 Forte | oxymetholone | Revlimid | Dialyvite | lenalidomide | EnLyte | FE C Tab Plus";
// medicine[2]=" Singulair | montelukast | prednisone | Dulera | Atrovent | Breo Ellipta | ipratropium | Alvesco | flunisolide | methylprednisolone | Atrovent HFA | dexamethasone | formoterol / mometasone | MethylPREDNISolone Dose Pack | Rayos | triamcinolone | fluticasone / vilanterol | Ipratropium Inhalation Solution | Kenalog-40 | Medrol | Dexamethasone Intensol | levalbuterol";
// medicine[3]=" Xarelto | Eliquis | apixaban | heparin | Heparin Sodium | Pradaxa | Arixtra | fondaparinux | Activase | dabigatran | alteplase | edoxaban | Savaysa | urokinase";
// medicine[4]=" carboplatin | Adriamycin | fluorouracil | etoposide | doxorubicin | cyclophosphamide | Paraplatin | Cosmegen | Leukeran | vincristine | Etopophos | Toposar | chlorambucil | Hycamtin | Ifex | ifosfamide | vinblastine | dactinomycin";
// medicine[5]=" metformin | Januvia | Victoza | glipizide | glimepiride | Amaryl | Invokana | Actos | Levemir | Glucotrol | Janumet | Byetta | Farxiga | Bydureon";
// medicine[6]=" Cipro | ciprofloxacin | Vibramycin | doxycycline | Doryx | Doxy 100 | Vibra-Tabs | Monodox | Oraxyl | Morgidox | Ocudox | Chloromycetin | Cipro I.V.";
// medicine[7]=" artemether | Coartem | Malarone | mefloquine | doxycycline | Plaquenil | chloroquine | hydroxychloroquine | atovaquone / proguanil | clindamycin | Doxy 100 | primaquine | Lariam | atovaquone | Doryx | Cleocin | Monodox | Vibramycin";
// medicine[8]=" acetaminophen | aspirin | ibuprofen";
// medicine[9]=" ciprofloxacin | ceftriaxone | Cipro | ampicillin | Cipro I.V. | Cipro XR | Zmax ";
// medicine[10]=" nonsteroidal anti-inflammatory drugs (NSAIDs) | ibuprofen (Advil, Motrin) | naproxen (Aleve) | aspirin ";
// medicine[11]=" yellow fever vaccine | YF-Vax | Stamaril";


// function print_disease(disease_id){
// 	// given the id of the <select> tag as function argument, it inserts <option> tags
// 	var option_str = document.getElementById(disease_id);
// 	option_str.length=0;
// 	option_str.options[0] = new Option('Select Disease','');
// 	option_str.selectedIndex = 0;
// 	for (var i=0; i<state_arr.length; i++) {
// 		option_str.options[option_str.length] = new Option(disease[i],disease[i]);
// 	}
// }

// function print_medicine(medicine_id, medicine_index){
// 	var option_str = document.getElementById(medicine_id);
// 	option_str.length=0;	// Fixed by Julian Woods
// 	option_str.options[0] = new Option('Select Medicine','');
// 	option_str.selectedIndex = 0;
// 	var city_arr = s_a[medicine_index].split("|");
// 	for (var i=0; i<medicine.length; i++) {
// 		option_str.options[option_str.length] = new Option(medicine[i],medicine[i]);
// 	}
// }
var state_arr = new Array("Anemia","Asthma","Blood clots","Cancer","Diabetes","Cholera","Malaria","Dangue","Typhoid","Chikungunia","Yellow fever");

var medicine = new Array();
medicine[0]="";
medicine[1]=" epoetin alfa | multivitamin with iron | Vitamin B6 | Anadrol-50 | Integra Plus | pyridoxine | Procrit | Epogen | Integra | pyridoxine | Ferocon | Aminoxin | Iron-150 | Ferrex 150 Forte | oxymetholone | Revlimid | Dialyvite | lenalidomide | EnLyte | FE C Tab Plus";
medicine[2]=" Singulair | montelukast | prednisone | Dulera | Atrovent | Breo Ellipta | ipratropium | Alvesco | flunisolide | methylprednisolone | Atrovent HFA | dexamethasone | formoterol / mometasone | MethylPREDNISolone Dose Pack | Rayos | triamcinolone | fluticasone / vilanterol | Ipratropium Inhalation Solution | Kenalog-40 | Medrol | Dexamethasone Intensol | levalbuterol";
medicine[3]=" Xarelto | Eliquis | apixaban | heparin | Heparin Sodium | Pradaxa | Arixtra | fondaparinux | Activase | dabigatran | alteplase | edoxaban | Savaysa | urokinase";
medicine[4]=" carboplatin | Adriamycin | fluorouracil | etoposide | doxorubicin | cyclophosphamide | Paraplatin | Cosmegen | Leukeran | vincristine | Etopophos | Toposar | chlorambucil | Hycamtin | Ifex | ifosfamide | vinblastine | dactinomycin";
medicine[5]=" metformin | Januvia | Victoza | glipizide | glimepiride | Amaryl | Invokana | Actos | Levemir | Glucotrol | Janumet | Byetta | Farxiga | Bydureon";
medicine[6]=" Cipro | ciprofloxacin | Vibramycin | doxycycline | Doryx | Doxy 100 | Vibra-Tabs | Monodox | Oraxyl | Morgidox | Ocudox | Chloromycetin | Cipro I.V.";
medicine[7]=" artemether | Coartem | Malarone | mefloquine | doxycycline | Plaquenil | chloroquine | hydroxychloroquine | atovaquone / proguanil | clindamycin | Doxy 100 | primaquine | Lariam | atovaquone | Doryx | Cleocin | Monodox | Vibramycin";
medicine[8]=" acetaminophen | aspirin | ibuprofen";
medicine[9]=" ciprofloxacin | ceftriaxone | Cipro | ampicillin | Cipro I.V. | Cipro XR | Zmax ";
medicine[10]=" nonsteroidal anti-inflammatory drugs (NSAIDs) | ibuprofen (Advil, Motrin) | naproxen (Aleve) | aspirin ";
medicine[11]=" yellow fever vaccine | YF-Vax | Stamaril";


var report = new Array();
report[0]="";
report[1]="A complete blood count (CBC) | Blood chemistry tests | Blood enzyme tests | Blood tests to assess heart disease risk";
report[2]="Spirometry | Challenge tests";
report[3]="D-dimer | Chest X-ray";
report[4]="Urine and blood tests | computerized tomography (CT) scan | magnetic resonance imaging (MRI) | X-ray | positron emission tomography (PET) scan";
report[5]="Hemoglobin A1c | Fasting plasma glucose test | Random plasma glucose test";
report[6]= "no report found";
report[7]="Thick and thin blood smears | Rapid diagnostic test | Antibody test | Drug resistance test | Blood test";
report[8]="Dengue NS1 Antigen | Immunoglobulin M (IgM) | Immunoglobulin G (IgG) | Dengue RNA PCR test";
report[9]="Widal test";
report[10]="RT-PCR | ELISA | PRNT";
report[11]="blood tests | ELISA | PRNT";


function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select disease','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id1,city_id2,report1,city_index){
	var option_str = document.getElementById(city_id1);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select Medicine','');
	option_str.selectedIndex = 0;
	var city_arr = medicine[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
    }
    
    var option_str2 = document.getElementById(city_id2);
	option_str2.length=0;	// Fixed by Julian Woods
	option_str2.options[0] = new Option('Select Medicine','');
	option_str2.selectedIndex = 0;
	var city_arr = medicine[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str2.options[option_str2.length] = new Option(city_arr[i],city_arr[i]);
    }
    
    var option_str3 = document.getElementById(report1);
	option_str3.length=0;	// Fixed by Julian Woods
	option_str3.options[0] = new Option('Select Report','');
	option_str3.selectedIndex = 0;
	var city_arr = report[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str3.options[option_str3.length] = new Option(city_arr[i],city_arr[i]);
    }
}
