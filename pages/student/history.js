const History = () => {
    return (
        <div className="container-fluid pt-4 px-4 ">
            <h5 className="text-black-100">ประวัติการอัพโหลดไฟล์</h5>

            <div className="row  bg-secondary rounded align-items-center justify-content-center mx-0">

                <div class="row g-2">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">วันที่ | เวลา</th>
                                    <th scope="col">สถานะ</th>
                                    <th scope="col">Preview</th>
                                    <th scope="col">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>10/19/2023 | 10:25:10 น.</td>
                                    <td>รอการอนุมัติ</td>
                                    <td> <i class="fa fa-search"></i><i class="fa-solid fa-magnifying-glass"></i></td>
                                    <td> <i class="fa fa-trash-alt"></i></td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;