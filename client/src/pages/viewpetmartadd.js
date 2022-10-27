import React from "react";
import G1 from "../images/pw.jpg";
import "../styles/viewpetmartadd.css";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";
import "../styles/petmart.css";
import "../styles/forum.css";
import "../styles/petcategories.css";
import "../styles/serviceproviderdashboard.css";
import "../styles/spdashboard.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
function viewpetmartadd() {
  const [SinglePost, setSinglePost] = useState([]);
  const location = useLocation();

	useEffect(() => {
axios.get("http://localhost:3001/service/getpost/"+location.state).then((response) => {
			setSinglePost(response.data);

		});
	}, []);
	return (
		<div class="container-fluid">
      <Navbar />
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary p-6 g-6">
				<div className="">{/* <Sellersidebar /> */}</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0"style={{ paddingTop: 70 }}>
										<h1 class="h2 mb-0 ls-tight">Petmart Advertisement</h1>
										{/* <p> 22 August 2022</p> */}
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/petmart" className="header-topic">
														View All Petmart Advertisements
													</a>
												</li>
											</ol>
										</nav>

										<br />
									</div>
								</div>
							</div>
						</div>
					</header>
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid px-4">
							{/* <h1 class=" margintop-topc">Dog Care</h1>
              <p> 22 August 2022</p><hr/> */}
							<div className="row">
								<div className="col-6"></div>

								<div className="col-3">
								</div>
							</div>

							<div className="row pb-5  viewadd-body">
								<div className="col-1"></div>
								<div className="col-5">
                <img
													src={`http://localhost:3001/service/static/${SinglePost.adImage}`}
													class="img-fluid rounded"
												></img>
								</div>
								<div className="col-5 mt-5">
									<p>
										<h2 className="mb-3">{SinglePost.adTitle}</h2>
										<p className="fs-4 mb-3">
											<i class="fa fa-envelope text-5" aria-hidden="true"></i>{" "}
                      {SinglePost.adEmail}
										</p>
										<p className="fs-4 mb-3">
											<i class="fa fa-phone  text-5" aria-hidden="true"></i>+94
                      {SinglePost.adContact}{" "}
										</p>
										{/* <p className="fs-4 mb-3">
											<i
												class="fa fa-facebook-square  text-5"
												aria-hidden="true"
											></i>{" "}
											wwww.facebook.com/dogfriends
										</p> */}
										<p className="fs-4 mb-3">
											<i
												class="fa fa-map-marker  text-5"
												aria-hidden="true"
											></i>{" "}
											 {SinglePost.adAddress}
										</p>
									</p>
								</div>
								<div className="col-1"></div>
							</div>
							<div className="row ml-5 viweadd-marggin ">
								<div className="col-5 ml-5">
									<p className="ml-5 pl-5 text-start">
										<h3>{SinglePost.adTitle}</h3>
										<p className="fs-4 mb-3">
											<i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
											{SinglePost.adDistrict}
										</p>

										<h2>Rs {SinglePost.adPrice} only</h2>
									</p>
									<p className="fs-4 mb-3 mt-3">
                  {SinglePost.adDescr}
									</p>
								</div>
								<div className="col-2"></div>
								<div className="col-5"></div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default viewpetmartadd;
