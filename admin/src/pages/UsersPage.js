

const UsersScreen = () => {
  return (
    <>
      <main classNameName="main-wrap scroll" style={{ height: "150vh"}}>
        <h2>Current Users</h2>
        <div className="row gx-5">
          <div className="col col col-md-6 col-sm-12 col-lg-4  mt-4" >
            <div className="p-0  shadow text-center border bg-light" style={{ height: 320 ,width: "100%"}}>
              <img src='' className="bg-secondary w-100" style={{ width:"40%",height: "45%"}}/>
            </div>
          </div>
          <div className="col col col-md-6 col-sm-12 col-lg-4  mt-4">
            <div className="p-3 shadow text-center  border bg-light" style={{ height: 320 }}>user 2</div>
          </div>
          <div className="col col col-md-6 col-sm-12 col-lg-4  mt-4">
            <div className="p-3 shadow text-center  border bg-light" style={{ height: 320 }}>user 3</div>
          </div>
          <div className="col col col-md-6 col-sm-12 col-lg-4  mt-4">
            <div className="p-3 shadow text-center  border bg-light" style={{ height: 320 }}>user 3</div>
          </div>
        </div>

    
      </main>
    </>
  );
};

export default UsersScreen;
