import { FaCode } from "react-icons/fa6";
import { Button } from "../Common/Button";

export default function Skills() {
  return (
    <section>
      <div className="flex justify-center text-center gap-5 mt-20">
        <h1 className="text-3xl font-bold text-[#F1F3F5] ">My Skills</h1>
        <FaCode className="size-10 text-[#F1F3F5]" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-2 w-fit mx-auto mt-5">
        <Button
          name="HTML"
          link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        />
        <Button name="CSS" />
        <Button name="JavaScript" />
        <Button name="TypeScript" />
        <Button name="React" />
        <Button
          name="Node.js"
          link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        />
        <Button
          name="Express.js"
          link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        />
        <Button name="MongoDB" />
        <Button name="Git" />
        <Button name="GitHub" link="" />
        <Button
          name="Tailwind CSS"
          link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />
        <Button name="Bootstrap" />
      </div>
    </section>
  );
}
