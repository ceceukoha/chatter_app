import { PostFeedProps } from "./PostFeed";

export const Article = ({author, post, date}: PostFeedProps) => {
  return (
    <><div className="">
          <div className="flex gap-4 items-center">
              <img src="" alt="" className="w-[50px] h-[50px] border rounded-full" />
              <div className="">
                  <h3 className="font-semibold">{author.name}</h3>
                  <h6 className="text-gray-700 text-xs">Software Developer</h6>
              </div>
          </div>
          <div className="mt-4">
              <h2 className="font-bold text-4xl">How To Create A new React App</h2>
              <span className="text-gray-700 text-xs">
                  {date}
              </span>
          </div>
          <div className="my-4 text-sm prose prose-headings:font-semibold" dangerouslySetInnerHTML={{ __html: post}} />
      <img src="" alt="" className="w-[100%] h-[250px]" /><ul className="flex justify-between px-8 py-4">
              <li>comment</li>
              <li>likes</li>
              <li>views</li>
          </ul>
    </div>
    </>
  );
};

