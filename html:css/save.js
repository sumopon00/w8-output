(() => {
      const form = document.getElementById("js-form");
      const emailInput = document.getElementById("js-email");
      const passwordInput = document.getElementById("js-password");

      const STORAGE_KEY = "loginInfo";

      const saveData = localStorage.getItem(STORAGE_KEY);

      if (saveData !== null) {
            const parsedData = JSON.parse(saveData);
            emailInput.value = parsedData.email;
            passwordInput.value = parsedData.password;
      }

      form.addEventListener("submit", (e) => {
            e.preventDefault();

            const userData = {
                  email: emailInput.value,
                  password: passwordInput.value
            };

            const stringifiedData = JSON.stringify(userData);

            localStorage.setItem(STORAGE_KEY, stringifiedData);
;
      });

})();