

var houseNo = prompt("What is your house number?");
var houseinfo = [
				["100","Bradd Pitt","7451588822","pittbradd34@gmail.com",10842,1200,799],
				["101","Sammy Nial","7543458532","dialnial@gmail.com",15407,1300,0],
				["102","Sahba Rendezvouz","9135476387","redevouz44@gmail.com",8542,1330,799],
				["103","Kroppie Chan","9415632187","kchan2104@gmail.com",9756,1460,799],
				["104","Herbert Schildt","9350293570","schildtherbert@gmail.com",2910,799],
				["105","C C Joel","6397930018","clemmenson1@gmail.com",12568,2100,0],
				["106","Mohammed Kamran","6393990240","mohdkamran23@gmail.com",7689,2300,799],
				["107","Sunny Martin","8709955124","smartin45@gmail.com",15468,1700,0],
				["108","Ross Jay","9988745312","garrickjames@gmail.com",4589,1800,0],
				["109","Arun Maini","7309958215","mrwhosetheboss@gmail.com",13659,1310,0],
				["200","Aron flaming","7458962580","physicsflaming@gmail.com",7856,1960,799],
				["201","Jim Parsons","9054302172","calljinparsons@gmail.com",18539,2190,0],
				["202","Mark Robers","9518740183","markrobers@nasa.org",19568,1500,799],
				["203","James Arthur","6590546127","juniorarthur@gmail.com",4523,1950,0],
				["204","Rock Johnson","9315490731","duplicaterock@gmail.com",11587,1835,799],
				["205","Jack Sparrow","7388547001","j.sparrow285@gmail.com",12580,1500,0],
				["206","Candice Rsteinkowski","9161949835","candicersteinkowski@gmail.com",17000,1975,799],
				["207","Daisy Budd","6444938514","daisyb.udd@gmail.com",2200,900,799],
				["208","Marques Bieber","7834691307","unofficialbieber.marques@gmail.com",17000,1590,0],
				["209","Justin Roe","7523108853","roe.justin@deutschbank.org",12000,1200,0],
				["300","Joshua Jayden","9135975216","j.jaydenscience@mkmr.org",14780,1300,0],
				["301","David Vickk","7415928801","david.v.ickk1900@gmail.com" ,15090,1250,0],
				["302","Ashley Birch","8335020139","ash.birchqueen69@gmail.com",18750,1900,799],
				["303","Bill Bart","9165354500","bill91653545002gmail.com",12890,1000,0],
				["304","Austin Evans","8345610089","auseva.tinns@gmail.com",17000,1535,0],
				["305","William Green","9001735497","william.bibliophile@readersquare.ac.in",10000,1200,0],
				["306","John Bennet","6270051893","bennetjohn.planters@gmail.com",14099,1280,0],
				["307","Michael Linda","7893411053","michael.disneygirl@gmail.com",14280,1600,0],
				["308","Jessica Charles","7305995710","dontmesswithjess@gmail.com",18230,1900,799],
				["309","Kevin Eric","6701532999","ericksonkevin@gmail.com",17440,1830,0]
			];

function presentIn(houseinfo, houseNo)
{
	for(var i=0;i<houseinfo.length;i++)
	if(houseNo==houseinfo[i][0])
			return true;
	return false;
}	

while (presentIn(houseinfo, houseNo) == false)
	houseNo = prompt("Enter a valid house number?");

var i;
for(var i=0;i<houseinfo.length;i++)
	if(houseNo==houseinfo[i][0])
			break;
console.log(i);		