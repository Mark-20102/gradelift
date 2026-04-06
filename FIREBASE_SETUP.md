# Firebase Setup Instructions - Complete Step-by-Step Guide

This comprehensive guide will walk you through setting up Firebase for your Gradelift Anatomy Quiz website. Firebase will handle user authentication (login/signup) and store quiz scores in a database. This process takes about 15-20 minutes and requires no coding experience.

## Prerequisites

- A Google account (Gmail) - you'll need this to access Firebase
- Internet connection
- Your website files (index.html, script.js, style.css) ready

---

## Step 1: Create a Firebase Project

Let's start by creating your Firebase project. Think of this as creating a "container" for all your app's data and services.

1. **Open Firebase Console**
   - Open your web browser and go to: https://console.firebase.google.com/
   - If you're not already signed in, sign in with your Google account

2. **Create New Project**
   - Look for and click the blue "Create a project" button
   - If you see "Add project" instead, click that (it's the same thing)
   - **Project name**: Type `gradelift-anatomy-quiz` exactly as shown
   - Check the box that says "I accept the Firebase terms" (you must agree to continue)
   - Click the "Continue" button

3. **Google Analytics Setup** (Optional but recommended)
   - You'll see a toggle switch for "Enable Google Analytics for this project"
   - **Toggle this to ON** (it's recommended for tracking user engagement)
   - From the dropdown menu, select your Google Analytics account
   - If you don't have one, you can create a new account here
   - Click "Create project" to proceed

4. **Wait for Project Creation**
   - Firebase will show a progress indicator while creating your project
   - This usually takes 30-60 seconds
   - Once complete, you'll see a "Project created successfully!" message
   - Click the "Continue" button to enter your project dashboard

**What just happened?** You now have a Firebase project that will host all your app's backend services.

---

## Step 2: Enable User Authentication

Authentication allows users to create accounts and log in to save their quiz scores. Without this, users would lose their progress every time they close their browser.

1. **Navigate to Authentication**
   - In your Firebase project dashboard, look at the left sidebar menu
   - Find and click on "Authentication" (it has a person icon next to it)

2. **Get Started with Authentication**
   - You'll see a blue "Get started" button - click it

3. **Enable Email/Password Sign-in**
   - At the top of the page, click on the "Sign-in method" tab
   - Scroll through the list of sign-in providers until you find "Email/Password"
   - Click on the "Email/Password" row to expand its options
   - Look for the toggle switch labeled "Enable"
   - **Toggle this switch to ON**
   - Click the "Save" button at the bottom

4. **Verify Setup**
   - After saving, you should see "Email/Password" in the provider list with a green "Enabled" status
   - If it shows "Disabled", repeat step 3

**What just happened?** Users can now create accounts with email and password, and log in to access their saved quiz data.

---

## Step 3: Set Up Firestore Database

Firestore is Google's modern database where we'll store user quiz scores. It's like a digital filing cabinet for your app's data.

1. **Navigate to Firestore**
   - In the left sidebar, find and click "Firestore Database"

2. **Create Database**
   - Click the blue "Create database" button

3. **Choose Security Rules**
   - You'll see two options: "Start in production mode" and "Start in test mode"
   - **Select "Start in test mode"**
   - **Important Note:** This temporarily allows anyone to read/write data. We'll fix this security issue later in Step 7.
   - Click the "Next" button

4. **Choose Database Location**
   - Select a location from the dropdown menu
   - **Choose the location closest to your users** (e.g., "us-central1" for North America, "europe-west1" for Europe)
   - This affects data speed and compliance - closer is faster
   - Click "Done" to create the database

5. **Wait for Setup**
   - Firestore will show a progress indicator while setting up
   - Once complete, you'll see your database dashboard with empty collections

**What just happened?** You now have a database ready to store quiz scores. The "quizScores" collection will be created automatically when users start saving data.

---

## Step 4: Get Your Firebase Configuration

This configuration code connects your website to Firebase. It's like an "address" that tells your website where to find your Firebase services.

1. **Go to Project Settings**
   - In the left sidebar, click the gear icon ⚙️ next to "Project Overview"
   - From the dropdown menu, select "Project settings"

2. **Add a Web App**
   - Scroll down until you see the "Your apps" section
   - Click the "</>" icon (this represents a web application)

3. **Register Your App**
   - **App nickname**: Type `Gradelift Anatomy Quiz`
   - **Important:** Check the box that says "Also set up Firebase Hosting"
   - **Note:** Firebase Hosting is optional but recommended for deploying your site later
   - Click "Register app"

4. **Copy Configuration**
   - Firebase will show you a code snippet with your configuration
   - Look for the `firebaseConfig` object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD1234567890abcdefghijklmnopqrstuvw",
  authDomain: "gradelift-anatomy-quiz.firebaseapp.com",
  projectId: "gradelift-anatomy-quiz",
  storageBucket: "gradelift-anatomy-quiz.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef",
};
```

- **Click the "Copy" button** to copy all of this code
- **Keep this window open** - you'll need it in the next step

**What just happened?** You registered your website as a Firebase app and got the connection details.

---

## Step 5: Update Your Website Code

Now we'll connect your website to Firebase by updating the configuration in your JavaScript file.

1. **Open script.js**
   - Open your project folder
   - Find and open the `script.js` file with any text editor

2. **Find the Firebase Config Section**
   - Look for this section around lines 20-30 in the file:

```javascript
// Paste your specific Firebase project keys here:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

3. **Replace with Your Real Config**
   - Select all the placeholder text inside the `firebaseConfig` object
   - Paste your copied Firebase config (from Step 4)
   - **Make sure to keep the curly braces `{}` and semicolons `;`**
   - Your config should now look like the real example above, not the placeholder

4. **Save the File**
   - Save `script.js`
   - Close the text editor

**What just happened?** Your website is now connected to Firebase and can use authentication and database services.

---

## Step 6: Test Your Setup

Let's make sure everything works correctly before securing the database.

1. **Open Your Website**
   - Find your `index.html` file
   - Double-click it or drag it into your web browser

2. **Test User Registration**
   - Look for the "Student Login" section on the page
   - Enter a valid email address (like `test@example.com`)
   - Enter a password (at least 6 characters)
   - Click the "Sign Up" button
   - **Expected result:** You should see "Account created! You are logged in." message

3. **Test Quiz Saving**
   - Click on any anatomy module (like "Upper Limb")
   - Start and complete a quiz
   - **Expected result:** Your score should save automatically

4. **Test Login/Logout**
   - Click the "Log Out" button
   - Log back in with the same email/password
   - **Expected result:** Your previous quiz scores should still be visible

**What just happened?** If all tests passed, your Firebase integration is working! If not, check the troubleshooting section below.

---

## Step 7: Secure Your Database (Important!)

Currently your database is in "test mode" which allows anyone to read/write data. This is insecure - let's fix it so only logged-in users can access their own data.

1. **Go to Firestore Rules**
   - Go back to Firebase Console (https://console.firebase.google.com/)
   - Select your project
   - Go to "Firestore Database" in the left sidebar
   - Click on the "Rules" tab

2. **Update Security Rules**
   - You'll see existing rules that look like this:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.time < timestamp.date(2024, 4, 7);
       }
     }
   }
   ```

   - **Replace ALL of this** with the secure rules below:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own quiz scores
    match /quizScores/{document} {
      allow read, write: if request.auth != null &&
        request.auth.uid == resource.data.userId;
    }
    // Allow authenticated users to create new quiz scores
    match /quizScores {
      allow create: if request.auth != null;
    }
  }
}
```

3. **Publish Rules**
   - Click the "Publish" button
   - Confirm by clicking "Publish" again in the popup

**What just happened?** Your database is now secure. Only logged-in users can access their own quiz scores.

---

## Troubleshooting Common Issues

### "Firebase: Error (auth/invalid-api-key)"

- **Cause:** Wrong API key in your config
- **Fix:** Double-check that you copied the `apiKey` value exactly from Firebase Console
- **Check:** Make sure there are no extra spaces, quotes, or characters

### "Firebase: Error (auth/email-already-in-use)"

- **Cause:** Email address is already registered
- **Fix:** Try logging in with that email instead of signing up
- **Alternative:** Use a different email address for testing

### Quiz scores not saving to database

- **Cause:** Various possible issues
- **Fix:** Open browser developer tools (press F12), go to Console tab, look for error messages
- **Check:** Make sure you're logged in when taking quizzes
- **Check:** Verify Firestore security rules are correct

### Website not loading or showing errors

- **Cause:** JavaScript errors or network issues
- **Fix:** Check browser console (F12 → Console tab) for specific error messages
- **Check:** Make sure your internet connection is working
- **Check:** Verify `script.js` is in the same folder as `index.html`

### "Project doesn't exist" error

- **Cause:** Wrong project ID in config
- **Fix:** Make sure you copied the `projectId` exactly as shown in Firebase Console
- **Check:** It should match the project name you created

### Can't access Firebase Console

- **Cause:** Account or permission issues
- **Fix:** Make sure you're signed in with the same Google account used to create the project
- **Alternative:** Try signing out and signing back in

---

## What's Next? Your Login System is Complete!

Congratulations! Your Gradelift Anatomy Quiz now has:

✅ **User Registration** - Users can create accounts with email/password  
✅ **Secure Login** - Users can log in and out safely  
✅ **Data Persistence** - Quiz scores save automatically to the cloud  
✅ **Cross-Device Access** - Users can access their data from any device  
✅ **Security** - Only logged-in users can access their own data

### Optional: Deploy to Firebase Hosting

Want to make your website live on the internet? Here's how:

1. **Install Firebase CLI**
   - Open Command Prompt or Terminal
   - Run this command: `npm install -g firebase-tools`

2. **Login to Firebase**
   - Run: `firebase login`
   - Follow the browser prompts to authenticate

3. **Initialize Hosting**
   - Open Command Prompt/Terminal
   - Navigate to your project folder (where index.html is)
   - Run: `firebase init`
   - Press spacebar to select "Hosting", then press Enter
   - Select your Firebase project from the list
   - Press Enter to accept default settings for public directory
   - Type `y` when asked to configure as single-page app

4. **Deploy Your Site**
   - Run: `firebase deploy`
   - Wait for deployment to complete
   - Your site will be live at: `https://your-project-id.web.app`

---

## Need More Help?

If you run into issues not covered here:

1. **Check Browser Console** - Press F12, go to Console tab, look for red error messages
2. **Double-check Config** - Verify all Firebase config values are copied exactly
3. **Test Step by Step** - Go through each step again, testing as you go
4. **Clear Browser Cache** - Try refreshing the page or opening in an incognito window

Your anatomy quiz website now has enterprise-level user management and data storage! 🎉</content>
<parameter name="filePath">c:\Users\NEW NEXUS\Documents\gradelift 5\gradelift main\FIREBASE_SETUP.md
