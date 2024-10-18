const inqs = document.querySelectorAll(".inq");
const toggleBtn = document.querySelectorAll(".inqToggle");
const editBtns = document.querySelectorAll('.editBtn');
createEditArea();
const editAnsContainer = document.querySelectorAll('.editAnsContainer');
const editAns = document.querySelectorAll('.editAns');
const ansP = document.querySelectorAll('p.inqText');
const editSubmits = document.querySelectorAll('.editSubmit');

toggleClass();


function toggleClass(){
    for(let i=0; i<inqs.length; i++){
        toggleBtn[i].addEventListener("click", ()=>{
            inqs[i].classList.toggle('active');
            changeToggleButtonIcon(inqs[i],toggleBtn[i]); 
            enableEdit(inqs[i], editBtns[i] );

            editBtns[i].addEventListener("click", ()=>{
                toggleEditBtn(editAnsContainer[i], editBtns[i])
            });
        })
        editSubmits[i].addEventListener('click', ()=>{
            updateAns(editAns[i], ansP[i], editAnsContainer[i], editAns[i]);
        })
    }
};

function toggleEditBtn(editAnsContainerIdx, editBtnsIdx ){
    if(!editAnsContainerIdx.classList.contains('active')){
        editBtnsIdx.innerHTML =`<i class="fa-regular fa-circle-xmark"></i>`; 
    }else{
        editBtnsIdx.innerHTML = '<i class="fa-solid fa-pencil">';
    }
    editAnsContainerIdx.classList.toggle('active');
}

function changeToggleButtonIcon(inqsIdx, toggleBtnIdx, ){
    if(inqsIdx.classList.contains('active')){
        toggleBtnIdx.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
    }else{
        toggleBtnIdx.innerHTML = `<i class="fa-solid fa-caret-down">`;
    }
}

function updateAns(editAnsInput, ansPInput, editAnsContainerInput, editAnsInput){
    if(!editAnsInput.value){   
        editAnsInput.classList.add('empty');
        setTimeout(()=>{editAnsInput.classList.remove('empty')}, 1000 );
   }else{
        ansPInput.innerText = `${editAnsInput.value.trim()}`;
    editAnsContainerInput.classList.remove('active');
   }
    
}


function enableEdit(inq, edit){
    if(inq.classList.contains('active')){
        edit.disabled = false;
    }else{
        edit.disabled =true;
    }
};


function createEditArea(){
    inqs.forEach((inq, idx)=>{
        const editAnsContainer = document.createElement("div");
        editAnsContainer.classList.add('editAnsContainer');
        editAnsContainer.innerHTML = `
             <textarea name="" id="" class="editAns" placeholder="edit answer here"></textarea>
                    <button class="editSubmit"><i class="fa-solid fa-check"></i></button>
        ` ;
        inq.appendChild(editAnsContainer);
    })
}


