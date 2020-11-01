
const AWS = require('../utils/aws');


const cognito_client = new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2020-10-31",
    region:"us-east-2"
})


const createUser = (data) => {
    const { email, password } = data;
    var params = {
        UserPoolId: 'us-east-2_EUG7TnshD', /* required */
        Username: email, /* required */
        
        DesiredDeliveryMediums: [
         "EMAIL"
        ],
        ForceAliasCreation: true ,
        TemporaryPassword: password,
        UserAttributes: [
          {
            Name: 'email', 
            Value: email
          },
         
        ],
        ValidationData: [
          {
            Name: 'email', 
            Value: email
          },
    
        ]
    };
    return new Promise((resolve, reject) => {
        cognito_client.adminCreateUser(params, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.User);
            }
          
        });
    });
}

const getUsers = () => {
    var params =
    {
        UserPoolId: 'us-east-2_EUG7TnshD',
        AttributesToGet:['email']


    }
    return new Promise((resolve, reject) => {
        cognito_client.listUsers(params, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.Users);
            }
          
        });
    });

}

module.exports = { createUser, getUsers }
