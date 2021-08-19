import React, { useState } from 'react'

interface FormState {
  ready: boolean,
  filePath: string,
  files: FileList | null, 
  qr: string | null
}


export const Form = () => {
  const [state, setState] = useState<FormState>({
    ready: false,
    filePath: "Choose a file",
    files: null,
    qr: null
  });

  const changeHandler = (ev: React.FormEvent<HTMLInputElement>) => {
    const target = ev.currentTarget;

    if (target.files && target.files.length > 0) {
      setState({ filePath: target.value, ready: true, files: target.files, qr: null });
      console.log('changed');
    }
  }

  const submitHandler = async (ev: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    const target = ev.currentTarget;
    const data = new FormData();

    if (!state.files) return alert(`Please provide a file first!`);
    
    const svBaseUrl = "http://192.168.1.20:3002/";
    const uploadUrl = svBaseUrl + "upload/image";
  

    data.append('image', state.files[0]);
    data.append("private", "false");
    data.append("svBaseUrl", svBaseUrl);

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: data
    })
  
    response.json().then(res => {
      console.log(res);
      
      setState({...state, qr: res.qr});
    });
  }


  return (

    <div className="row mt-5 align-items-center">
      <div className="col">
        <div className="row"> {/* Icon*/}
          <div className="col text-center">
            <i className="bi bi-cloud-upload-fill sm" ></i>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="row">
              <div className="col ">
                <label className="btn btn-success w-100" >
                  {state.filePath}
                  <input type="file" name="image" onChange={changeHandler} />
                </label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <button className="btn btn-primary w-100"
                  style={{ visibility: state.ready ? "visible" : "hidden" }}
                  onClick={submitHandler}  
                >
                  Create QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col text-center">
        {state.qr ? (<img src={state.qr}></img>) : <i className="bi bi-card-image lg"></i>}
      </div>
    </div>

  )
}
