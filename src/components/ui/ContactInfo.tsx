import React from 'react';
import Image from 'next/image';

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl font-bold mb-2">Contact Info</h1>
      <div className="max-w-[300px] mx-auto mb-4 text-center">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={300}
          height={300}
          className="w-full rounded-md object-cover"
        />
      </div>
      <div className="space-y-1 text-sm">
        <p><strong>Email:</strong> <a href="mailto:daocam125@gmail.com" className="underline">daocam125@gmail.com</a></p>
        <p><strong>Phone:</strong> +84 794699839</p>
        <p><strong>Education:</strong> Trường Đại học Sài Gòn</p>
        <p><strong>Github:</strong> <a href="https://github.com/camdao" target="_blank" rel="noreferrer" className="underline">github.com/camdao</a></p>
        <p><strong>Blog:</strong> <a href="https://camdao.github.io/" target="_blank" rel="noreferrer" className="underline">camdao.github.io</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/camdao04/" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/camdao04</a></p>
        <p><strong>Cloud Journey:</strong> <a href="https://camdao.github.io/fcj-workshop/" target="_blank" rel="noreferrer" className="underline">fcj-workshop</a></p>
      </div>
      <div className="mt-3 p-2 bg-muted rounded text-xs text-muted-foreground">
        Java · Spring Boot · JPA · MySQL · PostgreSQL · Redis · AWS
      </div>
    </div>
  );
};

export default ContactInfo;
