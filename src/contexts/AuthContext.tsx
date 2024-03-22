import { createContext, useState } from "react";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import userPool from "@/constants/userPool";
import { ACCESS_TOKEN } from "@/utils/localStorageHepler";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const confirmAccount = (username, code) => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    });
  };

  const reSendCode = (username) => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log(result);
      console.log("call result: " + result);
    });
  };

  const signup = async (username, password, email, name) => {
    return await new Promise((resolve, reject) => {
      const attributeList = [];

      const dataEmail = {
        Name: "email",
        Value: email,
      };

      const dataName = {
        Name: "name",
        Value: name,
      };

      const attributeEmail = new CognitoUserAttribute(dataEmail);
      const attributeName = new CognitoUserAttribute(dataName);

      attributeList.push(attributeEmail);
      attributeList.push(attributeName);

      userPool.signUp(username, password, attributeList, [], (err, data) => {
        if (err) {
          console.log("Failed to register", err.message);
          reject();
        } else {
          console.log("Account created successfully", data);
          resolve("success");
        }
      });
    });
  };

  const authenticate = async (data) => {
    
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username:data.username,
        Pool: userPool,
      });

      const authDetails = new AuthenticationDetails({
        Username:data.username,
        Password:data.password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("Login success", data);
          getSession();
          resolve(data);
        },
        onFailure: (err) => {
          console.log("Failure", err.message);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("New Password required", data);
          resolve(data);
        },
      });
    });
  };

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject(err);
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};
                  for (const attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }
                  resolve(results);
                }
              });
            });
            resolve({ user, ...session, ...attributes });
            setUser({ user, ...session, ...attributes });
          }
        });
      }
    });
  };

  const logout = async () => {
    try {
      const user = await userPool.getCurrentUser();
      if (user) {
        user.signOut();
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signup,
        confirmAccount,
        reSendCode,
        authenticate,
        getSession,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
