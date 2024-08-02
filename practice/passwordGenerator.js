function generatePassword(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];,./`~';
    const allCharacters = uppercase + lowercase + specialCharacters;
  
    let password = '';
  
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
  
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
  
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  
    for (let i = password.length; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
  
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
  
    return password;
  }
  
  const passwordLength = 12;
  const newPassword = generatePassword(passwordLength);
  console.log(newPassword);
  