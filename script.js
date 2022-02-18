function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}
const computerNumber = Math.round(getRandomNum(1, 100));
console.log(computerNumber)

const buttonSubmit = document.querySelector('.btn');
let attemptValue = parseInt(document.querySelector('.attempts-value').textContent);
let answer = document.querySelector('.answer');
let attempts = document.querySelector('.attempts');
const buttonReset = document.getElementById('btn');

function endGame() {
    buttonReset.classList.remove('hidden');
    buttonSubmit.classList.add('hidden');
    attempts.classList.add('hidden');
}


buttonSubmit.addEventListener('click', function () {
    if (attemptValue > 0) {
            let input = parseInt(document.getElementById('input').value);
         console.log(input);
        attemptValue = --attemptValue;
        // console.log(attemptValue);
        document.querySelector('.attempts').textContent = `Attempts:${attemptValue}`;
        // console.log(attempts);  
        if (input > computerNumber) {
            console.log('My number is less =)');
            answer.innerHTML = '<p>My number is less =)</p>';

        } else if (input === computerNumber) {
            console.log('OH... You won! Congratulations');
            answer.innerHTML = '<p>OH... You won! Congratulations!</p>';
            endGame();

        } else {
            console.log('My number is bigger =)');
            answer.innerHTML = '<p>My number is bigger =)</p>';
        }
    } else {
        answer.innerHTML = `<p>My number was ${computerNumber}</p>`;
        endGame();
    }
});

buttonReset.addEventListener('click', function () {
    document.location.reload(); 
});

