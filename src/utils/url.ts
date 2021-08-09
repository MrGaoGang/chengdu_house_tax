function getQuery(name: string): string {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] == name) {
      return pair[1];
    }
  }
  return "";
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
