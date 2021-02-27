const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

//set env

process.env.NODE_ENV = 'production';

let mainWindow;
let addWindow;

//first listen to the app

app.on('ready', function(){
//create new window
mainWindow = new BrowserWindow({
    width:380,
    height:420,
});
//load the html file in the window

mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
}));

//handle create add window



//build menu from template
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
//insert the menu
Menu.setApplicationMenu(mainMenu);
});
function createAddWindow(){
   
    var x = Math.floor((Math.random() * 10) + 1);
    //create new window
    addWindow = new BrowserWindow({
        width:380,
        height:420,
        title:'Ambarish-'+x
    });
    
    //load the html file in the window
    
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
}
//create menu template
const mainMenuTemplate =[
    {
        label:'Ambarish',

                click(){
                    createAddWindow();
                }
            
           
        
        
    },
    {
        label: 'Edit',
        submenu: [
           {
              role: 'undo'
           },
           {
              role: 'redo'
           },
           {
              type: 'separator'
           },
           {
              role: 'cut'
           },
           {
              role: 'copy'
           },
           {
              role: 'paste'
           }
        ]
     },
     
     {
        label: 'View',
        submenu: [
           {
              role: 'reload'
           },
           {
              type: 'separator'
           },
           {
              role: 'resetzoom'
           },
           {
              role: 'zoomin'
           },
           {
              role: 'zoomout'
           },
           {
              type: 'separator'
           },
           {
              role: 'togglefullscreen'
           }
        ]
     },
     
     {
        role: 'window',
        submenu: [
           {
              role: 'minimize'
           },
           {
              role: 'close'
           }
        ]
     },
     
     {
        role: 'help',
        submenu: [
           {
              label: 'Developed by Ambarish'
           }
        ]
     } 
];