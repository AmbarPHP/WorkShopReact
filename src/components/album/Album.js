import React from 'react';
//para importar datos de un json debemos de, exportarlos como una constante
import data from  './data.js'

const Album = () =>{


// const datos= data;
    let pictures=[];

   for(let i=0; i<4; i++){
          pictures.push(
                  <div class="card mb-4 box-shadow">
                  <div class="card-body">
                  <div className = "ImgCont" > 
                  <img src={data[i].avatar} alt={data[i].gender}></img>
                  </div> 
                  <p class="card-text">
                  {data[i].first_name}
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                  <div className = "ContenidoCont" >
                  <span>{data[i].first_name} </span>
                  <span>{data[i].last_name}</span>
                  <span>{data[i].email}</span>
                  <span>{data[i].country}</span>
                  </div> 
                  <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                  <div className = "ExtraInfoCont" >extra info</div> 
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