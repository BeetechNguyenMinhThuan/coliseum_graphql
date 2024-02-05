export interface User {
  id: string;
  type: string;
  role: string[];
  recycler_id?: string;
  municipality_code?: string;
}

export interface Profile {
  user_id: string;
  user_name: string;
  user_kana: string;
  municipality_code: string;
  municipality_name: string;
  department_name: string;
  position: string;
  person_name: string;
  mail_address: string;
  tel: string;
  extension: string;
  fax: string;
  is_public_works_bidder: boolean | null;
  prefecture_code: string;
  prefecture_name: string;
  city_code: string;
  city_name: string;
  address: string;
  point: any;
  recycler_id: string;
  zip_code: string;
  construction_licensee_code: string;
  construction_license_form_code: string;
  construction_license_no: string;
  juridical_code: string;
  affiliation_code: string;
  representation_name: string;
  representation_kana: string;
}

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const PROFILE_USER = "profile";
export const ROLE_MENU = "roleMenu";
export const INFOR_AUTHEN_CODE = "inforAuthenCode";
export const IS_NOTIFICATION_COMPLETE = "isNotificationComplete";
export const USER_DETAIL = "userDetail";
export const SEARCH_CONSTRUCTION_STATE = "searchConstructionState";
export const DIALOG_CHANGE_PASSWORD_FIRST_TIME =
  "dialogChangePasswordFirstTime";
export const DIALOG_MAIL_ARTICLE11 = "dialogMailArticle11";

export const getItemStorage = (name: string) => {
  return localStorage.getItem(name) || "";
};

export const saveItemStorage = (name: string, parameter: any) => {
  if (typeof parameter === "string") {
    localStorage.setItem(name, parameter);
  } else {
    localStorage.setItem(name, JSON.stringify(parameter));
  }
};

export const getItemSessionStorage = (name: string) => {
  return sessionStorage.getItem(name) || "";
};

export const saveItemSessionStorage = (name: string, parameter: any) => {
  if (typeof parameter === "string") {
    sessionStorage.setItem(name, parameter);
  } else {
    sessionStorage.setItem(name, JSON.stringify(parameter));
  }
};

export const parseJwt = (token: string) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );
  return JSON.parse(jsonPayload);
};

export const getUserInfo = (): User => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (accessToken) {
    try {
      const user = parseJwt(accessToken);
      return user;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  return {} as User;
};

export const getProfile = (): Profile => {
  const profileJson = localStorage.getItem(PROFILE_USER);

  if (profileJson) {
    try {
      const profile = JSON.parse(profileJson);
      return profile;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  return {} as Profile;
};

export const getInfoAuthenCode = (): any => {
  const inforAuthenCodeJson = localStorage.getItem(INFOR_AUTHEN_CODE);

  if (inforAuthenCodeJson) {
    try {
      const inforAuthenCode = JSON.parse(inforAuthenCodeJson);
      localStorage.removeItem(INFOR_AUTHEN_CODE);
      return inforAuthenCode;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  return {} as any;
};
