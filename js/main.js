function commentSection() {
  // get value from username and comment.
  var username = document.getElementById("username").value
  var comment = document.getElementById("comment").value
  console.log(username + " " + comment);
  // create a text node for values
  var user = document.createTextNode(username)
  var text = document.createTextNode(comment)
  console.log("Alias is " + user);
  console.log("Comment is " + text);
  // create new elements for text node values beneath comment field.

  var newCommentItem = document.createElement("li")
  newCommentItem.className = "comment-group-item"
  var newUser = document.createElement("h3")
  newUser.appendChild(user)
  var newText = document.createElement("p")
  newText.appendChild(text)

  commentList.appendChild(newUser)
  commentList.appendChild(newText)
  document.getElementById("commentList").appendChild(newCommentItem)
}
