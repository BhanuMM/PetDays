import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/posts.css";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
function testingposts() {
	const [PostObject, SetpostObject] = useState([]);
	const [CommentObject, SetCommentObject] = useState([]);
	const [newComment, setNewComment] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:3001/forum/getpost/" + location.state)
			.then((response) => {
				SetpostObject(response.data);
				console.log(PostObject.postId);
			});
		axios
			.get("http://localhost:3001/forum/" + location.state)
			.then((response) => {
				SetCommentObject(response.data);
				console.log(CommentObject.postId);
			});
	}, []);

	const id = PostObject.postId;
	const addComment = () => {
		axios
			.post("http://localhost:3001/forum", {
				commentBody: newComment,
				postId: id,
				
			})
			.then((response) => {
				const commentToAdd = { commentBody: newComment };
				SetCommentObject([...CommentObject, commentToAdd]);
				setNewComment("");
			});
	};
	return (
		<div class="container">
			<Navbar />{" "}
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<br />
					<br />
					<br />
					<br />
					<br />
					<main class="">
						<div className="postPage">
							<div className="leftSide">
								<div className="post" id="individual">
									<div className="title"> {PostObject.postTitle}</div>
									<div className="body">{PostObject.postDescr}</div>
									<div className="footer">
										{PostObject.postDate}
										{PostObject.postTime}
									</div>
								</div>
							</div>

							<div className="rightSide">
								<div
									className="addCommentContainer"
									style={{ display: "flex", paddingLeft: 250 }}
								>
									<input
										type="text"
										placeholder="Comment..."
										autoComplete="off"
										value={newComment}
										onChange={(event) => {
											setNewComment(event.target.value);
										}}
									/>
									<button onClick={addComment}> Add Comment</button>
								</div>
								<div className="listOfComments">
									{CommentObject.map((CommentObject, key) => {
										return (
											<div key={key} className="comment">
												{CommentObject.commentBody}
												<div style={{ display: "flex" }}>
												
													<button
														type="button"
														class="btn  btn-sm btn-square btn-neutral text-danger-hover float-right" style={{ marginLeft: 350 }}
														onClick={() => {
															Swal.fire({
																title: "Are you sure?",
																text: "You won't be able to revert this!",
																icon: "warning",
																showCancelButton: true,
																confirmButtonColor: "#3085d6",
																cancelButtonColor: "#d33",
																confirmButtonText: "Yes, delete it!",
															}).then((result) => {
																if (result.isConfirmed) {
																	axios
																		.delete(
																			"http://localhost:3001/forum/deletecom/" +
																				CommentObject.id
																		)
																		.then((response) => {
																			if (response.data.error) {
																				alert(response.data.error);
																			} else {
																				axios
																					.get("http://localhost:3001/forum/")
																					.then((response) => {
																						SetCommentObject(response.data);
																					});
																			}
																		});
																	Swal.fire(
																		"Deleted!",
																		"Vaccine has been deleted.",
																		"success"
																	);
																}
															});
														}}
													>
														<i class="bi bi-trash "></i>
													</button>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default testingposts;
