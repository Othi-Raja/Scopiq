// just a plain function that reads cookie and returns boolean
export default function TamilChecker() {
  return document.cookie.includes("isTamil=true");
}
