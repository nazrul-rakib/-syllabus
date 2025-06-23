document.querySelectorAll('.toggle-link').forEach(link => {
    let clicked = false;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (!clicked) {
        window.open(this.dataset.first, '_blank');
        clicked = true;
      } else {
        window.open(this.dataset.second, '_blank');
        clicked = false; // আবার প্রথমে ফেরত যাবে
      }
    });
  });
