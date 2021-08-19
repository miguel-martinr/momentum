import React, { useState } from 'react';

export const DownloadButton = () => {


  const [state, setState] = useState({
    title: "Choose a file",
    ready: false,
    filePath: "",
  });

  const changeHandler = (ev: React.FormEvent<HTMLInputElement>) => {
    setState({ title: "Create QR", filePath: ev.currentTarget.value, ready: true });
    console.log('changed');

  }

  const createQrBtn = () => {
    if (!state.ready) return (
      <label className="btn btn-primary w-100">
        {state.title}
      </label>
    )

    return (
      <button className="btn btn-primary">Create QR</button>
    )
  }


  const createBtnClickHandler = async (ev: React.FormEvent<HTMLInputElement>) => {
    const data = new FormData();
    const target = ev.currentTarget;

    if (!(target.files && target.files.length > 0)) return;

    data.append('image', target.files[0]);
    const url = "localhost:3001/upload/image";
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'multipart/form-data',
      },
      redirect: 'follow',
      body: data,
    })

    console.log(response);
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
            <div className="row">
              <div className="col ">
                <label className="btn btn-success w-100" style={{ visibility: state.ready ? "visible" : "hidden" }} >
                  {state.filePath}
                </label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                {createQrBtn}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col text-center">
        <i className="bi bi-card-image lg"></i>
      </div>
    </div>
  )
}
