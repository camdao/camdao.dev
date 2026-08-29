import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl font-bold mb-2">About Me</h1>
      <div className="flex items-center bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 rounded-md p-4 mb-4">
        <p className="m-0">
          <strong>
            Xin chào! Tôi là Backend Developer tập trung vào hệ sinh thái Java/Spring Boot & AWS. 🚀
          </strong>
        </p>
      </div>
      <ul className="list-disc pl-5 space-y-1.5 text-sm">
        <li>Tập trung thiết kế RESTful API, tối ưu truy vấn Database và xử lý đồng thời trong hệ thống Backend.</li>
        <li>Áp dụng <code>Clean Architecture</code> tách biệt các layer Domain, Application, Infrastructure và API để nâng cao khả năng bảo trì.</li>
        <li>Kinh nghiệm làm việc với <code>Redis</code> (Caching, TTL, Distributed Locking bằng Redisson & Lua Script) cho các bài toán high concurrency.</li>
        <li>Triển khai ứng dụng trên <code>AWS Cloud</code> (ECS Fargate, ECR, S3, CloudFront, Lambda) kết hợp CI/CD qua GitHub Actions.</li>
        <li>Tập trung phân tích <code>Business Rule & Edge Cases</code> trước khi viết code, hướng tới sự ổn định và chính xác của dữ liệu.</li>
      </ul>
    </div>
  );
};

export default AboutMe;
