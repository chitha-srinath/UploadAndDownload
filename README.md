
# Google Drive 

This code is to download a large video file from goole drive directory and uplaoding the video file to another directory.



## Installation

Download the project in VS Code

install dependencies by using command `npm i`
    
Create an account in  [google console](https://console.cloud.google.com/)

Create a project and go to APIs & Services section and select credentials option

By clicking create credentials , select option OAuth ClientId and select application type as web application 
 
Add redirect uri for the application which is to be added in `environmenrtal variables`

After creating the application, OAuth 2.0 Client IDs section you will get the clientId and client secret to add in `environmenrtal variables`

Now with all installation and setup is done , u can call the apis shown below
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` Server where the local host url is running

`CLIENT_ID` where u get from google console

`ClIENT_SECRET` where u get from google console

`SOURCE_FILE_ID` File Id of google drive directory

`DESTINATION_FOLDER_ID` Folder Id of google drive directory

`SCOPES` adding only google drive scope, if u want to learn more about scopes [google api scopes](https://developers.google.com/identity/protocols/oauth2/scopes)
## API Reference

#### Authorization

```http
  GET /googleAuth
```
To generate the accesstoken and refresh token for authentication and authorization

#### Downloading and uploading to drive

```http
  GET /download
```
To download file in local and uploading to another directory in google drive



## Acknowledgements

 - [Upload file data](https://developers.google.com/drive/api/guides/manage-uploads)
