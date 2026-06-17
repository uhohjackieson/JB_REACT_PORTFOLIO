import React from "react";

const Content = () => {
  return (
    <div id="content" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#5e0037]">
        Content Creation
      </h1>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Musician & Content Creator</h2>

        <p className="py-4 text-gray-600">
          Built an audience of over 40,000 followers through guitar
          performances, music content, and educational videos. Experienced in
          creating engaging content, growing online communities, and
          collaborating with brands.
        </p>

        <ul className="list-disc pl-5 text-gray-600">
          <li>40,000+ TikTok followers</li>
          <li>Guitarist and performer</li>
          <li>Video production and content creation</li>
          <li>Brand partnerships and product promotion</li>
        </ul>

        <div className="mt-4">
          <a
            href="https://www.tiktok.com/@uhohjackieson"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-[#5e0037] font-semibold"
          >
            TikTok
          </a>

          <a
            href="https://www.youtube.com/@jaclynrose696"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5e0037] font-semibold"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
