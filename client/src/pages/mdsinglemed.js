import React from "react";
import "../styles/viewusers.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
      maxHeight: "1000",
    }}
  >
    •
  </Box>
);

function viewmoderators() {
  return (
    <div class="container-fluid viewuser">
      <div className="row">
        <br />
        <br />
        <Navbar />
      </div>
      <div className="row flex-nowrap pt-0 mt-5">
        <div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
          <Sidebar />
        </div>
        <div class="col-10 user-table">
          <div class="col-md-10 col-md-offset-1">
            <br />
            <h1 class="mt-4">Medicines</h1>
            <hr />
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#" className="header-topic">
                    Moderator Dashboard / Medications / Medicines
                  </a>
                </li>
              </ol>
            </nav>
            <br />
            <div style={{paddingLeft:100}}>
            <div class="col col-xs-6 text-right">
              <a href="\mdaddmed" className="header-topic">
                <button type="button" class="btn btn-sm btn-primary btn-create">
                  Add New Medicine
                </button>
              </a>
            </div>
            <br />

            <div class="card shadow border-0 mb-7">
              <div class="card-header">
                <h5 class="mb-0">Available Medicines</h5>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-nowrap text-center">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Medicine ID</th>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>Feb 15, 2021</td>
                      <td>zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd</td>
                      <td class="text-end">
                        <a href="#" class="btn btn-sm btn-neutral">
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-square btn-neutral text-danger-hover"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>Feb 15, 2021</td>
                      <td>$3.500</td>
                      <td class="text-end">
                        <a href="#" class="btn btn-sm btn-neutral">
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-square btn-neutral text-danger-hover"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>Feb 15, 2021</td>
                      <td>$3.500</td>
                      <td class="text-end">
                        <a href="#" class="btn btn-sm btn-neutral">
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-square btn-neutral text-danger-hover"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>Feb 15, 2021</td>
                      <td>$3.500</td>
                      <td class="text-end">
                        <a href="#" class="btn btn-sm btn-neutral">
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-square btn-neutral text-danger-hover"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>Feb 15, 2021</td>
                      <td>$3.500</td>
                      <td class="text-end">
                        <a href="#" class="btn btn-sm btn-neutral">
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-square btn-neutral text-danger-hover"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>Feb 15, 2021</td>
                      <td>$3.500</td>
                      <td class="text-end">
                        <a href="#" class="btn btn-sm btn-neutral">
                          View
                        </a>
                        <button
                          type="button"
                          class="btn btn-sm btn-square btn-neutral text-danger-hover"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer border-0 py-5">
                <span class="text-muted text-sm">
                  Showing 10 items of Medicines
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default viewmoderators;
