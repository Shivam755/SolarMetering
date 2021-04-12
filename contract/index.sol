pragma solidity >0.4.0 <=0.9.0;

contract Net_metering{
    
    // A struct for user data
    struct user{
        address ewalletId;
        string fullName;
        string phoneNo;
        string state;
        address companyID;
        string password;
        string email;
        string subscriberId;
        uint inRead;
        uint outRead;
        bool verified;
        bool rejected;
        uint inConsumed;
        uint outConsumed;
    }
    
    // The list for storing the user data
    user[] userinfo;
    
    // A function to compare two strings
    function compareStrings(string memory a, string memory b) public view returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
    
    // A function to add data to the userInfo
    function addUser(string memory subId,address id, string memory fName, string memory pNo, string memory ste, address comId, string memory passwd, string memory eM, uint iRead, uint oRead) public returns(bool){
        for (uint i = 0; i<userinfo.length; i++){
            if (compareStrings(userinfo[i].subscriberId, subId)){
                return false;
            }
        }
        userinfo.push(user(id, fName, pNo, ste, comId, passwd, eM,subId, iRead, oRead, false,false,0,0));
        return true;
    }
    
    // A function to verify user login
    function verifyLogin(string memory email,string memory passwd) public view returns(bool){
        for(uint i = 0; i < userinfo.length; i++){
            if(compareStrings(userinfo[i].email, email)){
                if(compareStrings(userinfo[i].password, passwd)){
                    return true;
                }
            }
        }
        return false;
    }
    
    // A function to remove user 
    function removeUser(address id)  public returns(bool)
    {
        for (uint i=0; i<userinfo.length; i++)
        {
            if (userinfo[i].ewalletId == id)
            
            {
                delete userinfo[i];
                return true;
            }
            
        }
        return false;
    }
    
    function get_data(string memory email) public view returns(string memory, address,string memory, string memory, string memory, address, string memory, string memory, bool, bool,uint,uint) {
      for(uint i = 0; i < userinfo.length; i++){
                if(compareStrings(userinfo[i].email,email))
                 {
                        return (userinfo[i].fullName,userinfo[i].ewalletId, userinfo[i].subscriberId,userinfo[i].state,userinfo[i].password,userinfo[i].companyID,userinfo[i].phoneNo,userinfo[i].email, userinfo[i].verified,userinfo[i].rejected, userinfo[i].inConsumed, userinfo[i].outConsumed) ; 
                 }
        
       }
    }
    // A function to update reading 
    function updateReading(string memory subId,uint iRead, uint oRead) public returns(bool){
        for (uint i = 0; i < userinfo.length; i++ ){
            if (compareStrings(userinfo[i].subscriberId,subId)){
                userinfo[i].inConsumed += iRead - userinfo[i].inRead;
                userinfo[i].outConsumed += oRead - userinfo[i].outRead;
                userinfo[i].inRead = iRead;
                userinfo[i].outRead = oRead;
                return true;
            }
        }
        return false;
    }
    
    //A function to update password
    function updatePasswd(string memory subId,string memory passwd) public returns(bool){
        for (uint i = 0; i < userinfo.length; i++ ){
            if (compareStrings(userinfo[i].subscriberId,subId)){
               userinfo[i].password = passwd;
                return true;
            }
        }
        return false;
    }
    
    //A function to update details
    function updateDetails(string memory subId, address eId, string memory name, string memory phone, string memory email, string memory state, address gridId) public returns (bool){
        for (uint i=0; i<userinfo.length; i++){
            if(compareStrings(userinfo[i].subscriberId,subId)){
                userinfo[i].ewalletId=eId;
                userinfo[i].fullName = name;
                userinfo[i].phoneNo = phone;
                userinfo[i].email = email;
                userinfo[i].state = state;
                userinfo[i].companyID = gridId;
                return true;
            }
        }
        return false;
    }
    
    // A function to return reading
    function viewReading(string memory subId) public view returns(uint, uint){
        for (uint i = 0; i < userinfo.length; i++ ){
            if (compareStrings(userinfo[i].subscriberId,subId)){
                return (userinfo[i].inRead, userinfo[i].outRead);
            }
        }
    }
    
    
    // A struct for company data
    struct company{
        address ewalletId;
        string companyname;
        string state;
        string password;
    }
    
    // A list to store company data
    company[] companyinfo;
    // A function to addto company info
    function addCompany(address id, string memory Name, string memory ste, string memory passwd) public {
        companyinfo.push(company(id, Name, ste, passwd));
    }
    
    // Verify company login
    function verifyCompLogin(string memory name, string memory passwd) public view returns(bool){
        for(uint i = 0; i < companyinfo.length; i++){
            if(compareStrings(companyinfo[i].companyname, name)){
                if(compareStrings(companyinfo[i].password, passwd)){
                    return true;
                }
            }
        }
        return false;
    }
    // a Function to return company data
   function getCompdata(string memory name) public view returns(address,string memory, string memory) {
      for(uint i = 0; i < companyinfo.length; i++){
        if(compareStrings(companyinfo[i].companyname,name))
         {
                return (companyinfo[i].ewalletId, companyinfo[i].companyname, companyinfo[i].state) ; 
         }
        
       }
    }
    // A function to remove company
    function removeCompany(address id)  public returns(bool)
    {
        for (uint i=0; i<companyinfo.length; i++)
        {
            if (companyinfo[i].ewalletId == id)
            
            {
                delete companyinfo[i];
                return true;
            }
            
        }
        return false;
    }
    
    //A function to verify the customer
    function verifyCustomer(string memory subId) public returns(bool){
        for (uint i = 0; i < userinfo.length; i++){
            if (compareStrings(userinfo[i].subscriberId, subId)){
                userinfo[i].verified = true;
                return true;
            }
        }
        return false;
    }
    
    // A function to reject customer
    function rejectCustomer(string memory SubId) public returns(bool){
        for (uint i = 0; i < userinfo.length; i++){
            if (compareStrings(userinfo[i].subscriberId, SubId)){
                userinfo[i].rejected = true;
                return true;
            }
        }
        return false;
    }
    
    // A function to return the list of users
    function userlist() public view returns(user [] memory )
    {
        return userinfo;
    }
    //A function to display
    function companylist() public view returns(company [] memory )
    {
        return companyinfo;
    }
    

}