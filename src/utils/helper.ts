/**
 * get token from localstorage
 */
export function getTokenFromLocalStorage() {
  const token = localStorage.getItem("token");
  return token;
}

export function classNames(...args: any[]) {
  return args
    .reduce((acc, val) => {
      if (typeof val === "string") {
        return acc.concat(val.split(" "));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
}

/** Download file from content binary */
export function downloadFileFromContentBinary(data: any, fileName: string) {
  if (!data) {
    return;
  }
  const newBlob = new Blob([data], {
    type: data?.type ? data.type : "application/json",
  });
  console.log(newBlob);
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
