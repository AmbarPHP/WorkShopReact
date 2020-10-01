import React from "react";
import "./style.scss";

const Login = () => {
  return (
    <div className="container containerBackground">
      <div class="row">
        <div class="col">
          <div class="col-12">
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
      </div>
      <div class="row">
          {/* aside */}
        <div class="col">
          <div class="col-4">
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
            <div class="row">
                <div class="col-8">
                    <p>lorem</p>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p>lorem</p>
                </div>
                <div class="col-4">
                    <p>lorem</p>
                </div>
            </div>
            {/* album */}
            <div class="row">
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col-2">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
</div>
<div class="row">
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col-2">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
	<div class="col">
		<p>ksdfjalsfj</p>
	</div>
</div>


         
        </div>
      </div>
    </div>


  );
};

export default Login;
