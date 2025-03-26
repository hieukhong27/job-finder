$(document).ready(function() {
    // Danh sách công việc mẫu (có thể thay bằng API hoặc dữ liệu từ server)
    const jobs = [
        {
            title: "Lập trình viên Full-Stack",
            company: "Công ty TechPro",
            location: "Hà Nội",
            category: "Công nghệ",
            salary: "20-30 triệu",
            experience: "2 năm",
            description: "Phát triển ứng dụng web, làm việc với cả front-end và back-end."
        },
        {
            title: "Lập trình viên Back-end",
            company: "Công ty TechPro",
            location: "Hà Nội",
            category: "Công nghệ",
            salary: "20-25 triệu",
            experience: "trên 1 năm",
            description: "Phát triển ứng dụng web, làm việc với back-end."
        },
        {
            title: "Nhân viên kinh doanh",
            company: "Công ty SaleMax",
            location: "TP. Hồ Chí Minh",
            category: "Kinh doanh",
            salary: "15-25 triệu",
            experience: "1 năm",
            description: "Tìm kiếm khách hàng, chăm sóc và phát triển quan hệ đối tác."
        },
        {
            title: "Leader Digital Marketing",
            company: "Công ty cổ phần BZNess",
            location: "Hà Nội",
            category: "Quan hệ công chúng",
            salary: "20-25 triệu",
            experience: "2 năm",
            description: "Lên kế hoạch content chạy số và giao việc cho đội content."
        },
        {
            title: "Chuyên viên truyền thông/Marketing và PR",
            company: "Công ty cổ phần văn hóa Huy Hoàng",
            location: "Hà Nội",
            category: "Quan hệ công chúng",
            salary: "9-15 triệu",
            experience: "2 năm",
            description: "Lên kế hoạch và xây dựng các loại hình digital content bao gồm: Fanpage post, bài PR, Thông cáo báo chí giới thiệu sách mới.<br>- Sản xuất và quản lý các nội dung lên các kênh social media của công ty: Fanpage, Instagram, Website..."
        },
        {
            title: "Giáo viên tiếng Anh",
            company: "Trung tâm EduSmart",
            location: "Đà Nẵng",
            category: "Giáo dục",
            salary: "10-15 triệu",
            experience: "dưới 1 năm",
            description: "Dạy tiếng Anh cho học sinh tiểu học và trung học."
        },
        {
            title: "Bác sĩ nội khoa",
            company: "Bệnh viện HealthCare",
            location: "Hà Nội",
            category: "Y tế",
            salary: "30-40 triệu",
            experience: "3 năm",
            description: "Khám và điều trị bệnh nhân nội khoa."
        },
        {
            title: "Nhân Viên Thiết Kế Sản Phẩm (Thiết Kế Đồ Hoạ/ Designer)",
            company: "CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ 7799 VIỆT NAM",
            location: "Hà Nội",
            category: "Thiết kế",
            salary: "10-15 triệu",
            experience: "1 năm",
            description: "Thiết kế sản phẩm demo và lên ý tưởng demo sân khấu, backdrop, cổng hoa đám cưới... theo order của bộ phận kinh doanh."
        },
        {
            title: "Nhân viên thiết kế hình ảnh",
            company: "Tập đoàn Eurowindow Holding",
            location: "Hà Nội",
            category: "Thiết kế",
            salary: "Thỏa thuận",
            experience: "1 năm",
            description: "Thiết kế, treo lắp các banner, bảng biển, bao bì, thiệp, băng rôn, áp phích, logo, hình ảnh quảng cáo …"
        },
        {
            title: "Kỹ sư xây dựng quản lý dự án",
            company: "Công ty cổ phần công nghệ xây dựng tân thành công",
            location: "Hà Nội, Hưng Yên, Hà Nam",
            category: "Kỹ thuật",
            salary: "Trên 15 triệu",
            experience: "3 năm",
            description: "Khai triển bản vẽ công trình dân dụng và triển khai công việc ngoài công trường cho đội thợ thi công (hiện trường)"
        },
        {
            title: "Kỹ sư cơ khí",
            company: "Công ty cổ phần phân bón Hà Lan",
            location: "Hồ Chí Minh",
            category: "Kỹ thuật",
            salary: "13 - 16 triệu",
            experience: "3 năm",
            description: "Theo dõi và giám sát hoạt động của hệ thống máy móc cơ khí trong dây chuyền sản xuất.<br>- Đảm bảo các thiết bị máy móc hoạt động ổn định, an toàn và đạt năng suất yêu cầu."
        },
        {
            title: "Trưởng phòng kiểm soát tài chính kế toán",
            company: "Công ty TNHH sản xuất, lắp ráp Tuấn Nghĩa",
            location: "Hà Nội",
            category: "Tài chính/Ngân hàng",
            salary: "25 - 30 triệu",
            experience: "4 năm",
            description:"- Kiểm soát tính liên tục của chứng từ. <br>- Giám sát số liệu tài chính và ngân hàng.<br>- Lập kế hoạch kiểm tra."
        },
        {
            title: "Nhân viên kế toán thuế",
            company: "Công ty cổ phần tập đoàn dược liệu và thương mại Sohaco",
            location: "Hưng yên",
            category: "Tài chính/Ngân hàng",
            salary: "10 - 14 triệu",
            experience: "2 năm",
            description:"- Rà soát, kiểm tra đối chiếu chứng từ kế toán, xuất hóa đơn. <br>- Quản lý và lưu giữ cơ sở dữ liệu thuế của doanh nghiệp. Lập tờ khai thuế GTGT, Thuế TNCN và nộp thuế cho CQ thuế (nếu có).<br>- Trực tiếp làm việc với cơ quan thuế khi có phát sinh."
        }
    ];

    // Hàm hiển thị danh sách công việc
    function displayJobs(jobsToDisplay) {
        $("#jobListings").empty(); // Xóa danh sách hiện tại
        jobsToDisplay.forEach(job => {
            const jobCard = `
                <div class="col-md-6 col-lg-4">
                    <div class="card job-card">
                        <div class="card-body">
                            <h5 class="card-title">${job.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
                            <p class="card-text">
                                <strong>Địa điểm:</strong> ${job.location}<br>
                                <strong>Danh mục:</strong> ${job.category}<br>
                                <strong>Lương:</strong> ${job.salary}<br>
                                <strong>Kinh nghiệm làm việc:</strong> ${job.experience}<br>
                                <strong>Mô tả:</strong> ${job.description}
                            </p>
                            <button class="btn btn-primary">Ứng tuyển</button>
                        </div>
                    </div>
                </div>
            `;
            $("#jobListings").append(jobCard);
        });
    }

    // Hiển thị toàn bộ công việc khi trang được tải
    displayJobs(jobs);

    // Xử lý tìm kiếm
    $("#searchBtn").click(function() {
        const keyword = $("#searchInput").val().toLowerCase();
        const filteredJobs = jobs.filter(job =>
            job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword) ||
            job.description.toLowerCase().includes(keyword)
        );
        displayJobs(filteredJobs);
    });

    // Xử lý lọc theo danh mục
    $("#categoryFilter").change(function() {
        const category = $(this).val();
        if (category === "") {
            displayJobs(jobs); // Hiển thị tất cả nếu không chọn danh mục
        } else {
            const filteredJobs = jobs.filter(job => job.category === category);
            displayJobs(filteredJobs);
        }
    });

    // Tìm kiếm khi nhấn Enter
    $("#searchInput").keypress(function(e) {
        if (e.which === 13) { // Enter key
            $("#searchBtn").click();
        }
    });
});
