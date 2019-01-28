const party = [
    { 
        id: 1,
        name: "Citizen Party of Nigeria",
        hqAddress: "Plot 12 CBN road, Abuja",
        logoURL: "pictures/logo1233.jpg"
}];

//Get a specific ​political party​ record
module.exports.getParty = (req, res)=>{
    const partyInfo = party.find(p => p.id === parseInt(req.params.id));
    if (!partyInfo) return res.status(404).send("No political party records found with the ID you specified");
    res.status(200).send(partyInfo);
    };

//Get all ​political parties​ records.  
module.exports.getParties = (req, res)=>{
    party.forEach(function(partyVar){
    if(partyVar.name==="") return res.status(404).send("No political parties found");
    res.status(200).send(party);
    }); };
 
//Create a political party.
module.exports.createParty = (req, res)=>{
if(req.body.name.length > 50) return res.status(400).send("Character is too long");
        const newParty = {
        id: party.length + 1,
        name: req.body.name,
        hqAddress: req.body.hqAddress,
        logoURL: req.body.logoURL
    };
    party.push(newParty);
    res.status(200).send(newParty);    
    };

//Update a political party
module.exports.updateParty = (req, res)=>{
    const partyInfo = party.find(p => p.id === parseInt(req.params.id));
    if (!partyInfo) return res.status(404).send("The political party you are trying to edit does not exist");
     //Validate before you update

  //Update the record
partyInfo.name = req.body.name;
res.status(200).send(partyInfo);

    };


//Delete a political party
module.exports.deleteParty = (req, res)=>{
    const partyInfo = party.find(p => p.id === parseInt(req.params.id));
    if (!partyInfo) return res.status(404).send("The political party you are trying to delete does not exist");
  //Validate before you delete

  //Delete the record
  const index = party.indexOf(partyInfo);
  party.splice(index, 1); 
res.status(200).send("Political Party Deleted");
};

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

 