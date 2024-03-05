import moment from "moment";
import { toast } from "react-toastify";

import { browserHistory } from "@/browserHistory.ts";

import { REGEX_EXTENSION } from "../constants/validation";
import { AnyObject } from "../models/Common";
import { getItemSessionStorage } from "./localStorageHepler.ts";

export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0;

export const isObjEqual = (
  obj1: any,
  obj2: any,
  excluedeKeys: string[] = [],
) => {
  if (excluedeKeys.length) {
    for (let i = 0; i < excluedeKeys.length; i++) {
      obj1[excluedeKeys[i]] && delete obj1[excluedeKeys[i]];
      obj2[excluedeKeys[i]] && delete obj2[excluedeKeys[i]];
    }
  }
  const result = Object.keys(obj1).filter(
    (key) => obj1[key] && `${obj1[key]}` !== `${obj2[key]}`,
  );
  return result.length === 0;
};

//handle string to array
export const convertStringToArray = (str: string) => {
  const arr: any = [];
  str
    .trim()
    .split(",")
    .forEach(function (item: string) {
      if (item.trim()) {
        arr.push(item.trim());
      }
    });
  return arr;
};

export const compareDate = (dateFrom: string, dateTo: string) => {
  const newDateTo = new Date(dateFrom);
  const newDateFrom = new Date(dateTo);
  return newDateFrom >= newDateTo;
};

export const compareDateTime = (dateFrom: string, dateTo: string) => {
  const newDateFrom = moment(dateFrom);
  const newDateTo = moment(dateTo);
  return newDateFrom.format() >= newDateTo.format();
};

export const convertDateTime = (
  dateTime: string | number,
  dateFormat: string = "YYYY/MM/DD HH:mm",
) => {
  const newDate = moment(dateTime).utcOffset(JAPAN_TIME_ZONE);

  if (newDate.isValid()) {
    return newDate.format(dateFormat);
  } else {
    return dateTime;
  }
};

export const convertDateTimeLocal = (
  dateTime: string | number,
  dateFormat: string = "YYYY/MM/DD HH:mm",
) => {
  const newDate = moment(dateTime);

  if (newDate.isValid()) {
    return newDate.format(dateFormat);
  } else {
    return dateTime;
  }
};

export const convertMonth = (dateTime: string) => {
  if (dateTime !== "" && /^[\d]+$/g.test(dateTime)) {
    const re = /^(\d{4})[/-]?(\d{2})+$/;
    return `${dateTime}`.replace(re, "$1/$2");
  }
  return dateTime ? convertDateTime(dateTime, "YYYY/MM") : "";
};

export const convertMonthJP = (dateTime: string) => {
  if (dateTime !== "" && /^[\d]+$/g.test(dateTime)) {
    const re = /^(\d{4})[/-]?(\d{2})+$/;
    return `${dateTime}`.replace(re, "$1年$2月");
  }
  return dateTime ? convertDateTime(dateTime, "YYYY年MM月") : "";
};

export const padZero = (value: number, length: number) => {
  return value.toString().padStart(length, "0");
};

export const convertMonthApp = (month: any) => {
  if (!month) {
    return "";
  }
  const newMonth = padZero(month, 6);
  return newMonth.replace(/([\d]{4})([\d]{2})$/g, "$1-$2");
};

export const handleShowToastError = (message: string, options?: AnyObject) => {
  toast.error(message, {
    position: "top-center",
    className: "!opacity-100",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    containerId: "toast-1",
    ...options,
  });
};

export const handleShowToastSuccess = (
  message: string,
  options?: AnyObject,
) => {
  toast.success(message, {
    position: "top-center",
    className: "!opacity-100",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    containerId: "toast-1",
    ...options,
  });
};

export const getValueFromKeyInArray = (
  ary: any = [],
  keyOfObj: string,
  valueOfKey: string,
  nameOfKey: string,
) => {
  if (ary.length > 0 && valueOfKey) {
    const object = ary.find((item: any) => item[keyOfObj] === valueOfKey);
    if (object) {
      return object[nameOfKey];
    }
    return "";
  }
  return "";
};

/** Download file from content binary */
export function downloadFileFromContentBinary(data: any, fileName: string) {
  if (!data) {
    return;
  }
  const newBlob = new Blob([data], {
    type: data?.type ? data.type : "application/json",
  });
  const nav = window.navigator as any;
  if (nav && nav.msSaveOrOpenBlob) {
    return nav?.msSaveOrOpenBlob(newBlob, fileName);
  }

  const fileURL = window.URL.createObjectURL(newBlob);

  const link = document.createElement("a");
  link.href = fileURL;
  link.download = fileName;

  document.body.appendChild(link);

  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  );

  document.body.removeChild(link);
}

export const setValidationErrorsApi = (
  errorsList: any,
  setError: any,
  nameCustom: string = "",
) => {
  errorsList?.reverse().forEach((element: any) => {
    setError(`${nameCustom ? nameCustom + "." : ""}${element.target}` as any, {
      type: "custom",
      message: element.message,
    });
  });
  document
    ?.getElementsByName(errorsList?.reverse()?.[0]?.target)[0]
    ?.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
};

export const replaceTime = (time: string) => {
  if (/([\d]{2}):([\d]{2}):([\d]{2})$/g.test(time)) {
    return time.replace(/([\d]{2}):([\d]{2}):([\d]{2})$/g, "$1:$2");
  }
  return time;
};

export const replaceTimeNull = (time: string) => {
  return time ? replaceTime(time) : "--:--";
};

export const getMarchOfTheNext = (format: string) => {
  const now = new Date();
  const month = now.getMonth();
  if (month > 2) {
    return convertDateTime(`${now.getFullYear() + 2}-03`, format);
  }
  return convertDateTime(`${now.getFullYear() + 1}-03`, format);
};

export const getAprilOfTheBefore = (format: string) => {
  const now = new Date();
  const month = now.getMonth();
  if (month > 3) {
    return convertDateTime(`${now.getFullYear() - 1}-04`, format);
  }
  return convertDateTime(`${now.getFullYear() - 2}-04`, format);
};

export const get30thAprilOfTheNext = (format: string) => {
  const now = new Date();
  let result = `${now.getFullYear()}-04-30`;
  if (now >= new Date(result)) {
    result = `${now.getFullYear() + 1}-04-30`;
  }
  return convertDateTime(result, format);
};

export const get01thAprilOfTheNext = (format: string) => {
  const now = new Date();
  let result = `${now.getFullYear()}-04-01`;
  if (now >= new Date(result)) {
    result = `${now.getFullYear() + 1}-04-01`;
  }
  return convertDateTime(result, format);
};

export const checkExistInRole = (roles: string[], rolesInit: string[]) => {
  let isExist = false;
  for (let i = 0; i < roles.length; i++) {
    if (rolesInit.includes(roles[i])) {
      isExist = true;
      break;
    }
  }
  return isExist;
};

export const checkValidateTimeStartToEnd = (
  start: string,
  end: string,
  clearErrors: any,
) => {
  return {
    validate: (value: string, formValue: any) => {
      let startTime: any = new Date(formValue[start]);
      let endTime: any = new Date(formValue[end]);
      if (/^[\d\w.]+$/.test(start)) {
        startTime = { ...formValue };
        start.split(".").forEach((element) => {
          startTime = startTime?.[element];
        });
        startTime = new Date(startTime);
      }
      if (/^[\d\w.]+$/.test(end)) {
        endTime = { ...formValue };
        end.split(".").forEach((element) => {
          endTime = endTime?.[element];
        });
        endTime = new Date(endTime);
      }

      if (startTime > endTime) {
        return CME00008;
      }
      clearErrors([start, end]);
    },
  };
};

export const checkValidateTimeStartToEndRequired = (
  start: string,
  end: string,
  clearErrors: any,
) => {
  return {
    validate: (value: string, formValue: any) => {
      if (!formValue[start] || !formValue[end]) {
        return CME00003;
      } else if (new Date(formValue[start]) > new Date(formValue[end])) {
        return CME00008;
      } else {
        clearErrors([start, end]);
      }
    },
  };
};

export const checkValidateDateSoilInfo = (
  startChild: string,
  endChild: string,
  clearErrors: any,
) => {
  return {
    validate: (value: string, formValue: any) => {
      const startChildTime = new Date(formValue[startChild]);
      const endChildTime = new Date(formValue[endChild]);
      if (!formValue[startChild] || !formValue[endChild]) {
        return CME00003;
      }
      clearErrors([startChild, endChild]);
      if (moment(startChildTime).isAfter(endChildTime, "month")) {
        return CME00008;
      }
      clearErrors([startChild, endChild]);
    },
  };
};

export const carryLastCodeMapping: any = (
  constructionAdjustmentCode: string,
  carryCode: string,
  carryLastCode: string,
) => {
  const MAPPING: AnyObject = {
    "1_1": CARRY_LAST_CODE_1_1_MAPPING[carryLastCode],
    "1_2": CARRY_LAST_CODE_1_2_MAPPING[carryLastCode],
    "2_1": CARRY_LAST_CODE_2_1_MAPPING[carryLastCode],
    "2_2": CARRY_LAST_CODE_2_2_MAPPING[carryLastCode],
  };
  return MAPPING[`${constructionAdjustmentCode}_${carryCode}`];
};

export const soilStatusCheck: any = (
  isOrderd: boolean,
  isVendorUsed: boolean,
  constructionStatus: number,
  vendorUsedId: string,
  role: string[],
) => {
  if (role.includes(ROLE.JUCHU_JUCHU)) {
    return 4;
  } else if (role.includes(ROLE.HACCHU_HACCHU)) {
    return isOrderd
      ? isVendorUsed
        ? !!vendorUsedId
          ? 4
          : 3
        : 3
      : constructionStatus;
  }
};

export const handleShowErrorSoil: any = (
  responseDetail: any,
  setErrorList: any,
  setErrorUnadjustedReasonCode: any,
) => {
  const defineKeys: string[] = [
    "carry_last_code",
    "appoint_dispose_code",
    "soil_kind_name",
    "construction_adjustment_code",
    "order_money",
  ];
  const aryKeys: string[] = [];
  let isUnadjustedReasonCode = false;
  responseDetail?.forEach((item: any) => {
    if (defineKeys.includes(item.target)) {
      aryKeys.push(item.target);
    }
    if (item.target === "unadjusted_reason_code") {
      isUnadjustedReasonCode = true;
    }
  });
  setErrorList(aryKeys);
  setErrorUnadjustedReasonCode(isUnadjustedReasonCode);
};

export function scrollToTop() {
  const element = document?.getElementsByClassName("simple-modal__body")[0];
  if (element) {
    element.scrollTop = 0;
  }
}

export function getValueArrCheckBox(arrCheckBox: any) {
  if (arrCheckBox && Object.keys(arrCheckBox)?.length) {
    const arrValue: any = [];
    Object.keys(arrCheckBox).forEach((key) => {
      if (arrCheckBox[key]) {
        arrValue.push(`${key}`);
      }
    });
    return arrValue;
  }
  return arrCheckBox;
}

export const disabledEnterKey = (e: any) => {
  (e.key === "Enter" || e.keyCode === 13) && e.preventDefault();
};

export const disabledEnterKeyAndSpace = (e: any) => {
  (e.key === "Enter" ||
    e.keyCode === 13 ||
    e.key === " " ||
    e.keyCode === 32) &&
    e.preventDefault();
};

export const scrollToError = (e: any) => {
  document?.getElementsByName((Object.keys(e) as any)[0])[0]?.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
};

export const handleSetErrorMail = (
  e: any,
  fields: string[],
  setError: any,
  prefix: string = "",
) => {
  if (prefix) {
    Object.keys(e[prefix]).forEach((field: any) => {
      if (fields.includes(field)) {
        if (
          e[prefix][field] &&
          (e[prefix][field].type === "pattern" ||
            e[prefix][field].type === "validate" ||
            e[prefix][field].type === "custom")
        ) {
          const _field = prefix + "." + field;
          setError(_field, {
            type: "custom",
            message: CME00004,
          });
        }
      }
    });
  }

  Object.keys(e).forEach((field: any) => {
    if (fields.includes(field)) {
      if (
        e[field] &&
        (e[field].type === "pattern" || e[field].type === "validate")
      )
        setError(field, {
          type: "custom",
          message: CME00004,
        });
    }
  });
};

export const resizeMap = (idElement: string) => {
  const element = document.getElementById(idElement) as HTMLElement;
  if (element) {
    const widthElement = element?.offsetWidth;
    const heightElement = element?.offsetHeight;

    return { widthElement, heightElement };
  }
  return { widthElement: 0, heightElement: 0 };
};

export const renderYearsOption = () => {
  const options = [{ value: "", name: "" }];
  const yearNow = new Date().getFullYear();
  for (let i = yearNow - 10; i <= yearNow + 1; i++) {
    options.push({
      name: `${i}`,
      value: `${i}`,
    });
  }
  return options;
};

export const replaceFileExtension = (fileName: string) => {
  return fileName.replace(REGEX_EXTENSION, "");
};

export const scrollTopSync = (tableLeftId: string, tableRightId: string) => {
  const tableLeft = document?.getElementById(tableLeftId);
  const tableRight = document?.getElementById(tableRightId);

  if (tableRight && tableLeft) {
    tableLeft.scrollLeft = tableRight.scrollLeft;
  }
};
let timeoutSync: any = false;
export const scrollBodySync = (
  currentId: string,
  listReferenceId: string[],
) => {
  if (timeoutSync) {
    clearTimeout(timeoutSync);
  }
  timeoutSync = setTimeout(() => {
    const currentIdElement: any =
      document?.getElementsByClassName(currentId)[0];
    const currentIdElementTop: number = currentIdElement.scrollTop;
    listReferenceId.forEach((referenceId: string) => {
      const element: any = document?.getElementsByClassName(referenceId)[0];
      element.scrollTop = currentIdElementTop;
    });
  }, 10);
};

export const getDefaultValues = (defaultValue: any, keys: string) => {
  const cacheData = getItemSessionStorage(keys);
  if (cacheData) {
    const parameters = JSON.parse(cacheData);
    const { parameterQuery } = parameters;
    return parameterQuery;
  } else {
    return defaultValue;
  }
};

export const getDefaultPagination = (defaultPagination: any, keys: string) => {
  const cacheData = getItemSessionStorage(keys);
  if (cacheData) {
    const parameters = JSON.parse(cacheData);
    const { pagination } = parameters;
    return pagination;
  } else {
    return defaultPagination;
  }
};

export const handleShowClassCode = (
  largeClass: string | any,
  middleClass: string | any,
  minorClass: string | any,
  subClass: string | any,
) => {
  return `${largeClass || ""}${middleClass || ""}${minorClass || ""}${
    subClass || ""
  }`;
};

export const covertKilometer = (meter: any) => {
  if (!meter) {
    return 0;
  }
  return Math.round((meter / 1000) * 10) / 10;
};

export const getUniqueList = (arr: any) => {
  return arr.filter((obj: any, index: number) => {
    return (
      index ===
      arr.findIndex(
        (item: any) =>
          obj?.point?.x === item?.point?.x && obj?.point?.y === item?.point?.y,
      )
    );
  });
};

export const roundUpToDecimal = (number: any, round: number) => {
  if (!number) {
    return "0.0";
  }
  return Math.ceil(number * round) / round;
};

export const roundToDecimal = (number: any, round: number) => {
  if (!number) {
    return "0.0";
  }
  return Math.round(number * round) / round;
};

export const handleClosePage = () => {
  window.close();
  if (!window.closed) {
    browserHistory.back();
  }
};

export const handleFocusItemDisabled = (e: any) => {
  e.target.blur();
};

export const getFileNameURI = (response: any) => {
  if (response?.headers?.["content-disposition"]) {
    const contentDisposition = response?.headers?.["content-disposition"];
    const fileName = contentDisposition.match(
      /filename\*=utf-8''([^;]+)|filename=([^;]+)/,
    );
    return decodeURIComponent(fileName?.[1] || fileName?.[2] || "");
  }
  return "";
};

/** current year = 0 */
export const getFiscalYear = (year = 0) => {
  const date = new Date();
  if (date.getMonth() > 2) {
    return {
      fromDate: `${date.getFullYear() + year}-04-01`,
      toDate: `${date.getFullYear() + year + 1}-03-31`,
      fromMonth: `${date.getFullYear() + year}-04`,
      toMonth: `${date.getFullYear() + year + 1}-03`,
      fromYear: date.getFullYear() + year,
      toYear: date.getFullYear() + year + 1,
    };
  } else {
    return {
      fromDate: `${date.getFullYear() + year - 1}-04-01`,
      toDate: `${date.getFullYear() + year}-03-31`,
      fromMonth: `${date.getFullYear() + year - 1}-04`,
      toMonth: `${date.getFullYear() + year}-03`,
      fromYear: date.getFullYear() + year - 1,
      toYear: date.getFullYear() + year,
    };
  }
};

export const calculateRate = (dividend: number, divisor: number) => {
  if (dividend && divisor) {
    const rate = (dividend / divisor) * 100;
    const round = roundToDecimal(rate, 10);
    if (!round.toString().includes(".")) {
      return round.toString() + ".0";
    }
    return roundToDecimal(rate, 10);
  }
  return "0.0";
};

export const renderOptionPullDownFloor = (
  floorStart: number,
  value: number,
) => {
  let pullDown: any[] = [{ value: "", name: "" }];
  for (let i = floorStart; i <= value; i++) {
    pullDown.push({
      value: i.toString(),
      name: i.toString(),
    });
  }
  return pullDown;
};

export const getYearFromDate = (date: string, format: string = DATE_FORMAT) => {
  if (moment(date, format).month() + 1 >= 4) {
    return moment(date, format).year();
  } else {
    return moment(date, format).year() - 1;
  }
};

export const getParamURL = (name: string) => {
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get(name);
};

export const renderListName = (
  list: string[],
  textOther = "その他",
  max = 5,
) => {
  return (
    !!list?.length &&
    [...list]
      ?.filter((value) => !!value)
      ?.map((value: string, idx: number) =>
        idx < max - 1 ? value : idx === max - 1 ? textOther : "",
      )
      .filter((value: string) => value)
      .join("、")
  );
};

export const checkIdenticalArray = (array1: any[], array2: any[]) => {
  const result = array1.some((item: any) => array2.includes(item));
  return result;
};

export const compareArrays = (a: any, b: any) =>
  a.length === b.length &&
  a.every((element: any, index: number) => element === b[index]);

export const scrollErrorByKey = (key: string) => {
  if (key) {
    document?.getElementById(key)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

export const blockBackslash = (name: string, method: any) => {
  const value = method.getValues(name);
  if (/[\\＼]/g.test(value)) {
    method.setValue(name, value.replace(/[\\＼]/g, ""));
  }
};

export const setDefaultTitle = (title) => {
  document.title = title;
};

