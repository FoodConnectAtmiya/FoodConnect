

export function addOrganization(organization) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(JSON.stringify(organization))
        const response = await fetch('http://localhost:3001/addOrganization',{
            method: 'POST',
            body: JSON.stringify(organization),
            headers:{
              'content-type': 'application/json'
            }
          })
      } catch (error) {
        reject( error );
      }
  
    });
  }
export function storeSignUpData(data) {
   return data;
  }
export function loginOrganization(organization) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch( 'http://localhost:3001/loginOrganization',{
            method: 'POST',
            body: JSON.stringify(organization),
            headers:{
              'content-type': 'application/json'
            }
  
          })

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
export function getNotification(orgID) {
    return new Promise(async (resolve, reject) => {
      try {  
        const response = await fetch('http://localhost:3001/getNotification/' + orgID);
        if (response.ok) {
          const data = await response.json();
          //console.log(data);
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
export function acceptRequest(requestID, orgID) {
    return new Promise(async (resolve, reject) => {
      try {  
        const response = await fetch('http://localhost:3001/acceptRequrst' + requestID+ '/' + orgID);
        if (response.ok) {
          const data = await response.json();
          //console.log(data);
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
export function nearbyDonors(pinCode) {
    return new Promise(async (resolve, reject) => {
      try {  
        const response = await fetch('http://localhost:3001/nearbyDonors/' + pinCode );
        if (response.ok) {
          const data = await response.json();
          //console.log(data);
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }

export function addDonor(donor) {
    return new Promise(async (resolve, reject) => {
     try {
        console.log(JSON.stringify(organization))
        const response = await fetch('http://localhost:3001/addOrganization',{
            method: 'POST',
            body: JSON.stringify(organization),
            headers:{
              'content-type': 'application/json'
            }
          })
      } catch (error) {
        reject( error );
      }
  
    });
  }
export function loginDonor(donor) {
    return new Promise(async (resolve, reject) => {
      try {  
        const response = await fetch('http://localhost:3001/loginDonor');
        if (response.ok) {
          const data = await response.json();
          //console.log(data);
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }

  export function getDonorAcceptance(donorID) {
    return new Promise(async (resolve, reject) => {
      try {  
        const response = await fetch('http://localhost:3001/getDonorAcceptance/' + donorID);
        if (response.ok) {
          const data = await response.json();
          //console.log(data);
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }

  export function addAvailability(availability) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(process.env.BACKPORT +'/addAvailability',{
            method: 'POST',
            body: JSON.stringify(availability),
            headers:{
              'content-type': 'application/json'
            }
  
          })

        if (response.ok) {
          const data = await response.json();
          //console.log(data);
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  } 