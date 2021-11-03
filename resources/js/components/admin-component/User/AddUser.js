import axios from 'axios';
import React,{useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


function AddUser() {

    const [data,setData] = useState({
        uname:"",
        email:"",
        phone:"",
        error_list:[]
    });

    const {uname,email,phone} = data;
    const onInputChange = e =>{
      setData({...data,[e.target.name]:e.target.value});
    };

    const nameEl = React.useRef(null);

    const onSubmit = e =>{
      e.preventDefault();
       axios.post('adduser',data)
      .then(response =>{
        console.log(response.data.status);
        if(response.data.status===200){
          toast('User added');
          setData({name:"",email:"",phone:""});
        } if(response.data.status===401){
          console.log("validation");
          setData({error_list:response.data.error})
        } if(response.data.status===400){
          toast('User not added');
        }
      })
      // catch(err =>{
      //   let message = typeof err.response !== "undefined" ? err.response.data.status : err.message;
      //   console.warn("error", message);
      // })
    }

    return (
<div>

  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>User</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">User</li>
              <li className="breadcrumb-item active">Add user</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {/* left column */}
          <div className="col-md-6">
            {/* general form elements */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Add User</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form onSubmit={e => onSubmit(e)}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name </label>
                    <input type="text" className="form-control" placeholder="Enter name" name="uname" ref={nameEl} onChange={e=>onInputChange(e)} />
                    <span className="text-danger">{data.error_list.uname}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="email" value={data.email} onChange={e=>onInputChange(e)} />
                    <span className="text-danger">{data.error_list.email}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone</label>
                    <input type="text" className="form-control" placeholder="Enter phone" name="phone" value={data.phone} onChange={e=>onInputChange(e)} />
                    <span className="text-danger">{data.error_list.phone}</span>
                  </div>

                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>



          </div>

        </div>
        {/* /.row */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}


</div>

    )
}

export default AddUser
