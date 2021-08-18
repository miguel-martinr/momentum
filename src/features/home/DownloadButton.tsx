import React, { useState } from 'react';

export const DownloadButton = () => {


  const [state, setState] = useState({
    value: "Choose a file",
    ready: false
  });

  const changeHandler = (ev: React.FormEvent<HTMLInputElement>) => {
    setState({value: ev.currentTarget.value, ready: true});
  }

  const downloadBtn = (readyToRender: boolean) => {
    if (!readyToRender) return (<div></div>);

    return (
      <button className="btn btn-success" type="submit">Create QR</button>
    )
  }

  
  return (
    <div className="row mt-5 align-items-center">
      <div className="col">
        <div className="row">
          <div className="col text-center">
            <i className="bi bi-cloud-upload-fill sm" ></i>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <form action="">
              <label className="btn btn-success" >
                {state.value}
                <form action="/upload/image" method="post"></form>
                <input type="file" name="image" onChange={changeHandler}/>
              </label>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {
              downloadBtn(state.ready);
            }
          </div>
        </div>
      </div>

      <div className="col text-center">
        <i className="bi bi-card-image lg"></i>
      </div>
    </div>
  )
}
