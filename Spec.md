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

Active Priority:

  Move sample data button to top with log out button

**********************************************************************
  Clear on submit

  Center everything on page
    Flexbox?



  Tweet
    Connect to Twitter API
    Pre-fill #100daysofcode, {day}, {progress} and link input.
    Connect to Twitter API

  Link - This may be handled by Twitter
    Add "Shorten URL" button.
    Send input value to url shortener
    Display "url {shortenedURL} saved and appended to tweet"

  Export contents to log.md
    Append form contents to log.md format

  Push exported log.md file to github
      Option 1: provide prompt with expandable directions

  Edit past entries

************************************************************************

  SOLVED - "Day Day 21": remove extra "Day"
  SOLVED - Change background to something with more flair.
  SOLVED - Day incrementer.
    Option 1: Start from date(dd) and ++ day for each 24hrs from there
    Option 2: Use option 1 with option to input/increment manually
    Option 3: On first post, set counter variable to 1.
    Option 4: map over objects, set day to 1, assign to object.day, day ++.
    >>>>> Option 5: Object.keys(obj).length + 1
  SOLVED - Use the storepicker naming scheme, or find a random generator and implement react-router from Catch of the Day. Call ${this.props.params.userID}/entries
  SOLVED - Newest entries should appear above previous entries
    Steps: Examine render order of loadsample and renderEntry
        Is sampleData being loaded into state?
          Yes
          If so, new entries should be appended. The render of state should be sorted before returned.
            SOLVED - appended .reverse() onto .map.
