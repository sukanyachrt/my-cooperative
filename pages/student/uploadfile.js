const Uploadfile = () => {
    return (
        <div className="container-fluid pt-4 px-4 ">

            <div className="row   rounded align-items-center justify-content-center mx-0">

                <div class="col-sm-12 col-xl-6">
                    <h5 className="text-black-100 text-center">อัพโหลดไฟล์</h5>

                    <div class="bg-secondary rounded h-100 p-4">
                        <input class="form-control form-control-lg bg-dark" id="formFileLg" type="file" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Uploadfile;