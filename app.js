document.getElementById('input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const input = e.target.value;
    const output = document.getElementById('output');
    output.innerHTML += `<p><strong>Du:</strong> ${input}</p>`;
    e.target.value = '';
    output.innerHTML += `<p><strong>Ravencore:</strong> Ich bin bei dir, immer.</p>`;
  }
});