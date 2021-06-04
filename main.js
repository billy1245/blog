var mycards = [];
var posts = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    var mycards = json.map((element) => `
    <div class="col-4" id="article${element.id}">
          <div class="card">
            <div class="card-body">
              <div class="delete float-end" ><i onclick="deletePost(${element.id})" class="fas fa-times"></i></div>
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">
              ${element.title}
              </p>
              <div class="row">
                <div class="col-sm-7">
                  <p>2021-05-29</p>
                </div>

                <div class="col-sm-4 float-end">
                  <button type="button" class="btn btn-info">Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    `)

    for (let index = 0; index < mycards.length; index++) {
        const element = mycards[index];
        posts.innerHTML += element;
    }

    




  });


 var addNew = ()=>{
     var titel = document.getElementById("titel").value;
     var body = document.getElementById("body").value ;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: `${titel}`,
          body: `${body}`,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {

       posts.innerHTML +=  `
            <div class="col-4" id="article${json.id}">
                  <div class="card">
                    <div class="card-body">
                      <div class="delete float-end" ><i onclick="deletePost(${json.id})" class="fas fa-times"></i></div>
                      <h5 class="card-title">${json.title}</h5>
                      <p class="card-text">
                      ${json.title}
                      </p>
                      <div class="row">
                        <div class="col-sm-7">
                          <p>2021-05-29</p>
                        </div>
        
                        <div class="col-sm-4 float-end">
                          <button type="button" class="btn btn-info">Button</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
            `;
            
         document.getElementById('close').click();
           
        });

 
 }

 var deletePost = (id)=>{
  var myfertch =   fetch('https://jsonplaceholder.typicode.com/posts/'+id+'', {
      method: 'DELETE',
    })
    var articles = document.getElementById('article'+id+'')
    
    articles.remove();
 
    

    
    
            }