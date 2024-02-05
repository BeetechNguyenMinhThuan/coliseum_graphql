const mebi = 1 << 20;
export const EMAIL = {
  PATTERN: "^([\\s]*[\\w.+-]+[@]{1}[\\w-]+([.]{1}[\\w-]{2,})+[\\s]*)+$",
  MULTIPLE:
    "^([\\s]*[\\w.+-]+[@]{1}[\\w-]+([.]{1}[\\w-]{2,})+[\\s]*)(,[\\s]*[\\w.+-]+[@]{1}[\\w-]+([.]{1}[\\w-]{2,})+[\\s]*)*$",
  MAX_LENGHT_MAIL: "^[^,]+(?:,[^,]+){0,9}$",
  MAX_LENGTH: 128,
  MAX_MULTIPLE: 10,
  MAX_LENGTH_CONTENT: 2000,
  SIZE_FILE: mebi * 5,
  TOTAL_FILE: 5,
  ONE_MEBI: mebi,
};

export const LOGIN = {
  USER_ID: {
    MAX_LENGTH: 128,
  },
  PASSWORD: {
    MAX_LENGTH: 128,
  },
};

export const MAX_LENGTH_INPUT = 120;

export const MAX_SMALL_INT = 32767;

export const TYPE_FILE_UPLOAD = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export const TYPE_FILE_XLSX =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

export const MAX_NUMBER_INTEGER = 2147483647;

export const REGEX_NUMBER_DASH = /^[0-9０-９-ー]*$/;
export const START_WITH_ZERO = /^[0|０]/;
export const REGEX_NUMBER_HALF_FULL = /^[0-9０-９]+$/;
export const REGEX_DASH = /-|ー/g;
export const REGEX_ZERO = /0|０/g;
export const REGEX_DOUBLE_DASH = /--|-ー|ー-|ーー/g;
export const REGEX_ZIP_CODE = /^[0-9０-９-ー]*$/;
export const REGEX_KATAKANA_INPUT = /^[ぁ-んァ-ンｧ-ﾝﾞﾟヵヶー－（）()-\s]*$/;
export const REGEX_KATAKANA_ADDRESS_INPUT =
  /^[ぁ-んァ-ンｧ-ﾝﾞﾟ0-9０-９ヵヶー－（）()-\s]*$/;
export const REGEX_ALPHABET = /^[a-zA-Z0-9]+$/;
export const REGEX_DECIMAL_8 =
  /^(?:[0-9０-９,]{0,8}\.[0-9０-９]{1,})$|^[0-9０-９,]{0,8}$/;
export const REGEX_NUMBER_DECIMAL = /^[\s]*[\d,.０-９]+[\s]*$/;

export const FACILITY_BRANCH_VALIDATE = {
  BRANCH_NAME: {
    MAX_LENGTH: 200,
  },
  REPRESENT_NAME: {
    MAX_LENGTH: 100,
  },
  ZIP_CODE: {
    MAX_LENGTH: 10,
  },
  ADDRESS: {
    MAX_LENGTH: 60,
  },
  TEL: {
    MIN_NO_DASH: 10,
    MAX_NO_DASH: 11,
    MIN_WITH_DASH: 12,
    MAX_WITH_DASH: 13,
  },
  FAX: {
    MIN_NO_DASH: 10,
    MAX_NO_DASH: 11,
    MIN_WITH_DASH: 12,
    MAX_WITH_DASH: 13,
  },
  PERSON_NAME: {
    MAX_LENGTH: 40,
  },
  MAIL_ADDRESS: {
    MAX_LENGTH: 128,
    NAME_MAX_LENGTH: 64,
  },
  URL: {
    MAX_LENGTH: 256,
  },
  INDUSTRY_TYPE: {
    MAX_LENGTH: 2,
  },
  LICENSED_INDUSTRY_CODE: {
    MAX_LENGTH: 6,
  },
  OTHER_NAME: {
    MAX_LENGTH: 100,
  },
};
export const UPLOAD_FILE = {
  LIMITED_FILE_SIZE: mebi * 5,
  TOTAL_FILE_LIMITED: 5,
  ONE_MEBI: mebi,
  ACCEPT: [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ],
  ACCEPT_STRING: "application/pdf, image/png, image/jpeg, .xlsx, .docx",
  NAME_LENGTH: 255,
};

export const TYPE_UPLOAD_FILE = {
  USER_MAIL: "USER_MAIL",
  CUSTOMER_MAIL: "CUSTOMER_MAIL",
  JIGYOUSYO_LICENSE: "DISPOSAL_LICENSE",
  SOIL_ANALYSYS: "SOIL_ANALYSYS",
  ES_ATACCHED: "ES_ATACCHED",
  ES_IMPORTED: "ES_IMPORTED",
  ES_SOIL_ATACCHED: "ES_SOIL_ATACCHED",
  APP_USER: "APP_USER",
  APP_CONSTRUCTURE_ES_ATACCHED: "APP_CONSTRUCTURE_ES_ATACCHED",
  APP_CONSTRUCTURE_SOIL_ANALYSYS: "APP_CONSTRUCTURE_SOIL_ANALYSYS",
  INVOICE_PAYMENT_IMPORTED: "INVOICE_PAYMENT_IMPORTED",
  COR_AREA_DRAWING: " COR_AREA_DRAWING",
  COR_PDF_RECYCLE_PLAN: "COR_PDF_RECYCLE_PLAN",
  COR_PDF_RECYCLE_PROMOTION: "COR_PDF_RECYCLE_PROMOTION",
  COR_PDF_RECYCLE_GENBA: "COR_PDF_RECYCLE_GENBA",
  COR_PDF_RECYCLE_CHECK: "COR_PDF_RECYCLE_CHECK",
  COR_PDF_CONFIRMATION: "COR_PDF_CONFIRMATION",
};
export const REGEX_HALFSIZE = /^[\w]+$/;
export const REGEX_NUMBER_INTEGER = /^[\s]*[\d,０-９]+[\s]*$/;
export const REGEX_ONLY_NUMBER = /^[\s]*[\d０-９]+[\s]*$/;
export const REGEX_FULLSIZE = /^[｟｠。・「」、･一-龥ぁ-んァ-ン０-９！-～　]+$/;
export const MAX_NUM_RECORD_EXPORT = 50000;
export const REGEX_URL =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/;

export const REGEX_EXTENSION = /\.[^.]+$/;

export const UPLOAD_FILE_SURVEY_RESULTS = {
  LIMITED_FILE_SIZE: mebi * 5,
  TOTAL_FILE_LIMITED: 10,
  ONE_MEBI: mebi,
  ACCEPT: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ACCEPT_STRING: ".xlsx",
  NAME_LENGTH: 255,
};

export const UPLOAD_ORDER_AGENCY = {
  LIMITED_FILE_SIZE: mebi * 5,
  TOTAL_FILE_LIMITED: 1,
  ONE_MEBI: mebi,
  ACCEPT: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ACCEPT_STRING: ".xlsx",
  NAME_LENGTH: 255,
};

export const UPLOAD_PAYMENT_BILL = {
  LIMITED_FILE_SIZE: mebi * 5,
  TOTAL_FILE_LIMITED: 1,
  ONE_MEBI: mebi,
  ACCEPT: ["text/csv"],
  ACCEPT_STRING: ".csv",
  NAME_LENGTH: 255,
};

export const AUTHENTICATION = {
  PASSWORD: {
    PATTERN: /^[a-zA-Z0-9.!_\/`()\[\]+\-=$#&@~]+$/,
    MAX: 13,
    MIN: 8,
  },
};
