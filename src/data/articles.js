// src/data/articles.js
export const SHARE4HAPPY_INFO = {
  name: 'Share4Happy',
  tagline: 'Kho Tri Thức Công Nghệ & Giáo Dục Trực Tuyến',
  url: 'https://share4happy.com',
  description:
    'Hệ sinh thái học tập và nghiên cứu chuyên sâu về Trí tuệ nhân tạo (AI), An toàn thông tin, Remote Lab và lập trình STEM Robotics được kết nối bởi Đại học Lạc Hồng & VietFuture.',
  stats: [
    { value: '15+', label: 'Chủ đề chuyên sâu' },
    { value: '100+', label: 'Bài viết & Tài nguyên' },
    { value: '25K+', label: 'Lượt tham khảo học tập' },
  ],
};

export const articles = [
  {
    id: 1,
    title: 'Ngành Trí tuệ nhân tạo AI tại Đại học Lạc Hồng – Lựa chọn “hot” mở lối tương lai',
    category: 'Trí Tuệ Nhân Tạo',
    author: 'Nguyễn Nhật',
    date: '30/03/2026',
    readTime: 6,
    excerpt:
      'Trải nghiệm thực tế của sinh viên ngành AI tại LHU: phòng lab hiện đại nhất Đồng Nai, thực hành từ năm nhất và dự án đoạt giải Bạc toàn quốc.',
    image: 'https://share4happy.com/wp-content/uploads/2026/03/nao_2.jpg',
    url: 'https://share4happy.com/nganh-tri-tue-nhan-tao-ai-tai-dai-hoc-lac-hong-lua-chon-hot-mo-loi-tuong-lai/',
    tone: 'indigo',
    icon: '🤖',
  },
  {
    id: 2,
    title: 'Hệ thống Remote Lab – Nền tảng học trực tuyến & thực hành điều khiển thiết bị từ xa',
    category: 'Remote Lab',
    author: 'devtrinh',
    date: '11/11/2024',
    readTime: 5,
    excerpt:
      'Giải pháp LMS hỗ trợ học lý thuyết kết hợp kịch bản tự động điều khiển thiết bị phòng lab từ xa, đảm bảo an toàn thông tin và trải nghiệm chân thực.',
    image: 'https://share4happy.com/wp-content/uploads/2024/11/remote_lab.jpg',
    url: 'https://share4happy.com/he-thong-remote-lab-nen-tang-hoc-truc-tuyen-thuc-hanh-dieu-khien-thiet-bi-tu-xa/',
    tone: 'sky',
    icon: '🔬',
  },
  {
    id: 3,
    title: 'Các vấn đề cấu hình CORS (Part 2) – Khai thác XSS & kiểm soát TLS',
    category: 'Bảo Mật',
    author: 'Lê Huy',
    date: '04/10/2023',
    readTime: 7,
    excerpt:
      'Phân tích sâu cơ chế khai thác XSS thông qua quan hệ tin cậy CORS, phá vỡ kiểm soát TLS và giải pháp bảo vệ dữ liệu mạng nội bộ.',
    image: 'https://share4happy.com/wp-content/uploads/2023/10/cors-part2.png',
    url: 'https://share4happy.com/cac-van-de-cau-hinh-cors-part-2-khai-thac-xss-kiem-soat-tls/',
    tone: 'rose',
    icon: '🛡️',
  },
  {
    id: 4,
    title: 'Mã thông báo CSRF là gì? Các lỗ hổng phổ biến trong xác thực token',
    category: 'Bảo Mật',
    author: 'Lê Huy',
    date: '04/10/2023',
    readTime: 5,
    excerpt:
      'Bỏ qua xác thực mã CSRF: phân tích cách thức hoạt động của CSRF Token, các kịch bản khai thác thường gặp và cách triển khai phòng vệ hiệu quả.',
    image: 'https://share4happy.com/wp-content/uploads/2023/10/csrf-token.png',
    url: 'https://share4happy.com/ma-thong-bao-csrf-la-gi-cac-lo-hong-pho-bien-trong-xac-thuc-token/',
    tone: 'teal',
    icon: '🔐',
  },
  {
    id: 5,
    title: 'Trò chơi ném bao cát – AI Magic World & Lập trình Robotics cho trẻ',
    category: 'AI Robotics',
    author: 'Canh Bui',
    date: '02/10/2023',
    readTime: 5,
    excerpt:
      'Ứng dụng giáo dục STEAM kết hợp uKit Edu và nhận diện tương tác AI, giúp người học phát triển tư duy logic và sáng tạo thông qua các trò chơi tương tác.',
    image: 'https://share4happy.com/wp-content/uploads/2023/10/ai-robotics.jpg',
    url: 'https://share4happy.com/tro-choi-nem-bao-cat-ai-magic-world-lap-trinh-robotics-cho-tre/',
    tone: 'emerald',
    icon: '🎮',
  },
  {
    id: 6,
    title: 'Hướng dẫn cài đặt & khai thác công cụ kiểm thử Burp Suite Pro',
    category: 'Bảo Mật',
    author: 'Lê Huy',
    date: '28/09/2023',
    readTime: 8,
    excerpt:
      'Các bước cài đặt Git, cấu hình môi trường thực thi và khai thác bộ tính năng nâng cao trong Burp Suite Pro phục vụ đánh giá an ninh ứng dụng web.',
    image: 'https://share4happy.com/wp-content/uploads/2023/09/burp-suite-pro.png',
    url: 'https://share4happy.com/huong-dan-cai-dat-khai-thac-cong-cu-kiem-thu-burp-suite-pro/',
    tone: 'indigo',
    icon: '⚡',
  },
];
