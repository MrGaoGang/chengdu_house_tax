export function getQuery(name: string): string {
  const u = window.location.href,
    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
    r = u.substr(u.indexOf("?") + 1).match(reg);
  return r != null ? r[2] : "";
}

export function getItem(name: string): number | string {
  const data = window.localStorage.getItem(name) || getQuery("");
  try {
    return Number(data);
  } catch (error) {
    return data;
  }
}

export function setItem(name: string, value: number | string): void {
  return window.localStorage.setItem(
    name,
    typeof value === "number" ? value + "" : value
  );
}
