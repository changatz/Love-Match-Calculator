document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
  
    if (!name1 || !name2) return;
  

    const seed = name1.toLowerCase() + name2.toLowerCase();
    let total = 0;
    for (let i = 0; i < seed.length; i++) {
      total += seed.charCodeAt(i);
    }
    const percentage = (total % 100) + 1;
  
    const messages = [
      `💞 ${name1} and ${name2} are a match made in heaven!`,
      `✨ There's definitely a spark between ${name1} and ${name2}!`,
      `💔 It's complicated for ${name1} and ${name2}... but there's hope!`,
      `💬 ${name1} and ${name2} might be better as friends.`,
      `🌟 A unique connection between ${name1} and ${name2}, cherish it!`
    ];
  
    const message = messages[Math.floor(percentage / 20)];
  
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('message').textContent = message;
  
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.classList.remove('fade-in');
    // Trigger reflow for animation restart
    void resultDiv.offsetWidth;
    resultDiv.classList.add('fade-in');

    // Optional: Floating hearts animation
    createHearts();
});

// Reset functionality
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('loveForm').reset();
    document.getElementById('result').classList.add('hidden');
    document.getElementById('percentage').textContent = '';
    document.getElementById('message').textContent = '';
});

// Floating hearts animation function
function createHearts() {
    const resultDiv = document.getElementById('result');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 90 + '%';
        heart.style.animationDelay = (Math.random() * 1) + 's';
        resultDiv.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}
  