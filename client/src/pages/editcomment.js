import React from "react";
import "../styles/posts.css";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
function editcomment() {
	const location = useLocation();
	const [listOfComment, setlistOfComment] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/forum/getsinglecomment/"+location.state)
			.then((response) => {
				setlistOfComment(response.data);
			});
	}, []);

	const navigate = useNavigate();

	const initialValues = {
		id: listOfComment.id,
		commentBody: listOfComment.commentBody,
	};

	const Schema = Yup.object().shape({
		pcatName: Yup.string()
			.matches(/^[A-Za-z0-9 ]*$/, "Please enter valid name")
			.required("Please enter category name"),
	});

	const onSubmit = (data) => {
		axios.post("http://localhost:3001/forum/updatecomment",data).then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					navigate("/forum");
				}
			});
	};

	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Navbar />
				</div>

				<div class="h-screen flex-grow-1 overflow-y-lg-auto pt-8">
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid pt-6">
							<div class="row g-6 mb-6">
								<div className="col-9" style={{ paddingLeft: 500, paddingTop: 100 }}>
									<Formik
										enableReinitialize={true}
										initialValues={initialValues}
										onSubmit={onSubmit}
									>
										<Form>
											<br />
											<br />
											<label className="form-label">Edit Your Comment here ! </label>
											<div className="col">
												<ErrorMessage
													name="medName"
													className="errormesage"
													component="span"
												/>
											</div>
											<Field
												className="form-control"
												id="commentBody"
												autocomplete="off"
												name="commentBody"
											/>
											<Field
												className="form-control"
												id="id"
												type="hidden"
												autocomplete="off"
												name="id"
											/>

											<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
													<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{ backgroundColor: "#F66B0E", borderColor:"#F66B0E",width:200 }}
													>
														Update Comment
													</button>
												</div>
											</div>
										</Form>
									</Formik>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default editcomment;
