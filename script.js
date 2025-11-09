const COMMON_PASSWORDS = [
    'password', '123456', '123456789', 'qwerty', 'abc123', 'password1', '111111', '123123', 'letmein', 'welcome',
    'admin', 'monkey', 'login', 'football', 'iloveyou', 'starwars', 'dragon', 'sunshine', 'princess', 'master'
];

function isCommonPassword(pw) {
    return COMMON_PASSWORDS.includes(pw.toLowerCase());
}

function passwordStrength(pw) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[a-z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
}

function feedback(pw) {
    if (isCommonPassword(pw)) {
        return {msg: '⚠️ This is a very common password. Please choose another.', color: 'red'};
    }
    const score = passwordStrength(pw);
    if (score <= 2) {
        return {msg: '❌ Weak password. Use at least 8 characters, mix upper/lowercase, numbers, and symbols.', color: 'red'};
    } else if (score === 3) {
        return {msg: '⚠️ Moderate password. Add more variety for better security.', color: 'orange'};
    } else if (score === 4) {
        return {msg: '✅ Strong password. Good job!', color: 'green'};
    } else {
        return {msg: '💪 Very strong password!', color: 'darkgreen'};
    }
}

function checkPassword() {
    const pw = document.getElementById('password').value;
    const feedbackDiv = document.getElementById('feedback');
    if (!pw) {
        feedbackDiv.textContent = '🚨 Please enter a password.';
        feedbackDiv.style.color = 'red';
        return;
    }
    const result = feedback(pw);
    feedbackDiv.textContent = result.msg;
    feedbackDiv.style.color = result.color;
}