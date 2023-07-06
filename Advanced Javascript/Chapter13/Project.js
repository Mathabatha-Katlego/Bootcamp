
const allowedPasswords = ['katlego', 'thabo', 'crash'];


function login(password) {
    return allowedPasswords.includes(password);
}

function checkPassword(password) {
    return new Promise((resolve, reject) => {
        if (login(password)) {
            resolve({ status: true });
        } else {
            reject({ status: false });
        }
    });
}


function passwordChecker(password) {
    checkPassword(password)
        .then(result => {
            console.log('Password is valid:', result.status);
        })
        .catch(error => {
            console.log('Invalid password:', error.status);
        });
}

passwordChecker('katlego');
passwordChecker('dog');
passwordChecker('crash');
passwordChecker('123456'); 
