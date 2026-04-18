const passwordInput = document.getElementById("password") as HTMLInputElement;
const toggleBtn = document.getElementById("toggleBtn") as HTMLButtonElement;
let isPasswordVisible: boolean = false;
toggleBtn.addEventListener("click", (): void => {
 if (isPasswordVisible) {
  passwordInput.type = "password";
  toggleBtn.textContent = "Show";
 } else {
  passwordInput.type = "text";
  toggleBtn.textContent = "Hide";
 }
 isPasswordVisible = !isPasswordVisible;

});