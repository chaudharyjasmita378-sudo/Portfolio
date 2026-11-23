
export interface IProjectDiv {
  Title: string;
  Description: string;
  Technologies: string;
  Image?: string;
}

export const ProjectDiv = ({ Title, Description, Technologies, Image }: Readonly<IProjectDiv>) => {
  return (
    <> 
      <section>
        <div className="h-150 w-70 border border-[#8FAAC5] rounded-4xl bg-[#1B2836] hover:bg-[#101820] transition duration-300 cursor-pointer ">
          <div>
            <img
              src={Image}
              alt="Project Image"
              className="w-50 h-full object-cover rounded-md items-center mx-auto mt-5"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-bold text-[#F1F3F5] mt-5 ml-10">
              {Title}
            </h2>
            <p className="text-[#F1F3F5] mt-5 ml-10">{Description}</p>
            <p className="text-[#F1F3F5] mt-5 ml-10">{Technologies}</p>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <button className="bg-[#1B2836] text-[#8FAAC5] border border-[#8FAAC5] hover:bg-[#F1F3F5] hover:text-[#1B2836]  transition duration-300 py-2 px-4 rounded-md mt-2">
              Github
            </button>
            <button className="bg-[#8FAAC5] text-[#1B2836] hover:bg-[#F1F3F5] transition duration-300 py-2 px-4 rounded-md mt-2">
              Live Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
