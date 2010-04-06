var Name = require('./name');
var Faker = require('./main');

var Address = {};
process.mixin(this, require('./utils/module_utils'));

var ZIP_FORMATS		= this.k(["#####","#####-####"]),
	STATE			= this.k(["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]),
	STATE_ABBR		= this.k("AL AK AS AZ AR CA CO CT DE DC FM FL GA GU HI ID IL IN IAKS KY LA ME MH MD MA MI MN MS MO MT NE NV NH NJ NM NY NCND MP OH OK OR PW PA PR RI SC SD TN TX UT VT VI VA WA WVWI WY AE AA AP"),
	CITY_PREFIXES	= this.k("North East West South New Lake Port"),
	CITY_SUFFIXES	= this.k("town ton land ville berg burgh borough bury view port mouth stad furt chester mouth fort haven side shire"),
	STREET_SUFFIX	= this.k("Alley Avenue Branch Bridge Brook BrooksBurg Burgs Bypass Camp Canyon Cape Causeway Center Centers Circle CirclesCliff Cliffs Club Common Corner Corners Course Court Courts Cove CovesCreek Crescent Crest Crossing Crossroad Curve Dale Dam Divide Drive DriveDrives Estate Estates Expressway Extension Extensions Fall Falls FerryField Fields Flat Flats Ford Fords Forest Forge Forges Fork Forks FortFreeway Garden Gardens Gateway Glen Glens Green Greens Grove Groves HarborHarbors Haven Heights Highway Hill Hills Hollow Inlet Inlet Island IslandIslands Islands Isle Isle Junction Junctions Key Keys Knoll Knolls LakeLakes Land Landing Lane Light Lights Loaf Lock Locks Locks Lodge Lodge LoopMall Manor Manors Meadow Meadows Mews Mill Mills Mission Mission MotorwayMount Mountain Mountain Mountains Mountains Neck Orchard Oval Overpass ParkParks Parkway Parkways Pass Passage Path Pike Pine Pines Place Plain PlainsPlains Plaza Plaza Point Points Port Port Ports Ports Prairie PrairieRadial Ramp Ranch Rapid Rapids Rest Ridge Ridges River Road Road RoadsRoads Route Row Rue Run Shoal Shoals Shore Shores Skyway Spring SpringsSprings Spur Spurs Square Square Squares Squares Station Station StravenueStravenue Stream Stream Street Street Streets Summit Summit TerraceThroughway Trace Track Trafficway Trail Trail Tunnel Tunnel TurnpikeTurnpike Underpass Union Unions Valley Valleys Via Viaduct View ViewsVillage Village Villages Ville Vista Vista Walk Walks Wall Way Ways WellWells"),
	SEC_ADDR		= this.k(["Apt. ###","Suite ###"]),
	UK_COUNTY		= this.k(["Avon","Bedfordshire","Berkshire","Borders","Buckinghamshire","Cambridgeshire","Central","Cheshire","Cleveland","Clwyd","Cornwall","County Antrim","County Armagh","County Down","County Fermanagh","County Londonderry","County Tyrone","Cumbria","Derbyshire","Devon","Dorset","Dumfries and Galloway","Durham","Dyfed","East Sussex","Essex","Fife","Gloucestershire","Grampian","Greater Manchester","Gwent","Gwynedd County","Hampshire","Herefordshire","Hertfordshire","Highlands and Islands","Humberside","Isle of Wight","Kent","Lancashire","Leicestershire","Lincolnshire","Lothian","Merseyside","Mid Glamorgan","Norfolk","North Yorkshire","Northamptonshire","Northumberland","Nottinghamshire","Oxfordshire","Powys","Rutland","Shropshire","Somerset","South Glamorgan","South Yorkshire","Staffordshire","Strathclyde","Suffolk","Surrey","Tayside","Tyne and Wear","Warwickshire","West Glamorgan","West Midlands","West Sussex","West Yorkshire","Wiltshire","Worcestershire"]),
	UK_COUNTRY		= this.k(["England","Scotland","Wales","Northern Ireland"]),
	UK_POSTCODE		= this.k(["??# #??","??## #??"]);

Address.zip_code = function(){
	return Faker.numerify(ZIP_FORMATS.rand());
}

Address.us_state = function(){
	return STATE.rand();
}

Address.us_state_abbr = function(){
	return STATE_ABBR.rand();
}

Address.city_prefix = function(){
	return CITY_PREFIXES.rand();
}

Address.city_suffix = function(){
	return CITY_SUFFIXES.rand();
}

Address.city = function(){
	var r = NumberUtils.rand(4);
	if(r == 0) return [Address.city_prefix(), Name.first_name()].join(" ").concat(Address.city_suffix())
	if(r == 2) return [Name.first_name(), Address.city_suffix()].join("")
	if(r == 3) return [Name.last_name(), Address.city_suffix()].join("")
	return [Address.city_prefix(), Name.first_name()].join(" ")
}

Address.street_suffix = function(){
	return STREET_SUFFIX.rand();
}

Address.street_name = function(){
	var r = NumberUtils.rand(2);
	if(r ==  0) return [Name.last_name(), Address.street_suffix()].join(" ");
	return [Name.first_name(), Address.street_suffix()].join(" ");
}

Address.street_address = function(include_secondary){
	var str,r;
	r = NumberUtils.rand(3);
	if(r ==  0) str = ['#####', Address.street_name()].join(" ")
	if(r ==  1) str = ['####',  Address.street_name()].join(" ")
	if(r ==  2) str = ['###',   Address.street_name()].join(" ")
	if(include_secondary) str.concat(' ').concat(Address.secondary_address());
	return Faker.numerify(str);
}

Address.secondary_address = function(){
	return Faker.numerify(SEC_ADDR.rand());
}

// UK Variants
Address.uk_county = function(){
	return UK_COUNTY.rand();
}

Address.uk_country = function(){
	return UK_COUNTRY.rand();
}

Address.uk_postcode = function(){
	return Faker.bothify(UK_POSTCODE.rand()).toUpperCase();
}

process.mixin(this, Address);