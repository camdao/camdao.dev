import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl font-bold mb-2">About Me</h1>

      <div className="flex items-center bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 rounded-md p-4 mb-4">
        <p className="m-0">
          <strong>
            Xin chào! Tôi là Backend Developer, hiện tập trung phát triển với Java,
            Spring Boot và AWS.
          </strong>
        </p>
      </div>

      <ul className="list-disc pl-5 space-y-1.5 text-sm">
        <li>
          Tôi yêu thích việc xây dựng Backend và tìm hiểu cách một hệ thống xử lý
          dữ liệu, request đồng thời và các business rule trong thực tế.
        </li>

        <li>
          Trong quá trình phát triển project, tôi thường tập trung vào{' '}
          <code>RESTful API</code>, Database, <code>JPA/Hibernate</code> và{' '}
          <code>Redis</code>.
        </li>

        <li>
          Tôi đặc biệt quan tâm đến các bài toán như <code>concurrency</code>,{' '}
          <code>data consistency</code> và cách thiết kế hệ thống để xử lý các
          edge case thay vì chỉ tập trung vào việc code chạy được.
        </li>

        <li>
          Bên cạnh Backend, tôi đang tìm hiểu thêm về <code>AWS</code>,{' '}
          <code>Distributed Systems</code> và các hệ thống kết hợp Backend với AI.
        </li>

        <li>
          Mục tiêu của tôi là tiếp tục phát triển theo hướng{' '}
          <strong>Backend Engineer</strong>, xây dựng các hệ thống có kiến trúc
          rõ ràng, ổn định và có thể triển khai trong môi trường thực tế.
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;