import React from 'react';

const Album = () =>{

    let pictures=[];

   for(let i=0; i<4; i++){
          pictures.push(
            <div class="card mb-4 box-shadow">
                    <img class="card-img-top" alt="Thumbnail [100%x225]" 
                    
                    src="" data-holder-rendered="true">
                    </img>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
          );
      }
    return (
        <> 
        <h1>
            Album Example
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae ipsa provident ullam optio qui placeat porro, corporis magni ad. Quis deleniti laboriosam sed ad nisi excepturi vel est quo?</p>
        
        <div class="container">
            <div class="row">
            {pictures}
            </div>    
            
        </div>
        </>
    );
}

export default Album; 