$(document).ready(function() {
    $('.tab').click(function() {
      const tab = $(this).data('tab');
      $('.tab').removeClass('active');
      $(this).addClass('active');
      $('#profiles-page, #friends-page').hide();
      $('#' + tab + '-page').show();
    });
    
    // Load profiles by default
    loadProfiles();
    
    function loadProfiles() {
      $.ajax({
        url: 'https://randomuser.me/api/?results=20',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          $('#profiles').empty();
          data.results.forEach(function(user) {
            const profile = `
              <div class="profile">
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}'s profile picture">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
              </div>
            `;
            $('#profiles').append(profile);
          });
        }
      });
    }
  });