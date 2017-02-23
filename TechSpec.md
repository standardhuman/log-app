App.js// displays past posts, contains update and create views

      <!--State lives here. All state gets passed up to here and redistributed back down to any other components that might need it.  -->

  constructor
    super
      get initial state
      fn(s).bind
      <!--2.21: implement functions in app one by one  -->
  fn:
    addPost //DONE! 2.19. NEXT: renderEntries
      <!--update our state  -->
      create copy of state
      <!--add in new entries  -->
      create unique id fn for new entries
      assign that fn to each new entry
      <!-- set state -->
      this.state({ entries: entries })
      <!-- bind this fn to the context of App.js -->
      <!-- pass this fn as props to AddEntryForm.js via Log.js-->

    updatePost
    removePost
  render:
    list-of-posts.map()
    <Log />

  // In which component do the sample activities actually get rendered? App.js as part of the Object and mapping

Log.js // update and create new posts
  fn:
    handleChange
    authenticate
    logout
    authHandler
    renderLogin (sign in to manage posts)
      github button
      twitter button
    renderEntries (update posts)
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

Entry.js
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



Feature list

Priority: Newest entries should appear above previous entries
  Steps: Examine render order of loadsample and renderEntry

  Center everything on page
    Flexbox?

  Move sample data to top with log out button

  Day incrementer.
    Option 1: Start from date(dd) and ++ day for each 24hrs from there
    Option 2: Use option 1 with option to input/increment manually
    Option 3: On first post, set counter variable to 1.

  Tweet
    Pre-fill #100daysofcode, {day}, {progress} and link input.
    Connect to Twitter API

  Link
    Add "Shorten URL" button.
    Send input value to url shortener
    Display "url {shortenedURL} saved and appended to tweet"

  Export contents to log.md
    Append form contents to log.md format

  Push to github
