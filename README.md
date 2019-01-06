# README

This atlassian connect app implementation of [jsd-bulk-customer-upload](https://github.com/iokiwi/jsd-bulk-customer-upload) using the below resources as a starting point.

 * [Build a Jira app using a framework](https://developer.atlassian.com/cloud/jira/platform/build-a-jira-app-using-a-framework/)
 * [atlassian-connect-express  / README.md](https://bitbucket.org/atlassian/atlassian-connect-express/src/master/README.md?fileviewer=file-view-default#markdown-header-install-dependencies) 
 * [Frameworks and tools](https://developer.atlassian.com/cloud/jira/platform/frameworks-and-tools/)
 * [Free Atlassian Cloud Development Instance](http://go.atlassian.com/cloud-dev)
 
## To Run

Install from `package.json`
```bash
npm install
```

Install `sqlite3` seperately (for development)
```bash
npm install sqlite3
```

Start the server
```
npm start
```

### Automatic Registration (recommended)

This section will describe how to configure ACE so that it can automatically register your add-on with your Atlassian 
Cloud development instance, re-register on changes to the descriptor, and de-register on shut down.

To get this functionality, you will need to:

2. Create a file called `credentials.json`,
3. Copy and paste the contents of this file,
4. Add credentials.json to the `.gitignore` file, and
5. Change the contents of the file to contain the link to your Cloud Development environment, admin authentication, and product

ACE will now read this file and automatically create an ngrok tunnel, and register your add-on on your development instance.