import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { Page, Text, View, Document, StyleSheet, ReactPDF  } from '@react-pdf/renderer';

var storageRef = firebase.storage().ref();
const toBlob = (file) => {
  return new Blob([file], {
    type: "application/pdf",
  });
};
var metadata = {
  contentType: "application/pdf",
};

class AddPresc extends React.Component {
    onChange = (e) =>
    this.setState({uemail:e.target.value});
  handleSignOut() {
    localStorage.removeItem("user");
  }
  constructor(props) {
    super(props);
    this.state = {
        data: "",
        selectedFile: null,
        uemail:"",
        sid: "",
        medname: "",
        dosage: "",
        days: "",
        times: "",
        presc: [],
    };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onAdd = (e) => {
        e.preventDefault();
        console.log(this.state.presc);
        const obj = new Object({
            medname: this.state.medname,
            dosage: this.state.dosage,
            days: this.state.days,
            times: this.state.times,
        });
        this.setState({presc:[...this.state.presc,obj]});
        console.log(this.state.presc);
    }
  onFile = (e) => {
    console.log(e.target.files[0]);
    this.setState({ selectedFile: e.target.files[0] });
    };
    onFileUpload = async () => {
    /*const formData = new FormData();
    if (this.state.selectedFile == null) {
      alert("No file Selected!!!");
    } else {
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      console.log(this.state.selectedFile);
      try {
        const blob = toBlob(this.state.selectedFile);
        this.setState({ isLoading: true });
        console.log(blob);
        var mountainsRef = await storageRef.child(this.state.selectedFile.name);
        await mountainsRef.put(blob, metadata);
        const res = await mountainsRef.getDownloadURL();
        console.log(res);
        this.setState({
          data: res,
        });
        fetch("http://localhost:3001/api/add_presciption",{
      method:"post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email:this.state.uemail,
        id:this.state.sid,
        prescription:this.state.data
      }),
    })
    .then((response) => response.json())
    .then((resp) => {
        console.log(resp);
    });
  
        // setTimeout(()=>{},5000);
      } catch (err) {
        console.log(err);
      }
    }*/
  };
  componentDidMount=()=>{
    console.log(this.props.match.params.email);
    const email = this.props.match.params.email;
    console.log(this.props.match.params.sid);
    const sid1 = this.props.match.params.sid;
    this.setState({uemail:email,sid:sid1});
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              s4s
            </a>
            <form className="d-flex">
              <Link to="/" className="button btn btn-outline-success me-2" onClick={this.handleSignOut} >
                {" "}
                Logout
              </Link>
            </form>
          </div>
        </nav>
        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <div
              className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
              id="sidebar"
              role="navigation"
              style={{ backgroundColor: "#171010" }}
            >
              <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                <li className="nav-item">
                  <a className="nav-link text-light" href="/dashboarddoc">
                    Homepage
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/upcoming-sessions">
                    Upcoming Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/previous-sessions">
                    Previous Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/patients">
                    Patients
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/pending-session">
                    Pending Sessions
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col main pt-5 mt=3 border border-dark"
              style={{ backgroundColor: "#FAF3F3" }}
            >
              <h1 className="text-dark">Add Patient Prescriptions</h1>
                        <p className="lead d-none d-sm-block">Add Prescription for Email: {this.state.uemail} and SessionId: {this.state.sid}</p>
                        <div className="row">
                            <div className="col-md-6 mb-4" style={{ width: "25%" }}>
                                <div class="mb-3">
                                    <input type="text" name="medname" class="form-control" onChange={this.onChange} value={this.medname} placeholder="Medicine Name" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                <div class="mb-3">
                                    <input type="text" name="dosage" class="form-control" onChange={this.onChange} value={this.dosage} placeholder="Dosage" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                <div class="mb-3">
                                    <input type="text" name="days" class="form-control" onChange={this.onChange} value={this.days} placeholder="Days" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                <div class="mb-3">
                                    <input stype="text" name="times" class="form-control" onChange={this.onChange} value={this.times} placeholder="Times per Day" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4" style={{ width: "20%" ,position:"relative",left:"40%"}}>
                                <div className="form-outline">
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-lg ms-2 b2-color"
                                        onClick={this.onAdd}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="col-md-6 mb-4" style={{ width: "20%", position: "relative", left: "40%",top:"-40%" }}>
                                    <div className="form-outline">
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-lg ms-2 b2-color"
                                            onClick={this.onFileUpload}
                                        >
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h1>List View</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4" style={{ width: "30%" }}>
                                <div class="mb-3">
                                    <input style={{ backgroundColor: "#072227", textAlign: "center", color: "white", fontWeight: "bold", fontSize:"20px" }} type="text" id="disabledTextInput" class="form-control" value="Medicine Name" disabled />
                                 </div>
                            </div>
                            <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                <div class="mb-3">
                                    <input style={{ backgroundColor: "#072227", textAlign: "center", color: "white", fontWeight: "bold", fontSize: "20px"}} type="text" id="disabledTextInput" class="form-control" value="Dosage" disabled />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                <div class="mb-3">
                                    <input style={{ backgroundColor: "#072227", textAlign: "center", color: "white", fontWeight: "bold", fontSize: "20px" }} type="text" id="disabledTextInput" class="form-control" value="Days" disabled />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                <div class="mb-3">
                                    <input style={{ backgroundColor: "#072227", textAlign: "center", color: "white", fontWeight: "bold", fontSize: "20px" }} stype="text" id="disabledTextInput" class="form-control" value="Times per Day" disabled />
                                </div>
                            </div>
                        </div>
                        {this.state.presc.length === 0 ? <h1></h1> : this.state.presc.map((ele, i) => (
                            <div key={i} className="row">
                                <div className="col-md-6 mb-4" style={{ width: "30%",margin:"0px" }}>
                                    <div class="mb-3">
                                        <input style={{ backgroundColor: "#35858B", textAlign: "center", color: "white", fontSize: "15px" }} type="text" id="disabledTextInput" class="form-control" value={ele.medname} disabled />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                    <div class="mb-3">
                                        <input style={{ backgroundColor: "#35858B", textAlign: "center", color: "white", fontSize: "15px" }} type="text" id="disabledTextInput" class="form-control" value={ele.dosage} disabled />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                    <div class="mb-3">
                                        <input style={{ backgroundColor: "#35858B", textAlign: "center", color: "white", fontSize: "15px" }} type="text" id="disabledTextInput" class="form-control" value={ele.days} disabled />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4" style={{ width: "20%" }}>
                                    <div class="mb-3">
                                        <input style={{ backgroundColor: "#35858B", textAlign: "center", color: "white", fontSize: "15px" }} stype="text" id="disabledTextInput" class="form-control" value={ele.times} disabled />
                                    </div>
                                </div>
                            </div>
                            ))
                            
                            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPresc;