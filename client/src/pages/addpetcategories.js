import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Sidebar from "../components/sidebar";

function addpetcategories() {
	return (
		<div class="container-fluid">
			<div className="row">
				<Navbar />
			</div>
			<div className="row pt-0 mt-5">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Sidebar />
					</div>
					<div className="col-7 g-5">
						<h3 className="mb-5">
							{" "}
							+Add New Pet Category <hr />
						</h3>
						<form>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">
									Name of the category
								</label>
								<input
									type="text"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">
									Description about the category
								</label>
								<textarea class="form-control"  id="floatingTextarea2"></textarea>
							</div>
							<div className="row">
								<div className="col-9"></div>
								<div className="col-3 mb-5 mt-5">
									{" "}
									<button type="submit" class=" pl-5 btn-res">
										Add
									</button>
								</div>
								{/* <div className='col-3'></div> */}
							</div>
						</form>
					</div>
                    <div className="col-3"></div>
				</div>
			</div>
		</div>
	);
}

export default addpetcategories;
