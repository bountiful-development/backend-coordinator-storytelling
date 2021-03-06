# Bountiful Children's Foundation Coordinator Storytelling Backend!

## Important Links
- [LANDING PAGE](https://coordinator-storytelling-landing.netlify.com/)
- [REACT APP](https://coordinator-storytelling.netlify.com/)
- [TDD](https://docs.google.com/document/d/1myM0ixJFxG_dVFY83cmMMMTPvoFPWMsQdflmZ3BJnEo/edit)
- [Policies and Procedures](https://www.notion.so/Policies-and-Procedures-19e679fc1a284b668d8132dd8d7228cd)

### Git Flow
No forks will be used in the git repo!

1. Clone the master branch of the repository: `git clone [repo link]`
    - **DO NOT FORK THE REPO**
    - `yarn install`
2. Confirm master is up-to-date: `git pull`
3. Create new branch: `git branch [firstname-lastname]`
4. Checkout branch: `git checkout [firstname-lastname]`
    - 3 and 4 can be combined: `git checkout -b [firstname-lastname]`
5. `git push -u origin [firstname-lastname]`
6. Make frequent commits per usual.
7. **When a feature is complete** `git pull origin master`
8. Resove any conflicts - let me know if you need any help with this!
9. `git push` it!
10. **On github,** make a pull request to be approved by TL or PM.

### Mission Statement
Bountiful Children's Foundation connects people across the globe through the power of human stories.

#### What problem does Coordinator Storytelling solve?
The Coordinator Storytelling App is place for Coordinators of the Bountiful Children’s Foundation to add and share success stories in one place rather than getting lost through other means like through email, facebook messages, etc.

#### How does Coordinator Storytelling solve the problem?
The app gives coordinators the ability to write, edit, and delete new success stories that can be publicly viewed on the app. It also gives the public (donors) the ability do donate to specific projects.

**Pitch:** The Bountiful Children's Foundation needs a way to collect success stories from 15 different countries, rather than losing them through email, facebook messages, etc.

### MVP Feature Breakdown: 

1. This app contains two user types. A coordinator and a donor.

2. **Login/Sign up Pages:** Coordinators can login to their account or sign up for an account using a Username and Password. Account should include name, country (choose from a drop down list: Bolivia, Brazil, Cambodia, Colombia, Ecuador, El Salvador, Ghana, Guatemala, Haiti, Honduras, Kiribati, Madagascar, Mongolia, Nicaragua, Paraguay, Peru, Philippines, Sierra Leone, Zimbabwe) their title within the organization, and e-mail and password.

3. Home Page (for a coordinator) If no profile is created, be sure to allow a coordinator to create a profile. In a list view, a coordinator can see their stories that they have saved. Story title, country, and short preview of the description

4. A coordinator can create a story. A story must be able to have a title, country, description, and date.

5. A coordinator can edit a story.

6. A coordinator can delete a story.

7. **Home Page for a donor:** Each story is laid out in a grid format, with the country name and story preview beneath it. Stories are ordered chronologically. Stories can also be filtered by country (Bolivia, Brazil, Cambodia, Colombia, Ecuador, El Salvador, Ghana, Guatemala, Haiti, Honduras, Kiribati, Madagascar, Mongolia, Nicaragua, Paraguay, Peru, Philippines, Sierra Leone, Zimbabwe).

8. Single story view page with a donate button at the bottom.

### Stretch: 

- Allows coordinators to upload photos and videos to the stories. 
- Allow coordinators to upload a profile pic. Link to paypal to donate.
