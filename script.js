
function giveFeedback(mood) {
    document.getElementById('emoji-container').innerText = getEmoji(mood);
        document.getElementById('feedback-container').style.backgroundColor = getFeedbackColor(mood);
        document.getElementById('happy').innerText = "Thanks for feedback";
    document.getElementById('neutral').innerText = "Thanks for feedback";
    document.getElementById('unhappy').innerText = "Thanks for feedback";
  }
  function getEmoji(mood) {
    if (mood === 'satisfied') {
      return '😊';
    } else if (mood === 'neutral') {
      return '😐';
    } else if (mood === 'unhappy') {
      return '😢';
    }
  }
  function getFeedbackColor(mood) {
    if (mood === 'satisfied') {
      return '#2ecc71';
    } else if (mood === 'neutral') {
      return '#3498db';
    } else if (mood === 'unhappy') {
      return '#e74c3c';
    }
  }