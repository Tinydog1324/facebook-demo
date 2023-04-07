const addFriendBtn = document.getElementById("add-friend-btn");
const friendsBtn = document.getElementById("friends-btn");

addFriendBtn.addEventListener("click", function() {
  addFriendBtn.style.display = "none";
  friendsBtn.style.display = "inline-block";
});