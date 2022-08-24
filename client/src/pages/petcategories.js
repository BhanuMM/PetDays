import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/petcategories.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import cat from "../images/cat-01.jpg";
import dog from "../images/animals-01.jpg";
function petcategories() {
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
					<div className="col-4">
          <h3 className="mb-5 mt-5">
							{" "}
							+Pet Category <hr />
						</h3>
						<div class="cards align-items-center">
							<div class="card">
								<img class="card-image" src={dog} alt="" />
								<div class="card-content">
									<p>
										<h4>DOGS</h4>
										Different types of breeds are there in one category
									</p>
								</div>
								<div class="card-info">
									<div className="d-flex">
										<a href="\viewbreeds" role="button" aria-pressed="true">
											{" "}
											<button type="submit" class="btn-res">
												View Breeds
											</button>
										</a>
										<a href="" role="button" aria-pressed="true">
											{" "}
											<button type="submit" class="btn-res">
												Remove Category
											</button>
										</a>
									</div>
								</div>
							</div>
							<div class="card">
								<img class="card-image" src={cat} alt="" />
								<div class="card-content">
									<p>
										<h4>CATS</h4>
										Different types of breeds are there in one category
									</p>
								</div>
								<div class="card-info">
									<div className="d-flex">
										<a href="\viewbreeds" role="button" aria-pressed="true">
											{" "}
											<button type="submit" class="btn-res">
												View Breeds
											</button>
										</a>
										<a href="" role="button" aria-pressed="true">
											{" "}
											<button type="submit" class="btn-res">
												Remove Category
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6 btn-div">
						<div class="row justify-content-center">
							<div class="col-md-3">
								<a href="\addpetcategories" class="btn-result">
									ADD NEW 
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default petcategories;
