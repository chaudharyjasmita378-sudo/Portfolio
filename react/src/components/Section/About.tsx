export default function About() {
  return (
    <section>
      <div className="flex flex-col justify-center text-center gap-5">
        <p className="text-sm text-[#F1F3F5] mt-20 ">Hello , I'm</p>
        <h2 className="text-4xl font-bold text-[#F1F3F5]">Jasmita Chaudhary</h2>
        <p className="text-[#8FAAC5] text-sm">Web Developer</p>
        <p className="text-[#8FAAC5] text-sm">Frontend Focused | MERN Stack</p>

        <div className="w-30 h-10 border border-[#8FAAC5] text-[#8FAAC5] flex items-center  justify-center hover:bg-[#8FAAC5] hover:text-[#1A1A2E] transition duration-300 cursor-pointer rounded-md mx-auto">
          Download CV
        </div>
      </div>
    </section>
  );
}
