App.js// displays past posts, contains update and create view
  constructor
    super
      fn(s).bind
  fn:
    addPost
    updatePost
    removePost
  render:
    list-of-posts.map()
    <Log />  //Inventory

Log.js // update and create new posts
  fn:
    handleChange
    authenticate
    logout
    authHandler
    renderLogin (sign in to manage posts)
      github button
      twitter button
    renderPosts (update posts)
      inputs:
        day
        date
        progress
        thoughts
        link
        tweet

  const grabLogInfo

  firebase query

  render:
      const logout button
    return:
      logout
      posts.map
      <AddPostForm /> // AddFishForm

AddPostForm.js // creates a new post
  fn:
    createPost
      const post = {day, progress, thought, link, tweet}

  render:
    inputs:
        day
        progress
        thought
        link
        tweet

    submit button

Post.js
  render:
    const {details, index} = this.props
    return:
      day
      date
      progress
      thoughts
      link
      tweet
      save button
