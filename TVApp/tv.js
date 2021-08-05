const Form=document.querySelector('#TVForm');
const body=document.querySelector('body');
Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    TVFunc(Form.elements.searchItem.value);
    
});
function makeImages(res){
    for(let show of res.data){
        if(show.show.image){    
            let IMG=document.createElement('img');
            IMG.src=show.show.image.medium;
            body.append(IMG);
        }
    }
}

const TVFunc=async (query)=>{
    let res=await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    console.log(res);
    makeImages(res);
   
}


function removeImg(){
    const img=document.querySelectorAll('img');
    for(let i of img){
        document.body.removeChild(i);
    }
}