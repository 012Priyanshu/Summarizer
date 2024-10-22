const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5f431cb0a4msh950b1f23383617dp1888e0jsn464b1b440d1b',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn=document.querySelector(".btn");
const para=document.querySelector(".para");


    btn.addEventListener("click",(e)=>
    {
        e.preventDefault();

        const input=document.querySelector(".input").value;
        const url=`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`
        // console.log("hello");
        para.innerText="summary is processing please wait !!!"
        

       if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input))
       {    
            alert("please enter valid URL")
            
       }
       else
       {
        fetch(url,options)
        .then(data=>data.json())
       
        .then(data=>
            {
            
            console.log(data.summary);
            para.innerText=data.summary;
            
        }
        )
        .catch(error=>
        {
            console.log(error);
            
        })
       }
        
    })


// fetch(url,options)
// .then((data)=>
// {
//     return data.json();
// })
// .then((data)=>
// {
//     console.log(data);
    
// })
// .catch((error)=>
// {
//     console.log(error);
    
// })


