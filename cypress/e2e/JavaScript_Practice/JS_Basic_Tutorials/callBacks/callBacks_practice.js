function browserLaunch(browser, loginApplication){
    setTimeout(() => {
    console.log("Launch "+browser+" Browser");
    loginApplication("Kabira","admin@123");} // call back function 
    ,3000)
}


function loginApplication(userName,passWord){

    console.log("Login to the Application")
    console.log("UserName is ---> " +userName);
    console.log("PassWord is ---> " +passWord);
}

browserLaunch("chrome",loginApplication);
