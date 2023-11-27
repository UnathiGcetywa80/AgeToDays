function calculateAge() {
    const birthYear = document.getElementById('birthYear').value;
    
    if (birthYear > 0 && birthYear <= new Date().getFullYear()) {
      const currentYear = new Date().getFullYear();
      const ageInDays = (currentYear - birthYear) * 365;
      
      const resultElement = document.getElementById('result');
      resultElement.innerText = `You are approximately ${ageInDays} days old.`;
    } else {
      alert('Please enter birth year!');
    }
  }
  