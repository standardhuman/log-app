Feature list

Active Priority:

  Center align input text
  Log picker button: color to #ffffff
  Clear on submit

**********************************************************************

  Move sample data button to top with log out button

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
