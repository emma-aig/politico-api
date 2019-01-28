const office = [{
    id:  '1',                // id of newly created office
    type:  "Federal",        // federal, legislative, state, or local government    
    name:  "Senate"        // Name of office  
    }];
// Create a political office. 
module.exports.createOffice = (req, res)=>{
   //Validate the input
   if(req.body.name.length > 50) return res.send("Character is too long");
   const newOffice = {
   id: office.length + 1,
   type: req.body.type,
   name: req.body.name 
       };
   office.push(newOffice);
   res.status(200).send(newOffice);
};

// Get all political offices.
module.exports.getOffices = (req, res)=>{
office.forEach(function(officeVar){
if(officeVar.name==="") return res.status(404).send("No political office found");
 //console.log(officeVar.name);
res.status(200).send(office);
    });
}; 

//Get a specific political office.
module.exports.getOffice = (req, res)=>{
    const officeInfo = office.find(officeVar => officeVar.id === parseInt(req.params.id));
    if (!officeInfo) return res.status(404).send("No political office records found with the ID you specified");
   res.status(200).send(officeInfo);
};

