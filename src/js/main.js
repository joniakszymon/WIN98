//-----------------------------------------//
//       BOTTOM TASK BAR FUNCTIONS         //
//-----------------------------------------//

const startBtn = document.querySelector('.start');
const menuList = document.querySelector('.taskbar-list');
const taskBar = document.getElementById('taskbar-list');

const showMenu = () => {
    menuList.classList.toggle('show-taskbar');
}

startBtn.addEventListener('click', showMenu);

/* start panel right side - clock */
const dateContainer = document.querySelector('.time');

const GetTime = () => {
    dateContainer.textContent = new Date().toLocaleString();
}

setInterval(GetTime, 1000);


/*-----------------------------------------
            FOLDERS FUNCTIONS                
-----------------------------------------*/

const computer = document.querySelector('.computer');
const comput = document.querySelector('.comput');
const documents = document.querySelector('.documents');
const applications = document.querySelector('.applications');
const games = document.querySelector('.games');
const images = document.querySelector('.images');

const exit = document.querySelectorAll('.exit');
const enlarge = document.querySelectorAll('.enlarge');

const mycomputer = document.querySelector('.mycomputer');
const mydocuments = document.querySelector('.mydocuments');
const myimages = document.querySelector('.myimages');
const mygames = document.querySelector('.mygames');
const myapplications = document.querySelector('.myapplications');

//-----------------------------------------//
//           Initializations               //
//-----------------------------------------//

computer.addEventListener('click', () => {
    if(mydocuments.classList.contains('exit-window')) {
        hideFolders(mydocuments);
    }
    showFolder(mycomputer);
    showFolder()

});

comput.addEventListener('click', () => {
    showFolder(mycomputer);
    showMenu();
});
games.addEventListener('click', () => {
    showFolder(mygames);
    showMenu();
});
applications.addEventListener('click', () => {
    showFolder(myapplications);
    showMenu();
});
images.addEventListener('click', () => {
    showFolder(myimages);
    showMenu();
});

documents.addEventListener('click', () => {
    if (mycomputer.classList.contains('exit-window')) {
        hideFolders(mycomputer);
    }
    showFolder(mydocuments);
    showMenu();
});

//----------------------------------------//
//     Folder corner-buttons functions    //
//----------------------------------------//

exit.forEach(el => {
    el.addEventListener('click', () => {
        hideFolders(mycomputer);
        hideFolders(mydocuments);
        hideFolders(myapplications);
        hideFolders(mygames);
        hideFolders(myimages);
    });
})


enlarge.forEach(el => {
    el.addEventListener('click', () => {
        mycomputer.classList.toggle('full-wh');
        mydocuments.classList.toggle('full-wh');
        myapplications.classList.toggle('full-wh');
        myimages.classList.toggle('full-wh');
        mygames.classList.toggle('full-wh');
    });
});

//-----------------------------------------//
//             Open folders                //
//-----------------------------------------//

const showFolder = folder => {
    folder.classList.add('exit-window')
}

//-----------------------------------------//
//             Close folders               //
//-----------------------------------------//

const hideFolders = folder => {
    folder.classList.remove('exit-window')
}