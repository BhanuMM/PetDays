import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/posts.css";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
function comments() {

	const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        role : "",
        status: false,
      });
    
      useEffect(() => {
        axios
          .get("http://localhost:3001/auth/authuser", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({ ...authState, status: false });
            } else {
              setAuthState({
                username: response.data.username,
                id: response.data.id,
                role: response.data.role,
                status: true,
              });
            }
          });
      }, []);

	const [PostObject, SetpostObject] = useState([]);
	const [CommentObject, SetCommentObject] = useState([]);
	const [newComment, setNewComment] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect( () => {
		 axios.get("http://localhost:3001/forum/getpost/"+location.state)
			.then((response) => {
				SetpostObject(response.data);
				console.log(PostObject);
			});
		 axios.get("http://localhost:3001/forum/getcomment/"+location.state)
			.then((response) => {
				SetCommentObject(response.data);
				console.log(CommentObject);
			});
	}, []);

	const id = PostObject.postId;

	const addComment = () => {
		axios.post("http://localhost:3001/forum", {
				commentBody: newComment,
				postId: id,
				userId : authState.id
			})
			.then((response) => {
				const commentToAdd = { commentBody: newComment };
				SetCommentObject([...CommentObject, commentToAdd]);
				setNewComment("");
			});
	};

console.log(PostObject);
console.log(CommentObject);
	
	return (
		<div className="posts">
			<div class="container-fluid bgimage">
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
										<div className="title" > {PostObject.postTitle}</div>
										<div className="body">{PostObject.postDescr}</div>
										<div className="footer" >
											<div className="lefttext">
												Posted date :{PostObject.postDate}
											</div>
											<div className="righttext">
												Posted time: {PostObject.postTime}
											</div>
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
													<div className="lefttext">
														<h4>Posted at :{CommentObject.createdAt}</h4>
													</div>
													<br />
													<p>{CommentObject.commentBody}</p>
													<div style={{ display: "flex" }}>
														<button
															type="button"
															class="btn  btn-sm btn-square btn-neutral text-danger-hover float-right"
															style={{ marginLeft: 350 }}
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
																				"http://localhost:3001/forum/deletecom/"+CommentObject.id
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
																			"Comment has been deleted.",
																			"success"
																		);
																		navigate(0);
																	}
																});
															}}
														>
															<i class="bi bi-trash "></i>
														</button>
														<button
															type="button"
															class="btn btn-sm btn-square btn-neutral text-danger-hover"
															onClick={() => {
																
																navigate("/editcomment", {state: CommentObject.id,
																});
															}}
														>
															<em class="fa fa-pencil"></em>
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
		</div>
	);
}

export default comments;
