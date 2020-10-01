import React from "react";

// esta esta la estructura de la Pagination, incorpora headers

const CenterContent = () => {
  return (
    <div class="row align-items-center">
      {/* aside */}
      <div class="col aside">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">
              Left
            </button>
            <button type="button" class="btn btn-secondary">
              Middle
            </button>
            <button type="button" class="btn btn-secondary">
              Right
            </button>
          </div>
        </div>
      </div>

      {/* central */}
      <div class="col">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 firstrow">
            <p>muy centrado</p>
          </div>
        </div>
        <div class="row two_center align-items-center justify-content-between">
          <div class="col-lg-4 col-md-8 col-sm-12 col-xs-12">
            <p> 1/2 </p>
          </div>
          <div class="col-lg-4 col-md-8 col-sm-12 col-xs-12">
            <p>2/2</p>
          </div>
        </div>
        {/* album */}
        <div class="row down_rows align-items-center justify-content-between">
          <div class="col-lg-2 col-sm-4 col-xs-6">1/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">2/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">3/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">4/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">5/5_</div>
        </div>
        <div class="row down_rows align-items-center justify-content-between">
          <div class="col-lg-2 col-sm-4 col-xs-6">1/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">2/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">3/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">4/5_</div>
          <div class="col-lg-2 col-sm-4 col-xs-6">5/5_</div>
        </div>
      </div>
    </div>
  );
}
export default CenterContent;
